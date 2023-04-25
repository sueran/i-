<template>
    <view class="content">
        <u-tabs :list="list" lineColor="#187759" @click="handleClickTab"></u-tabs>
        <view v-for="(item, index) in list" :key="index">
            <template v-if="item.name == nowItem">
                <view class="charts-box">
                    <qiun-data-charts type="area" :opts="opts" :chartData="chartData" />
                    <view class="title_time">时间</view>
                </view>
                <view class="nowNumber">
                    <view class="nowNumber_title">
                        历史时间线选择
                    </view>
                    <view class="nowNumber_date">
                        <!-- <u-calendar :show="showCalendar" mode="single" color="#187759" showMark @close="handleCloseCalendar" @confirm="handleConfirmCalendar"></u-calendar> -->
                        <u-datetime-picker
                            :show="showCalendar"
                            mode="date"
                            @cancel="handleCloseCalendar"
                            @confirm="handleConfirmCalendar"
                            :minDate='minDate'
                            :maxDate='maxDate'
                        ></u-datetime-picker>
                        <view @click="handleShowCalendar">{{date ? date : nowDate}}<text class="iconfont icon-riqi"></text></view>
                    </view>
                </view>
                <view class="nowData" @click="handleNavigate">
                    <view class="nowData_title">当前值:{{ current }} MW</view>
                    <view class="nowData_number"> <text class="iconfont icon-jiantouyou"></text> </view>
                </view>
                <view class="toDayData">
                    <view class="toDayData_title">今日</view>
                    <view class="toDayData_list">
                        <view class="toDayData_list_item_max">
                            <!-- <view class="maxNumber">最大值: <text>{{ today.maxValue }}</text>MW</view>
                            <view class="maxTime">发生时间: <text>{{ today.maxValueDate }}</text></view> -->
                            <view class="maxNumber">
                                <p>最大值</p>
                                <p>{{ today.maxValue }}MW</p>
                            </view>
                            <view class="maxTime">
                                <p>发生时间</p>
                                <p>{{ today.maxValueDate }}</p>
                            </view>
                        </view>
                        <view class="toDayData_list_item_min">
                            <!-- <view class="minNumber">最小值: <text>{{ today.minValue }}</text>MW</view>
                            <view class="minTime">发生时间: <text>{{ today.minValueDate }}</text></view> -->
                            <view class="maxNumber">
                                <p>最小值</p>
                                <p>{{ today.maxValue }}MW</p>
                            </view>
                            <view class="maxTime">
                                <p>发生时间</p>
                                <p>{{ today.maxValueDate }}</p>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="historyData">
                    <view class="historyData_title">历史</view>
                    <view class="historyData_list">
                        <view class="historyData_list_item_max">
                            <!-- <view class="maxNumber">最大值: <text>{{ his.maxValue }}</text>MW</view>
                            <view class="maxTime">发生时间: <text>{{ his.maxValueDate }}</text></view> -->
                            <view class="maxNumber">
                                <p>最大值</p>
                                <p>{{ his.maxValue }}MW</p>
                            </view>
                            <view class="maxTime">
                                <p>发生时间</p>
                                <p>{{ his.maxValueDate }}</p>
                            </view>
                        </view>
                        <view class="historyData_list_item_min">
                            <!-- <view class="minNumber">最小值: <text>{{ his.minValue }}</text>MW</view>
                            <view class="minTime">发生时间: <text>{{ his.minValueDate }}</text></view> -->
                            <view class="maxNumber">
                                <p>最小值</p>
                                <p>{{ his.maxValue }}MW</p>
                            </view>
                            <view class="maxTime">
                                <p>发生时间</p>
                                <p>{{ his.maxValueDate }}</p>
                            </view>
                        </view>
                    </view>
                </view>
            </template>
        </view>
    </view>
</template>

