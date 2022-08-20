<template>
    <view class="content">
        <u-subsection :list="list" :current="current" @change="sectionChange" activeColor="#187759"></u-subsection>
        <template v-if="current === 0">
            <view class="topTitle">
                <view class="topTitle_month">
                    <text>8</text>
                    月超重载设备数量
                </view>
                <view class="topTitle_tab">
                    <u-datetime-picker :show="showDatetime" mode="year-month"
                     @cancel="handleCancel" @confirm="handleConfirm"></u-datetime-picker>
                    <view @click="handleShowDatetime">切换月份<text class="iconfont icon--xialajiantou"></text></view>
                </view>
            </view>
            <view class="inform">该分析截止至8月8号的数据</view>
            <view class="charts-box">
                <qiun-data-charts type="area" :opts="opts1" :chartData="chartData1" :canvas2d='true' canvasId='canvans1'/>
            </view>
            <view class="fuzailv">主变负载率</view>
            <view class="fuzaiList">
                <view class="fuzaiList_item fuzaiList_item1">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">超载</view>
                        <view class="fuzaiList_item_number_number"><text>15</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts2" :chartData="chartData2" :canvas2d='true' canvasId='canvans2'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item2">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">重载</view>
                        <view class="fuzaiList_item_number_number"><text>15</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts3" :chartData="chartData2" :canvas2d='true' canvasId='canvans3'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item3">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">正常</view>
                        <view class="fuzaiList_item_number_number"><text>15</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts4" :chartData="chartData2" :canvas2d='true' canvasId='canvans4'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item4">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">轻载</view>
                        <view class="fuzaiList_item_number_number"><text>15</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts5" :chartData="chartData2" :canvas2d='true' canvasId='canvans5'/>
                    </view>
                </view>
            </view>
        </template>
        <template v-if="current === 1"> 2 </template>
        <template v-if="current === 2"> 3 </template>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: ["变压器", "线路", "负荷"],
            current: 0,
            showDatetime: false,
            chartData1: {}, //折线图数据
            chartData2: {}, //超载数据
            chartData3: {}, //重载数据
            chartData4: {}, //正常数据
            chartData5: {}, //轻载数据
            opts1: {
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
                padding: [15, 15, 0, 15],
                legend: {},
                xAxis: {
                    disableGrid: true,
                },
                yAxis: {
                    gridType: "dash",
                    dashLength: 2,
                },
                extra: {
                    area: {
                        type: "curve",
                        opacity: 0.2,
                        addLine: true,
                        width: 2,
                        gradient: true,
                    },
                },
            },

            opts2: {
                color: [
                    "#ffffff",
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

                padding: undefined,
                title: {
                    name: "80%",
                    fontSize: 15,
                    color: "#fff",
                },
                subtitle: {
                    name: "",
                    fontSize: 10,
                    color: "#666666",
                },
                extra: {
                    arcbar: {
                        type: "default",
                        width: 10,
                        backgroundColor: "#f01650",
                        startAngle: 0.75,
                        endAngle: 0.25,
                        gap: 2,
                        linearType: "none",
                    },
                },
            },

            opts3: {
                color: [
                    "#ffffff",
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

                padding: undefined,
                title: {
                    name: "80%",
                    fontSize: 15,
                    color: "#fff",
                },
                subtitle: {
                    name: "",
                    fontSize: 10,
                    color: "#666666",
                },
                extra: {
                    arcbar: {
                        type: "default",
                        width: 10,
                        backgroundColor: "#ffab0c",
                        startAngle: 0.75,
                        endAngle: 0.25,
                        gap: 2,
                        linearType: "none",
                    },
                },
            },

            opts4: {
                color: [
                    "#ffffff",
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

                padding: undefined,
                title: {
                    name: "80%",
                    fontSize: 15,
                    color: "#fff",
                },
                subtitle: {
                    name: "",
                    fontSize: 10,
                    color: "#666666",
                },
                extra: {
                    arcbar: {
                        type: "default",
                        width: 10,
                        backgroundColor: "#2ab786",
                        startAngle: 0.75,
                        endAngle: 0.25,
                        gap: 2,
                        linearType: "none",
                    },
                },
            },

            opts5: {
                color: [
                    "#ffffff",
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

                padding: undefined,
                title: {
                    name: "80%",
                    fontSize: 15,
                    color: "#fff",
                },
                subtitle: {
                    name: "",
                    fontSize: 10,
                    color: "#666666",
                },
                extra: {
                    arcbar: {
                        type: "default",
                        width: 10,
                        backgroundColor: "#01a9eb",
                        startAngle: 0.75,
                        endAngle: 0.25,
                        gap: 2,
                        linearType: "none",
                    },
                },
            },
        };
    },

    methods: {
        //获取顶部tab索引
        sectionChange(e) {
            this.current = e;
        },

        //显示日期选择器
        handleShowDatetime() {
            this.showDatetime = true;
        },

        handleCancel() {
            this.showDatetime = false;
            console.log(",,,,");
        },

        handleConfirm(e) {
            let date = new Date();
            console.log("=======",date);
        },

        //折线图数据
        getServerData1() {
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
                this.chartData1 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        //超载数据
        getServerData2() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "正确率",
                            color: "#fff",
                            data: 0.8,
                        },
                    ],
                };
                this.chartData2 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        getServerData3() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "正确率",
                            color: "#fff",
                            data: 0.8,
                        },
                    ],
                };
                this.chartData2 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        getServerData4() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "正确率",
                            color: "#fff",
                            data: 0.8,
                        },
                    ],
                };
                this.chartData2 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        getServerData5() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "正确率",
                            color: "#fff",
                            data: 0.8,
                        },
                    ],
                };
                this.chartData2 = JSON.parse(JSON.stringify(res));
            }, 500);
        },
    },

    onReady() {
        this.getServerData1();

        this.getServerData2();

        this.getServerData3();

        this.getServerData4();

        this.getServerData5();
    },
};
</script>

