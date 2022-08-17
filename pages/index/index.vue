<template>
	<view class="content">
		<view class="header"> 国网鹤壁市供电公司集控站设备监控系统 </view>
		<view class="wrap">
			<view class="index-img">
				<img src="../../static/images/index-img.png" alt="">
			</view>
			<view class="monitor">
				<u-scroll-list indicatorColor="#fff0f0" indicatorActiveColor="#187759">
					<view class="scroll-list" style="flex-direction: row;">
						<view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index"
							:class="[index === 9 && 'scroll-list__goods-item--no-margin-right']">
							<img class="scroll-list__goods-item__image" :src="item.thumb" mode="widthFix" />
							<text class="scroll-list__goods-item__text">{{ item.price }}</text>
						</view>
					</view>
				</u-scroll-list>
			</view>
			<view class="number">
				<view class="numberTitle">
					<text class="numberTitle_title">变电站数量</text>
					<u-icon name="arrow-right" bold></u-icon>
				</view>
				<view class="numberItem">
					<view class="numberItem_item"></view>
					<view class="numberItem_item"></view>
					<view class="numberItem_item"></view>
				</view>
			</view>
			<view class="todayWarnList">
				<view class="todayWarnList_top">
					<view class="todayWarnList_top_title">今日设备警告</view>
					<view class="todayWarnList_top_more">查看更多</view>
				</view>
				<view class="todayWarnList_content">

				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {

	data() {
		return {
			InfoNumber: 10,
			list: [
				{
					price: "工作情况",
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg",
				},
				{
					price: "超重载",
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg",
				},
				{
					price: "负荷曲线",
					thumb: "https://cdn.uviewui.com/uview/goods/6.jpg",
				},
				{
					price: "缺陷统计",
					thumb: "https://cdn.uviewui.com/uview/goods/5.jpg",
				},
				{
					price: "置牌一览",
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg",
				},
				{
					price: "告警抑制",
					thumb: "https://cdn.uviewui.com/uview/goods/3.jpg",
				},
				{
					price: "数据传输",
					thumb: "https://cdn.uviewui.com/uview/goods/4.jpg",
				},
				{
					price: "封锁信息",
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg",
				},
				{
					price: "替代信息",
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg",
				},
				{
					price: "设备越限",
					thumb: "https://cdn.uviewui.com/uview/goods/4.jpg",
				},
				{
					price: "可疑量测",
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg",
				},
				{
					price: "不刷新量测",
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg",
				}
			],
		};
	},
	methods: {},
};
</script>

<style lang="scss">
page {
	background-color: #eee;
	.content {
	position: relative;

	.header {
		width: 100%;
		height: 300rpx;
		background-color: $uni-bg-color-global;
		text-align: center;
		color: white;
		font-size: 30rpx;
		padding-top: 50rpx;
		font-weight: 700;
	}

	.wrap {
		position: absolute;
		width: 100vw;
		top: 100rpx;
		left: 50%;
		transform: translateX(-50vw);
		.index-img {
			width: 90%;
			margin: 0 auto;
			img {
				width: 100%;
				border-radius: 20rpx;
			}
		}

		.monitor {
			padding: 0 20rpx;
			padding-top: 20rpx;
			background-color: white;
			margin-top: 10rpx;

			.scroll-list {
				@include flex(column);
				height: 100%;
				width: 140vw;

				&__goods-item {
					margin-right: 20px;
					width: 70px;
					float: left;

					&__image {
						width: 60px;
						height: 60px;
						border-radius: 4px;
					}

					&__text {
						text-align: center;
						font-size: 12px;
						margin-top: 5px;
					}
				}
			}
		}

		.number {
			width: 100vw;
			height: 400rpx;
			margin-top: 20rpx;
			background-color: white;
			display: flex;
			flex-direction: column;

			.numberTitle {
				display: flex;
				justify-content: space-between;
				padding: 30rpx;
				padding-bottom: 20rpx;
				font-weight: 600;
			}

			.numberItem {
				display: flex;
				height: 90%;
				padding: 0 20rpx;
				&_item {
					flex: 1;
					height: 90%;
					margin:10rpx;
					border: $uni-bg-color-global solid 2rpx;
					border-radius: 10rpx;
					background-color: #e6f0ed;
				}
			}
		}

		.todayWarnList {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100vw;
			height: 400rpx;
			margin-top: 20rpx;
			box-sizing: border-box;
			background-color: white;
			padding: 20rpx;
			&_top {
				width: 100%;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding-bottom: 20rpx;
				&_title {
				
				}
				&_more {
					// border: 2rpx #ccc solid;
				}
			}
			&_content {
				width: 100%;
				height: 90%;
				background-color: bisque;
			}
		}
	}
}
}
</style>
