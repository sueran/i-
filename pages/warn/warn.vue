<template>
	<!-- <view class="content">
		<view class="headerWrap">
			<u-search placeholder="日照香炉生紫烟"></u-search>
		</view>
		<view class="wrap">
			<view class="wrap_top">
				<text>告警统计</text>
				<view class="wrap_top_message">
					<view class="wrap_top_message_list">
						<view class="list_item">危急告警数量</view>
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
					<view class="wrap_body_top_title">告警列表</view>
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
	</view> -->
	<view>
		<view class="headerContainer">
			<u-search placeholder="请输入搜索关键词"></u-search>
		</view>
		<view class="runningContainer">
			<view class="condition">运行情况</view>
			<view class="detailContainer">
				<view class="totalInfo">
					<text>危急告警总数</text>
					<text>2603</text>
				</view>
				<view class="noConfrimInfo">
					<text>严重告警数量</text>
					<text>2603</text>
				</view>
				<view class="urgentInfo">
					<text>一般告警数量</text>
					<text>2603</text>
				</view>
			</view>
		</view>
		
		<view class="newInfoContainer">
			<view class="moreContainer">
				 <text>告警列表</text>
				 <text @click="handleNavigateTotal">全部  <span class="iconfont icon-gengduo"></span></text>
			</view>
			<view class="listsInfo">
				<view class="oneItem" >
					<view class="oneItemHeader">
						<view class="redDot"></view>
						<text class="dataInfo">2022年08月07日 12:45:23</text>
					</view>
					<view class="oneItemContent">
						<view class="oneItemDetail">
							<view class="oneItemLeft">
							<view>XXX当前一二次设备对应</view>
						    <view>XXX当前状态为备用状态，第二套保护功能软压板处于投入状态</view>
							</view>
							<view  class="oneItemMore" ><span class="iconfont icon-gengduo"></span></view>
						</view>
					</view>
				</view>
				
				<view class="oneItem" v-for=" item  in 4">
					<view class="oneItemHeader">
						<view class="greenDot"></view>
						<text class="dataInfo">2022年08月07日 12:45:23</text>
					</view>
					<view class="oneItemContent">
						<view class="oneItemDetail">
							<view class="oneItemLeft">
							<view>XXX当前一二次设备对应</view>
						    <view>XXX当前状态为备用状态，第二套保护功能软压板处于投入状态</view>
							</view>
							<view  class="oneItemMore" ><span class="iconfont icon-gengduo"></span></view>
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
		handleNavigateTotal() {
			uni.navigateTo({
				url: './warnList'
			})
		},
	}
}
</script>

<style lang="scss">
@import url("//at.alicdn.com/t/c/font_3612023_xx58jimtxj.css");
page {
	background-color: white;
}
.headerContainer{
	background-color: #187759;
	padding: 30rpx 20rpx 50rpx 20rpx ;
}
.runningContainer{
	padding: 35rpx 20rpx;
}
.condition{
	font-size: 32rpx;
	font-weight: bold;
	line-height: 80rpx;
}	
.detailContainer{
	background-color: rgba(241, 241, 241,.7);
    border-radius: 8rpx;
	display: flex;
	padding: 30rpx 15rpx;
	line-height: 50rpx;
}
.totalInfo text:first-child{
	font-size: 30rpx;

	color: #9A9A9A;
}
.noConfrimInfo text:first-child{
	font-size: 30rpx;
	color: #9A9A9A;
}
.urgentInfo text:first-child{
	font-size: 30rpx;
	color: #9A9A9A;
}
.totalInfo text:nth-child(2){
	color: red;
	
}
.noConfrimInfo text:nth-child(2){
	color: royalblue;
}
.urgentInfo text:nth-child(2){
	color: peru;
}
.urgentInfo ,.noConfrimInfo,.totalInfo{
	text-align: center;
}
.newInfoContainer{
	padding: 30rpx 20rpx;
}
.moreContainer{
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 80rpx;
}
.moreContainer text:first-child{
	font-size: 32rpx;
	line-height: 80rpx;
}
.moreContainer text:nth-child(2){
	font-size: 28rpx;
	line-height: 80rpx;
	color: #9A9A9A;
}
.listsInfo{
	padding: 5rpx 10rpx;
}
.oneItemHeader{
	display: flex;
	align-items: baseline;
}
.dataInfo{
	font-size: 26rpx;
	color: #9A9A9A;
	margin-left: 20rpx;
}
.redDot{
	background-color: red;
	width: 20rpx;
	height: 20rpx;
	border-radius: 50%;
}
.greenDot{
	background-color: #187759;
	width: 20rpx;
	height: 20rpx;
	border-radius: 50%;
}
.oneItemContent{
	margin-left: 10rpx;
	padding: 20rpx;
	border-left: 3rpx solid #9A9A9A;
}
.oneItemDetail{
 	margin: 10rpx 15rpx; 
	padding: 20rpx;
	background-color: rgba(241, 241, 241,.7);
	border-radius: 9rpx;
	display: flex;
	align-items: center;
	
}
.oneItemMore{
	font-size: 30rpx;
}
.oneItemLeft view:first-child{
	font-size: 30rpx;
	line-height: 50rpx;
}
.oneItemLeft view:nth-child(2){
	color: #9A9A9A;
	line-height: 40rpx;
	font-size: 27rpx;
}
// page {
// 	background-color: #eee;

// 	.content {
// 		.headerWrap {
// 			width: 100vw;
// 			height: 100rpx;
// 			background-color: #187759;
// 		}

// 		.wrap {
// 			&_top {
// 				width: 100vw;
// 				background-color: white;
// 				box-sizing: border-box;
// 				padding: 20rpx;

// 				text {
// 					font-size: 40rpx;
// 				}

// 				&_message {
// 					background-color: #eee;
// 					justify-content: space-around;
// 					padding: 30rpx;
// 					margin-top: 20rpx;
// 					display: flex;

// 					&_list {
// 						text-align: center;

// 						.list_item {
// 							font-size: 25rpx;
// 							margin-bottom: 20rpx;
// 						}
// 					}
// 				}
// 			}

// 			&_body {
// 				margin-top: 30rpx;
// 				background-color: white;
// 				box-sizing: border-box;
// 				padding: 20rpx;

// 				&_top {
// 					display: flex;
// 					justify-content: space-between;
// 					margin-bottom: 30rpx;
// 				}

// 				.message {
// 					width: 90%;
// 					background-color: #187759;
// 					position: relative;
// 					margin: auto;

// 					&_item {
						
// 						&_header {
// 							text {
// 								color: #187759;
// 							}
// 							color: #666;
// 						}

// 						&_body {
// 							border-left: 2rpx solid black;
// 							box-sizing: border-box;
// 							padding: 20rpx 0;
// 							padding-left: 20rpx;
// 							margin-left: 14rpx;
// 							&_wrap {
// 								display: flex;
// 								align-items: center;
// 								background-color: #eee;
// 								padding: 10rpx;

// 								.wrap_title {
// 									width: 90%;
// 								}

// 								.wrap_title > view:nth-child(2) {
// 									color: #777;
// 									font-size: 25rpx;
// 								}
// 							}
// 						}
// 						&:first-child {
// 							.message_item_header {
// 							text {
// 								color: red;
// 							}
// 						}
// 						}
// 						&:last-child {
// 							.message_item_body {
// 								border: 0;
// 							}
// 						}
// 					}
					
// 				}

// 				.u-steps-item {
// 					height: 300rpx;

// 				}
// 			}
// 		}
// 	}
// }

</style>