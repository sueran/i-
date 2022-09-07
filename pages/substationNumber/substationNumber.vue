<template>
    <view class="content">
        <view class="headerWrap">
            <u-subsection :list="list" :current="current" @change="sectionChange" activeColor="#187759"></u-subsection>
        </view>
        <template v-if="current == 0">
            <view class="wrap">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/abnormal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行异常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
            </view>
        </template>
        <template v-if="current == 1">
            <view class="wrap">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/abnormal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行异常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
            </view>
        </template>
        <template v-if="current == 2">
            <view class="wrap">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/abnormal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行异常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
            </view>
        </template>
        <template v-if="current == 3">
            <view class="wrap">
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/abnormal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行异常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
                <view class="item">
                    <view class="item_left">
                        <view class="item_left_name item_left_total">220kV变电站</view>
                        <view class="item_left_time item_left_total">投运时间: 2022年8月10日</view>
                        <view class="item_left_tel item_left_total">联系电话: <text>(0833)622614</text></view>
                    </view>
                    <view class="item_right">
                        <image src="../../static/images/NumberOfSubstations/normal.png" mode="widthFix"></image>
                        <view class="item_right_status">运行正常</view>
                    </view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: ['全部', '220kV变电站', '110kV变电站', '35kV变电站'],
            current: 0
        }
    },

    methods: {
        sectionChange(e) {
            this.current = e
        }
    },

    onLoad: function (option) {
        // 根据主页变电站数量的id显示不同的tab标签页
        this.current = option.id
	}
}
</script>

<style lang="scss">
page {
    background-color: #eee;

    .content {
        .wrap {
            box-sizing: border-box;
            padding: 0 20rpx;
            background-color: white;
            padding: 20rpx 0;

            .item {
                display: flex;
                box-sizing: border-box;
                margin: 0 20rpx;
                border-bottom: #ccc 2rpx solid;

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

                    image {
                        width: 60%;
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