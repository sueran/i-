<template>
	<view>
		<view class="top-wrap">
				<view class="input-wrap" slot="default">
						<u-icon name="search" color="#9A9A9A" size="28"></u-icon>
						<input class="uni-input" placeholder-style="color:#999;" placeholder="请输入搜索关键词" />
					</view>
					<view class="btn-right">
						<u-line direction="col" length="40rpx" color="#bbbbbb"></u-line>
						<u-icon name="/static/images/icons/filter.svg" label="筛选" size="22" @click="open()">
					</u-icon>
				</view>
			</view>
					
						<view class="contentContainer">
								<view class="listContainer">
									<view class="itemContainer" v-for="item in noFreshList" @click="headerNavigate(item)">
										<view class="leftContainer">
											<text> 变电站： {{item.stationname}}</text>
											<text> 原因： {{item.reason==="null" ?'未知':item.reason}}</text>
											<text> 发生时间：{{item.time}}</text>
										</view>
										<view class="rightContainer">
											<text> 详情 </text>
											<u-icon name="arrow-right"></u-icon>
										</view>
									</view>
								</view>
							</view>
		<view @touchmove.prevent>
			<u-popup :show="filterShow" :round="15" class="bottomPop"  :safeAreaInsetTop="true"  customStyle="padding:30rpx;" @close="filterShow=false">
			<view class="popup-wrap">
			<view>
				<view class="title">全部筛选条件</view>
				<view>
					<view class="item-title">变电站</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'station'">
						<label class="radio-item" v-for="item in stationList" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view> 
				<view>
					<view class="item-title">间隔</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'bay'">
						<label class="radio-item" v-for="item in bayList" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
					</view>
				<view class="confirm-btn-wrap">
					<button type="default" @click="reset()">重置</button>
					<button type="default" @click="submit()">确认</button>
				</view>
			</view>
			</view>
		</u-popup>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				filterShow:false,
				stationList:[],
				bayList:[],
				bayFactor:'',
				stationFactor:'',
				noFreshList:[]	
			}
		},
		onReady() {
				this.getAllConditions()
				this.getInfoByFactor()
		},
		methods: {
			// 跳转到详情页面
			headerNavigate(item) {
				uni.navigateTo({
					url: `./noRefreshDetail?item=${encodeURIComponent(JSON.stringify(item))}`
				})
			},
			initData(list){
				for(let i=0;i<list.length;i++){
					if(list[i].name==='全部'){
						this.$set(list[i],'checked',true)
						break;
					}
				}
			},
			getAllConditions(){
				uni.request({
					url:this.base_url+'/idata/NoRefreshInfo/getAllConditions',
					method:'POST',
					success: (res) => {
						this.stationList=res.data.data.station
						this.bayList=res.data.data.bay || []
						this.initData(this.stationList)
						this.initData(this.bayList)
					}
				})
			},
			radioChange: function(e) {
				let type = e.currentTarget.dataset.type
				let items 
				switch(type){
				case 'station':
					items=this.stationList
					this.stationFactor=e.detail.value
					break;
				case 'bay':
					items=this.bayList
					this.bayFactor=e.detail.value
					break;			  
				}
			let values = e.detail.value;
			for (let i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values===item.name) {
					this.$set(item, 'checked', true)
				} else {
					this.$set(item, 'checked', false)
				}
			}
		},	
		getInfoByFactor(){
				uni.request({
					url:this.base_url+`/idata/NoRefreshInfo/getNoRefreshInfo?stationID=${this.stationFactor}&bayId=${this.bayFactor}&page=1&limit=1000`,
					method:'POST',
					success: (res) => {
						this.noFreshList=res.data.data
					}
				})
			},
			reset(){
				this.resetList(this.stationList)
				this.resetList(this.bayList)
				this.stationFactor='all'
				this.bayFactor='all',
				this.getInfoByFactor()
			},
			resetList(list){
				list.forEach(item=>{
					if(item.name==='全部'){
						item.checked=true
					}else{
						item.checked=false
					}
				})
			},
			submit(){
				this.getInfoByFactor()
				this.filterShow=false
			},
			open(i){
					this.filterShow=true
				},
			}
	
	}
</script>