<style lang="scss">
@font-face {
    font-family: "iconfont";
    /* Project id 3600053 */
    src: url("//at.alicdn.com/t/c/font_3600053_6f7n2yfkj39.woff2?t=1660909170407") format("woff2"),
        url("//at.alicdn.com/t/c/font_3600053_6f7n2yfkj39.woff?t=1660909170407") format("woff"),
        url("//at.alicdn.com/t/c/font_3600053_6f7n2yfkj39.ttf?t=1660909170407") format("truetype");
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon--xialajiantou:before {
    content: "\e616";
}

page {
    .content {
        padding: 20rpx;

        .fuzailv {
            margin-top: 20rpx;
        }

        .fuzaiList {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            justify-content: space-between;

            &_item {
                width: 45%;
                height: 150rpx;
                background-color: red;
                border: 2rpx solid #ccc;
                margin-top: 20rpx;
                border-radius: 10rpx;
                display: flex;

                &_number {
                    width: 40%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    color: white;z

                    &_number {
                        text {
                            font-size: 40rpx;
                        }
                    }
                }

                &_arcbar {
                    width: 60%;
                }
            }

            &_item1 {
                background-color: #fe6c8b;
            }

            &_item2 {
                background-color: #fec914;
            }

            &_item3 {
                background-color: #3bdba9;
            }

            &_item4 {
                background-color: #0fc3fe;
            }
        }

        .topTitle {
            display: flex;
            justify-content: space-between;
            vertical-align: baseline;

            &_month {
                flex: 1;

                text {
                    font-size: 80rpx;
                    vertical-align: baseline;
                    color: $uni-bg-color-global;
                }
            }

            &_tab {
                position:relative;
                flex: 1;
                text-align: right;
                display: flex;
                align-items: flex-end;
                padding-bottom: 15rpx;
            }
        }

        .inform {
            color: #aaa;
        }

        .charts-box {
            margin-top: 60rpx;
            border-bottom: 2rpx solid #ccc;
        }
    }
}
</style>
