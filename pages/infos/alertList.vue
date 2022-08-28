<template>
	<view>
		<view class="top-wrap">
			<view class="input-wrap" slot="default">
				<u-icon name="search" color="#9A9A9A" size="28"></u-icon>
				<input class="uni-input" placeholder-style="color:#999;" placeholder="请输入搜索关键词" />
			</view>
		</view>
		<view class="list-wrap">
			<view v-for="(item, index) in indexList" :key="index" class="list-item">
				<view class="item-left">
					<view class="item-title">{{item.title}}</view>
					<view class="item-content">{{item.content}}</view>
				</view>
				<image :src="item.src"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				filterBtns: [{
						name: '厂站名称',
						selected: false,
						popShow: false,
						list: [{
							title: '全部',
							value: '厂站名称'
						}, {
							title: '110kV仁寿变电站'
						}, {
							title: '110kV仁寿变电站1'
						}, {
							title: '110kV仁寿变电站2'
						}, {
							title: '110kV仁寿变电站3'
						}]
					},
					{
						name: '间隔名称',
						selected: false,
						popShow: false,
						list: [{
							title: '全部',
							value: '间隔名称'
						}, {
							title: '间隔1'
						}, {
							title: '间隔2'
						}, {
							title: '间隔3'
						}, {
							title: '间隔4'
						}]

					},
					{
						name: '操作员',
						selected: false,
						popShow: false,
						list: [{
							title: '全部',
							value: '操作员'
						}, {
							title: '操作员'
						}, {
							title: '操作员1'
						}, {
							title: '操作员2'
						}, {
							title: '操作员3'
						}]
					}
				],
				indexList: [{
						title: '仁寿变电站',
						content: '110KV',
						info: '5',
						src: '/static/images/numbers/5.svg'
					},
					{
						title: '仁寿变电站',
						content: '110KV',
						info: '5',
						src: '/static/images/numbers/5.svg'
					},
					{
						title: '仁寿变电站',
						content: '110KV',
						info: '0',
						src: '/static/images/numbers/0.svg'
					},
					{
						title: '仁寿变电站',
						content: '220KV',
						info: '0',
						src: '/static/images/numbers/0.svg'
					}, {
						title: '仁寿变电站',
						content: '110KV',
						info: '0',
						src: '/static/images/numbers/0.svg'
					},
					{
						title: '仁寿变电站',
						content: '220KV',
						info: '0',
						src: '/static/images/numbers/0.svg'
					}, {
						title: '仁寿变电站',
						content: '110KV',
						info: '0',
						src: '/static/images/numbers/0.svg'
					},
					{
						title: '仁寿变电站',
						content: '220KV',
						info: '0',
						src: '/static/images/numbers/0.svg'
					}, {
						title: '仁寿变电站',
						content: '110KV',
						info: '0',
						src: '/static/images/numbers/0.svg'
					}
				],

			}
		},
		onLoad() {

		},
		methods: {
			open(i) {
				this.filterBtns.forEach((item, index) => {
					if (index != i) {
						this.$set(this.filterBtns[index], "popShow", false);
					}
				})
				this.$set(this.filterBtns[i], "popShow", !this.filterBtns[i].popShow);
				console.log(2)
			},
			select(btni, i) {
				if (i == 0) {
					this.$set(this.filterBtns[btni], "name", this.filterBtns[btni].list[i].value);
					this.$set(this.filterBtns[btni], "selected", false);
				} else {
					this.$set(this.filterBtns[btni], "name", this.filterBtns[btni].list[i].title);
					this.$set(this.filterBtns[btni], "selected", true);
				}
				this.$set(this.filterBtns[btni], "popShow", !this.filterBtns[btni].popShow);
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F2F7;
		// height: 100%;
		// overflow-y: hidden;
	}

	.top-wrap {
		padding: 20rpx;
		height: 80rpx;
		background-color: #ffffff;
	}

	.input-wrap {
		width: 96%;
		padding-left: 10rpx;
		background: #f7f7f7;
		display: flex;
		align-items: center;
		height: 80rpx;
		border-radius: 100rpx;
	}
	.list-wrap {
		display: flex;
		flex-wrap: wrap;
		margin: 10rpx;
	}

	.list-item {
		width: calc(50% - 20rpx);
		height: 180rpx;
		margin: 10rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.item-left {
			padding: 32rpx 14rpx;

			.item-title {
				font-size: 32rpx;
				color: #101010;
			}

			.item-content {
				margin-top: 40rpx;
				font-size: 28rpx;
				color: #187759;
			}
		}

		image {
			width: 128rpx;
			height: 128rpx;
		}

	}
</style>
