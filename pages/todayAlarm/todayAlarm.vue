<template>
	<view>
		<view class="searchContainer">
			<u-search></u-search>

			<view class="middleContainer">
				<u-tabs :list="list1" lineWidth="30" lineColor="#187759" :activeStyle="{
				  color: '#187759',
				  fontSize: '13rpx',
				  transform: 'scale(1.05)',
				}" :inactiveStyle="{
				  color: '#4F4F4F',
				  fontSize: '11rpx',
				  transform: 'scale(1)',
				}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="click" :current="current">
				</u-tabs>
			</view>
		</view>
		<view class="contentContainer">
			<view class="listContainer">
				<view class="itemContainer">
					<view class="leftContainer">
						<text>JK1节点对时状态：获取时钟源成功</text>
						<text>间隔名称：祖福一线</text>
						<text>
							<u-icon name="map" style="display: inline-block" size="18rpx"> </u-icon>220KV福盛变电站
						</text>
						<text>告警时间：2022-06-19 11:06:59</text>
					</view>
					<view class="rightContainer">
						<span class="iconfont icon-anquan" style="color: #187759"> </span>
						<text>保护动作</text>
					</view>
				</view>
			</view>

			<view class="listContainer">
				<view class="itemContainer">
					<view class="leftContainer">
						<text>JK1节点对时状态：获取时钟源成功</text>
						<text>间隔名称：祖福一线</text>
						<text>
							<u-icon name="map" style="display: inline-block" size="18rpx"> </u-icon>220KV福盛变电站
						</text>
						<text>告警时间：2022-06-19 11:06:59</text>
					</view>
					<view class="rightContainer">
						<span class="iconfont icon-guzhangtousu"> </span>
						<text>故障跳闸</text>
					</view>
				</view>
			</view>

			<view class="listContainer">
				<view class="itemContainer">
					<view class="leftContainer">
						<text>JK1节点对时状态：获取时钟源成功</text>
						<text>间隔名称：祖福一线</text>
						<text>
							<u-icon name="map" style="display: inline-block" size="18rpx"> </u-icon>220KV福盛变电站
						</text>
						<text>告警时间：2022-06-19 11:06:59</text>
					</view>
					<view class="rightContainer">
						<span class="iconfont icon-a-5-shebeiyichangweixiu" style="color: greenyellow">
						</span>
						<text>装置异常</text>
					</view>
				</view>
			</view>

			<view class="listContainer">
				<view class="itemContainer">
					<view class="leftContainer">
						<text>JK1节点对时状态：获取时钟源成功</text>
						<text>间隔名称：祖福一线</text>
						<text>
							<u-icon name="map" style="display: inline-block" size="18rpx"> </u-icon>220KV福盛变电站
						</text>
						<text>告警时间：2022-06-19 11:06:59</text>
					</view>
					<view class="rightContainer">
						<span class="iconfont icon-lianjie" style="color: blue"> </span>
						<text>遥测越限</text>
					</view>
				</view>
			</view>

			<view class="listContainer">
				<view class="itemContainer">
					<view class="leftContainer">
						<text>JK1节点对时状态：获取时钟源成功</text>
						<text>间隔名称：祖福一线</text>
						<text>
							<u-icon name="map" style="display: inline-block" size="18rpx"> </u-icon>220KV福盛变电站
						</text>
						<text>告警时间：2022-06-19 11:06:59</text>
					</view>
					<view class="rightContainer">
						<span class="iconfont icon-cuowutishi" style="color: red"> </span>
						<text>装置故障</text>
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
      list1: [
        {
          name: "全部",
        },
        {
          name: "故障跳闸",
        },
        {
          name: "保护动作",
        },
        {
          name: "装置异常",
        },
        {
          name: "装置故障",
        },
      ],

	  current: 0
    };
  },
  methods: {
    click(item) {
      console.log("item", item);
    },
  },
  onLoad(option) {
	this.current = option.id
  }
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/c/font_3612023_xx58jimtxj.css");
page {
	background-color: #eee;
}
.contentContainer {
	/* background-color: #f7f8f8; */
	padding: 10rpx 20rpx;
}

.listContainer {
	background-color: white;
	border-radius: 8rpx;
	margin-bottom: 20rpx;
}

.itemContainer {
	display: flex;
	justify-content: space-between;
	padding: 10rpx 20rpx;
	border-bottom: 4rpx solid #f7f8f8;
}

.leftContainer>text {
	display: block;
}

.leftContainer text:first-child {
	font-size: 28rpx;
	line-height: 40rpx;
}

.leftContainer text:nth-child(2) {
	font-size: 20rpx;
	line-height: 38rpx;
}

.leftContainer text:nth-child(3) {
	font-size: 20rpx;
	line-height: 38rpx;
}

.leftContainer text:nth-child(4) {
	font-size: 20rpx;
	color: #9a9a9a;
	line-height: 38rpx;
}

.rightContainer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.rightContainer>span {
	font-size: 80rpx;
}
</style>
