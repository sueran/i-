<template>
	<view class="content">
		<view class="headerWrap">
			<u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
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
					<view class="wrap_body_top_arrow">全部 <text class="iconfont icon-jiantouyou"></text> </view>
				</view>
				<view class="wrap_body_message">
					<view class="message_item"></view>
					<view class="message_item"></view>
					<view class="message_item"></view>
					<view class="message_item"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
@font-face {
	font-family: "iconfont";
	/* Project id 3617762 */
	src: url('//at.alicdn.com/t/c/font_3617762_y2pmd20jpa.woff2?t=1661785037848') format('woff2'),
		url('//at.alicdn.com/t/c/font_3617762_y2pmd20jpa.woff?t=1661785037848') format('woff'),
		url('//at.alicdn.com/t/c/font_3617762_y2pmd20jpa.ttf?t=1661785037848') format('truetype');
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-jiantouyou:before {
	content: "\e62d";
}

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

					&_title {}

					&_arrow {}
				}
				.message {
					width: 90%;
					height: 300rpx;
					background-color: #187759;
					position: relative;
					margin:auto;
				}
				.u-steps-item {
					height: 300rpx;
				}
			}
		}
	}
}
</style>