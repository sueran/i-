<template>
    <view class="content">
        <u-navbar :title="`${name}超重载详情`" bgColor="#187759" safeAreaInsetTop placeholder
            @rightClick="rightClick" @leftClick="leftClick" titleStyle="color: white" leftIconColor="white">
            <!-- <view class="u-nav-slot" slot="right">
                <text class="iconfont icon-shaixuan"></text>
            </view> -->
        </u-navbar>

        <!-- <u-popup :show="showPopup" @close="close">
            <text>筛选条件</text>
            <view class="popup_type">
                <view class="popup_type_title">告警类型</view>
                <view class="popup_type_list">
                    <view class="popup_type_item">全部</view>
                    <view class="popup_type_item">事件类型1</view>
                    <view class="popup_type_item">事件类型2</view>
                    <view class="popup_type_item">事件类型3</view>
                    <view class="popup_type_item">事件类型4</view>
                </view>
            </view>
            <view class="popup_rank">
                <view class="popup_rank_title">告警级别</view>
                <view class="popup_rank_list">
                    <view class="popup_rank_item">全部</view>
                    <view class="popup_rank_item">危急</view>
                    <view class="popup_rank_item">严重</view>
                    <view class="popup_rank_item">一般</view>
                </view>
            </view>
            <view class="popup_state">
                <view class="popup_state_title">告警状态</view>
                <view class="popup_state_list">
                    <view class="popup_state_item">已确认</view>
                    <view class="popup_state_item">未确认</view>
                </view>
            </view>
            <view class="popup_interval">
                <view class="popup_interval_title">间隔</view>
                <view class="popup_interval_list">
                    <view class="popup_interval_list_message">
                        <view class="message_title">全部</view>
                        <view class="message_arrow"> <text class="iconfont icon-jiantouyou"></text> </view>
                    </view>
                    <u-action-sheet :actions="listInterval" :show="showInterval"></u-action-sheet>
                </view>
            </view>
            <view class="popup_station">
                <view class="popup_station_title">厂站</view>
                <view class="popup_station_list">
                    <view class="popup_interval_list_message">
                        <view class="message_title">全部</view>
                        <view class="message_arrow"> <text class="iconfont icon-jiantouyou"></text> </view>
                    </view>
                    <u-action-sheet :actions="listStation" :show="showStation"></u-action-sheet>
                </view>
            </view>
            <view class="popup_date">
                <view class="popup_date_title">时间</view>
                <view class="popup_date_list">
                    <view class="popup_interval_list_message">
                        <view class="message_title">2022-08-24</view>
                        <view class="message_arrow"> <text class="iconfont icon-jiantouyou"></text> </view>
                    </view>
                    <u-action-sheet :actions="listDate" :show="showDate"></u-action-sheet>
                </view>
            </view>
            <view class="popup_submit">
                <view class="popup_submit_cacel">重置</view>
                <view class="popup_submit_select">确认</view>
            </view>
        </u-popup> -->

        <view class="tabs">
            <u-tabs :list="list1" lineColor="#187759" :current="current" @change="tabChange"></u-tabs>
        </view>

        <template v-if="current == 0">
            <view class="wrap" v-for="(item,index) in totalData" :key="index">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name">
                            <view class="item_left_name_tag">
                                <u-tag text="危急" type="warning"></u-tag>
                            </view>
                            <view>{{item.bayName}}</view>
                        </view>
                        <view class="item_left_title item_left_total">
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.aphasecurrent)}}</view>
                                <view>A相电流</view>
                            </view>
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.qdata)}}</view>
                                <view>有功功率</view>
                            </view>
                            <view class="item_left_title_item">
                                <view>{{parseInt(item.pdata)}}</view>
                                <view>无功功率</view>
                            </view>
                        </view>
                        <view class="item_left_address item_left_total">
                            <text class="iconfont icon-dizhi">{{item.staName}}</text> 
                        </view>
                        <view class="item_left_message item_left_total">
                            <text>当日最大电流时间: 2022-06--19 11:06:59</text>
                        </view>
                    </view>
                    <view class="item_right">
                        <view class="item_right_number">{{parseInt(item.loadFactor)}}%</view>
                        <view class="item_right_title">负载率</view>
                    </view>
                </view>
            </view>
        </template>


        <template v-if="current == 1">
            <view class="wrap" v-for="(item,index) in overData" :key="index">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name">
                            <view class="item_left_name_tag">
                                <u-tag text="超载" type="warning"></u-tag>
                            </view>
                            <view>{{item.bayName}}</view>
                        </view>
                        <view class="item_left_title item_left_total">
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.aphasecurrent)}}</view>
                                <view>A相电流</view>
                            </view>
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.qdata)}}</view>
                                <view>有功功率</view>
                            </view>
                            <view class="item_left_title_item">
                                <view>{{parseInt(item.pdata)}}</view>
                                <view>无功功率</view>
                            </view>
                        </view>
                        <view class="item_left_address item_left_total">
                            <text class="iconfont icon-dizhi">{{item.staName}}</text> 
                        </view>
                        <view class="item_left_message item_left_total">
                            <text>当日最大电流时间: 2022-06--19 11:06:59</text>
                        </view>
                    </view>
                    <view class="item_right">
                        <view class="item_right_number">{{parseInt(item.loadFactor)}}%</view>
                        <view class="item_right_title">负载率</view>
                    </view>
                </view>
            </view>
        </template>


        <template v-if="current == 2">
            <view class="wrap" v-for="(item,index) in heavyData" :key="index">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name">
                            <view class="item_left_name_tag">
                                <u-tag text="重载" type="warning"></u-tag>
                            </view>
                            <view>{{item.bayName}}</view>
                        </view>
                        <view class="item_left_title item_left_total">
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.aphasecurrent)}}</view>
                                <view>A相电流</view>
                            </view>
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.qdata)}}</view>
                                <view>有功功率</view>
                            </view>
                            <view class="item_left_title_item">
                                <view>{{parseInt(item.pdata)}}</view>
                                <view>无功功率</view>
                            </view>
                        </view>
                        <view class="item_left_address item_left_total">
                            <text class="iconfont icon-dizhi">{{item.staName}}</text> 
                        </view>
                        <view class="item_left_message item_left_total">
                            <text>当日最大电流时间: 2022-06--19 11:06:59</text>
                        </view>
                    </view>
                    <view class="item_right">
                        <view class="item_right_number">{{parseInt(item.loadFactor)}}%</view>
                        <view class="item_right_title">负载率</view>
                    </view>
                </view>
            </view>
        </template>



        <template v-if="current == 3">
            <view class="wrap" v-for="(item,index) in normalData" :key="index">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name">
                            <view class="item_left_name_tag">
                                <u-tag text="正常" type="warning"></u-tag>
                            </view>
                            <view>{{item.bayName}}</view>
                        </view>
                        <view class="item_left_title item_left_total">
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.aphasecurrent)}}</view>
                                <view>A相电流</view>
                            </view>
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.qdata)}}</view>
                                <view>有功功率</view>
                            </view>
                            <view class="item_left_title_item">
                                <view>{{parseInt(item.pdata)}}</view>
                                <view>无功功率</view>
                            </view>
                        </view>
                        <view class="item_left_address item_left_total">
                            <text class="iconfont icon-dizhi">{{item.staName}}</text> 
                        </view>
                        <view class="item_left_message item_left_total">
                            <text>当日最大电流时间: 2022-06--19 11:06:59</text>
                        </view>
                    </view>
                    <view class="item_right">
                        <view class="item_right_number">{{parseInt(item.loadFactor)}}%</view>
                        <view class="item_right_title">负载率</view>
                    </view>
                </view>
            </view>
        </template>



        <template v-if="current == 4">
            <view class="wrap" v-for="(item,index) in underData" :key="index">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name">
                            <view class="item_left_name_tag">
                                <u-tag text="轻载" type="warning"></u-tag>
                            </view>
                            <view>{{item.bayName}}</view>
                        </view>
                        <view class="item_left_title item_left_total">
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.aphasecurrent)}}</view>
                                <view>A相电流</view>
                            </view>
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.qdata)}}</view>
                                <view>有功功率</view>
                            </view>
                            <view class="item_left_title_item">
                                <view>{{parseInt(item.pdata)}}</view>
                                <view>无功功率</view>
                            </view>
                        </view>
                        <view class="item_left_address item_left_total">
                            <text class="iconfont icon-dizhi">{{item.staName}}</text> 
                        </view>
                        <view class="item_left_message item_left_total">
                            <text>当日最大电流时间: 2022-06--19 11:06:59</text>
                        </view>
                    </view>
                    <view class="item_right">
                        <view class="item_right_number">{{parseInt(item.loadFactor)}}%</view>
                        <view class="item_right_title">负载率</view>
                    </view>
                </view>
            </view>
        </template>


        
        <template v-if="current == 5">
            <view class="wrap" v-for="(item,index) in noData" :key="index">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name">
                            <view class="item_left_name_tag">
                                <u-tag text="空载" type="warning"></u-tag>
                            </view>
                            <view>{{item.bayName}}</view>
                        </view>
                        <view class="item_left_title item_left_total">
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.aphasecurrent)}}</view>
                                <view>A相电流</view>
                            </view>
                            <view class="item_left_title_item border">
                                <view>{{parseInt(item.qdata)}}</view>
                                <view>有功功率</view>
                            </view>
                            <view class="item_left_title_item">
                                <view>{{parseInt(item.pdata)}}</view>
                                <view>无功功率</view>
                            </view>
                        </view>
                        <view class="item_left_address item_left_total">
                            <text class="iconfont icon-dizhi">{{item.staName}}</text> 
                        </view>
                        <view class="item_left_message item_left_total">
                            <text>当日最大电流时间: 2022-06--19 11:06:59</text>
                        </view>
                    </view>
                    <view class="item_right">
                        <view class="item_right_number">{{parseInt(item.loadFactor)}}%</view>
                        <view class="item_right_title">负载率</view>
                    </view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
