<template>
	<view>
		<view class="searchContainer">
			<u-search style="margin-top: 10rpx;"></u-search>

			<view class="middleContainer">
				<u-tabs :list="list1" lineWidth="30" lineColor="#187759" :activeStyle="{
					color: '#187759',
					fontSize: '13rpx',
					transform: 'scale(1.05)'
				}" :inactiveStyle="{
	color: '#4F4F4F',
	fontSize: '11rpx',
	transform: 'scale(1)'
}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="click"></u-tabs>
			</view>

			<view class="footerContainer">
				<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
					<u-checkbox size="25rpx" labelSize="20rpx" :customStyle="{ marginBottom: '8px' }"
						v-for="(item, index) in checkboxList1" :key="index" :label="item.name" :name="item.name">
					</u-checkbox>
				</u-checkbox-group>
			</view>
		</view>

		<view class="contentContainer">
			<view class="listContainer">
				<view class="itemContainer">
					<view class="leftContainer">
						<text>220KV视高变电站</text>
						<text> 投运时间 2008年12月19日</text>
						<text> 联系电话：<span style="color: blue;" @click="show = true">（0833）6226314</span></text>
					</view>
					<view class="rightContainer">
						<u-icon name="warning-fill" color="red" size="50rpx"></u-icon>
						<text>当前设备异常</text>
					</view>
				</view>

				<view class="itemContainer" v-for="item in 10">
					<view class="leftContainer">
						<text>220KV视高变电站</text>
						<text> 投运时间 2008年12月19日</text>
						<text> 联系电话：<span style="color: blue;" @click="show = true">（0833）6226314</span></text>
					</view>
					<view class="rightContainer">
						<u-icon name="checkmark" color="#187759" size="50rpx"></u-icon>
						<text style="color: #187759;">运行正常</text>
					</view>
				</view>
			</view>

		</view>

		<u-popup :show="show" @close="close" @open="open">
			<view class="telContainer">
				<text>1111111111</text>
				<view>
					<u-icon name="phone" style="margin-right: 20rpx;"></u-icon> 呼叫
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			list1: [{
				name: '全部',
			}, {
				name: '220KV变电站',
			}, {
				name: '110KV变电站'
			}, {
				name: '35KV变电站'
			}],
			checkboxValue1: [],
			checkboxList1: [{
				name: '只查看异常变电站',
				disabled: false
			},
			]
		}
	},
	methods: {
		click(item) {
			console.log('item', item);
		},
		checkboxChange(n) {
			console.log('change', n);
		},
		open() {

		},
		close() {
			this.show = false
		},
	}
}
</script>

<style scoped>
.footerContainer {
	margin-left: 25rpx;
	margin-top: 20rpx;
}

.contentContainer {
	background-color: #f7f8f8;
	padding: 10rpx 20rpx;
}

.listContainer {
	background-color: white;
	border-radius: 8rpx;
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
	font-size: 15rpx;
	line-height: 40rpx;
}

.leftContainer text:nth-child(2) {
	color: #9A9A9A;
	font-size: 11rpx;
	line-height: 38rpx;
}

.leftContainer text:nth-child(3) {
	color: #9A9A9A;
	font-size: 11rpx;
	line-height: 38rpx;
}

.rightContainer {
	display: flex;
	width: 150rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.rightContainer>text {
	font-size: 11rpx;
	color: red;
}

.telContainer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 8rpx;
	height: 150rpx;
}

.telContainer text:first-child {
	font-size: 40rpx;
	color: #187759;
}

.telContainer>view {
	color: red;
	font-size: 30rpx;
	display: flex;
}
</style>
