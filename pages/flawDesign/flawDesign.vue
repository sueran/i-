<template>
    <view class="content">
        <view class="headerBackground"></view>
        <view class="wrap">
            <view class="charts-box">
                <qiun-data-charts 
					type="ring" 
					:opts="opts" 
					:chartData="chartData"
					@getIndex="handleTap"/>
            </view>
            <u-cell-group>
		        <u-cell title="未消缺" @click="handleJump"><text slot='value'>{{unDealTotal}}</text></u-cell>
	        </u-cell-group>
            <u-cell-group>
		        <u-cell title="本周新增"><text slot='value'>{{week.add}}</text></u-cell>
                <u-cell title="本周消缺"><text slot='value'>{{week.deal}}</text></u-cell>
	        </u-cell-group>
            <u-cell-group>
		        <u-cell title="本月新增"><text slot='value'>{{month.deal}}</text></u-cell>
                <u-cell title="本月消缺"><text slot='value'>{{month.deal}}</text></u-cell>
	        </u-cell-group>
        </view>
    </view>
</template>

<script>
import { request } from "../request/request"
export default {
    data() {
        return {
            chartData: {},
			total: 0,			// 缺陷总数
			unDealTotal: 0,		// 当前未消缺总数
			week: {},			// 本周数据
			month: {},			// 本月数据
            opts: {
                rotate: false,
                rotateLock: false,
                color: ["#187759", "#f9ae3d", "#f56c6c"],
                padding: [5, 5, 5, 5],

                dataLabel: true,
                legend: {
                    show: true,
                    position: "right",
                    lineHeight: 25
                },
                title: {
                    name: "",
                    fontSize: 0,
                    color: "#666666"
                },
                subtitle: {
                    name: "",
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
		
		handleTap(e) {
			console.log('e', e.currentIndex)
			if(e.currentIndex === 0) {
				this.handleJump('一般')
			}else if(e.currentIndex === 1) {
				this.handleJump('危急')
			}else {
				this.handleJump('严重')
			}
		},
		
        handleJump(type) {
            uni.navigateTo({
                url: `../flawDesign/flawDesign_list?level=${type}`
            })
        },

        // 根据获取缺陷设计列表
        handleGetDefect() {
			let url = this.base_url + '/idata/homePage/getDefectStatistics'
			uni.request({
				url,
				method: 'POST',
				success: res => {
					this.total = res.data.data.total
					this.unDealTotal = res.data.data.unDealTotal
					this.week = res.data.data.week
					this.month = res.data.data.month
					
					let result = {
					    series: [
					        {
					            data: [
					                { "name": "一般", "value": res.data.data.defect.general },
					                { "name": "危急", "value": res.data.data.defect.crisis }, 
					                { "name": "严重", "value": res.data.data.defect.series }
					            ]
					        }
					    ]
					};
					this.chartData = JSON.parse(JSON.stringify(result));
				}
			})
        }
		
		// 根据缺陷程度获取列表
		// handleGetDefectList(type) {
		// 	let url = this.base_url + `/idata/homePage/getDefectList?defectType&defectLevel=${type}&page=1&limit=6000`
			
		// }
    },

    onReady() {
        this.handleGetDefect()
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