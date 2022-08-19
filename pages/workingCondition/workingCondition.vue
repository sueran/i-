<template>
    <view class="content">
        <view class="header"></view>
        <view class="wrap">
            <view class="wrap_chart">
                <view style="font-weight: 600">当前变电站在线情况</view>
                <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
            </view>
            <view class="wrap_access">
                <u-subsection 
                    :list="list" 
                    :current="curNow" 
                    @change="sectionChange" 
                    activeColor="black" 
                    inactiveColor="white" 
                    mode="button" 
                    bgColor="#187759"
                ></u-subsection>
                <template v-if="curNow === 0">
                    <view class="">在线</view>
                </template>
                <template v-if="curNow === 1">
                    <view>离线</view>
                </template>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: ['在线', '离线'],
            curNow: 0,
            chartData: {},
            opts: {
                rotate: false,
                rotateLock: false,
                color: [
                    "#1890FF",
                    "#91CB74"
                ],
                padding: [5, 5, 5, 5],
                dataLabel: true,
                legend: {
                    show: true,
                    position: "right",
                    lineHeight: 25,
                },
                title: {
                    name: "收益率",
                    fontSize: 15,
                    color: "#666666",
                },
                subtitle: {
                    name: "70%",
                    fontSize: 25,
                    color: "#7cb5ec",
                },
                extra: {
                    ring: {
                        ringWidth: 100,
                        activeOpacity: 0.5,
                        activeRadius: 10,
                        offsetAngle: 0,
                        labelWidth: 15,
                        border: true,
                        borderWidth: 3,
                        borderColor: "#FFFFFF",
                    },
                },
            },
        };
    },

    methods: {
        sectionChange(e) {
            this.curNow = e
        },

        getServerData() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            data: [
                                { name: "一班", value: 50, labelText: "四班:18人" },
                                { name: "四班", value: 18, labelText: "四班:18人" }
                            ],
                        },
                    ],
                };
                this.chartData = JSON.parse(JSON.stringify(res));
            }, 500);
        },
    },

    onReady() {
        this.getServerData();
    },
};
</script>

<style lang="scss">
    page {
        background-color: #eee;

        .content {
            position: relative;
            .header {
                width: 100%;
                height: 200rpx;
                background-color: $uni-bg-color-global;
                text-align: center;
                color: white;
                font-size: 30rpx;
                font-weight: 700;
                position: fixed;
            }
            .wrap {
                position: absolute;
                top: 30rpx;
                left: 50%;
                transform: translateX(-45vw);
                width: 90vw;
                margin: 0 auto;
                &_chart {
                    border-radius: 10rpx;
                    background-color: white;
                    padding: 30rpx;
                    position: relative;
                }
                &_access {
                    box-sizing: border-box;
                    border-radius: 10rpx;
                    padding: 20rpx;
                    width: 100%;
                    height: 400rpx;
                    background-color: white;
                    margin-top: 20rpx;
                }
            }
        }
    }
</style>
