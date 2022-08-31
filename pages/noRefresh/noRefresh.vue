<template>
	<view>
		<view class="searchContainer">
			
			 <u-search ></u-search>
			
			<view class="btn-wrap">
							<view class="filter-btn" @click="open(index)" v-for="(item, index) in filterBtns">
								<text :class="{active: item.selected || item.popShow}">{{item.name}}</text>
								<u-icon name="arrow-down-fill" size="10" v-if="!item.popShow && !item.selected"></u-icon>
								<u-icon name="arrow-up-fill" size="10" v-if="item.popShow" color="#187759"></u-icon>
								<u-icon name="arrow-down-fill" size="10" v-if="!item.popShow && item.selected"
									color="#187759"></u-icon>
								<view class="popup" :class="{closed: !item.popShow}">
									<view v-for="(iitem, i) in item.list">
										<view class="pop-item" :class="{active: iitem.name==item.name || iitem.value==item.name}"
											@click.stop="select(index, i)">{{iitem.name}}</view>
									</view>
								</view>
								<view class="overlay" :class="{closed: !item.popShow}"></view>
								
							</view>
						</view>

	    <view class="contentContainer">
	    	<view  class="listContainer">
	    		<view  class="itemContainer" v-for=" item in listData  ">
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
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				show:false,
				columns:[
				   [ 'options1','options2','options3','options4'],
				],
				listData:[],
				filterBtns: [
					{
										name: '变电站',
										selected: false,
										popShow: false,
										list: [{
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
										}]
									},
									{
										name: '设备类型',
										selected: false,
										popShow: false,
										list: []
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
											title: '设备2'
										}, {
											title: '设备3'
										}, {
											title: '设备4'
										}]
									},
								],
				
			}
		},
		onReady() {
			this.getInitInfo();
		   uni.request({
		   	url:'http://124.220.156.201:8800/noRefresh/getAllConditions',
			method:"POST",
			success:(res)=>{
				let {data}= res
			
				let stationList=[]
				let firstStation={
					name:'全部',
					value:'变电站'
				}
				stationList.push(firstStation)
				stationList.push(data.data.station[0])
				stationList.push(data.data.station[1])
				stationList.push(data.data.station[2])
			
				this.$set(this.filterBtns[0],"list",stationList)
				
				let deviceTypeList=[]
				let firstDeviceType={
					name:'全部',
					value:'设备类型'
				}
				deviceTypeList.push(firstDeviceType)
				deviceTypeList.push(data.data.deviceType[1])
				deviceTypeList.push(data.data.deviceType[2])
				deviceTypeList.push(data.data.deviceType[3])
			   
				 this.$set(this.filterBtns[1],"list",deviceTypeList)
				 
				 
				 let deviceList=[]
				 let firstDevice={
				 	name:'全部',
				 	value:'设备'
				 }
				 deviceList.push(firstDevice)
				 deviceList.push(data.data.device[0])
				 deviceList.push(data.data.device[1])
				 deviceList.push(data.data.device[2])
			
				  this.$set(this.filterBtns[2],"list",deviceList)
				
				
			}
		   })	
		},
		methods: {
			getInitInfo(){
				uni.request({
					url:"http://124.220.156.201:8800/noRefresh/getNoRefreshInfo",
					method:"POST",
					success: (res) => {
						let {data}=res
						console.log(data)
						this.listData=data.data.resData
					}
				})
			},
			open(i){
							this.filterBtns.forEach((item, index)=>{
								if(index !=i)
								{
									this.$set(this.filterBtns[index], "popShow", false);
								}
							})
							this.$set(this.filterBtns[i], "popShow", !this.filterBtns[i].popShow);
							console.log(2)
						},
						select(btni, i){
							if(i==0){
								this.$set(this.filterBtns[btni], "name", this.filterBtns[btni].list[i].value);
								this.$set(this.filterBtns[btni], "selected", false);
							}else{
								this.$set(this.filterBtns[btni], "name", this.filterBtns[btni].list[i].name);
								this.$set(this.filterBtns[btni], "selected", true);
							}
							this.$set(this.filterBtns[btni], "popShow", !this.filterBtns[btni].popShow);
						}
			}
	
	}
</script>

<style  lang="scss" scoped>
.searchContainer{
	margin-top: 10rpx;
	position: sticky;
	top: 10rpx;
}
.oneItem{
	font-size: 14rpx;
	text-align: center;
	display: flex;
	justify-content: center;
	margin: 15rpx 0;
}
.listContainer{
	background-color: #f8f8f8;
	padding: 10rpx 20rpx;
}
  .itemContainer{
	  border-radius: 7px;
	  background-color: white;
	  padding: 10rpx 40rpx;
	  display: flex;
	  justify-content: space-between;
	  margin-bottom: 15rpx;
  }
  .leftContainer>text{
  	  display: block;
  }
  .leftContainer text:first-child{
  	  color: black;
  	  font-size: 13rpx;
  	  line-height: 50rpx;
  }
  .leftContainer text:nth-child(2){
  	  color: #4F4F4F;
  	  font-size: 11rpx;
  	  line-height: 40rpx;
  	
  }
  .leftContainer text:nth-child(3){
  	  color: red;
  	  font-size: 11rpx;
  	  line-height: 40rpx;
  }
  .rightContainer{
  		display: flex;
  		align-items: center;
  	}
  .rightContainer>text{
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
			&:nth-child(2){
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
		height:calc(100Vh - 300rpx );
		background-color: rgba(16, 16, 16, .4);
		z-index: 10000;
		transition: all .2s;

		&.closed {
			display: none;
		}
	}
</style>
