<template>
	<view>
		<u-loading-page :loading="loading"></u-loading-page>
		<view v-if="gpListInfo.length>0">
			<view class="top-wrap">
				<view class="input-wrap" slot="default">
					<u-icon name="search" color="#9A9A9A" size="28"></u-icon>
					<input class="uni-input" placeholder-style="color:#999;" placeholder="请输入搜索关键词" />
				</view>
				<view class="btn-right">
					<u-icon name="/static/images/icons/filter.svg" label="筛选" size="22" @click="open()">
					</u-icon>
				</view>
			</view>
			<u-list class="list-wrap">
				<u-list-item v-for="(item, index) in gpListInfo" :key="index" class="list-item">
					<u-cell value="详情" center rightIconStyle="color: #4B9E6A" :border="false">
						<view slot="title" class="item-title">[{{item.objectTableName}}] {{item.objectName}}</view>
						<view slot="label" class="u-slot-value">
							<view class="item-content">间隔名称：{{item.bayName}}</view>
							<u-icon name="map" color="#333" size="14" :label="item.NAME" labelSize="24rpx"
								labelColor="#333"></u-icon>
							<view class="item-date">操作人：{{item.userName}} {{item.happentime}}</view>
						</view>
						<view slot="value">
							<u-icon v-if="item.tagName=='警告牌'" name="/static/images/icons/warning-fill.png" size="40"
								:label="item.tagName" labelPos="bottom" labelSize="20rpx" labelColor="#6c6c6c"></u-icon>
							<u-icon v-if="item.tagName=='检修牌'" name="/static/images/icons/repair.png" size="40"
								:label="item.tagName" labelPos="bottom" labelSize="20rpx" labelColor="#6c6c6c"></u-icon>
							<u-icon v-if="item.tagName=='故障牌'" name="/static/images/icons/faultzh.png" size="40"
								:label="item.tagName" labelPos="bottom" labelSize="20rpx" labelColor="#6c6c6c"></u-icon>
							<u-icon v-if="item.tagName=='闭锁遥控'" name="/static/images/icons/lock-2-fill.png" size="38"
								:label="item.tagName" labelPos="bottom" labelSize="20rpx" labelColor="#6c6c6c"></u-icon>
						</view>
					</u-cell>
				</u-list-item>
			</u-list>
			<view @touchmove.prevent>
				<u-popup :show="filterShow" :round="15" class="bottomPop" customStyle="padding:30rpx;"
					@close="filterShow=false">
					<view>
						<view class="title">全部筛选条件</view>
						<view>
							<view class="item-title">挂牌对象类型</view>
							<radio-group class="radio-list" @change="radioChange" :data-type="'obj'">
								<label class="radio-item" v-for="item in obj" :key="item.id"
									:class="{'active':item.checked}">
									<radio :value="item.value" :checked="item.checked" />
									{{item.name}}
								</label>
							</radio-group>
						</view>
						<view>
							<view class="item-title">间隔名称</view>
							<radio-group class="radio-list" @change="radioChange" :data-type="'bay'">
								<label class="radio-item" v-for="item in bay" :key="item.id"
									:class="{'active':item.checked}">
									<radio :value="item.value" :checked="item.checked" />
									{{item.name}}
								</label>
							</radio-group>
						</view>
						<view>
							<view class="item-title">厂站名称</view>
							<radio-group class="radio-list" @change="radioChange" :data-type="'station'">
								<label class="radio-item" v-for="item in station" :key="item.id"
									:class="{'active':item.checked}">
									<radio :value="item.value" :checked="item.checked" />
									{{item.name}}
								</label>
							</radio-group>
						</view>
						<view>
							<view class="item-title">操作人</view>
							<radio-group class="radio-list" @change="radioChange" :data-type="'user'">
								<label class="radio-item" v-for="item in user" :key="item.id"
									:class="{'active':item.checked}">
									<radio :value="item.value" :checked="item.checked" />
									{{item.name}}
								</label>
							</radio-group>
						</view>
						<view class="confirm-btn-wrap">
							<button type="default" @click="reset()">重置</button>
							<button type="default" @click="submit()">确认</button>
						</view>
					</view>
				</u-popup>
			</view>
		</view>
		<u-empty v-if="gpListInfo.length<=0&&!loading" mode="list" icon="/static/images/icons/nodata.png">
		</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				filterShow: false,
				gpListInfo: [],
				bay: [],
				obj: [],
				station: [],
				user: [],
				stationId: -1
			}
		},
		onLoad(options) {
			let that = this
			that.stationId = options.stationId
			//获取置牌信息列表
			uni.request({
				url: `${this.base_url}/idata/gp/getGPListInfo`,
				method: 'GET',
				data: {
					page: 1,
					limit: 6000,
					bayId: -1,
					objectTableName: "all",
					userId: "all",
					stationId: that.stationId
				}
			}).then((res) => {
				if (res[1].data.code == 0) {
					that.gpListInfo = res[1].data.data
				}
				that.loading = false
			})
		},
		methods: {
			open: function(e) {
				let that = this
				uni.request({
					url: `${this.base_url}/idata/gp/getGPConditions`,
					method: 'GET',
					data: {
						stationId: that.stationId
					}
				}).then((res) => {
					if (res[1].data.code == 0) {
						let obj = {}
						for (let key in res[1].data.data) {
							obj[key] = res[1].data.data[key].map(item => ({
								...item,
								checked: item.id == -1 || item.id == 'all' ? true : false,
								value: String(item.id)
							}))
						}
						that.bay = obj.bay
						that.obj = obj.obj
						that.station = obj.station
						that.user = obj.user
					}
				})
				that.filterShow = true
			},
			radioChange: function(e) {
				let type = e.currentTarget.dataset.type
				let items = this[type],
					values = e.detail.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			reset() {
				this.bay = this.bay.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' ? true : false
				}))
				this.obj = this.obj.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' ? true : false
				}))
				this.user = this.user.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' ? true : false
				}))
				this.station = this.station.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' ? true : false
				}))
			},
			submit() {
				let that = this
				that.filterShow = false
				that.loading = true
				let bay = that.bay.filter(item => item.checked == true)[0],
					user = that.user.filter(item => item.checked == true)[0],
					obj = that.obj.filter(item => item.checked == true)[0],
					station = that.station.filter(item => item.checked == true)[0]
				uni.request({
					url: `${that.base_url}/idata/gp/getGPListInfo`,
					method: 'GET',
					data: {
						page: 1,
						limit: 6000,
						bayId: bay.id,
						objectTableName: obj.id,
						userId: user.id,
						stationId: station.id
					}
				}).then((res) => {
					if (res[1].data.code == 0) {
						that.gpListInfo = res[1].data.data
					}
					that.loading = false
				})
			},
			onBackPress(event){
				uni.redirectTo({
					url:'../infos/cardsList'
				});
			   return true
			},
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F2F7;
		// height: 100%;
		// overflow-y: hidden;
	}

	.top-wrap {
		padding: 20rpx;
		background-color: #ffffff;
		margin-bottom: 10rpx;
		display: flex;
		align-items: baseline;
		flex: 1;
		justify-content: flex-end;
		overflow: hidden;
	}

	.input-wrap {
		width: 96%;
		padding-left: 10rpx;
		background: #f7f7f7;
		display: flex;
		align-items: center;
		height: 80rpx;
		border-radius: 100rpx;
	}

	.btn-right {
		display: flex;
		width: 170rpx;
		margin-left: 10rpx;
		justify-content: space-around;
	}

	.list-item {
		margin: 10rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: -2rpx -2rpx 6rpx 2rpx rgba(79, 79, 79, 0.1);
		padding-right: 30rpx;

		.item-title {
			padding-bottom: 6rpx;
			font-size: 32rpx;
			color: #101010;
		}

		.item-content {
			padding: 6rpx 0;
			font-size: 28rpx;
			color: #333333;
			margin-bottom: 30rpx;
		}


		.item-date {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #9a9a9a;
		}

	}

	.bottomPop {

		.title {
			font-size: 32rpx;
			line-height: 46rpx;
		}

		.item-title {
			margin-top: 20rpx;
			font-size: 28rpx;
			color: #4f4f4f;
		}
	}

	/deep/ uni-radio .uni-radio-input {
		display: none !important;
	}

	.radio-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
		font-size: 28rpx;

		.radio-item {
			margin-right: 20rpx;
			margin-bottom: 14rpx;
			padding: 10rpx 20rpx;
			position: relative;
			background-color: #EFEFEF;
			border-radius: 8rpx;
			border: 1rpx solid #EFEFEF;
		}
	}

	/deep/ .radio-item.active {
		border: 1rpx solid #187759;
		color: #101010;
		background: rgba(24, 119, 89, 0.15);

		&::before {
			content: '';
			position: absolute;
			right: -1rpx;
			bottom: -1rpx;
			border-bottom-right-radius: 8rpx;
			border: 16rpx solid #187759;
			border-top-color: transparent;
			border-left-color: transparent;
		}

		&::after {
			content: '';
			width: 5px;
			height: 10px;
			position: absolute;
			right: 0;
			bottom: 6rpx;
			border: 1px solid #fff;
			border-top-color: transparent;
			border-left-color: transparent;
			transform: rotate(45deg);
		}
	}

	.confirm-btn-wrap {
		margin-top: 10px;
		display: flex;

		button {
			width: 320rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 30rpx;
			font-size: 28rpx;
			color: #187759;
			background: rgba(24, 119, 89, 0.15);

			&:last-child {
				color: #fff;
				background: #187759;
				box-shadow: 0rpx 1rpx 6rpx 0rpx rgba(0, 0, 0, 0.15);
			}
		}
	}
</style>
