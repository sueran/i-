<template>
	<view>
		<u-loading-page :loading="loading"></u-loading-page>
		<u-list @scrolltolower="scrolltolower" v-if="dataList.length>0">
			<u-list-item
				v-for="(item, index) in dataList"
				:key="index"
				class="list-item"
			>
				<view class="item-title">
					<u-icon name="/static/images/icons/dataTransIcon.png" size="34"></u-icon>
					{{item.name}}电站</view>
				<view class="list-content">
					<view class="content-wrap">
						<text class="title">数据网关机</text>
						<view class="aisle-wrap">
							<view class="aisle-item">
								<text>通道1</text>
								<view :style="{color: color(item.td1)}">{{text(item.td1)}}</view>
							</view>
							<view class="aisle-item">
								<text>通道2</text>
								<view :style="{color: color(item.td2)}">{{text(item.td2)}}</view>
							</view>
						</view>
					</view>
					<view class="content-wrap">
						<text class="title">服务网关机</text>
						<view class="aisle-wrap">
							<view class="aisle-item">
								<text>通道1</text>
								<view :style="{color: color(item.td3)}">{{text(item.td3)}}</view>
							</view>
							<view class="aisle-item">
								<text>通道2</text>
								<view :style="{color: color(item.td4)}">{{text(item.td4)}}</view>
							</view>
						</view>
					</view>
				</view>
			</u-list-item>
		</u-list>
		<u-empty v-if="dataList.length<=0&&!loading" mode="list" icon="/static/images/icons/nodata.png">
		</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				dataList: []
			}
		},
		onLoad() {
			let that = this
			uni.request({
				url: `${this.base_url}/idata/dataTransfer/getDataTransferInfo`,
				method: 'POST',
				data: {
					page: 1,
					limit: 6000
				}
			}).then((res) => {
				if(res[1].data.code == 0){
					that.dataList = res[1].data.data
				}
				that.loading = false
			})
		},
		methods: {
			text(x){
				if(x == 0){
					return "正常"
				}if(x == 1){
					return "异常"
				}
				if(x == null){
					return "不存在"
				}
			},
			color(x){
				if(x == 0){
					return "#187759"
				}if(x == 1){
					return "#BD3124"
				}
				if(x == null){
					return "gray"
				}
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F2F7;
		// height: 100%;
		// overflow-y: hidden;
	}

	.list-content{
		padding: 14rpx;
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
		margin: 14rpx 20rpx;
		padding: 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		// height: 100rpx;
		.item-title{
			display: flex;
			align-items: center;
			font-size: 34rpx;
			padding: 10rpx 0;
		}
	}
</style>
