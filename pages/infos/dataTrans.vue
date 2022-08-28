<template>
	<view>
		<u-collapse :border="false">
			<u-collapse-item v-for="(item, index) in indexList" :key="index" class="list-item">
				<u-icon name="/static/images/icons/dataTransIcon.png" size="34" slot="icon"></u-icon>
				<view slot="title" class="item-title">{{item.title}}</view>
				<view class="u-collapse-content">
					<view class="content-wrap">
						<text class="title">数据网关机</text>
						<view class="aisle-wrap">
							<view class="aisle-item">
								<text>通道1</text>
								<view style="color: #E99D42;">不存在</view>
							</view>
							<view class="aisle-item">
								<text>通道2</text>
								<view style="color: #BD3124;">异常</view>
							</view>
						</view>
					</view>
					<view class="content-wrap">
						<text class="title">服务网关机</text>
						<view class="aisle-wrap">
							<view class="aisle-item">
								<text>通道1</text>
								<view style="color: #E99D42;">不存在</view>
							</view>
							<view class="aisle-item">
								<text>通道2</text>
								<view style="color: #BD3124;">异常</view>
							</view>
						</view>
					</view>
				</view>

			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: [{
					title: '110KV福宝变电站',
					content: '量测值：23',
					date: '发生时间：2022-04-10 14:21:16'
				}, {
					title: '110KV福宝变电站',
					content: '量测值：23',
					date: '发生时间：2022-04-10 14:21:16'
				}, {
					title: '110KV福宝变电站',
					content: '量测值：23',
					date: '发生时间：2022-04-10 14:21:16'
				}, {
					title: '110KV福宝变电站',
					content: '量测值：23',
					date: '发生时间：2022-04-10 14:21:16'
				}, {
					title: '110KV福宝变电站',
					content: '量测值：23',
					date: '发生时间：2022-04-10 14:21:16'
				}, ],

			}
		},
		onLoad() {

		},
		methods: {
			
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F2F7;
		// height: 100%;
		// overflow-y: hidden;
	}

	.u-collapse-content{
		padding: 0 20rpx 20rpx 20rpx;
		display: flex;
		
		.content-wrap{
			background-color: #EFEFEF;
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: center;
			padding: 20rpx;
			.title{
				font-size: 28rpx;
				color: #187759;
				line-height: 60rpx;
			}
			.aisle-wrap{
				display: flex;
				.aisle-item{
					padding: 0 10rpx;
					text-align: center;
					line-height: 42rpx;
					text{
						color: #101010;
					}
					&:first-child{
						border-right: 1px solid #bbb;
					}
				}
				
			}
		}
	}

	.list-item {
		margin: 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		// height: 100rpx;
		.item-title{
			font-size: 34rpx;
			padding: 10rpx 0;
		}
	}
</style>
