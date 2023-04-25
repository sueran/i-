<template>
	<view>
		<u-loading-page :loading="loading"></u-loading-page>
		<view v-if="replaceList.length>0">
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
				<u-list-item v-for="(item, index) in replaceList" :key="index" class="list-item">
					<u-cell value="详情" center :isLink="true" rightIconStyle="color: #4B9E6A" :border="false"
						@click="handleNavigate(item)">
						<view slot="title" class="item-title">被替代变电站：{{item.station2}}电站</view>
						<view slot="label" class="u-slot-value">
							<view class="item-content">被替代设备：{{item.device2}}</view>
							<view class="item-info">替代设备：{{item.device}}</view>
							<view class="item-date">记录时间：{{item.time}}</view>
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
							<view class="item-title">被替代变电站</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'station1List'">
									<label class="radio-item" v-for="item in station1List" :key="item.id"
										:class="{'active':item.checked}">
										<radio :value="item.value" :checked="item.checked" />
										{{item.name}}
									</label>
								</radio-group>
							</u-read-more>
						</view>
						<view>
							<view class="item-title">被替代设备</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'device1List'">
									<label class="radio-item" v-for="item in device1List" :key="item.id"
										:class="{'active':item.checked}">
										<radio :value="item.value" :checked="item.checked" />
										{{item.name}}
									</label>
								</radio-group>
							</u-read-more>
						</view>
						<view>
							<view class="item-title">替代变电站</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'stationList'">
									<label class="radio-item" v-for="item in stationList" :key="item.id"
										:class="{'active':item.checked}">
										<radio :value="item.value" :checked="item.checked" />
										{{item.name}}
									</label>
								</radio-group>
							</u-read-more>
						</view>
						<view>
							<view class="item-title">替代设备</view>
							<u-read-more closeText="查看更多" color="#5d5d5d" :showHeight="162" textIndent="0"
								:toggle="true">
								<radio-group class="radio-list" @change="radioChange" :data-type="'deviceList'">
									<label class="radio-item" v-for="item in deviceList" :key="item.id"
										:class="{'active':item.checked}">
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
		<u-empty v-if="replaceList.length<=0&&!loading" mode="list" icon="/static/images/icons/nodata.png">
		</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				replaceList: [],
				filterShow: false,
				station1List: [],
				stationList: [],
				device1List: [],
				deviceList: [],
				station1: "all",
				station: "all",
				device1: "全部",
				device: "全部"
			}
		},
		onLoad() {
			let that = this
			uni.request({
				url: `${this.base_url}/idata/devOverLoad/getAllConditions`,
				method: 'POST',
				data: {
					page: 1,
					limit: 6000,
					stationID: "all", //被替代变电站
					device: "全部", //被替代设备
					stationID_td: "all", //替代变电站
					device_td: "全部", //替代设备
				}
			}).then((res) => {
				if (res[1].data.code == 0) {
					that.replaceList = res[1].data.data
				}
				that.loading = false
			})
		},
		methods: {
			handleNavigate(e) {
				uni.navigateTo({
					url: './replaceInfoDetail?info=' + encodeURIComponent(JSON.stringify(e))
				})
			},
			open: function(e) {
				let that = this
				that.filterShow = true
				uni.request({
					url: `${this.base_url}/idata/replaceInfoMonitor/getConditions`,
					method: 'POST'
				}).then((res) => {
					if (res[1].data.code == 0) {
						let obj = {}
						for (let key in res[1].data.data) {
							obj[key] = res[1].data.data[key].map(item => ({
								...item,
								id: item.id || item.name,
								checked: item.id == -1 || item.id == 'all' ? true : false,
								value: String(item.id || item.name)
							}))
						}
						that.station1List = obj.station
						that.stationList = JSON.parse(JSON.stringify(obj.station))
						that.device1List = obj.device
						that.deviceList = JSON.parse(JSON.stringify(obj.device))
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
				this.stationList = this.stationList.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' || item.id == "全部" ? true : false
				}))
				this.station1List = this.station1List.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' || item.id == "全部" ? true : false
				}))
				this.deviceList = this.deviceList.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' || item.id == "全部" ? true : false
				}))
				this.device1List = this.device1List.map(item => ({
					...item,
					checked: item.id == -1 || item.id == 'all' || item.id == "全部" ? true : false
				}))
			},
			submit() {
				let that = this,
					station = that.stationList.filter(item => item.checked == true)[0] || "",
					station1 = that.station1List.filter(item => item.checked == true)[0] || "",
					device = that.deviceList.filter(item => item.checked == true)[0] || "",
					device1 = that.device1List.filter(item => item.checked == true)[0] || ""
				that.filterShow = false
				that.loading = true
				//根据筛选条件获取告警抑制列表
				uni.request({
					url: `${that.base_url}/idata/devOverLoad/getAllConditions`,
					method: 'POST',
					data: {
						page: 1,
						limit: 6000,
						stationID: station1.id, //被替代变电站
						device: device1.id, //被替代设备
						stationID_td: station.id, //替代变电站
						device_td: device.id, //替代设备
					}
				}).then((res) => {
					if (res[1].data.code == 0) {
						that.replaceList = res[1].data.data
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
		// height: 100%;
		// overflow-y: hidden;
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
			color: #4F4F4F;
		}

		.item-info {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #BD3124;
		}

		.item-date {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #101010;
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
