<template>
    <view class="content">
        <view class="item" @click="handleJump">
            <view class="item_left">
                <view class="item_left_name">
                    <view class="item_left_name_tag"><u-tag text="危急" type="error"></u-tag></view>
                    <view>设备名称</view>
                </view>
                <view class="item_left_title item_left_total">
                    某线某处侧Xm处存在隐患, 风偏不足,严重缺陷。
                </view>
                <view class="item_left_address item_left_total">
                    <text class="iconfont icon-dizhi"></text> 220kV福盛站
                </view>
                <view class="item_left_message item_left_total">
                    <text>张三&nbsp;发现时间: 2022-06--19 11:06:59</text>
                </view>
            </view>
            <view class="item_right">
                <text>未消缺</text>
            </view>
        </view>
        <view class="item">
            <view class="item_left">
                <view class="item_left_name">
                    <view class="item_left_name_tag"><u-tag text="危急" type="warning"></u-tag></view>
                    <view>设备名称</view>
                </view>
                <view class="item_left_title item_left_total">
                    某线某处侧Xm处存在隐患, 风偏不足,严重缺陷。
                </view>
                <view class="item_left_address item_left_total">
                    <text class="iconfont icon-dizhi"></text> 220kV福盛站
                </view>
                <view class="item_left_message item_left_total">
                    <text>张三&nbsp;发现时间: 2022-06--19 11:06:59</text>
                </view>
            </view>
            <view class="item_right">
                <text>未消缺</text>
            </view>
        </view>
        <view class="item">
            <view class="item_left">
                <view class="item_left_name">
                    <view class="item_left_name_tag"><u-tag text="危急" bgColor="#187759" borderColor="#187759"></u-tag></view>
                    <view>设备名称</view>
                </view>
                <view class="item_left_title item_left_total">
                    某线某处侧Xm处存在隐患, 风偏不足,严重缺陷。
                </view>
                <view class="item_left_address item_left_total">
                    <text class="iconfont icon-dizhi"></text> 220kV福盛站
                </view>
                <view class="item_left_message item_left_total">
                    <text>张三&nbsp;发现时间: 2022-06--19 11:06:59</text>
                </view>
            </view>
            <view class="item_right">
                <text style="color: #187759">已消缺</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        handleJump() {
            uni.navigateTo({
                url: '../flawDesign/flawDesign_detail'
            });
        }
    }
}
</script>

<style lang="scss">
page {
    background-color: #eee;

    .content {
        padding: 20rpx;

        .item {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 0 20rpx;
            margin-bottom: 20rpx;
            border-radius: 10rpx;

            &_left {
                flex: 3;

                &_name {
                    display: flex;
                    align-items: center;
                    &_tag {
                        width: 100rpx;
                        margin-right: 30rpx;
                    }
                   
                }

                &_total {
                    font-size: 25rpx;
                    margin: 5rpx;
                    color: #888;
                }

                &_address {
                    text {
                        color: black;
                    }
                }
            }

            &_right {
                flex: 1;
                text-align: center;
                padding: 40px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                text {
                    display: block;
                    color: red;
                }
            }
        }
    }
}
</style>