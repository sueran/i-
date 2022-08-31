<template>
	<view class="content">
		<view class="header"></view>
		<view class="wrap">
			<view class="index-img">
				<img src="../../static/images/index-img.png" mode="widthFix" />
			</view>
			<view class="monitor">
				<u-scroll-list indicatorColor="#fff0f0" indicatorActiveColor="#187759">
					<view class="scroll-list" style="flex-direction: row">
						<view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index"
							:class="[index === 9 && 'scroll-list__goods-item--no-margin-right',]"
							@click="handleClick(index)">
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
					<u-icon name="arrow-right" bold @click="handlenNavigate1(0)"></u-icon>
				</view>
				<view class="numberItem">

					<view class="numberItem_item" @click="handlenNavigate1(1)">
						<img src="../../static/images/NumberOfSubstations/220.png" mode="widthFix" />
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

					<view class="numberItem_item" @click="handlenNavigate1(2)">
						<img src="../../static/images/NumberOfSubstations/110.png" mode="widthFix" />
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

					<view class="numberItem_item" @click="handlenNavigate1(3)">
						<img src="../../static/images/NumberOfSubstations/35.png" mode="widthFix" />
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
					<text class="todayWarnList_top_title">今日设备警告</text>
					<u-icon name="arrow-right" bold @click="handleTodayAlarm(0)"></u-icon>
				</view>
				<view class="todayWarnList_content">
					<view class="todayWarnList_content_item" @click="handleTodayAlarm(1)">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/images/TodayWarning/malfunction.png" mode="widthFix" />
						</view>
						<view class="todayWarnList_content_item_left">故障跳闸</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item" @click="handleTodayAlarm(2)">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/images/TodayWarning/InsuranceActivities.png" mode="widthFix" />
						</view>
						<view class="todayWarnList_content_item_left">保护动作</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item" @click="handleTodayAlarm(3)">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/images/TodayWarning/abnormal.png" mode="widthFix" />
						</view>
						<view class="todayWarnList_content_item_left">装置异常</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item" @click="handleTodayAlarm(4)">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/images/TodayWarning/abnormalDevice.png" mode="widthFix" />
						</view>
						<view class="todayWarnList_content_item_left">装置故障</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
					<view class="todayWarnList_content_item" @click="handleTodayAlarm(5)">
						<view class="todayWarnList_content_item_img">
							<img src="../../static/images/TodayWarning/remoteSensingSurvey.png" mode="widthFix" />
						</view>
						<view class="todayWarnList_content_item_left">遥测越限</view>
						<view class="todayWarnList_content_item_right">20</view>
					</view>
				</view>
			</view>
			<view class="deviceData">
				<view class="deviceDataTop">
					<text class="deviceDataTop_title">负荷曲线</text>
					<u-icon name="arrow-right" bold @click="handlenNavigate2"></u-icon>
				</view>
				<view class="charts-box">
					<qiun-data-charts type="area" :opts="opts" :chartData="chartData" />
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
					thumb: "../../static/images/operation/workingCondition.png",
				},
				{
					price: "超重载",
					thumb: "../../static/images/operation/heavyLoad.png",
				},
				{
					price: "负荷曲线",
					thumb: "../../static/images/operation/load.png",
				},
				{
					price: "缺陷统计",
					thumb: "../../static/images/operation/imperfection.png",
				},
				{
					price: "置牌一览",
					thumb: "../../static/images/operation/generalSurvey.png",
				},
				{
					price: "告警抑制",
					thumb: "../../static/images/operation/warningMessage.png",
				},
				{
					price: "数据传输",
					thumb: "../../static/images/operation/dataTransmission.png",
				},
				{
					price: "封锁信息",
					thumb: "../../static/images/operation/blockingInformation.png",
				},
				{
					price: "设备越限",
					thumb: "../../static/images/operation/out-of-limit.png",
				},
				{
					price: "替代信息",
					thumb: "../../static/images/operation/alternativeInformation.png",
				},
				{
					price: "可疑量测",
					thumb: "../../static/images/operation/suspicious.png",
				},
				{
					price: "不刷新量测",
					thumb: "../../static/images/operation/notUpdate.png",
				},
			],

			chartData: {},

			opts: {
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [15, 15, 0, 15],
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

		getInfo() {
			uni.request({
				url: "http://124.220.156.201:8800/loadStatistics/getALlLoad",
				method: "post",
				success: (res) => {
					console.log(res);
				}
			})
		},
		handleClick(e) {
			switch (e) {
				case 0:
					uni.navigateTo({
						// 工况情况
						url: '../../pagesB/workingCondition/workingCondition'
					});
					break;
				case 1:
					uni.navigateTo({
						// 超重载
						url: '../../pagesB/heavyEquipment/heavyEquipment'
					})
					break;
				case 2:
					uni.navigateTo({
						//负荷曲线
						url: '../../pagesB/loadCurve/loadCurve'
					})
					break;
				case 3:
					uni.navigateTo({
						// 缺陷统计
						url: '../../pagesB/flawDesign/flawDesign'
					})
					break;
				case 4:
					uni.navigateTo({
						// 置牌一览
						url: '../infos/cardsList'
					})
					break;
				case 5:
					uni.navigateTo({
						// 告警抑制
						url: '../infos/alertList'
					})
					break;
				case 6:
					uni.navigateTo({
						// 数据传输
						url: '../infos/dataTrans'
					})
					break;
				case 7:
					uni.navigateTo({
						// 封锁信息
						url: '../infos/lockInfo'
					})
					break;
				case 8:
					uni.navigateTo({
						// 设备越限
						url: '../infos/out-of-limit'
					})
					break;
				case 9:
					uni.navigateTo({
						// 替代信息
						url: '../infos/replaceInfo'
					})
					break;
				case 10:
					uni.navigateTo({
						url: '../suspMeasurement/suspMeasurement'
					})
					break;
				case 11:
					uni.navigateTo({
						url: '../noRefresh/noRefresh'
					})
					break;
			}
		},

		// 跳转到变电站列表
		handlenNavigate1(e) {
			// 根据不同的id跳转到变电站列表不同的tab页面
			uni.navigateTo({
				url: `../../pagesB/substationNumber/substationNumber?id=${e}`
			});
		},

		// 跳转到负荷曲线页面
		handlenNavigate2() {
			uni.navigateTo({
				url: '../../pagesB/loadCurve/loadCurve'
			});
		},

		handleTodayAlarm(e) {
			uni.navigateTo({
				url: `../todayAlarm/todayAlarm?id=${e}`
			});
		},

		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
					series: [
						{
							name: "成交量A",
							data: [35, 8, 25, 37, 4, 20]
						},
						{
							name: "成交量B",
							data: [70, 40, 65, 100, 44, 68]
						},
						{
							name: "成交量C",
							data: [100, 80, 95, 150, 112, 132]
						}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);
		},
	},

	onReady() {
		this.getServerData();

		console.log("请求");
		this.getInfo()
	},
};
</script>

<style lang="scss">
page {
	background-color: #eee;

	.content {
		position: relative;
		margin-bottom: 100rpx;

		.header {
			width: 100%;
			height: 200rpx;
			background-color: $uni-bg-color-global;
			text-align: center;
			color: white;
			font-size: 30rpx;
			font-weight: 700;
			top: 0;
			position: fixed;
		}

		.wrap {
			position: absolute;
			width: 100vw;
			top: -100rpx;
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
					width: 140vw;

					&__goods-item {
						margin-right: 20px;
						height: 160rpx;

						&__image {
							width: 100rpx;
							height: 100rpx;
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
							width: 30%;
							margin: 20rpx;
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
									float: left;
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
									float: left;
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
							margin-left: 10rpx;
						}

						&_right {
							flex: 1;
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
				margin-bottom: 100rpx;

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
