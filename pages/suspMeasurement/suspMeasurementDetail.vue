<template>
    <view class="content">
		<view class="headerWrap"></view>
        <view class="wrap">
            <view class="wrap_top wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">变电站</view>
                    <view class="wrap_top_item_value">35kv扬场变电站</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">设备类型</view>
                    <view class="wrap_top_item_value">交流线端</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">设备</view>
                    <view class="wrap_top_item_value">541交流线端</view>
                </view>
            </view>
            <view class="wrap_middle wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">测点类型</view>
                    <view class="wrap_top_item_value">遥测</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">量测点</view>
                    <view class="wrap_top_item_value">何杨线拓扑电压</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">发生时间</view>
                    <view class="wrap_top_item_value">2022-09-04 12:00:00</view>
                </view>
            </view>
            <view class="wrap_bottom wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">可疑原因</view>
                    <view class="wrap_top_item_value">正常</view>
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