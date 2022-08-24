<template>
    <view class="content">
        <view class="wrap">
            <u-collapse @change="change" @close="close" @open="open">
                <u-collapse-item title="文档指南" name="Docs guide">
                    <!-- <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text> -->
                    <view class="item"></view>
                </u-collapse-item>
                <u-collapse-item title="组件全面" name="Variety components">
                    <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
                </u-collapse-item>
                <u-collapse-item title="众多利器" name="Numerous tools">
                    <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
                </u-collapse-item>
            </u-collapse>
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
        change(e) {
            console.log("change",e);
        },
        close(e) {
            console.log("close",e);
        },
        open(e) {
            console.log("open",e);
        },
    }
}
</script>

<style lang="scss">
page {
    background-color: #eee;
    .content {
        .wrap {
            .u-collapse {
                margin: 20rpx;
                background-color: #eee;
                .u-collapse-item {
                    margin-bottom: 10rpx;
                    background-color: white;
                    .item {
                        width: 100%;
                        height: 200rpx;
                        background-color: aqua;
                    }
                }
            }

        }
    }
}
</style>