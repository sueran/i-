<template>
    <view class="content">
        <u-subsection :list="list" :current="current" @change="sectionChange" activeColor="#187759"></u-subsection>
        
        
        <template v-if="current === 0">
            <view class="topTitle">
                <view class="topTitle_month">
                    <text>{{date}}</text>
                    月超重载设备数量
                </view>
                <view class="topTitle_tab">
                    <!-- <u-datetime-picker :show="showDatetime" mode="year-month"
                     @cancel="handleCancel" @confirm="handleConfirm"></u-datetime-picker> -->
                    <u-picker 
                        :show="showDatetime" 
                        :columns="columns"
                        @cancel="handleDateCancel"
                        @confirm="handleDateConfirm"
                    ></u-picker>
                    <view @click="handleShowDatetime">切换月份<text class="iconfont icon-04xialajiantou"></text></view>
                </view>
            </view>

            <view class="inform">该分析截止至{{date}}月{{nowDay}}号的数据</view>
            <view class="charts-box">
                <qiun-data-charts type="area" :opts="opts1" :chartData="chartData1" :canvas2d='true' canvasId='canvans1'/>
            </view>
            <view class="fuzailv">主变线路总数</view>
            <view class="fuzailv_totalNumber" @click="handleNavigateDetail(0,'tranform')" v-if="totalData.transform">主变总数 <text>{{totalData.transform.total}}</text> 台</view>
            <view class="fuzaiList">
                <view class="fuzaiList_item fuzaiList_item1" @click="handleNavigateDetail(1,'tranform')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">超载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.transform"><text>{{totalData.transform.over}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts2" :chartData="chartData2" :canvas2d='true' canvasId='canvans2'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item2" @click="handleNavigateDetail(2,'tranform')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">重载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.transform"><text>{{totalData.transform.heavy}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts3" :chartData="chartData3" :canvas2d='true' canvasId='canvans3'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item3" @click="handleNavigateDetail(3,'tranform')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">正常</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.transform"><text>{{totalData.transform.normal}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts4" :chartData="chartData4" :canvas2d='true' canvasId='canvans4'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item4" @click="handleNavigateDetail(4,'tranform')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">轻载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.transform"><text>{{totalData.transform.under}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts5" :chartData="chartData5" :canvas2d='true' canvasId='canvans5'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item5" @click="handleNavigateDetail(5,'tranform')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">空载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.transform"><text>{{totalData.transform.no}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts6" :chartData="chartData6" :canvas2d='true' canvasId='canvans6'/>
                    </view>
                </view>
            </view>
        </template>


        <template v-if="current === 1">
            <view class="topTitle">
                <view class="topTitle_month">
                    <text>{{date}}</text>
                    月超重载设备数量
                </view>
                <view class="topTitle_tab">
                    <u-picker 
                        :show="showDatetime" 
                        :columns="columns"
                        @cancel="handleDateCancel"
                        @confirm="handleDateConfirm"
                    ></u-picker>
                    <view @click="handleShowDatetime">切换月份<text class="iconfont icon-04xialajiantou"></text></view>
                </view>
            </view>

            <view class="inform">该分析截止至{{date}}月{{nowDay}}号的数据</view>
            <view class="charts-box">
                <qiun-data-charts type="area" :opts="opts1" :chartData="chartData1" :canvas2d='true' canvasId='canvans1'/>
            </view>
            <view class="fuzailv">线路线路总数</view>
            <view class="fuzailv_totalNumber" @click="handleNavigateDetail(0,'line')" v-if="totalData.line">主变总数 <text>{{totalData.line.total}}</text> 台</view>
            <view class="fuzaiList">
                <view class="fuzaiList_item fuzaiList_item1" @click="handleNavigateDetail(1,'line')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">超载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.line"><text>{{totalData.line.over}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts2" :chartData="chartData2" :canvas2d='true' canvasId='canvans2'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item2" @click="handleNavigateDetail(2,'line')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">重载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.line"><text>{{totalData.line.heavy}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts3" :chartData="chartData3" :canvas2d='true' canvasId='canvans3'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item3" @click="handleNavigateDetail(3,'line')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">正常</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.line"><text>{{totalData.line.normal}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts4" :chartData="chartData4" :canvas2d='true' canvasId='canvans4'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item4" @click="handleNavigateDetail(4,'line')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">轻载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.line"><text>{{totalData.line.under}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts5" :chartData="chartData5" :canvas2d='true' canvasId='canvans5'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item5" @click="handleNavigateDetail(5,'line')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">空载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.line"><text>{{totalData.line.no}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts6" :chartData="chartData6" :canvas2d='true' canvasId='canvans6'/>
                    </view>
                </view>
            </view>
        </template>


        <template v-if="current === 2">
            <view class="topTitle">
                <view class="topTitle_month">
                    <text>{{date}}</text>
                    月超重载设备数量
                </view>
                <view class="topTitle_tab">
                    <u-picker 
                        :show="showDatetime" 
                        :columns="columns"
                        @cancel="handleDateCancel"
                        @confirm="handleDateConfirm"
                    ></u-picker>
                    <view @click="handleShowDatetime">切换月份<text class="iconfont icon-04xialajiantou"></text></view>
                </view>
            </view>

            <view class="inform">该分析截止至{{date}}月{{nowDay}}号的数据</view>
            <view class="charts-box">
                <qiun-data-charts type="area" :opts="opts1" :chartData="chartData1" :canvas2d='true' canvasId='canvans1'/>
            </view>
            <view class="fuzailv">负荷线路总数</view>
            <view class="fuzailv_totalNumber" @click="handleNavigateDetail(0,'load')" v-if="totalData.load">主变总数 <text>{{totalData.load.total}}</text> 台</view>
            <view class="fuzaiList">
                <view class="fuzaiList_item fuzaiList_item1" @click="handleNavigateDetail(1,'load')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">超载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.load"><text>{{totalData.load.over}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts2" :chartData="chartData2" :canvas2d='true' canvasId='canvans2'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item2" @click="handleNavigateDetail(2,'load')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">重载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.load"><text>{{totalData.load.heavy}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts3" :chartData="chartData3" :canvas2d='true' canvasId='canvans3'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item3" @click="handleNavigateDetail(3,'load')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">正常</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.load"><text>{{totalData.load.normal}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts4" :chartData="chartData4" :canvas2d='true' canvasId='canvans4'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item4" @click="handleNavigateDetail(4,'load')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">轻载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.load"><text>{{totalData.load.under}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts5" :chartData="chartData5" :canvas2d='true' canvasId='canvans5'/>
                    </view>
                </view>
                <view class="fuzaiList_item fuzaiList_item5" @click="handleNavigateDetail(5,'load')">
                    <view class="fuzaiList_item_number">
                        <view class="fuzaiList_item_number_title">空载</view>
                        <view class="fuzaiList_item_number_number" v-if="totalData.load"><text>{{totalData.load.no}}</text>台</view>
                    </view>
                    <view class="fuzaiList_item_arcbar">
                        <qiun-data-charts type="arcbar" :opts="opts6" :chartData="chartData6" :canvas2d='true' canvasId='canvans6'/>
                    </view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
import { request } from '../request/request'
export default {
    data() {
        return {
            date: '',   // 当前月份
            type: '',   // 设备类型()
			nowDay: '', // 当前几号
            thisyear:[],
            yesteryear:[],
            totalData: {},
            list: ["变压器", "线路", "负荷"],
            current: 0,
            showDatetime: false,
            nowTime: {},
            chartData1: {}, //折线图数据
            chartData2: {}, //超载数据
            chartData3: {}, //重载数据
            chartData4: {}, //正常数据
            chartData5: {}, //轻载数据
            chartData6: {}, //空载数据
            columns: [[]],  //可选择的月份，1-12月
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
                padding: [15, 0, 0, 0],
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

                // padding: undefined,
                title: {
                    name: "",
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
                series: [
                        {
                            name: "超载",
                            color: "#fff",
                            data: 0.1,
                        },
                    ],
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
                    name: "",
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
                    name: "",
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
                    name: "",
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

            opts6: {
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
                    name: "",
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
                        backgroundColor: "#339933",
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
        //折线图数据
        getServerData1() {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    categories: ["1", "3", "5", "7", "9", '11', '13', '15', '17', '19', '21', '23', '25', '27', '29',],
                    series: [
                        {
                            name: "今年",
                            data: this.thisyear,
                        },
                        {
                            name: "去年",
                            data: this.yesteryear,
                        }
                    ],
                };
                this.chartData1 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        //超载数据
        getServerData2(data) {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "超载",
                            color: "#fff",
                            data,
                        },
                    ],
                };
                
                this.chartData2 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        getServerData3(data) {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "重载",
                            color: "#fff",
                            data,
                        },
                    ],
                };
                this.chartData3 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        getServerData4(data) {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "正常",
                            color: "#fff",
                            data
                        },
                    ],
                };
                this.chartData4 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        getServerData5(data) {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "轻载",
                            color: "#fff",
                            data
                        },
                    ],
                };
                this.chartData5 = JSON.parse(JSON.stringify(res));
            }, 500);
        },

        getServerData6(data) {
            //模拟从服务器获取数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let res = {
                    series: [
                        {
                            name: "空载",
                            color: "#fff",
                            data
                        },
                    ],
                };
                this.chartData6 = JSON.parse(JSON.stringify(res));
            },500);
        },

        // 点击顶部tab索引
        sectionChange(e) {
            this.current = e;
            this.handleGetAllLoad()
        },

        // 点击日期选择器的确认键
        handleDateConfirm(val) {
            this.date = val.value[0]
            this.showDatetime = false
			if(this.date < (new Date().getMonth() + 1)) {
				this.nowDay = 30
			}else {
				this.nowDay = new Date().getDate()
			}
			console.log('this.nowDay', this.nowDay)
        },

        //显示日期选择器
        handleShowDatetime() {
            this.showDatetime = true;
        },

        // 关闭日期选择器
        handleDateCancel() {
            console.log('关闭弹窗')
            this.showDatetime = false;
        },

        // 根据data的内容，进入详细信息页面后加载对应的接口
        handleNavigateDetail(e,data) {
            uni.navigateTo({
                url: `./heavyEquipmentList?id=${e}&type=${data}`
            })
        },

        // 获取超重载设备信息
        handleGetAllLoadDeviceInfo(type, date) {
            console.log('获取超重载设备信息');
            let url = this.base_url + `/idata/homePage/getAllLoadDeviceInfo?type=${type}&date=${date}`
            uni.request({
                url,
                method: 'POST',
                success: res => {
                    console.log(res);
                    this.thisyear = res.data.data.thisyear.filter((item, index) => {
                        return index % 2 == 0 
                    })
                    this.yesteryear = res.data.data.yesteryear.filter((item, index) => {
                        return index % 2 == 0 
                    })
                }
            })
        },


        calculate() {
            this.getServerData2(this.opts2.title.name)
            this.getServerData3(this.opts3.title.name)
            this.getServerData4(this.opts4.title.name)
            this.getServerData5(this.opts5.title.name)
            this.getServerData6(this.opts6.title.name)
        },

        // 获取负荷、线路、主变负载率统计信息
        async handleGetAllLoad() {
            console.log('获取负荷、线路、主变负载率统计信息');
            let result = await request({url: '/idata/lm/getAllLoad', method: 'GET'})
            this.totalData = result.data.data
            let aa = this.current == 0 ? 'transform' : this.current == 1 ? 'line' : 'load'
            if(aa == 'transform') {
                this.opts2.title.name = String((result.data.data.transform.over / result.data.data.transform.total).toFixed(2))
                this.opts3.title.name = String((result.data.data.transform.heavy / result.data.data.transform.total).toFixed(2))
                this.opts4.title.name = String((result.data.data.transform.normal / result.data.data.transform.total).toFixed(2))
                this.opts5.title.name = String((result.data.data.transform.under / result.data.data.transform.total).toFixed(2))
                this.opts6.title.name = String((result.data.data.transform.no / result.data.data.transform.total).toFixed(2))
                this.calculate()

            }else if(aa == 'load'){
                this.opts2.title.name = String((result.data.data.load.over / result.data.data.load.total).toFixed(2))
                this.opts3.title.name = String((result.data.data.load.heavy / result.data.data.load.total).toFixed(2))
                this.opts4.title.name = String((result.data.data.load.normal / result.data.data.load.total).toFixed(2))
                this.opts5.title.name = String((result.data.data.load.under / result.data.data.load.total).toFixed(2))
                this.opts6.title.name = String((result.data.data.load.no / result.data.data.load.total).toFixed(2))
                this.calculate()
            }else {
                this.opts2.title.name = String((result.data.data.line.over / result.data.data.line.total).toFixed(2))
                this.opts3.title.name = String((result.data.data.line.heavy / result.data.data.line.total).toFixed(2))
                this.opts4.title.name = String((result.data.data.line.normal / result.data.data.line.total).toFixed(2))
                this.opts5.title.name = String((result.data.data.line.under / result.data.data.line.total).toFixed(2))
                this.opts6.title.name = String((result.data.data.line.no / result.data.data.line.total).toFixed(2))
                this.calculate()
            }
        },

        // 获取当前月份和今天的日期
        getDate() {
            let date = new Date().getMonth() + 1
            let nowDay = new Date().getDate()
            this.date = date
			this.nowDay = nowDay
			for(let i = 1; i <= date; i++) {
				this.columns[0].push(i)
			}
			console.log('columns', this.columns)
        },
    },

    onLoad(option) {
		this.getDate()
        this.getServerData1();
        this.handleGetAllLoadDeviceInfo()
        this.handleGetAllLoad()
    }
};
</script>

<style lang="scss">
page {
    .content {
        padding: 20rpx;

        .fuzailv {
            margin-top: 20rpx;
            font-size: 35rpx;
        }
        .fuzailv_totalNumber {
            color: #aaa;
            text {
                color: #187759;
            }
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

            &_item5 {
                background-color: #99CC00;
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
