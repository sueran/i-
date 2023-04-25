<template>
    <view class="content">
        <view class="header"></view>
        <view class="wrap">
            <view class="wrap_chart">
                <view style="font-weight: 600">当前变电站在线情况</view>
                <qiun-data-charts type="pie" :opts="opts" :chartData="chartData" />
            </view>
            <view class="wrap_access">
                <u-subsection :list="list" :current="curNow" @change="sectionChange" activeColor="#187759"
                    inactiveColor="white" mode="button" bgColor="#187759"></u-subsection>
                <template v-if="curNow === 0">
                    <view class="line" v-for="(onlineItem,index) in dataOnline" :key="index">
                        <view class="line_title">{{onlineItem.staName}}</view>
                        <view class="line_access">
                            <view class="accessOne">通道一状态: <text :style="{color:onlineItem.road1 == '在线' ? '#187759' : 'red'}">{{onlineItem.road1}}</text></view>
                            <view class="accessTwo">通道二状态: <text :style="{color:onlineItem.road2 == '在线' ? '#187759' : 'red'}">{{onlineItem.road2}}</text></view>
                        </view>
                    </view>
                </template>

                <template v-if="curNow === 1">
                    <view class="line" v-for="(offlineItem,index) in dataOnline" :key="index">
                        <view class="line_title">{{offlineItem.staName}}</view>
                        <view class="line_access">
                            <view class="accessOne">通道一状态: <text :style="{color:offlineItem.road1 == '在线' ? '#187759' : 'red'}">{{offlineItem.road1}}</text></view>
                            <view class="accessTwo">通道二状态: <text :style="{color:offlineItem.road2 == '在线' ? '#187759' : 'red'}">{{offlineItem.road2}}</text></view>
                        </view>
                    </view>
                </template>
            </view>
        </view>
    </view>
</template>

<script>
import { request } from '../request/request'
export default {
    data() {
        return {
            dataOnline: [], //在线变电站
            dataOffline: [], //离线变电站
            dataWorkingCondition:{},
            list: ['在线', '离线'],
            curNow: 0,
            chartData: {},

            // opts: {
            //     rotate: false,
            //     rotateLock: false,
            //     color: [
            //         "#1890FF",
            //         "#FF9933"
            //     ],
            //     padding: [5, 5, 5, 5],
            //     dataLabel: true,
            //     legend: {
            //         show: true,
            //         position: "right",
            //         lineHeight: 25,
            //     },
            //     title: {
            //         name: "",
            //         fontSize: 0,
            //         color: "#666666",
            //     },
            //     subtitle: {
            //         name: "",
            //         fontSize: 0,
            //         color: "#7cb5ec",
            //     },
            //     extra: {
            //         ring: {
            //             ringWidth: 100,
            //             activeOpacity: 0.5,
            //             activeRadius: 10,
            //             offsetAngle: 0,
            //             labelWidth: 15,
            //             border: true,
            //             borderWidth: 3,
            //             borderColor: "#FFFFFF",
            //         },
            //     },
            // },
            opts: {
                rotate: false,
                rotateLock: false,
                color: ["#1890FF","#FAC858"],
                padding: [5,5,5,5],
                enableScroll: false,
                extra: {
                    pie: {
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
        };
    },

    methods: {
        sectionChange(e) {
            console.log('eee', e);
            this.curNow = e
            let type = e == 0 ? '在线' : '离线'
            this.handleGetWorkConditionList(type)
        },

        // getServerData() {
        //     //模拟从服务器获取数据时的延时
        //     setTimeout(() => {
        //         //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        //         let res = {
        //             series: [
        //                 {
        //                     data: [
        //                         { name: "在线", value: this.dataWorkingCondition.online, labelText: `在线:${this.dataWorkingCondition.online}座` },
        //                         { name: "离线", value: this.dataWorkingCondition.offline, labelText: `离线:${this.dataWorkingCondition.offline}座` }
        //                     ],
        //                 },
        //             ],
        //         };
        //         this.chartData = JSON.parse(JSON.stringify(res));
        //     }, 500);
        // },

        //  获取站点工况
        handleGetWorkingCondition() {
			// let res = {
			//     series: [
			//         {
			//             data: [
			//                 { name: "在线", value: this.dataWorkingCondition.online, labelText: `在线:${this.dataWorkingCondition.online}座` },
			//                 { name: "离线", value: this.dataWorkingCondition.offline, labelText: `离线:${this.dataWorkingCondition.offline}座` }
			//             ],
			//         },
			//     ],
			// };
			// this.chartData = JSON.parse(JSON.stringify(res));
            // request({url: '/idata/homePage/getWorkingCondition', method: 'post'})
            // .then(res => {
            //     this.dataWorkingCondition = res.data.data
            // })
            let url = this.base_url + '/idata/homePage/getWorkingCondition'
            uni.request({
				url,
                method: 'POST',
                success: res => {
                    console.log(res);
					let result = {
					    series: [
					        {
					            data: [
					                { name: "在线", value: res.data.data.online, labelText: `在线:${res.data.data.online}座` },
					                { name: "离线", value: res.data.data.offline, labelText: `离线:${res.data.data.offline}座` }
					            ],
					        },
					    ],
					};
					this.chartData = JSON.parse(JSON.stringify(result));
                }
            })
        },

        handleGetWorkConditionList(type) {
            let url = this.base_url + `/idata/homePage/getWorkConditionList?type=${type}&page=1&limit=5000`
            uni.request({
                url,
                method: 'POST',
                success: res => {
                    this.dataOnline = res.data.data
                }
            })
        }
    },

    onReady() {
        //  获取站点工况
        this.handleGetWorkingCondition()

        // 获取在线通道详情（在线）
        this.handleGetWorkConditionList()
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
            margin-bottom: 20rpx;

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
                background-color: white;
                margin-top: 20rpx;

                .line {
                    border-bottom: 2rpx solid #eee;
                    padding: 20rpx 0;

                    &_title {
                        font-size: 35rpx;
                        font-weight: 600;
                        padding-bottom: 20rpx;
                    }

                    &_access {
                        display: flex;
                        justify-content: center;

                        .accessOne {
                            flex: 1;

                            text {
                                color: red;
                                margin-left: 20rpx;
                            }
                        }

                        .accessTwo {
                            flex: 1;
                            border-left: 2rpx #ccc solid;
                            padding-left: 20rpx;

                            text {
                                color: red;
                                margin-left: 20rpx;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
