<template>
   <view class="content">
    <view class="button">111 </view>
   </view>
</template>

<script>
export default {
    onLoad() {
        setTimeout(function(){
            plus.screen.lockOrientation('landscape-primary');
        },10)
    },
    onUnload(e) {
        // plus.screen.unlockOrientation(); //解除屏幕方向的锁定，但是不一定是竖屏；
        uni.redirectTo({
            url: './stationIndexes'
        });
        plus.screen.lockOrientation('portrait'); //锁死屏幕方向为竖屏
        return true;
        },
}
</script>

<style lang="scss">
page {
    .content {
        .botton {
            width: 50%;
            height: 90rpx;
            background-color: burlywood;
        }
    }
}
</style>