import { request } from "../request/request"
export default {
    data() {
        return {
            name: '',  // 顶部名称
            showPopup: false,  //是否显示筛选弹出层
            showInterval: false,  //是否显示间隔时间选择
            showStation: false, //是否显示厂站选择
            showDate: false, //是否显示时间选择
            // 间隔选项
            listInterval: [
                { name: '1个月' },
                { name: '2个月' },
                { name: '3个月' },
                { name: '4个月' },
            ],
            // 厂站选项
            listStation: [
                { name: '厂站1' },
                { name: '厂站2' },
                { name: '厂站3' }
            ],
            // 时间选项
            listDate: [
                { name: '2022-08-23' },
                { name: '2022-08-24' },
                { name: '2022-08-25' },
            ],

            list1: [{
                name: '全部',
            }, {
                name: '超载',
            }, {
                name: '重载'
            }, {
                name: '正常'
            }, {
                name: '轻载'
            }, {
                name: '空载'
            }],

            current: 0,  //导航栏索引

            totalData: []
        }
    },
    methods: {
        // 返回上一界面
        leftClick() {
            uni.navigateBack({ url: `./heavyEquipment` })
        },
        // 点击筛选
        rightClick() { this.showPopup = true },
        //关闭筛选
        close() { this.showPopup = false },
        // 切换导航
        tabChange(e) { this.current = e.index },
		
		
        // 获取线路负载率列表信息
        handleGetLEList() {
			let url = this.base_url + '/idata/lm/getLEList?page=1&limit=10000&areaId=-1&stationId=-1&statusId=-1'
			uni.request({
				url,
				method: 'POST',
				success: res => {
					this.totalData = res.data.data
				}
			})
        },
        // 获取负荷负载率列表信息
        handleGetPDLis() {
            // request({ url: '/idata/lm/getPDLis', method: 'POST', data: {} })
            // .then(res => { this.totalData = res.data.data })
			let url = this.base_url + '/idata/lm/getPDList?page=1&limit=10000&areaId=-1&stationId=-1&statusId=-1'
				
			uni.request({
				url,
				method: 'POST',
				success: res => {
					this.totalData = res.data.data
				}
			})
        },
        //获取主变负载率列表信息
        handleGetTFLis() {
            // request({ url: '/idata/lm/getTFLis', method: 'POST', data: {} })
            // .then(res => { this.totalData = res.data.data })
			let url = this.base_url + '/idata/lm/getTFList?page=1&limit=10000&areaId=-1&stationId=-1&statusId=-1'
			uni.request({
				url,
				method: 'POST',
				success: res => {
					this.totalData = res.data.data
				}
			})
        }
    },

    computed: {
        // 重载设备
        heavyData() { return this.totalData.filter(v => v.loadtype === '重载') },
        // 超载设备
        overData() { return this.totalData.filter(v => v.loadtype === '超载') },
        // 正常设备
        normalData() { return this.totalData.filter(v => v.loadtype === '正常') },
        // 轻载设备
        underData() { return this.totalData.filter(v => v.loadtype === '轻载') },
        // 空载设备
        noData() { return this.totalData.filter(v => v.loadtype === '空载') }
    },

    onLoad(option) {
        console.log(option);
        this.current = option.id
		
        if (option.type == 'tranform') {
            this.name = '主变'
            this.handleGetTFLis()
        } else if (option.type == 'line') {
            this.name = '线路'
            this.handleGetLEList()
        } else if (option.type == 'load') {
            this.name = '负荷'
            this.handleGetPDLis()
        }
    }
}
</script>

