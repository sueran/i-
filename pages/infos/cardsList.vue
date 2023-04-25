<template>
	<view>
		<u-loading-page :loading="loading"></u-loading-page>
		<view class="card-wrap"  v-if="gpList.length>0">
			<view v-for="(item, index) in gpListSort" :key="index" class="card-item" @click="handleNavigateDetail(item.stationId)">
				<view class="item-left">
					<view class="item-title">{{item.name}}电站</view>
					<view class="item-content">{{item.kv}}</view>
				</view>
				<image :src="iitem" v-for="(iitem, index) in item.src"></image>
			</view>
		</view>
		<u-empty v-if="gpList.length<=0&&!loading"
			mode="list"
			icon="/static/images/icons/nodata.png"
		>
		</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				gpList: []
			}
		},
		computed: {
			gpListSort(){
				let arr = this.gpList
				arr.sort((item1,item2)=>{
					return item2.count-item1.count
				})
				return arr
			}
		},
		onLoad() {
			let that = this
			//获取置牌信息
			uni.request({
				url: `${this.base_url}/idata/gp/getGPInfo`,
				method: 'POST'
			}).then((res) => {
				if(res[1].data.code == 0){
					let arr = res[1].data.data.map(item =>({
						...item,
						name: item.NAME.split("kV")[1],
						kv: item.NAME.split("kV")[0]+'kV',
						stationId: item.staId,
						src: String(item.count).split("").map(x=> {
							if(item.count == 0){
								return '/static/images/numbers/0-g.png'
							}
							else{
								return '/static/images/numbers/'+x+'.png'
							}
						})
					}))
					that.gpList = arr
				}
				that.loading = false
			})
		},
		methods: {
			// 查看详细信息
			handleNavigateDetail(e) {
				uni.navigateTo({
					url: './cardsListDetail?stationId='+encodeURIComponent(JSON.stringify(e))
				})
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

	.card-wrap {
		display: flex;
		flex-wrap: wrap;
		margin: 10rpx;
	}

	.card-item {
		width: calc(50% - 20rpx);
		height: 180rpx;
		margin: 10rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.item-left {
			padding: 32rpx 0;
			padding-left: 8rpx;
			flex: 1;

			.item-title {
				font-size: 32rpx;
				color: #101010;
			}

			.item-content {
				margin-top: 40rpx;
				font-size: 28rpx;
				color: #187759;
			}
		}

		image {
			width: 90rpx;
			height: 128rpx;
		}

	}
</style>
