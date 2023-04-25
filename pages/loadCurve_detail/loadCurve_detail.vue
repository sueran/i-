<template>
    <view>
        <view class="content">
            <view class="headerBackground"></view>
            <view class="wrap">
                <view class="wrap_total">
                    <view class="wrap_total_number">1156.9</view>
                    <view class="wrap_total_name">东坡区负荷</view>
                </view>
                <view class="wrap_list">
                    <view class="wrap_list_item" v-for="(item,index) in listData" :key="index">
                        <view class="wrap_list_item_number" :style="{color: item.number > 0 ? '#e99d42' : '#4095e5'}">{{item.number}}</view>
                        <view class="wrap_list_item_name">{{item.name}}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            listData:[
                {
                    name: '镇江祖镇一线',
                    number: 631.00
                },
                {
                    name: '镇江祖镇二线',
                    number: 631.00
                },
                {
                    name: '镇江祖镇三线',
                    number: 631.00
                },
                {
                    name: '镇江祖镇四线',
                    number: 631.01
                },
                {
                    name: '镇江祖镇五线',
                    number: 631.00
                },
                {
                    name: '镇江祖镇六线',
                    number: -631.00
                },
                {
                    name: '镇江祖镇七线',
                    number: -631.00
                },
            ],

            areaId: ''
        }
    },

    getInfo(areaId) {
        let url = this.base_url + `/idata/homePage/getAreaLineLoadInfo?areaId=${areaId}`
        uni.request({
            url,
            method: 'POST',
            success: res => {
                console.log(res);
            }
        })
    },

    onLoad(option) {
        console.log('option', option);
        this.areaId = option.areaId
    }
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
                width: 94vw;
                background-color: white;
                position: absolute;
                top: 50rpx;
                left: 50%;
                transform: translateX(-47vw);
                border-radius: 20rpx;
                padding-bottom: 40rpx;
                &_total {
                    text-align: center;
                    width: 90%;
                    margin: 0 auto;
                    padding: 20rpx 0;
                    &_number {
                        border-bottom: 2rpx solid #ccc;
                        padding: 10rpx 0;
                        font-size: 40rpx;
                        font-weight: bold;
                        color: $uni-bg-color-global;
                    }
                    &_name {
                        padding: 10rpx 0;
                    }
                }
                &_list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    &:after{
                        content: '';
                        width: 45%;
                        border:1px solid transparent;
                    }
                    &_item {
                        width: 45%;
                        height: 120rpx;
                        background-color: #eee;
                        margin-bottom: 20rpx;
                        text-align: center;
                        
                        &_number {
                            line-height: 60rpx;
                            color: #e9a756;
                        }
                        &_name {
                            line-height: 60rpx;
                        }
                    }
                }
            }
        }
    }
</style>