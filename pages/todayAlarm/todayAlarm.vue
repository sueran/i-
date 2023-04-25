<template>
	<view>
		<view class="searchContainer">
			<!-- <u-search></u-search> -->
			<!-- <view class="middleContainer"> -->
				<u-tabs 
					:list="list1" 
					lineWidth="30"
					lineColor="#187759"
					:activeStyle="{
						color: '#187759',
						transform: 'scale(1.05)',
					}" 
					:inactiveStyle="{
						color: '#4F4F4F',
						fontSize: '24rpx',
						transform: 'scale(1)',
					}" 
					itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" 
					@click="click" 
					:current="current"
				></u-tabs>
			<!-- </view> -->
		</view>


		<view class="contentContainer">
			<view class="listContainer" v-for="(item,index) in dataGetDeviceAlarmList" :key="index">
				<view class="itemContainer">
					<view class="leftContainer">
						<text>{{item.alarmContent}}</text>
						<text>间隔名称：{{item.bayName}}</text>
						<text>
							<u-icon name="map" style="display: inline-block" size="18rpx"> </u-icon>{{item.staName}}
						</text>
						<text>告警时间：{{item.alarmTime}}</text>
					</view>
					<view class="rightContainer">
						<!-- <span class="iconfont icon-anquan" style="color: #187759"> </span> -->
						<img
							:src='item.alarmName === "故障跳闸" ? "../../static/images/TodayWarning/malfunction.png" 
							: item.alarmName === "保护动作" ? "../../static/images/TodayWarning/InsuranceActivities.png" 
							: item.alarmName === "装置异常" ? "../../static/images/TodayWarning/abnormal.png" 
							: item.alarmName === "装置故障" ? "../../static/images/TodayWarning/abnormalDevice.png" 
							: item.alarmName === "遥测越限" ? "../../static/images/TodayWarning/remoteSensingSurvey.png" : ""'>
						<text>{{item.alarmName}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// import { request } from '../request/request'
export default {
	data() {
		return {
			dataGetDeviceAlarmList:[],
			list1: [
				{
					name: '全部',
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
				{
					name: "遥测越限",
				}
			],
			list: {
				0: '全部',
				1: '故障跳闸',
				2: '保护动作',
				3: '装置异常',
				4: '装置故障',
				5: '遥测越限'
			},
			alarmType: '',
			current: 0
		};
	},

	methods: {
		click(current) {
			this.alarmType = current.name
			this.handleGetDeviceAlarmList(this.alarmType)
		},

		// 根据条件获取设备告警列表
		async handleGetDeviceAlarmList(alarmType) {
			if(alarmType !== '全部') {
				let url = this.base_url + `/idata/homePage/getDeviceAlarmList?alarmType=${alarmType}`
				uni.request({
					url,
					method: 'POST',
					success: res => {
						this.dataGetDeviceAlarmList = res.data.data
					}
				})
			}else {
				this.dataGetDeviceAlarmList = []
				
				let p1 = new Promise((resolve, reject) => {
					uni.request({
						url: this.base_url + '/idata/homePage/getDeviceAlarmList?alarmType="故障跳闸"',
						method: 'POST',
						success: res => {
							resolve(res.data.data)
						}
					})
				})
				
				let p2 = new Promise((resolve, reject) => {
					uni.request({
						url: this.base_url + '/idata/homePage/getDeviceAlarmList?alarmType="保护动作"',
						method: 'POST',
						success: res => {
							resolve(res.data.data)
						}
					})
				})
				
				let p3 = new Promise((resolve, reject) => {
					uni.request({
						url: this.base_url + '/idata/homePage/getDeviceAlarmList?alarmType="装置异常"',
						method: 'POST',
						success: res => {
							resolve(res.data.data)
						}
					})
				})
				
				let p4 = new Promise((resolve, reject) => {
					uni.request({
						url: this.base_url + '/idata/homePage/getDeviceAlarmList?alarmType="装置故障"',
						method: 'POST',
						success: res => {
							resolve(res.data.data)
						}
					})
				})
				
				let p5 = new Promise((resolve, reject) => {
					uni.request({
						url: this.base_url + '/idata/homePage/getDeviceAlarmList?alarmType="遥测越限"',
						method: 'POST',
						success: res => {
							resolve(res.data.data)
						}
					})
				})
				
				let res1 = await p1
				this.dataGetDeviceAlarmList.push(...res1)
				let res2 = await p2
				this.dataGetDeviceAlarmList.push(...res2)
				let res3 = await p3
				this.dataGetDeviceAlarmList.push(...res3)
				let res4 = await p4
				this.dataGetDeviceAlarmList.push(...res4)
				let res5 = await p5
				this.dataGetDeviceAlarmList.push(...res5)
				
				console.log(this.dataGetDeviceAlarmList)
			}
		}
	},

	onLoad(option) {
		this.current = option.current

		// 当从主页跳转过来时，初始化alarmType
		this.alarmType = this.list[String(this.current)]

		this.handleGetDeviceAlarmList(this.alarmType)
	}
};
</script>

<style lang="less">
/* @import url("//at.alicdn.com/t/c/font_3612023_xx58jimtxj.css"); */

page {
	background-color: #eee;
	.searchContainer {
		padding: 10rpx 20rpx;
	}
	.contentContainer {
		padding: 10rpx 20rpx;
		.listContainer {
			background-color: white;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.itemContainer {
				display: flex;
				justify-content: space-between;
				padding: 10rpx 20rpx;
				border-bottom: 4rpx solid white;
				.leftContainer{
					flex: 4;
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
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					img {
						width: 80rpx;
						height: 80rpx;
					}
				}

				.rightContainer>span {
					font-size: 80rpx;
				}

			}
		}
	}

}
</style>
