<template>
	<view class="content">
		<view class="header"></view>
		<view class="wrap">
			<view class="index-img">
				<img src="../../static/images/index-img.png" mode="widthFix"/>
			</view>
			<view class="monitor">
				<u-scroll-list indicatorColor="#fff0f0" indicatorActiveColor="#187759">
					<view class="scroll-list" style="flex-direction: row">
						<view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index" :class="[
							index === 9 && 'scroll-list__goods-item--no-margin-right',
						]">
							<img class="scroll-list__goods-item__image" :src="item.thumb" mode="widthFix" />
							<text class="scroll-list__goods-item__text">{{
									item.price
							}}</text>
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

					<view class="numberItem_item">
						<img src="../../static/220.png" mode="widthFix"/>
						<view class="numberItem_item_name">220kv变电站</view>
						<view class="numberItem_item_number">
							<view class="numberItem_item_number_total">
								<view class="total_title">总数</view>
								<view class="total_number">
									<text>12</text>座
								</view>
							</view>
							<view class="numberItem_item_number_wrong">
								<view class="wrong_title">异常</view>
								<view class="wrong_number">
									<text>09</text>座
								</view>
							</view>
						</view>
					</view>

					<view class="numberItem_item">
						<img src="../../static/220.png" mode="widthFix"/>
						<view class="numberItem_item_name">110kv变电站</view>
						<view class="numberItem_item_number">
							<view class="numberItem_item_number_total">
								<view class="total_title">总数</view>
								<view class="total_number">
									<text>12</text>座
								</view>
							</view>
							<view class="numberItem_item_number_wrong">
								<view class="wrong_title">异常</view>
								<view class="wrong_number">
									<text>09</text>座
								</view>
							</view>
						</view>
					</view>

					<view class="numberItem_item">
						<img src="../../static/220.png" mode="widthFix"/>
						<view class="numberItem_item_name">35kv变电站</view>
						<view class="numberItem_item_number">
							<view class="numberItem_item_number_total">
								<view class="total_title">总数</view>
								<view class="total_number">
									<text>12</text>座
								</view>
							</view>
							<view class="numberItem_item_number_wrong">
								<view class="wrong_title">异常</view>
								<view class="wrong_number">
									<text>09</text>座
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="todayWarnList">
				<view class="todayWarnList_top">
					<!-- <view class="todayWarnList_top_title">今日设备警告</view>
					<view class="todayWarnList_top_more">查看更多></view> -->
					<text class="todayWarnList_top_title">今日设备警告</text>
					<u-icon name="arrow-right" bold></u-icon>
				</view>
				<view class="todayWarnList_content">
					<view class="todayWarnList_content_item">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/110.png" mode="widthFix"/>
						</view>
						<view class="todayWarnList_content_item_left">故障跳闸</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/110.png" mode="widthFix"/>
						</view>
						<view class="todayWarnList_content_item_left">故障跳闸</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/110.png" mode="widthFix"/>
						</view>
						<view class="todayWarnList_content_item_left">故障跳闸</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/110.png" mode="widthFix"/>
						</view>
						<view class="todayWarnList_content_item_left">故障跳闸</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/110.png" mode="widthFix"/>
						</view>
						<view class="todayWarnList_content_item_left">故障跳闸</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
				</view>
			</view>
			<view class="deviceData">
				<view class="deviceDataTop">
					<text class="deviceDataTop_title">设备运行数据</text>
					<u-icon name="arrow-right" bold></u-icon>
				</view>
				<view class="charts-box">
					<qiun-data-charts 
					type="area"
					:opts="opts"
					:chartData="chartData"
					/>
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
			listNum: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				}
			],
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
				},
			],

			chartData: {},

			opts: {
				color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
				padding: [15,15,0,15],
				legend: {},
				xAxis: {
				disableGrid: true
				},
				yAxis: {
				gridType: "dash",
				dashLength: 2
				},
				extra: {
					area: {
						type: "straight",
						opacity: 0.2,
						addLine: true,
						width: 2,
						gradient: false
					}
				}
			}
      
      
		};
	},
	methods: {
		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ["2016","2017","2018","2019","2020","2021"],
					series: [
					{
						name: "成交量A",
						data: [35,8,25,37,4,20]
					},
					{
						name: "成交量B",
						data: [70,40,65,100,44,68]
					},
					{
						name: "成交量C",
						data: [100,80,95,150,112,132]
					}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);
		},
	},

	onReady() {
		this.getServerData();
	},
};
</script>

<style lang="scss">
page {
	background-color: #eee;
	margin-bottom: 100rpx;

	.content {
		position: relative;

		.header {
			width: 100%;
			height: 200rpx;
			background-color: $uni-bg-color-global;
			text-align: center;
			color: white;
			font-size: 30rpx;
			font-weight: 700;
			position: fixed;
		}

		.wrap {
			position: absolute;
			width: 100vw;
			top: 10rpx;
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
				height: 430rpx;
				margin-top: 20rpx;
				background-color: white;
				display: flex;
				flex-direction: column;
				padding: 20rpx;
				box-sizing: border-box;

				.numberTitle {
					display: flex;
					justify-content: space-between;
					padding: 0 10rpx;
					padding-bottom: 20rpx;
					font-weight: 600;
				}

				.numberItem {
					display: flex;
					height: 90%;
					// padding: 0 20rpx;

					&_item {
						flex: 1;
						height: 90%;
						margin: 10rpx;
						border: $uni-bg-color-global solid 2rpx;
						border-radius: 10rpx;
						background-color: #e6f0ed;
						text-align: center;
						img {
							width: 50%;
							margin-top: 10rpx;
						}
						&_name {
							font-size: 30rpx;
							font-weight: 600;
						}
						&_number {
							display: flex;
							justify-content: space-between;
							margin-top: 30rpx;
							&_total {
								margin-left: 10rpx;
								.total_title {
									float:left;
								}
								.total_number {
									color: #aaa;
									margin-top: 5rpx;
									font-size: 25rpx;
									text {
										color: $uni-bg-color-global;
										font-size: 40rpx;
										font-weight: 600;
									}
								}
							}
							&_wrong {
								margin-right: 10rpx;
								.wrong_title {
									float:left;
								}
								.wrong_number {
									color: #aaa;
									margin-top: 5rpx;
									font-size: 25rpx;
									text {
										color: red;
										font-size: 40rpx;
										font-weight: 600;
									}
								}
							}
						}
					}
				}
			}

			.todayWarnList {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 100vw;
				margin-top: 20rpx;
				box-sizing: border-box;
				background-color: white;
				padding: 30rpx;

				&_top {
					width: 100%;
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					padding-bottom: 20rpx;

					&_title {
						font-weight: 600;
					}
				}

				&_content {
					width: 100%;
					&_item {
						margin-top: 20rpx;
						box-sizing: border-box;
						display: flex;
						align-items: center;
						border-bottom: 2rpx solid #ccc;
						padding-bottom: 10rpx;
						&_img {
							flex: 1;
							box-sizing: border-box;
							img {
								width: 70%;
							}
						}
						&_left {
							flex: 4;
							margin-left: 30rpx;
						}
						&_right {
							flex:1;
							text-align: right;
							margin-right: 30rpx;
						}
					}
				}
			}

			.deviceData {
				width: 100%;
				margin-top: 30rpx;
				background-color: white;
				box-sizing: border-box;
				.deviceDataTop {
					display: flex;
					justify-content: space-between;
					padding-bottom: 20rpx;
					font-weight: 600;
					padding: 30rpx;
				}
			}
		}
	}
}
</style>
