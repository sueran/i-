<template>
    <view class="content">
        <u-tabs :list="list" lineColor="#187759" @click="handleClickTab"></u-tabs>
        <view v-for="(item, index) in list" :key="index">
            <template v-if="item.name == nowItem">
                <view class="charts-box">
                    <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
                </view>
                <view class="nowNumber">
                    <view class="nowNumber_title">
                        历史时间线选择
                    </view>
                    <view class="nowNumber_date">
                        <u-calendar :show="showCalendar" mode="single" color="#187759" showMark="true" @close="handleCloseCalendar" @confirm="handleConfirmCalendar"></u-calendar>
                        <view @click="handleShowCalendar">2022-08-24<text class="iconfont icon-riqi"></text></view>
                    </view>
                </view>
                <view class="nowData">
                    <view class="nowData_title">当前值</view>
                    <view class="nowData_number">666MW</view>
                </view>
                <view class="toDayData">
                    <view class="toDayData_title">今日</view>
                    <view class="toDayData_list">
                        <view class="toDayData_list_item_max">
                            <view class="maxNumber">最大值: <text>542.87</text>MW</view>
                            <view class="maxTime">发生时间: <text>00:05:00</text></view>
                        </view>
                        <view class="toDayData_list_item_min">
                            <view class="minNumber">最小值: <text>542.87</text>MW</view>
                            <view class="minTime">发生时间: <text>00:05:00</text></view>
                        </view>
                    </view>
                </view>
                <view class="historyData">
                    <view class="historyData_title">历史</view>
                    <view class="historyData_list">
                        <view class="historyData_list_item_max">
                            <view class="maxNumber">最大值: <text>542.87</text>MW</view>
                            <view class="maxTime">发生时间: <text>00:05:00</text></view>
                        </view>
                        <view class="historyData_list_item_min">
                            <view class="minNumber">最小值: <text>542.87</text>MW</view>
                            <view class="minTime">发生时间: <text>00:05:00</text></view>
                        </view>
                    </view>
                </view>
            </template>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            showCalendar: false,
            nowItem: "",
            list: [
                {
                    name: "全部",
                },
                {
                    name: "淇县总和",
                },
                {
                    name: "网供负荷",
                },
                {
                    name: "陵县负荷",
                },
            ],

            chartData: {},

            opts: {
                color: [
                    "#1890FF",
                    "#91CB74",
                    "#FAC858",
                    "#EE6666",
                    "#73C0DE",
                    "#3CA272",
                    "#FC8452",
                    "#9A60B4",
                    "#ea7ccc",
                ],
                padding: [15, 10, 0, 15],
                legend: {},
                xAxis: {
                    disableGrid: true,
                },
                yAxis: {
                    gridType: "dash",
                    dashLength: 2,
                },
                extra: {
                    line: {
                        type: "straight",
                        width: 2,
                    },
                },
            },
        };
    },

    methods: {

        //显示日历
        handleShowCalendar() {
            this.showCalendar = true
        },

        //关闭日历
        handleCloseCalendar() {
            this.showCalendar = false
        },

        //日历点击确认
        handleConfirmCalendar(e) {
            console.log(e[0]);
            this.showCalendar = false
        },

        //点击顶部tab标签
        handleClickTab(e) {
            this.nowItem = e.name;
        },

        getServerData() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
                    series: [
                        {
                            name: "成交量A",
                            data: [35, 8, 25, 37, 4, 20],
                        },
                        {
                            name: "成交量B",
                            data: [70, 40, 65, 100, 44, 68],
                        },
                        {
                            name: "成交量C",
                            data: [100, 80, 95, 150, 112, 132],
                        },
                    ],
                };
                this.chartData = JSON.parse(JSON.stringify(res));
            }, 500);
        },
    },

    onReady() {
        this.nowItem = this.list[0].name;

        this.getServerData();
    },
};
</script>

<style lang="scss">
@font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/c/font_3601379_wlpcc78abv.woff2?t=1661000861221') format('woff2'),
        url('//at.alicdn.com/t/c/font_3601379_wlpcc78abv.woff?t=1661000861221') format('woff'),
        url('//at.alicdn.com/t/c/font_3601379_wlpcc78abv.ttf?t=1661000861221') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-riqi:before {
    content: "\e621";
}

