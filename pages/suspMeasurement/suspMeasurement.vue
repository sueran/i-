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
		
		<view class="contentContainer ">
			<view class="listContainer" @click="handleNavigate" v-if="this.supDataList">
				<view class="itemContainer" v-for=" item in 8 ">
					<view class="leftContainer">
						<text> 变电站： 135KV仁寿变电站</text>
						<text> 设备： 541交流线端</text>
						<text> 可疑原因： 未知</text>
						<text> 发生时间： 2022-01-09 07:22:33</text>
					</view>
					<view class="rightContainer">
						<text> 详情 </text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
			<view  style="text-align: center;margin-top: 40rpx; font-size: 10rpx;"> 暂无数据 </view>
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
					<view class="item-title">设备类型</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'devType'">
						<label class="radio-item" v-for="item in devTypeList" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">设备</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'device'">
						<label class="radio-item" v-for="item in deviceList" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">测量类型</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'analogType'">
						<label class="radio-item" v-for="item in analogTypeList" :key="item.id"
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
				supDataList:[],
				filterShow:false,
				stationList:[],
				devTypeList:[{"name":"全部","id":"all"},{"name":"手车","id":101},{"name":"I母手车","id":102},{"name":"II母手车","id":103},{"name":"三相断路器","id":201},{"name":"A相断路器","id":202},{"name":"B相断路器","id":203},{"name":"C相断路器","id":204},{"name":"三相断路器(高)","id":205},{"name":"A相断路器(高)","id":206},{"name":"B相断路器(高)","id":207},{"name":"C相断路器(高)","id":208},{"name":"三相断路器(中)","id":209},{"name":"A相断路器(中)","id":210},{"name":"B相断路器(中)","id":211},{"name":"C相断路器(中)","id":212},{"name":"三相断路器(低)","id":213},{"name":"A相断路器(低)","id":214},{"name":"B相断路器(低)","id":215},{"name":"C相断路器(低)","id":216},{"name":"手车开关","id":217},{"name":"I母手车开关","id":218},{"name":"II母手车开关","id":219},{"name":"熔断器","id":401},{"name":"母线侧隔刀","id":501},{"name":"I母侧隔刀","id":502},{"name":"II母侧隔刀","id":503},{"name":"旁母侧离刀","id":504},{"name":"线路侧隔刀","id":505},{"name":"主变侧隔刀","id":506},{"name":"PT侧隔刀","id":507},{"name":"线路PT隔刀","id":508},{"name":"线路避雷器隔刀","id":509},{"name":"设备侧隔刀","id":510},{"name":"开关设备侧隔刀","id":511},{"name":"馈线隔刀","id":512},{"name":"I母侧隔刀（高）","id":513},{"name":"II母侧隔刀（高）","id":514},{"name":"旁母侧离刀（高）","id":515},{"name":"主变侧隔刀（高）","id":516},{"name":"I母侧隔刀（中）","id":517},{"name":"II母侧隔刀（中）","id":518},{"name":"旁母侧离刀（中）","id":519},{"name":"主变侧隔刀（中）","id":520},{"name":"I母侧隔刀（低）","id":521},{"name":"II母侧隔刀（低）","id":522},{"name":"旁母侧离刀（低）","id":523},{"name":"主变侧隔刀（低）","id":524},{"name":"1M PT侧隔刀","id":525},{"name":"2M PT侧隔刀","id":526},{"name":"3M PT侧隔刀","id":527},{"name":"4M PT侧隔刀","id":528},{"name":"上手车","id":529},{"name":"下手车","id":530},{"name":"I母上手车","id":531},{"name":"I母下手车","id":532},{"name":"II母上手车","id":533},{"name":"II母下手车","id":534},{"name":"三工位刀闸","id":535},{"name":"三工位刀闸1","id":536},{"name":"三工位刀闸2","id":537},{"name":"手车刀闸","id":538},{"name":"I母手车刀闸","id":539},{"name":"II母手车刀闸","id":540},{"name":"母线侧地刀","id":601},{"name":"开关母线侧地刀","id":602},{"name":"开关I母侧地刀","id":603},{"name":"开关II母侧地刀","id":604},{"name":"开关线路侧地刀","id":605},{"name":"线路侧地刀","id":606},{"name":"开关主变侧地刀","id":607},{"name":"主变侧地刀","id":608},{"name":"PT侧地刀","id":609},{"name":"主变中性点地刀1","id":610},{"name":"线路PT地刀","id":611},{"name":"线路避雷器地刀","id":612},{"name":"设备侧地刀","id":613},{"name":"开关设备侧地刀","id":614},{"name":"馈线开关侧地刀","id":615},{"name":"馈线线路侧地刀","id":616},{"name":"母线侧甲地刀","id":617},{"name":"母线侧乙地刀","id":618},{"name":"开关母线侧地刀(高)","id":619},{"name":"开关主变侧地刀(高)","id":620},{"name":"主变侧地刀(高)","id":621},{"name":"开关母线侧地刀(中)","id":622},{"name":"开关主变侧地刀(中)","id":623},{"name":"主变侧地刀(中)","id":624},{"name":"开关母线侧地刀(低)","id":625},{"name":"开关主变侧地刀(低)","id":626},{"name":"主变侧地刀(低)","id":627},{"name":"1M 母线侧地刀","id":628},{"name":"1M PT侧地刀","id":629},{"name":"1M 母线侧甲地刀","id":630},{"name":"1M 母线侧乙地刀","id":631},{"name":"2M 母线侧地刀","id":632},{"name":"2M PT侧地刀","id":633},{"name":"2M 母线侧甲地刀","id":634},{"name":"2M 母线侧乙地刀","id":635},{"name":"3M 母线侧地刀","id":636},{"name":"3M PT侧地刀","id":637},{"name":"3M 母线侧甲地刀","id":638},{"name":"3M 母线侧乙地刀","id":639},{"name":"4M 母线侧地刀","id":640},{"name":"4M PT侧地刀","id":641},{"name":"4M 母线侧甲地刀","id":642},{"name":"4M 母线侧乙地刀","id":643},{"name":"主变中性点地刀2","id":644},{"name":"正母","id":701},{"name":"副母","id":702},{"name":"旁母","id":703},{"name":"母线","id":704},{"name":"交流线段","id":1101},],
				deviceList:[],
				analogTypeList:[],
				stationFactor:'all',
				devFactor:'全部',
				devTypeFactor:'all',
				analogTypeFactor:'all',
			}
		},
		onReady (){
			this.initData(this.devTypeList)
			  this.getSuspOptions()
			  this.getInfoByFactor()
		},
		methods: {
			open: function(e){
		        this.filterShow=true
			},
			select(btni, i){
				if(i==0){
					this.$set(this.filterBtns[btni], "name", this.filterBtns[btni].list[i].value);
					this.$set(this.filterBtns[btni], "selected", false);
				}else{
					this.$set(this.filterBtns[btni], "name", this.filterBtns[btni].list[i].title);
					this.$set(this.filterBtns[btni], "selected", true);
				}
				this.$set(this.filterBtns[btni], "popShow", !this.filterBtns[btni].popShow);
			},
			handleClose(){
				console.log("111")
				this.show=false
			},
			hancleConfirm(arry){
				console.log(arry)
				this.show=false
				  console.log(arry.value[0])
			},
			getInfoByFactor(){
				uni.request({
					url:this.base_url+`/idata/doubtfulMeas/getDoubtfulMeasInfo?stationID=${this.stationFactor}&devType=${this.devTypeFactor}&device=this.${this.devFactor}&analogType=${this.analogTypeFactor}&page=1&limit=1000`,
					method:'POST',
					success:(res)=>{
						this.supDataList= res.data.data
					}
				})
			},
			getSuspOptions(){
				uni.request({
					url:this.base_url+'/idata/doubtfulMeas/getAllConditions',
					method:'POST',
					success: (res) => {
						let  data=res.data.data
						this.stationList=data.station
						this.deviceList=data.device
						this.devTypeList=data.devType
						this.analogTypeList=data.analogType
			            this.initData(this.stationList)
						this.initData(this.deviceList)
						this.initData(this.devTypeList)
						this.initData(this.analogTypeList)
					}
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
			radioChange: function(e) {
				let type = e.currentTarget.dataset.type
				let items 
				switch(type){
					case 'station':
					     items=this.stationList
						 this.stationFactor=e.detail.value
						  break;
					case 'dev':
					     items=this.deviceList
						 this.devFactor=e.detail.value
						  break;
					case 'devType':
					     items=this.devTypeList
						 this.devTypeFactor=e.detail.value
						  break;
					case 'analogType':
					     items=this.analogTypeList
						 this.analogTypeFactor=e.detail.value
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
			reset(){
				this.resetList(this.stationList)
				this.resetList(this.deviceList)
				this.resetList(this.devTypeList)
				this.resetList(this.analogTypeList)
				this.stationFactor='all'
				this.devFactor='全部',
				this.devTypeFactor='all',
				this.analogTypeFactor='all',
				this.getInfoByFactor()
			},
			resetList(list){
				list.forEach(item=>{
					if(item.name==='全部'){
						item.checked=true
					}else{
						item.checked=false
					}
				}
			)
			},
			submit(){
				this.getInfoByFactor()
				this.filterShow=false
			},
				// 跳转到详情页面
			handleNavigate() {
				uni.navigateTo({
					url: './suspMeasurementDetail'
				})
			}
		},

	
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

.leftContainer text:nth-child(4) {
	color: #4F4F4F;
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

		&:nth-child(3) {
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
