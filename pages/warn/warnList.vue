<template>
    <view class="content">
        <!-- <u-navbar title="告警列表" bgColor="#187759" safeAreaInsetTop placeholder rightIcon="list" rightText="筛选" @rightClick="rightClick" leftIconSize="0" titleStyle="color: white"></u-navbar> -->

        <u-navbar title="告警" bgColor="#187759" safeAreaInsetTop placeholder rightIcon="list" rightText="筛选"
            @rightClick="rightClick" titleStyle="color: white" leftIconColor="white" @leftClick="leftClick">
            <view class="u-nav-slot" slot="right">
                <text class="iconfont icon-shaixuan"></text>
            </view>
        </u-navbar>
        <u-popup :show="showPopup" @close="close">
            <text>筛选条件</text>
            <view class="popup_type" v-for="(item,index) in selectCondition" :key="index">
                <view class="popup_type_title">{{item.title}}</view>
                <view class="popup_type_list">
                    <view class="popup_type_item" v-for="(item1,index1) in item.list" :key="index1" :class="{active: item1.showBack}" @click="handleClick(index,index1)">{{item1.name}}</view>
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
        </u-popup>





        <view class="wrap">
            <view class="item" @click="handlejumpDetail">
                <view class="item_left">
                    <view class="item_left_name item_left_total">呼和乌素110kv变电站2当前状态为联通。</view>
                    <view class="item_left_time item_left_total">告警分类: 前置情况</view>
                    <view class="item_left_tel item_left_total">发布时间: <text>2022-06-19 06:24:27</text></view>
                </view>
                <view class="item_right">
                    <view class="item_right_status" style="color: #187759;">一般</view>
                </view>
            </view>
            <view class="item">
                <view class="item_left">
                    <view class="item_left_name item_left_total">呼和乌素110kv变电站2当前状态为联通。</view>
                    <view class="item_left_time item_left_total">告警分类: 前置情况</view>
                    <view class="item_left_tel item_left_total">发布时间: <text>2022-06-19 06:24:27</text></view>
                </view>
                <view class="item_right">
                    <view class="item_right_status" style="color: #187759;">运行正常</view>
                </view>
            </view>
            <view class="item">
                <view class="item_left">
                    <view class="item_left_name item_left_total">呼和乌素110kv变电站2当前状态为联通。</view>
                    <view class="item_left_time item_left_total">告警分类: 前置情况</view>
                    <view class="item_left_tel item_left_total">发布时间: <text>2022-06-19 06:24:27</text></view>
                </view>
                <view class="item_right">
                    <view class="item_right_status" style="color: #187759;">运行正常</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
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

            selectCondition: [
                {
                    title: '告警类型',
                    list: [
                        {
                            name: "全部",
                            showBack: false
                        },
                        {
                            name: "事件类型1",
                            showBack: false
                        },
                        {
                            name: "事件类型2",
                            showBack: false
                        },
                        {
                            name: "事件类型3",
                            showBack: false
                        },
                        {
                            name: "事件类型4",
                            showBack: false
                        }
                        // "全部","事件类型1","事件类型2","事件类型3","事件类型4"
                    ]
                },
                {
                    title: '告警级别',
                    list: [
                        {
                            name: "全部",
                            showBack: false
                        },
                        {
                            name: "危急",
                            showBack: false
                        },
                        {
                            name: "严重",
                            showBack: false
                        },
                        {
                            name: "一般",
                            showBack: false
                        }
                    ]
                },
                {
                    title: '告警状态',
                    list: [
                        {
                            name: "已确认",
                            showBack: false
                        },
                        {
                            name: "未确认",
                            showBack: false
                        }
                    ]
                }
            ]

        }
    },
    methods: {
        handlejumpDetail() {
            uni.navigateTo({
                // 置牌一览
                url: './warnDetail'
			})
        },
        rightClick() {
            this.showPopup = true
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
</style>