page {
    background-color: #eee;
    box-sizing: border-box;
    padding-bottom: 50rpx;

    .content {
        .u-tabs {
            background-color: white;
        }
        .charts-box {
            background-color: white;
        }
        .nowNumber {
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 40rpx;
            padding: 20rpx;
            background-color: white;
            &_title {
                width: 40%;
                line-height: 40rpx;
                text-align: left;
            }
            &_date {
                width: 40%;
                line-height: 40rpx;
                text-align: right;
                border: 2rpx solid #ccc;
                border-radius: 10rpx;
                text {
                    margin-left: 10rpx;
                }
            }
        }
        .nowData {
            width: 95%;
            margin: 0 auto;
            display: flex;
            margin-top: 20rpx;
            background-color: white;
            height: 80rpx;
            justify-content: space-around;
            &_title {
                width: 40%;
                line-height: 80rpx;
                text-align: left;
            }
            &_number {
                width: 40%;
                line-height: 80rpx;
                text-align: right;
            }
        }

        .toDayData {
            width: 95%;
            margin: 0 auto;
            margin-top: 20rpx;
            background-color: white;
            &_title {
                width: 100%;
                background-color: $uni-bg-color-global;
                border-top-right-radius: 10rpx;
                border-top-left-radius: 10rpx;
                text-align: center;
                color: white;
            }
            &_list {
                height: 150rpx;
                display: flex;
                color: #aaa;
                font-size: 30rpx;
                padding: 10rpx 0;
                &_item_max {
                    flex: 1;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    font-size: 35rpx;
                    margin-left: 20rpx;
                    .maxNumber {
                        flex: 1;
                        text {
                            color: black;
                            margin-left: 30rpx;
                            font-weight: 600;
                        }
                    }
                    .maxTime {
                        flex: 1;
                        text {
                            color: black;
                             margin-left: 10rpx;
                             font-weight: 600;
                             margin-left: 30rpx;
                        }
                    }
                }
                &_item_min {
                    flex: 1;
                    border-left: 2rpx solid #187759;
                    flex: 1;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    font-size: 35rpx;
                    .minNumber {
                        flex: 1;
                        text {
                            color: black;
                            margin-left: 30rpx;
                            font-weight: 600;
                        }
                    }
                    .minTime {
                        flex: 1;
                        text {
                            color: black;
                             margin-left: 10rpx;
                             font-weight: 600;
                             margin-left: 30rpx;
                        }
                    }
                }
            }
        }
        .historyData {
            width: 95%;
            margin: 0 auto;
            margin-top: 20rpx;
            background-color: white;
            &_title {
                width: 100%;
                background-color: #ffb800;
                border-top-right-radius: 10rpx;
                border-top-left-radius: 10rpx;
                text-align: center;
                color: white;
            }
            &_list {
                height: 150rpx;
                display: flex;
                color: #aaa;
                font-size: 30rpx;
                padding: 10rpx 0;
                &_item_max {
                    flex: 1;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    font-size: 35rpx;
                    margin-left: 20rpx;
                    .maxNumber {
                        flex: 1;
                        text {
                            color: black;
                            margin-left: 30rpx;
                            font-weight: 600;
                        }
                    }
                    .maxTime {
                        flex: 1;
                        text {
                            color: black;
                             margin-left: 10rpx;
                             font-weight: 600;
                             margin-left: 30rpx;
                        }
                    }
                }
                &_item_min {
                    flex: 1;
                    border-left: 2rpx solid #ffb800;
                    flex: 1;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    font-size: 35rpx;
                    .minNumber {
                        flex: 1;
                        text {
                            color: black;
                            margin-left: 30rpx;
                            font-weight: 600;
                        }
                    }
                    .minTime {
                        flex: 1;
                        text {
                            color: black;
                             margin-left: 10rpx;
                             font-weight: 600;
                             margin-left: 30rpx;
                        }
                    }
                }
            }
        }
    }
}
</style>
