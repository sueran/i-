<template>
    <view class="content">
        <view class="headerWrap"></view>
        <view class="wrap">
            <view class="wrap_top wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">缺陷设备</view>
                    <view class="wrap_top_item_value">220kv线路一</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">所属变电站</view>
                    <view class="wrap_top_item_value">220kV福盛站</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">缺陷描述</view>
                    <view class="wrap_top_item_value">某线某处侧Xm出有隐患，严重缺陷。</view>
                </view>
            </view>
            <view class="wrap_middle wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">缺陷状态</view>
                    <view class="wrap_top_item_value">已消缺</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">发现人</view>
                    <view class="wrap_top_item_value">张三</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">发现时间</view>
                    <view class="wrap_top_item_value">2022-06-19 12:00:00</view>
                </view>
            </view>
            <view class="wrap_bottom wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">消缺人</view>
                    <view class="wrap_top_item_value">张三</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">消缺时间</view>
                    <view class="wrap_top_item_value">2022-06-19 12:00:00</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
page {
    background-color: #eee;
    .content {
        position: relative;
        .headerWrap {
            width: 100vw;
            height: 150rpx;
            background-color: #187759;
        }
        .wrap {
            position: absolute;
            width: 94vw;
            height: 300rpx;
            top:50rpx;
            left: 50%;
            transform: translateX(-47vw);
            // padding: 10rpx;
            box-sizing: border-box;
            &_total {
                margin-bottom: 20rpx;
                background-color: white;
                box-sizing: border-box;
                padding: 20rpx;
                .wrap_top_item {
                    display: flex;
                    border-bottom: 2rpx solid #eee;
                    padding: 20rpx 0;
                    &_key {
                        flex: 1;
                    }
                    &_value {
                        flex: 2;
                        margin-left: 40rpx;
                    }
                }
            }
            .wrap_top {
                border-top-left-radius: 10rpx;
                border-top-right-radius: 10rpx;
            }
            .wrap_bottom {
                border-bottom-left-radius: 10rpx;
                border-bottom-right-radius: 10rpx;
            }
        }
    }
}
</style>