<style lang="scss">
page {
    background-color: #eee;

    .content {

        .u-popup {
            box-sizing: border-box;

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
                        background-color: #eee;
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
                        border: 2rpx solid #ccc;
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



        .tabs {
            width: 100vw;

            .u-tabs {
                width: 600rpx;
                margin: 0;
                padding: 0;
                margin: 0 auto;
            }
        }

        .wrap {
            box-sizing: border-box;
            margin: 0 20rpx;

            .item {
                display: flex;
                align-items: center;
                background-color: white;
                padding: 20rpx;
                margin-bottom: 10rpx;
                border-radius: 10rpx;

                &_left {
                    flex: 4;

                    &_name {
                        display: flex;
                        align-items: center;

                        &_tag {
                            width: 100rpx;
                            margin-right: 30rpx;
                        }

                    }

                    &_total {
                        font-size: 25rpx;
                        margin: 5rpx;
                        color: #888;
                        display: flex;
                    }

                    &_title {
                        &_item {
                            // width: 30%;
                            text-align: center;
                            padding: 0 10rpx;
                        }

                        .border {
                            border-right: 2rpx solid #ccc;

                        }
                    }

                    &_address {
                        text {
                            color: black;
                        }
                    }
                }

                &_right {
                    flex: 1;
                    height: 100%;
                    text-align: center;

                    &_number {
                        font-size: 40rpx;
                        font-weight: 700;
                    }
                }
            }
        }
    }
}
</style>