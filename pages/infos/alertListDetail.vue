<template>
	<view>
		<u-loading-page :loading="loading"></u-loading-page>
		<view v-if="dataListInfo.length>0">
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
				<u-list-item v-for="(item, index) in dataListInfo" :key="index" class="list-item">
					<u-cell value="详情" center rightIconStyle="color: #4B9E6A" :border="false">
						<view slot="title" class="item-title">[{{item.EQUIPCLASSNAME}}] {{item.EQUIPNAME}}</view>
						<view slot="label" class="u-slot-value">
							<view class="item-content">告警抑制信息：{{item.NAME}}</view>
							<u-icon name="map" color="#333" size="14" :label="item.STATIONNAME" labelSize="24rpx"
								labelColor="#333"></u-icon>
							<view class="item-date">操作人：{{item.userName}} {{item.HAPPENTIME}}</view>
						</view>
						<view slot="value">
						
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
							<view class="item-title">所属设备</view>
							<radio-group class="radio-list" @change="radioChange" :data-type="'equipMsg'">
								<label class="radio-item" v-for="item in equipMsg" :key="item.ID"
									:class="item.checked?'active':''">
									<radio :value="item.value" :checked="item.checked" />
									{{item.NAME}}
								</label>
							</radio-group>
						</view>
						<view>
							<view class="item-title">操作人</view>
							<radio-group class="radio-list" @change="radioChange" :data-type="'userList'">
								<label class="radio-item" v-for="item in userList" :key="item.ID"
									:class="item.checked?'active':''">
									<radio :value="item.value" :checked="item.checked" />
									{{item.NAME}}
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
		<u-empty v-if="dataListInfo.length<=0&&!loading" mode="list" icon="/static/images/icons/nodata.png">
		</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				filterShow: false,
				dataListInfo: [],
				equipMsg: [],
				userList: [],
				staId: -1
			}
		},
		onLoad(options) {
			let that = this
			that.staId = options.stationId
			uni.request({
				url: `${this.base_url}/idata/yzgj/selectYZGJInfoDetailInfo`,
				method: 'GET',
				data: {
					page: 1,
					limit: 6000,
					userName: "all",
					equipObject: "all",
					stationId: that.staId
				}
			}).then((res) => {
				if (res[1].data.code == 0) {
					that.dataListInfo = res[1].data.data
				}
				that.loading = false
			})
		},
		methods: {
			open: function(e) {
				let that = this
				//获取告警抑制筛选信息 
				uni.request({
					url: `${this.base_url}/idata/yzgj/getSelConditions`,
					method: 'GET',
					data: {
						stationId: that.staId
					}
				}).then((res) => {
					if (res[1].data.code == 0) {
						let obj = {}
						for (let key in res[1].data.data) {
							obj[key] = res[1].data.data[key].map(item => ({
								...item,
								checked: item.ID == -1 || item.ID == 'all' ? true : false,
								value: String(item.ID)
							}))
						}
						that.equipMsg = obj.equipMsg
						that.userList = obj.userList
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
				this.userList = this.userList.map(item => ({
					...item,
					checked: item.ID == -1 || item.ID == 'all' ? true : false
				}))
				this.equipMsg = this.equipMsg.map(item => ({
					...item,
					checked: item.ID == -1 || item.ID == 'all' ? true : false
				}))
			},
			submit() {
				let that = this,
					equip = that.equipMsg.filter(item => item.checked == true)[0]||"",
					user = that.userList.filter(item => item.checked == true)[0]||""
				that.filterShow = false
				that.loading = true
				//根据筛选条件获取告警抑制列表
				uni.request({
					url: `${that.base_url}/idata/yzgj/selectYZGJInfoDetailInfo`,
					method: 'GET',
					data: {
						page: 1,
						limit: 6000,
						userName: user.ID||"all",
						equipObject: equip.ID||"all",
						stationId: that.staId
					}
				}).then((res) => {
					if (res[1].data.code == 0) {
						that.dataListInfo = res[1].data.data
					}
					that.loading = false
				})
			},
			onBackPress(event){
				uni.redirectTo({
					url:'../infos/alertList'
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