<script>
import { request } from '../request/request'
import { formatDate } from '../utils/formatDate'
export default {
    data() {
        return {
            dataGetAreaLoadInfo: [],
            showCalendar: false,
            nowItem: '',
            date: '',  //历史时间线选择中的日期
            minDate: 1587524800000,  //日期可选的最早时间
            maxDate: 0,  //日期可选择的当前时间
            list: [
                {
                    name: "全部",
                },
            ],
            his: {},    // 历史数值
            today: {},  // 今日数值
            current: '',
            chartData: {},

            opts: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [15, 15, 0, 3],
				legend: {},
				xAxis: {
					disableGrid: true,
                    rotateLabel: true,
                    rotateAngle: 45,
                    calibration: true,
				},
				yAxis: {
					gridType: "dash",
					dashLength: 2,
                    showTitle: true,
                    data: [
                        {
                            title: "负荷(MW)",
                            titleOffsetY: -5
                        }
                    ]  
				},
				extra: {
					area: {
						type: "curve",
						opacity: 0.2,
						addLine: true,
						width: 2,
						gradient: false
					}
				}
            },
        };
    },

    methods: {
        // 获取最大时间戳
        getMaxDate() {
            let date = new Date()
            this.maxDate = date.valueOf()
        },

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
            let date = new Date(e.value)
            let [ year, month, day] = [ date.getFullYear(), date.getMonth() + 1, date.getDate()]
            // 历史选择时间线
            this.date = `${year}-${month < 10 ? '0'+month : month}-${day < 10 ? '0'+day : day}`
            this.showCalendar = false
        },

        //点击顶部tab标签
        handleClickTab(e) {
            console.log('tab', e);
            this.nowItem = e.name;

            let currentTime = formatDate()
            this.getMinAndMaxValue(e.areaId, currentTime)
        },

        // 根据条件获取区域负荷最大最小值
        getMinAndMaxValue(areaId, currentTime) {
            let url = this.base_url + `/idata/homePage/getMinAndMaxValue?areaId=${areaId}&currentTime=${currentTime}`
            uni.request({
                url,
                method: 'POST',
                success: res => {
                    this.his = res.data.data.his
                    this.today = res.data.data.today
                    this.current = res.data.data.current
                }
            })
        },

        // 跳转到详情页面
        handleNavigate() {
            let item = this.list.find(v => {
                return v.name === this.nowItem
            })

            uni.navigateTo({
                url: `../loadCurve_detail/loadCurve_detail?areaId=${item.areaId}`
            })
        },

        getServerData() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
					categories: ["0:00", "04:00", "08:00", "12:00", "16:00", "20:00","24:00"],
					series: [
						{
							name: "今日",
							data: [35, 8, 25, 37, 4, 20,67]
						},
						{
							name: "历史",
							data: [70, 40, 65, 100, 44, 68,46]
						}
					]
                };
                this.chartData = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        // 系统负荷历史曲线
        handleGetYesTodayLoadInfo() {
            request({url: '/idata/homePage/getYesTodayLoadInfo', method: 'post'})
            .then(res => {
                console.log(res);
            })
        },

        // 根据条件获取区域历史负荷曲线
        handleGetDialogYesTodayLoadInfo() {
            request({url: '/idata/homePage/getDialogYesTodayLoadInfo', method: 'post', data:{ areaId: '', currentTime: this.date}})
            .then(res => {
                console.log(res);
            })
        },

        // 根据条件获取区域实时负荷曲线
        handleGetDialogLoadInfoByRealTime() {
            request({url: '/idata/homePage/getDialogLoadInfoByRealTime', method: 'post', data:{ areaId: '', currentTime: this.date}})
            .then(res => {
                console.log(res);
            })
        },

        // 根据条件获取区域负荷
        handleGetAreaLoadInfo() {
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            let currentTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
            uni.request({
                url: this.base_url + `/idata/homePage/getAreaLoadInfo?areaId=all&currentTime=${currentTime}`,
                method: 'POST',
                success: res => {
                    console.log('res', res);
                    this.list = []
                    for(let i = 0; i < res.data.data.length; i++) {
                        this.list[i] = {}
                        this.list[i].name = res.data.data[i].areaName
                        this.list[i].areaId = res.data.data[i].areaId
                    }
                }
            })
        },
    },

    computed: {
        nowDate() {
            // 当前时间，页面刚加载出来时使用
            let date = new Date()
            let [ nowYear, nowMonth, nowDay] = [ date.getFullYear(), date.getMonth() + 1, date.getDate()]
            return `${nowYear}-${nowMonth < 10 ? '0'+nowMonth : nowMonth}-${nowDay < 10 ? '0'+nowDay : nowDay}`
        }
    },

    onReady() {
        this.nowItem = this.list[0].name;
        this.getServerData()
        this.handleGetYesTodayLoadInfo()
        this.handleGetDialogYesTodayLoadInfo()
        this.handleGetDialogLoadInfoByRealTime()
        this.handleGetAreaLoadInfo()
        this.getMaxDate()

        let currentTime = formatDate()
        this.getMinAndMaxValue('全部', currentTime)
    },
};
</script>

<style lang="scss">
page {
    background-color: #eee;
    box-sizing: border-box;
    padding-bottom: 50rpx;

    .content {
        .u-tabs {
            background-color: white;
        }
        .charts-box {
            position: relative;
            background-color: white;
            .qiun-data-charts {
                position: relative;
                left: -20px;
            }
            .title_time {
                position: absolute;
                bottom: 50px;
                right: 0px;
                color: #666;
            }
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
                padding: 10px 0;
                display: flex;
                color: #aaa;
                font-size: 30rpx;
                padding: 10rpx 0;
                &_item_max {
                    flex: 1;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    font-size: 24rpx;
                    margin-left: 20rpx;
                    .maxNumber {
                        margin-bottom: 10rpx;
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
                        }
                    }
                    .maxTime {
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
                        }
                    }
                }
                &_item_min {
                    flex: 1;
                    border-left: 2rpx solid #187759;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    font-size: 24rpx;
                    padding-left: 20rpx;
                    .maxNumber {
                        margin-bottom: 10rpx;
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
                        }
                    }
                    .maxTime {
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
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
            padding-bottom: 10rpx;
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
                    font-size: 24rpx;
                    margin-left: 20rpx;
                    .maxNumber {
                        margin-bottom: 10rpx;
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
                        }
                    }
                    .maxTime {
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
                        }
                    }
                }
                &_item_min {
                    flex: 1;
                    border-left: 2rpx solid #ffb800;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    font-size: 24rpx;
                    padding-left: 20rpx;
                    .maxNumber {
                        margin-bottom: 10rpx;
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
                        }
                    }
                    .maxTime {
                        > p:nth-child(1) {
                            color: black;
                            font-weight: 600;
                            font-size: 30rpx;
                        }
                    }
                }
            }
        }
    }
}
</style>