<style  lang="scss" scoped>
	
	.top-wrap {
			padding: 20rpx;
			background-color: #ffffff;
			margin-bottom: 10rpx;
			display: flex;
			align-items: baseline;
			flex: 1;
			justify-content: flex-end;
			overflow: hidden;
		}
		
		.input-wrap {
			width: 96%;
			padding-left: 10rpx;
			background: #f7f7f7;
			display: flex;
			align-items: center;
			height: 80rpx;
			border-radius: 100rpx;
		}
		
		.btn-right {
			display: flex;
			width: 170rpx;
			margin-left: 10rpx;
			justify-content: space-around;
		}
		
		.card-wrap {
			display: flex;
			flex-wrap: wrap;
			margin: 10rpx;
		}
		
	.oneItem {
		display: flex;
		font-size: 14rpx;
		text-align: center;
	}
	
	.iconStyle {
		font-size: 12rpx;
		color: #4F4F4F;
	}
	
.searchContainer {
	margin-top: 10rpx;
	position: sticky;
	top: 10rpx;
}

.oneItem {
	font-size: 14rpx;
	text-align: center;
	display: flex;
	justify-content: center;
	margin: 15rpx 0;
}

.listContainer {
	background-color: #f8f8f8;
	padding: 10rpx 20rpx;
}

.itemContainer {
	border-radius: 7px;
	background-color: white;
	padding: 10rpx 40rpx;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15rpx;
}

.leftContainer>text {
	display: block;
}

.leftContainer text:first-child {
	color: black;
	font-size: 13rpx;
	line-height: 50rpx;
}

.leftContainer text:nth-child(2) {
	color: #4F4F4F;
	font-size: 11rpx;
	line-height: 40rpx;

}

.leftContainer text:nth-child(3) {
	color: red;
	font-size: 11rpx;
	line-height: 40rpx;
}

.rightContainer {
	display: flex;
	align-items: center;
}

.rightContainer>text {
	margin-right: 20rpx;
	font-size: 13rpx;
	color: #4F4F4F;
}

.btn-wrap {
	margin: 20rpx 0;
	display: flex;
	padding: 0rpx 40rpx;


	.filter-btn {
		display: flex;
		font-size: 26rpx;
		flex: 1;
		justify-content: flex-end;
		overflow: hidden;

		text.active {
			color: #187759;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		&:first-child {
			justify-content: flex-start;
		}

		&:nth-child(2) {
			justify-content: center;
		}
	}
}

.popup {
	position: absolute;
	top: 145rpx;
	left: 0;
	right: 0;
	height: 300rpx;
	padding: 0 20rpx;
	overflow-y: hidden;
	background-color: #ffffff;

	z-index: 100006;
	transition: all .2s;

	&.closed {
		height: 0;
	}

	.pop-item {
		padding: 10rpx 0;
		font-size: 26rpx;

		&.active {
			color: #187759;
		}
	}
}

.overlay {
	display: block;
	position: absolute;
	top: 180rpx;
	bottom: 0;
	left: 0;
	right: 0;
	height: calc(100Vh - 300rpx);
	background-color: rgba(16, 16, 16, .4);
	z-index: 10000;
	transition: all .2s;

	&.closed {
		display: none;
	}
}
.bottomPop {
          .popup-wrap{
			  max-height: 90vh;
			  overflow: scroll;
			  padding: 30rpx;
		  
				.title {
				font-size: 32rpx;
				line-height: 46rpx;
				}

		.item-title {
			margin-top: 20rpx;
			font-size: 28rpx;
			color: #4f4f4f;
		}
	}
}

	/deep/ uni-radio .uni-radio-input {
		display: none !important;
	}

	.radio-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
		font-size: 28rpx;

		.radio-item {
			margin-right: 20rpx;
			margin-bottom: 14rpx;
			padding: 10rpx 20rpx;
			position: relative;
			background-color: #EFEFEF;
			border-radius: 8rpx;
			border: 1rpx solid #EFEFEF;
		}
	}

	/deep/ .radio-item.active {
		border: 1rpx solid #187759;
		color: #101010;
		background: rgba(24, 119, 89, 0.15);

		&::before {
			content: '';
			position: absolute;
			right: -1rpx;
			bottom: -1rpx;
			border-bottom-right-radius: 8rpx;
			border: 16rpx solid #187759;
			border-top-color: transparent;
			border-left-color: transparent;
		}

		&::after {
			content: '';
			width: 5px;
			height: 10px;
			position: absolute;
			right: 0;
			bottom: 6rpx;
			border: 1px solid #fff;
			border-top-color: transparent;
			border-left-color: transparent;
			transform: rotate(45deg);
		}
	}

	.confirm-btn-wrap {
		margin-top: 10px;
		display: flex;

		button {
			width: 320rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 30rpx;
			font-size: 28rpx;
			color: #187759;
			background: rgba(24, 119, 89, 0.15);

			&:last-child {
				color: #fff;
				background: #187759;
				box-shadow: 0rpx 1rpx 6rpx 0rpx rgba(0, 0, 0, 0.15);
			}
		}
	}
</style>
