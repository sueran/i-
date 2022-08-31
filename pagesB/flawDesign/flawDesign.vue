<template>
    <view class="content">
        <view class="headerBackground"></view>
        <view class="wrap">
            <view class="charts-box">
                <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
            </view>
            <u-cell-group>
		        <u-cell title="未消缺" value="2" @click="handleJump"></u-cell>
	        </u-cell-group>
            <u-cell-group>
		        <u-cell title="本周新增" value="2"></u-cell>
                <u-cell title="本周消缺" value="2"></u-cell>
	        </u-cell-group>
            <u-cell-group>
		        <u-cell title="本月新增" value="2"></u-cell>
                <u-cell title="本月消缺" value="2"></u-cell>
	        </u-cell-group>
        </view>
        <!-- <view class="unvanish"></view>
        <view class="thisWeek">
            <view class="thisWeek_item"></view>
            <view class=""></view>
        </view>
        <view class="thisMonth"></view> -->

    </view>
</template>

<script>
export default {
    data() {
        return {
            chartData: {},
            opts: {
                rotate: false,
                rotateLock: false,
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [5, 5, 5, 5],
                dataLabel: true,
                legend: {
                    show: true,
                    position: "right",
                    lineHeight: 25
                },
                title: {
                    name: "收益率",
                    fontSize: 15,
                    color: "#666666"
                },
                subtitle: {
                    name: "70%",
                    fontSize: 25,
                    color: "#7cb5ec"
                },
                extra: {
                    ring: {
                        ringWidth: 60,
                        activeOpacity: 0.5,
                        activeRadius: 10,
                        offsetAngle: 0,
                        labelWidth: 15,
                        border: false,
                        borderWidth: 3,
                        borderColor: "#FFFFFF"
                    }
                }
            }
        }
    },

    methods: {
        handleJump() {
            uni.navigateTo({
                url: '../flawDesign_list/flawDesign_list'
            });
        },
        getServerData() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            data: [{ "name": "一班", "value": 50 }, { "name": "二班", "value": 30 }, { "name": "三班", "value": 20 }]
                        }
                    ]
                };
                this.chartData = JSON.parse(JSON.stringify(res));
            }, 500);
        },
    },

    onReady() {
        this.getServerData();
    },
}
</script>

<style lang="scss">
page {
    background-color: #eee;

    .content {
        position: relative;

        .headerBackground {
            width: 100vw;
            height: 150rpx;
            background-color: $uni-bg-color-global;
        }

        .wrap {
            position: absolute;
            top: 50rpx;
            left: 50%;
            transform: translateX(-47vw);
            width: 94vw;
            height: 500rpx;
            background-color: white;
            border-radius: 20rpx;
            .charts-box {
                margin-bottom: 50rpx;
            }
            .u-cell-group {
                background-color: white;
                margin: 20rpx 0;
            }
        }
    }
}
</style>