<template>
    <view class="content">
        <u-navbar title="超重载设备详情" bgColor="#187759" safeAreaInsetTop placeholder rightIcon="list" rightText="筛选"
            @rightClick="rightClick" @leftClick="leftClick" titleStyle="color: white" leftIconColor="white">
            <view class="u-nav-slot" slot="right">
                <text class="iconfont icon-shaixuan"></text>
            </view>
        </u-navbar>
        <u-popup :show="showPopup" @close="close">
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
        </u-popup>

        <view class="tabs"><u-tabs :list="list1" :current="current"></u-tabs></view>
        <view class="wrap">
            <view class="item" @click="handlejumpDetail">
                <view class="item_left">
                    <view class="item_left_name">
                        <view class="item_left_name_tag">
                            <u-tag text="危急" type="warning"></u-tag>
                        </view>
                        <view>1#主变间隔双绕组变电器</view>
                    </view>
                    <view class="item_left_title item_left_total">
                        <view class="item_left_title_item border">
                            <view>0</view>
                            <view>A相电流</view>
                        </view>
                        <view class="item_left_title_item border">
                            <view>677</view>
                            <view>有功功率</view>
                        </view>
                        <view class="item_left_title_item">
                            <view>0</view>
                            <view>无功功率</view>
                        </view>
                    </view>
                    <view class="item_left_address item_left_total">
                        <text class="iconfont icon-dizhi"></text> 220kV福盛站
                    </view>
                    <view class="item_left_message item_left_total">
                        <text>当日最大电流时间: 2022-06--19 11:06:59</text>
                    </view>
                </view>
                <view class="item_right">
                    <view class="item_right_number">55</view>
                    <view class="item_right_title">负载率</view>
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

            current: 0  //导航栏索引
        }
    },
    methods: {
        // handlejumpDetail(e) {
        //     console.log(e);
        // },

        // 返回上一界面
        leftClick() {
            uni.redirectTo({
                url: './heavyEquipment'
            })
        },

        rightClick() {
            this.showPopup = true
        },

        close() {
            this.showPopup = false
        }
    },

    onLoad(option) {
        console.log(option);
        console.log(typeof option.id);
        this.current = option.id
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
            padding: 20rpx 0;

            .item {
                display: flex;
                align-items: center;
                background-color: white;
                padding: 20rpx;
                margin-bottom: 20rpx;
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