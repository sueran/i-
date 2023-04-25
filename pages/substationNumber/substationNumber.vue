<template>
    <view class="content">
        <view class="headerWrap">
            <u-subsection :list="list" :current="current" @change="sectionChange" activeColor="#187759"></u-subsection>
        </view>
        <template v-if="current == 0">
            <view class="wrap">
                <view class="item" v-for="item in data" :key="item.id">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">{{ item.staName }}</view>
                        <view class="item_left_time item_left_total">投运时间: {{ item.rundate }}</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>{{ item.phone }}</text></view>
                    </view>
                    <!-- <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/abnormal.png" mode="widthFix"></image>
                        <view class="item_right_status">异常</view>
                    </view> -->
                </view>
            </view>
        </template>
        <template v-if="current == 1">
            <view class="wrap">
                <view class="item" v-for="item in data" :key="item.id">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">{{ item.staName }}</view>
                        <view class="item_left_time item_left_total">投运时间: {{ item.rundate }}</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>{{ item.phone }}</text></view>
                    </view>
                    <!-- <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/abnormal.png" mode="widthFix"></image>
                        <view class="item_right_status">异常</view>
                    </view> -->
                </view>
            </view>
        </template>
        <template v-if="current == 2">
            <view class="wrap">
                <view class="item" v-for="item in data" :key="item.id">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">{{ item.staName }}</view>
                        <view class="item_left_time item_left_total">投运时间: {{ item.rundate }}</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>{{ item.phone }}</text></view>
                    </view>
                    <!-- <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/abnormal.png" mode="widthFix"></image>
                        <view class="item_right_status">异常</view>
                    </view> -->
                </view>
            </view>
        </template>
    </view>
</template>

<script>
import { request } from 'http'

export default {
    data() {
        return {
            list: ['220kV变电站', '110kV变电站', '35kV变电站'],
            current: 0,
            data: [],       // 根据type和level字段返回的数据
			level: '',      // 变电站等级(220Kv, 110Kv, 35Kv)
            type: '',       // 变电站类型(全部，异常)
			currentIndex: {
				'220kV': 0,
				'110kV': 1,
				'35kV': 2
			},
			
        }
    },

    methods: {
        sectionChange(e) {
			console.log('e', e)
			this.current = e
			this.level = e === 0 ? '220Kv' : e===1 ? '110Kv' : '35Kv'
			this.handleWorkConditionList(this.level, this.type)
           
        },

        // 根据条件获取变电站列表
        handleWorkConditionList(level, type) {
			console.log('this.type', this.type)
			console.log('this.level', this.level)
			let url = this.base_url + `/idata/homePage/getStationList?type=${type}&level=${level}&page=1&limit=10000`
			uni.request({
				url,
				method: 'POST',
				success: res => {
					console.log(res.data.data)
					this.data = res.data.data
                    console.log('this.data', this.data);
				}
			})
        },
        handleWorkConditionList110() {
            let url = this.base_url + '/idata/homePage/getStationList110'
            uni.request({
                url,
                method: 'POST',
                success: res => {
                    console.log('110Kv', res);
                }
            })
        }
    },

    onLoad: function (option) {
        // 根据主页变电站数量的id显示不同的tab标签页
        // this.current = option.id
		this.type = option.type
		this.level = option.level
		this.current = this.currentIndex[option.level]

        // 页面第一次进入时获取数据
        this.handleWorkConditionList(this.level, this.type)

        this.handleWorkConditionList110()
	}
}
</script>

<style lang="scss">
page {
    background-color: #eee;

    .content {
        .wrap {
            box-sizing: border-box;
            padding: 0 10rpx;

            .item {
                display: flex;
                background-color: white;
                margin-bottom: 10rpx;
                padding: 10rpx;
                border-radius: 10rpx;

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
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    image {
                        width: 45%;
                        height: auto;
                    }

                    &_status {
                        font-size: 25rpx;
                    }
                }
            }
        }
    }
}
</style>