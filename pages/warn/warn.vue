<template>
	<view class="content">
		<view class="headerWrap">
			<u-search placeholder="日照香炉生紫烟"></u-search>
		</view>
		<view class="wrap">
			<view class="wrap_top">
				<text>告警统计</text>
				<view class="wrap_top_message">
					<view class="wrap_top_message_list">
						<view class="list_item">危险告警数量</view>
						<text style="color: red;">2603</text>
					</view>
					<view class="wrap_top_message_list">
						<view class="list_item">严重告警数量</view>
						<text style="color: #ffab15;">1300</text>
					</view>
					<view class="wrap_top_message_list">
						<view class="list_item">一般告警数量</view>
						<text style="color: #187759;">20</text>
					</view>
				</view>
			</view>
			<view class="wrap_body">
				<view class="wrap_body_top">
					<view class="wrap_body_top_title">最新警告</view>
					<view class="wrap_body_top_arrow" @click="handleNavigateTotal">全部 <text class="iconfont icon-jiantouyou"></text> </view>
				</view>
				<view class="wrap_body_message">
					<view class="message_item">
						<view class="message_item_header"> <text class="iconfont icon-yuandianzhong"></text>2022年08年07日
							12:45:00 </view>
						<view class="message_item_body">
							<view class="message_item_body_wrap" @click="handleNavigateDetail">
								<view class="wrap_title">
									<view>xxx当前一二次设备对应</view>
									<view>xxx当前状态备用状态,第二套保护功能软压板在投入状态</view>
								</view>
								<view> <text class="iconfont icon-jiantouyou"></text> </view>
							</view>
						</view>
					</view>
					<view class="message_item">
						<view class="message_item_header"> <text class="iconfont icon-yuandianzhong"></text>2022年08年07日
							12:45:00 </view>
						<view class="message_item_body">
							<view class="message_item_body_wrap">
								<view class="wrap_title">
									<view>xxx当前一二次设备对应</view>
									<view>xxx当前状态备用状态,第二套保护功能软压板在投入状态</view>
								</view>
								<view> <text class="iconfont icon-jiantouyou"></text> </view>
							</view>
						</view>
					</view>
					<view class="message_item">
						<view class="message_item_header"> <text class="iconfont icon-yuandianzhong"></text>2022年08年07日
							12:45:00 </view>
						<view class="message_item_body">
							<view class="message_item_body_wrap">
								<view class="wrap_title">
									<view>xxx当前一二次设备对应</view>
									<view>xxx当前状态备用状态,第二套保护功能软压板在投入状态</view>
								</view>
								<view> <text class="iconfont icon-jiantouyou"></text> </view>
							</view>
						</view>
					</view>
					<view class="message_item">
						<view class="message_item_header"> <text class="iconfont icon-yuandianzhong"></text>2022年08年07日
							12:45:00 </view>
						<view class="message_item_body">
							<view class="message_item_body_wrap">
								<view class="wrap_title">
									<view>xxx当前一二次设备对应</view>
									<view>xxx当前状态备用状态,第二套保护功能软压板在投入状态</view>
								</view>
								<view> <text class="iconfont icon-jiantouyou"></text> </view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		// 跳转到详情页面
		handleNavigateDetail() {
			uni.navigateTo({
				url: './warnDetail'
			})
		},
		// 跳转到列表页面
		handleNavigateTotal() {
			uni.navigateTo({
				url: './warnList'
			})
		},
	}
}
</script>

<style lang="scss">
page {
	background-color: #eee;

	.content {
		.headerWrap {
			width: 100vw;
			height: 100rpx;
			background-color: #187759;
		}

		.wrap {
			&_top {
				width: 100vw;
				background-color: white;
				box-sizing: border-box;
				padding: 20rpx;

				text {
					font-size: 40rpx;
				}

				&_message {
					background-color: #eee;
					justify-content: space-around;
					padding: 30rpx;
					margin-top: 20rpx;
					display: flex;

					&_list {
						text-align: center;

						.list_item {
							font-size: 25rpx;
							margin-bottom: 20rpx;
						}
					}
				}
			}

			&_body {
				margin-top: 30rpx;
				background-color: white;
				box-sizing: border-box;
				padding: 20rpx;

				&_top {
					display: flex;
					justify-content: space-between;
					margin-bottom: 30rpx;
				}

				.message {
					width: 90%;
					background-color: #187759;
					position: relative;
					margin: auto;

					&_item {
						
						&_header {
							text {
								color: #187759;
							}
							color: #666;
						}

						&_body {
							border-left: 2rpx solid black;
							box-sizing: border-box;
							padding: 20rpx 0;
							padding-left: 20rpx;
							margin-left: 14rpx;
							&_wrap {
								display: flex;
								align-items: center;
								background-color: #eee;
								padding: 10rpx;

								.wrap_title {
									width: 90%;
								}

								.wrap_title > view:nth-child(2) {
									color: #777;
									font-size: 25rpx;
								}
							}
						}
						&:first-child {
							.message_item_header {
							text {
								color: red;
							}
						}
						}
						&:last-child {
							.message_item_body {
								border: 0;
							}
						}
					}
					
				}

				.u-steps-item {
					height: 300rpx;

				}
			}
		}
	}
}
</style>