<template>
   <view class="content">
    <!-- <view class="button">
        
    </view> -->
        <movable-area scale-area>
            <movable-view scale direction="all">
                <image src="/static/images/index-img.png" mode="widthFix"/>
            </movable-view>
        </movable-area>
   </view>
</template>

<script>
export default {
    // onLoad() {
    //     setTimeout(function(){
    //         plus.screen.lockOrientation('landscape-primary');
    //     },10)
    // },
    // onShow() {
    //     plus.navigator.setFullscreen(true);//隐藏手机顶部状态栏
    // },
    // onUnload(e) {
    //     plus.screen.unlockOrientation(); //解除屏幕方向的锁定，但是不一定是竖屏；
    //     uni.redirectTo({
    //         url: './stationIndexes'
    //     });
    //     plus.screen.lockOrientation('portrait'); //锁死屏幕方向为竖屏
    //     return true;
    // },
}
</script>

<style lang="scss">
page {
    .content {
        // .botton {
        //     width: 100%;
        //     height: 100vw;
        //     // background-color: burlywood;
        //     img {
        //         width: 100vw;
        //         // height: 100%;
        //     }
        // }

        .movable-area {

        }
    }
}
</style>