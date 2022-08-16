<template>
	<view class="content">
		<view class="header">
			国网鹤壁市供电集控站设备监控系统
		</view>
		<view class="wrap">
			<view class="img_index">
				<image src="/static/imgs/img_index.png" mode="scaleToFill"/>
				<view class="list_number">
					<view class="number_item">
						<image src="/static/imgs/220_electricity.png" mode="widthFix"/>
						<text>220kV变电站</text>
						<view class="item">
							<view class="total">
								<view>总数</view>
								<view>
									<text style="color:blue">05</text>座
								</view>
							</view>
							<view class="wrong">
								<view>异常</view>
								<view>
									<text style="color:brown">01</text>座
								</view>
							</view>
						</view>
					</view>
					<view class="number_item">
						<image src="/static/imgs/110_electricity.png" mode="widthFix"/>
						<text>220kV变电站</text>
						<view class="item">
							<view class="total">
								<view>总数</view>
								<view>
									<text style="color:blue">05</text>座
								</view>
							</view>
							<view class="wrong">
								<view>异常</view>
								<view>
									<text style="color:brown">01</text>座
								</view>
							</view>
						</view>
					</view>
					<view class="number_item">
						<image src="/static/imgs/35_electricity.png" mode="widthFix"/>
						<text>220kV变电站</text>
						<view class="item">
							<view class="total">
								<view>总数</view>
								<view>
									<text style="color:blue">05</text>座
								</view>
							</view>
							<view class="wrong">
								<view>异常</view>
								<view>
									<text style="color:brown">01</text>座
								</view>
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
		data() {
			return {
				InfoNumber: 10
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.setTabBarBadge({
			  index: 0,
			  text: String(this.InfoNumber)
			})
		},
		
		
		
	}
</script>

<style lang="scss">
	.content {
		position: relative;
		.header {
			width: 100%;
			height: 150rpx;
			background-color: #66CCFF;
			text-align: center;
			color: white;
			font-size: 40rpx;
			// border-bottom-right-radius: 50%;
			// border-bottom-left-radius: 50%;
		}
		.wrap {
			width: 90vw;
			position: absolute;
			top: 70rpx;
			left: 50%;
			transform: translateX(-45vw);

			.img_index {
				width: 100%;
				height: 100px;
				image {
					width: 100%;
					height: 200rpx;
					border-radius: 10px;
				}
				.list_number {
					display: flex;
					justify-content: space-between;
					margin-top: 20rpx;
					
					.number_item {
						padding: 20rpx;
						border: 2px solid #ccc;
						border-radius: 10rpx;
						width: 25%;
						display: flex;
						flex-direction: column;
						box-shadow: 1rpx 1rpx 1rpx #ccc,
									-1rpx -1rpx 1rpx #ccc;
						image {
							width: 80rpx;
							margin: 0 auto;
							border-radius: 0;
						}
						text {
							font-size: 15rpx;
							font-weight: 600;
							margin: 10rpx 0;
						}
						.item {
							display: flex;
							justify-content: space-between;
							padding-top: 20rpx;
							color: #999;
							font-size: 25rpx;
							.total {
								text {
									font-size: 45rpx;
									color: blue;
								}
							}
							.wrong {
								text {
									color:brown;
									font-size: 45rpx;
								}
							}
						}
					}
				}
				
			}
		}
		.u-tabbar {
			position: fixed;
			bottom: 0;
			width:100%;
		}
	}
</style>
