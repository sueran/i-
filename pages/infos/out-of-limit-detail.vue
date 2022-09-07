<template>
    <view class="content">
		<view class="headerWrap"></view>
        <view class="wrap">
            <view class="wrap_top wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">变电站</view>
                    <view class="wrap_top_item_value">220kv新一代测试站</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">设备</view>
                    <view class="wrap_top_item_value">220kv线路1</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">测点</view>
                    <view class="wrap_top_item_value">Ua</view>
                </view>
            </view>
            <view class="wrap_middle wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">当前值</view>
                    <view class="wrap_top_item_value">219</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">合理范围</view>
                    <view class="wrap_top_item_value">110.0-118.0</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">单位</view>
                    <view class="wrap_top_item_value">千伏</view>
                </view>
            </view>
            <view class="wrap_bottom wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">越限状态</view>
                    <view class="wrap_top_item_value">越上限</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">越限率</view>
                    <view class="wrap_top_item_value">90%</view>
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
		.headerWrap {
			width: 100vw;
			height: 100rpx;
			background-color: #187759;
		}

        .wrap {
            position: absolute;
            width: 94vw;
            height: 300rpx;
            top:50rpx;
            left: 50%;
            transform: translateX(-47vw);
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