<template>
    <view class="content">
		<view class="headerWrap"></view>
        <view class="wrap">
            <view class="wrap_top wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">所属变电站</view>
                    <view class="wrap_top_item_value">{{item.stationName}}</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">告警名称</view>
                    <view class="wrap_top_item_value">{{item.alarmName}}</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">设备分类</view>
                    <view class="wrap_top_item_value">{{item.equipClass}}</view>
                </view>
            </view>
            <view class="wrap_middle wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">告警级别</view>
                    <view class="wrap_top_item_value">{{item.alarmLevel}}</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">告警描述</view>
                    <view class="wrap_top_item_value">{{item.alarmDesc}}</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">告警对象</view>
                    <view class="wrap_top_item_value">{{item.objDesc}}</view>
                </view>
            </view>
            <view class="wrap_bottom wrap_total">
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">告警站点</view>
                    <view class="wrap_top_item_value">42</view>
                </view>
                <view class="wrap_top_item">
                    <view class="wrap_top_item_key">所属间隔</view>
                    <view class="wrap_top_item_value">{{item.bayName}}</view>
                </view>
				<view class="wrap_top_item">
				    <view class="wrap_top_item_key">告警时间</view>
				    <view class="wrap_top_item_value">{{item.alarmTime}}</view>
				</view>
            </view>
        </view>
	</view>
</template>

<script>
export default {
	data(){
		return{
			item:'',
		}
	},
	onLoad(e) {
		this.item=JSON.parse(e.item)
	}
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