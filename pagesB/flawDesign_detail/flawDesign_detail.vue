<template>
    <view class="content">
        <view class="item">
            <view class="item_left">
                <view class="item_left_name">
                    <u-tag text="危急" size="mini" type="error"></u-tag>
                    <text>设备名称</text>
                </view>
                <view class="item_left_title">
                    某线某处侧Xm处存在隐患, 风偏不足,严重缺陷
                </view>
                <view class="item_left_address">
                    220kV福盛站
                </view>
                <view class="item_left_message">
                    <text>张三&nbsp;发现时间: 2022-06--19  11:06:59</text>
                </view>
            </view>
            <view class="item_right">
                未消缺
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

    }
}
</script>

<style lang="scss">
page {
    background-color: #eee;
    .content {
        .item {
            display: flex;
            &_left {
                flex: 2;
                .u-tag {
                    width: 50rpx;
                }
            }
            &_right {
                flex: 1;
            }
        }
    }
}
</style>