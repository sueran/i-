<template>
	<view>
		<view class="top-wrap">
			<view class="input-wrap" slot="default">
				<u-icon name="search" color="#9A9A9A" size="28"></u-icon>
				<input class="uni-input" placeholder-style="color:#999;" placeholder="请输入搜索关键词" />
			</view>
		</view>
		<u-list class="list-wrap">
			<u-list-item v-for="(item, index) in indexList" :key="index" class="list-item">
				<u-cell value="详情" center :isLink="true" rightIconStyle="color: #4B9E6A" :border="false" @click="handleNavigateDetail">
					<view slot="title" class="item-title">{{ item.title }}</view>
					<view slot="label" class="u-slot-value">
						<view class="item-content">{{ item.equipment }} | {{item.station}}</view>
						<view class="item-date">{{item.content}} | {{ item.date }}</view>
					</view>
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
export default {
	data() {
		return {
			filterBtns: [{
				name: '变电站',
				selected: false,
				popShow: false,
				list: [
					{
						title: '全部',
						value: '变电站'
					}, {
						title: '110kV仁寿变电站'
					}, {
						title: '110kV仁寿变电站1'
					}, {
						title: '110kV仁寿变电站2'
					}, {
						title: '110kV仁寿变电站3'
					}
				]
			},
			{
				name: '设备类型',
				selected: false,
				popShow: false,
				list: [{
					title: '全部',
					value: '设备类型'
				}, {
					title: '设备类型1'
				}, {
					title: '设备类型2'
				}, {
					title: '设备类型3'
				}, {
					title: '设备类型4'
				}]

			},
			{
				name: '设备',
				selected: false,
				popShow: false,
				list: [{
					title: '全部',
					value: '设备'
				}, {
					title: '设备1'
				}, {
					title: '设备11'
				}, {
					title: '设备2'
				}, {
					title: '设备3'
				}]

			},
			{
				name: '测点类型',
				selected: false,
				popShow: false,
				list: [{
					title: '全部',
					value: '测点类型'
				}, {
					title: '测点类型1'
				}, {
					title: '测点类型2'
				}, {
					title: '测点类型3'
				}, {
					title: '测点类型4'
				}]

			}
			],
			indexList: [{
				title: '110kV仁寿变电站',
				content: '越上限',
				date: '越限率：85.853%',
				equipment: '设备:220kv线路1',
				station: "测点: Ua"
			}, {
				title: '110kV仁寿变电站',
				content: '越上限',
				date: '越限率：85.853%',
				equipment: '设备:220kv线路1',
				station: "测点: Ua"
			}, {
				title: '110kV仁寿变电站',
				content: '越上限',
				date: '越限率：85.853%',
				equipment: '设备:220kv线路1',
				station: "测点: Ua"
			}, {
				title: '110kV仁寿变电站',
				content: '越上限',
				date: '越限率：85.853%',
				equipment: '设备:220kv线路1',
				station: "测点: Ua"
			}, {
				title: '110kV仁寿变电站',
				content: '越上限',
				date: '越限率：85.853%',
				equipment: '设备:220kv线路1',
				station: "测点: Ua"
			},
			],

		}
	},
	onLoad() {

	},
	methods: {
		handleNavigateDetail() {
			uni.navigateTo({
				url: './out-of-limit-detail'
			});
		}
	},
}
</script>

<style lang="scss">
page {
	background-color: #F1F2F7;
}

.top-wrap {
	padding: 20rpx;
	height: 160rpx;
	background-color: #187759;
}

.input-wrap {
	width: 96%;
	padding-left: 10rpx;
	background: #fff;
	display: flex;
	align-items: center;
	height: 70rpx;
	border-radius: 100rpx;
}

.list-wrap {
	position: relative;
	top: -80rpx;
}

.list-item {
	margin: 20rpx;
	background-color: #FFFFFF;
	border-radius: 20rpx;
	box-shadow: -2rpx -2rpx 6rpx 2rpx rgba(79, 79, 79, 0.1);

	.item-title {
		padding-bottom: 6rpx;
		font-size: 28rpx;
		color: #101010;
	}

	.item-content {
		padding: 6rpx 0;
		font-size: 24rpx;
		color: #333333;
	}

	.item-date {
		padding: 6rpx 0;
		font-size: 24rpx;
		color: #BD3124;
	}

}
</style>
