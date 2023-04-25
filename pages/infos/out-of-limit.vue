<template>
	<view>
		<u-loading-page :loading="loading"></u-loading-page>
		<view v-if="overLoadList.length>0">
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
				<u-list-item v-for="(item, index) in overLoadList" :key="index" class="list-item">
					<u-cell value="详情" center :isLink="true" rightIconStyle="color: #4B9E6A" :border="false"
						@click="handleNavigate(item)">
						<view slot="title" class="item-title">{{ item.station }}电站</view>
						<view slot="label" class="u-slot-value">
							<view class="item-content">设备：{{ item.device }}</view>
							<view class="item-content">测点：{{item.point}}</view>
							<view class="item-date">{{item.limitState}} | 越限率：{{ item.rate }}</view>
						</view>
					</u-cell>
				</u-list-item>
			</u-list>

			<view>
				<u-popup :show="filterShow" :round="15" class="bottomPop" :safeAreaInsetTop="true"
					@close="filterShow=false">
					<view class="popup-wrap">
						<view class="title">全部筛选条件</view>
						<view>
							<view class="item-title">变电站</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'station'">
									<label class="radio-item" v-for="item in station" :key="item.id"
										:class="item.checked?'active':''">
										<radio :value="item.value" :checked="item.checked" />
										{{item.name}}
									</label>
								</radio-group>
							</u-read-more>
						</view>
						<view>
							<view class="item-title">测量类型</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'analogType'">
									<label class="radio-item" v-for="item in analogType" :key="item.id"
										:class="item.checked?'active':''">
										<radio :value="item.value" :checked="item.checked" />
										{{item.name}}
									</label>
								</radio-group>
							</u-read-more>
						</view>
						<view>
							<view class="item-title">间隔</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'bay'">
									<label class="radio-item" v-for="item in bay" :key="item.id"
										:class="item.checked?'active':''">
										<radio :value="item.value" :checked="item.checked" />
										{{item.name}}
									</label>
								</radio-group>
							</u-read-more>
						</view>
						<view>
							<view class="item-title">越限状态</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'limitState'">
									<label class="radio-item" v-for="item in limitState" :key="item.id"
										:class="item.checked?'active':''">
										<radio :value="item.value" :checked="item.checked" />
										{{item.name}}
									</label>
								</radio-group>
							</u-read-more>
						</view>
						<view class="confirm-btn-wrap">
							<button type="default" @click="reset()">重置</button>
							<button type="default" @click="submit()">确认</button>
						</view>
					</view>
				</u-popup>
			</view>
		</view>
		<u-empty v-if="overLoadList.length<=0&&!loading" mode="list" icon="/static/images/icons/nodata.png">
		</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				overLoadList: [],
				filterShow: false,
				station: [],
				bay: [],
				analogType: [],
				limitState: []
			}
		},
		onLoad() {
			let that = this
			uni.request({
				url: `${this.base_url}/idata/devOverLoad/getDevOverLoadInfo`,
				method: 'POST',
				data: {
					page: 1,
					limit: 6000,
					stationID: "all",
					bayId: "all",
					analogType: "all",
					limitState: ""
				}
			}).then((res) => {
				if (res[1].data.code == 0) {
					that.overLoadList = res[1].data.data
				}
				that.loading = false
			})
		},
		methods: {
			handleNavigate(e) {
				uni.navigateTo({
					url: './out-of-limit-detail?info=' + encodeURIComponent(JSON.stringify(e))
				});
			},
			open: function(e) {
				let that = this
				uni.request({
					url: `${this.base_url}/idata/devOverLoad/getAllConditions`,
					method: 'POST'
				}).then((res) => {
					if (res[1].data.code == 0) {
						let obj = {}
						for (let key in res[1].data.data) {
							obj[key] = res[1].data.data[key].map(item => ({
								...item,
								checked: item.id == 'all' ? true : false,
								value: String(item.id)
							}))
						}
						that.station = obj.station
						that.bay = obj.bay
						that.analogType = obj.analogType
						that.limitState = obj.limitState
					}
					that.filterShow = true
				})
			},
			radioChange: function(e) {
				let type = e.currentTarget.dataset.type
				let items = this[type],
					values = e.detail.value
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values == item.value) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			reset() {
				this.station = this.station.map(item => ({
					...item,
					checked: item.id == 'all' ? true : false
				}))
				this.bay = this.bay.map(item => ({
					...item,
					checked: item.id == 'all' ? true : false
				}))
				this.analogType = this.analogType.map(item => ({
					...item,
					checked: item.id == 'all' ? true : false
				}))
				this.limitState = this.limitState.map(item => ({
					...item,
					checked: item.id == 'all' ? true : false
				}))
			},
			submit() {
				let that = this
				console.log(that.analogType)
				let bay = that.bay.filter(item => item.checked == true)[0] || "",
					station = that.station.filter(item => item.checked == true)[0] || "",
					analog = that.analogType.filter(item => item.checked == true)[0] || "",
					limitState = that.limitState.filter(item => item.checked == true)[0] || ""
				that.filterShow = false
				that.loading = true
				uni.request({
					url: `${this.base_url}/idata/devOverLoad/getDevOverLoadInfo`,
					method: 'POST',
					data: {
						page: 1,
						limit: 6000,
						stationID: station.id,
						bayId: bay.id,
						analogType: analog.id,
						limitState: limitState.id,
					}
				}).then((res) => {
					if (res[1].data.code == 0) {
						that.overLoadList = res[1].data.data
					}
					that.loading = false
				})
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F2F7;
	}

	.top-wrap {
		padding: 20rpx;
		background-color: #ffffff;
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

	// .list-wrap /deep/ .uni-scroll-view-content{
	// 	background: linear-gradient(to bottom, #187759 80rpx,rgba(255,255,255,0) 0);
	// }

	.list-item {
		margin: 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: -2rpx -2rpx 6rpx 2rpx rgba(79, 79, 79, 0.1);

		.item-title {
			padding-bottom: 6rpx;
			font-size: 28rpx;
			color: #101010;
		}

		.item-content {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #333333;
		}

		.item-date {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #BD3124;
		}

	}

	.popup-wrap {
		max-height: 90vh;
		overflow-y: scroll;
		padding: 30rpx;

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
			white-space: nowrap;
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

	/deep/ .u-read-more__content {
		overflow: hidden;
		color: #101010;
		font-size: inherit;
	}
</style>
