<template>
    <view class="content">
        <!-- <u-navbar title="告警列表" bgColor="#187759" safeAreaInsetTop placeholder rightIcon="list" rightText="筛选" @rightClick="rightClick" leftIconSize="0" titleStyle="color: white"></u-navbar> -->

        <u-navbar title="告警列表" bgColor="#187759" safeAreaInsetTop placeholder rightIcon="list" rightText="筛选"
            @rightClick="rightClick" titleStyle="color: white" leftIconColor="white" @leftClick="leftClick">
            <view class="u-nav-slot" slot="right">
                <text class="iconfont icon-shaixuan"></text>
            </view>
        </u-navbar>
		
		<view @touchmove.prevent>
			<u-popup :show="filterShow" :round="15" class="bottomPop"  :safeAreaInsetTop="true"  customStyle="padding:30rpx;" @close="filterShow=false">
				<view class="popup-wrap">
			<view>
				<view class="title">全部筛选条件</view>
				<view>
					<view class="item-title">变电站</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'station'">
						<label class="radio-item" v-for="item in stationIdCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">设备</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'equipObject'">
						<label class="radio-item" v-for="item in equipObjectCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">间隔</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'bayId'">
						<label class="radio-item" v-for="item in bayIdCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">责任区</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'dutyArea'">
						<label class="radio-item" v-for="item in dutyAreaCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">告警类型</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'alarmType'">
						<label class="radio-item" v-for="item in alarmTypeCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">告警级别</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'stationLevel'">
						<label class="radio-item" v-for="item in alarmLevelCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">告警描述</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'alarmDesc'">
						<label class="radio-item" v-for="item in alarmDescCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">告警描述</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'alarmDesc'">
						<label class="radio-item" v-for="item in alarmDescCon" :key="item.id"
							:class="item.checked?'active':''">
							<radio :value="item.name" :checked="item.checked" />
							{{item.name}}
						</label>
					</radio-group>
				</view>
				<view>
					<view class="item-title">时间类型</view>
					<radio-group class="radio-list" @change="radioChange" :data-type="'timeType'">
						<label class="radio-item" v-for="item in timeTypeCon" :key="item.id"
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

        <view class="wrap">
            <view class="item"  @click="handlejumpDetail(item)" v-for="item in warnList" key="item.ids">
                <view class="item_left" >
                    <view class="item_left_name item_left_total">{{item.objDesc}}</view>
                    <view class="item_left_time item_left_total">{{item.equipClass}}</view>
                    <view class="item_left_tel item_left_total">发生时间: <text>{}{item.alarmTime}}</text></view>
                </view>
                <view class="item_right">
                    <view class="item_right_status" style="color: #187759;">{{item.levelName}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
			// timeType   all 获取全部             时间类型
			// alarmDesc   空                    告警描述
			// dutyArea   all获取全部            责任区
			// alarmType  all获取全部            告警类型
			// stationId   all获取全部             变电站
			// bayId     all获取全部              间隔
			// equipObject  all获取全部           设备
			// alarmLevel    all获取全部         告警级别
            timeTypeCon:[],
			alarmDescCon:[],
			dutyAreaCon:[],
			alarmTypeCon:[],
			stationIdCon:[],
			bayIdCon:[],
			equipObjectCon:[],
			alarmLevelCon:[],
			filterShow:false,
			
			stationIdFactor:'all',
			timeTypeFactor:'all',
			dutyAreaFactor:'all',
			alarmTypeFactor:'all',
			bayIdFactor:'all',
			equipObjectFactor:'all',
			alarmLevelFactor:'all',
			alarmDescFactor:'',
			
            showPopup: false,  //是否显示筛选弹出层
            showInterval: false,  //是否显示间隔时间选择
            showStation: false, //是否显示厂站选择
            showDate: false, //是否显示时间选择
			warnList:[],
        }    
    },
    methods: {
        handlejumpDetail(item) {
            uni.navigateTo({
                // 置牌一览
              
				url: `./warnDetail?item=${encodeURIComponent(JSON.stringify(item))}`,
			})
        },
        rightClick() {
            this.filterShow = true
        },
		getList(){
			uni.request({
			  url:`http://200.200.200.21:9031/operTicket/alarm/alarmList?startTime=${this.startTime}&endTime=${this.endtime}&timeType=${this.timeTypeFactor}&alarmDesc=${this.alarmDescFactor}&dutyArea=${this.dutyAreaFactor}&alarmType=${this.alarmTypeFactor}&stationId=${this.stationIdFactor}&bayId=${this.bayIdFactor}&equipObject=${this.equipObjectFactor}&alarmLevel=${this.alarmLevelFactor}&page=1&rows=200`,
			  method:'POST',
			  success(res){
				this.warnList=res.data.data.rows
				}			
			})
		},
		getAllConditions(){
			uni.request({
				url:'http://200.200.200.21:9031/operTicket/alarm/alarmConditions',
				method:'POST',
				success: (res) => {
					let data=res.data.data
					this.timeTypeCon=data.timeType
					this.alarmDescCon=data.alarmDesc
					this.dutyAreaCon=data.dutyArea
					this.alarmTypeCon=data.alarmType
					this.stationIdCon=data.stationId
					this.bayIdCon=data.bayId
					this.equipObjectCon=data.equipObject
					this.alarmLevelCon=data.alarmLevel
					
					this.initData(this.timeTypeCon)
					this.initData(this.alarmDescCon)
					this.initData(this.dutyAreaCon)
					this.initData(this.alarmTypeCon)
					this.initData(this.stationIdCon)
					this.initData(this.bayIdCon)
					this.initData(this.equipObjectCon)
					this.initData(this.alarmLevelCon)
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
		radioChange(){
			let type = e.currentTarget.dataset.type
			let items 
			switch(type){
				case 'station':
				     items=this.stationIdCon
					 this.stationIdFactor=e.detail.value
					  break;
				case 'timeType':
				     items=this.timeTypeCon
					 this.timeTypeCon=e.detail.value
					  break;
				case 'alarmDesc':
				     items=this.alarmDescCon
					 this.alarmDescFactor=e.detail.value
					  break;
				case 'dutyArea':
				     items=this.dutyAreaCon
					 this.dutyAreaFactor=e.detail.value
					  break;
				case 'alarmType':
				     items=this.alarmTypeCon
					 this.alarmTypeFactor=e.detail.value
					  break;	
				case 'bayId':
				     items=this.bayIdCon
					 this.bayIdFactor=e.detail.value
					  break;	
				case 'equipObject':
				     items=this.equipObjectCon
					 this.equipObjectFactor=e.detail.value
					  break;
				case 'alarmLevel':
				     items=this.alarmLevelCon
					 this.alarmLevelFactor=e.detail.value
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
				this.resetList(this.timeTypeCon)
				this.resetList(this.alarmDescCon)
				this.resetList(this.dutyAreaCon)
				this.resetList(this.alarmTypeCon)
				this.resetList(this.stationIdCon)
				this.resetList(this.bayIdCon)
				this.resetList(this.equipObjectCon)
				this.resetList(this.alarmLevelCon)
				
			this.stationIdFactor='all',
			this.timeTypeFactor='all',
			this.dutyAreaFactor='all',
			this.alarmTypeFactor='all',
			this.bayIdFactor='all',
			this.equipObjectFactor='all',
			this.alarmLevelFactor='all',
			this.alarmDescFactor='',
				
				this.getList()
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
			this.getList()
		},
        leftClick() {
            uni.navigateBack({
                delta: 1
            });
        },

        close() {
            this.showPopup = false
        },

        // 筛选的条件
        handleClick(index,index1) {
            this.selectCondition[index].list[index1].showBack =  this.selectCondition[index].list[index1].showBack ? false : true
        }
    }
}
</script>

<style lang="scss">
page {
    background-color: #eee;

    .content {
        .headerWrap {
            width: 100vw;
            height: 150rpx;
            background-color:#187759;
        }
        .u-popup {
            // padding: 20rpx;
            box-sizing: border-box;

            // active: {
            //     background-color: #aaa;
            // }

            text {
                font-size: 35rpx;
                padding: 20rpx;
            }

            .popup_type {
                padding: 20rpx;

                &_list {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 10rpx;

                    .popup_type_item {
                        padding: 10rpx 20rpx;
                        margin-bottom: 10rpx;
                        margin-right: 30rpx;
                        border-radius: 5rpx;
                        box-sizing: border-box;
                        background-color: #eee;
                        
                    }
                    .active {
						background-color: #ddebe6;
                        border: 2rpx solid #187759;
                    }
                }
            }

            .popup_rank {
                padding: 20rpx;

                &_list {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 10rpx;

                    .popup_rank_item {
                        padding: 10rpx 20rpx;
                        margin-bottom: 10rpx;
                        margin-right: 30rpx;
                        border-radius: 5rpx;
                        background-color: #eee;
                    }
                }
            }

            .popup_state {
                padding: 20rpx;

                &_list {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 10rpx;

                    .popup_state_item {
                        padding: 10rpx 20rpx;
                        margin-bottom: 10rpx;
                        margin-right: 30rpx;
                        border-radius: 5rpx;
                        background-color: #eee;
                    }
                }
            }

            .popup_interval {
                padding: 20rpx;

                &_list {
                    margin-top: 20rpx;
                    &_message {
                        display: flex;
                        justify-content: space-between;
                        border:2rpx solid #ccc;
                        border-radius: 10rpx;
                        padding: 10rpx;
                    }
                }
            }

            .popup_station {
                padding: 20rpx;

                &_list {
                    margin-top: 20rpx;
                }
            }

            .popup_date {
                padding: 20rpx;

                &_list {
                    margin-top: 20rpx;
                }
            }

            .popup_submit {
                display: flex;
                justify-content: space-around;
                text-align: center;
                padding-bottom: 30rpx;

                &_cacel {
                    width: 40%;
                    padding: 20rpx;
                    background-color: #eee;
                }

                &_select {
                    width: 40%;
                    padding: 20rpx;
                    color: white;
                    background-color: #187759;
                }
            }
        }

        .wrap {
            box-sizing: border-box;
            margin: 0 20rpx;
            padding: 20rpx 0;

            .item {
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 20rpx;
                margin-bottom: 20rpx;
                border-radius: 20rpx;
                background-color: white;

                &_left {
                    flex: 4;

                    &_total {
                        font-size: 25rpx;
                        color: #aaa;
                        margin: 10rpx 0;
                    }

                    &_name {
                        font-size: 35rpx;
                        color: black;
                    }

                    &_tel {
                        text {
                            color: #187759;
                        }
                    }
                }

                &_right {
                    flex: 1.5;
                    text-align: center;
                    padding: 50rpx 0;

                    &_status {
                        font-size: 25rpx;
                        font-weight: 700;
                    }
                }
            }
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