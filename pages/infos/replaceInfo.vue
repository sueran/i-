<template>
	<view>
		<view class="top-wrap">
			<view class="input-wrap" slot="default">
				<u-icon name="search" color="#9A9A9A" size="28"></u-icon>
				<input class="uni-input" placeholder-style="color:#999;" placeholder="请输入搜索关键词" />
			</view>
			<view class="btn-wrap">
				<view class="filter-btn" @click="open(index)" v-for="(item, index) in filterBtns">
					<text :class="{active: item.selected || item.popShow}">{{item.name}}</text>
					<u-icon name="arrow-down-fill" size="10" v-if="!item.popShow && !item.selected"></u-icon>
					<u-icon name="arrow-up-fill" size="10" v-if="item.popShow" color="#187759"></u-icon>
					<u-icon name="arrow-down-fill" size="10" v-if="!item.popShow && item.selected"
						color="#187759"></u-icon>
					<view class="popup" :class="{closed: !item.popShow}">
						<view v-for="(iitem, i) in item.list">
							<view class="pop-item" :class="{active: iitem.title==item.name || iitem.value==item.name}"
								@click.stop="select(index, i)">{{iitem.title}}</view>
						</view>
					</view>
					<view class="overlay" :class="{closed: !item.popShow}"></view>
					
				</view>
			</view>
		</view>
		<u-list class="list-wrap">
			<u-list-item v-for="(item, index) in indexList" :key="index" class="list-item">
				<u-cell value="详情" center :isLink="true" rightIconStyle="color: #4B9E6A" :border="false"  @click="handleNavigate">
					<view slot="title" class="item-title">{{item.title}}</view>
					<view slot="label" class="u-slot-value">
						<view class="item-content">{{item.content}}</view>
						<view class="item-info">{{item.info}}</view>
						<view class="item-date">{{item.date}}</view>
					</view>
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				filterBtns: [{
						name: '被替代变电站',
						selected: false,
						popShow: false,
						list: [{
							title: '全部',
							value: '被替代变电站'
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
						name: '被替代设备',
						selected: false,
						popShow: false,
						list: [{
							title: '全部',
							value: '被替代设备'
						}, {
							title: '被替代设备1'
						}, {
							title: '被替代设备2'
						}, {
							title: '被替代设备3'
						}, {
							title: '被替代设备4'
						}]

					},
					{
						name: '替代变电站',
						selected: false,
						popShow: false,
						list: [{
							title: '全部',
							value: '替代变电站'
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
						name: '替代设备',
						selected: false,
						popShow: false,
						list: [{
							title: '全部',
							value: '替代设备'
						}, {
							title: '替代设备1'
						}, {
							title: '替代设备2'
						}, {
							title: '替代设备3'
						}, {
							title: '替代设备4'
						}]

					}
				],
				indexList: [{
						title: '被替代变电站：110kV仁寿变电站',
						content: '被替代点：110KV备用线173无功值',
						info: '替代点：110KV保红线AB电压',
						date: '记录时间：2022-01-09 07:22:33'
					},
					{
						title: '被替代变电站：110kV仁寿变电站',
						content: '被替代点：110KV备用线173无功值',
						info: '替代点：110KV保红线AB电压',
						date: '记录时间：2022-01-09 07:22:33'
					},
					{
						title: '被替代变电站：110kV仁寿变电站',
						content: '被替代点：110KV备用线173无功值',
						info: '替代点：110KV保红线AB电压',
						date: '记录时间：2022-01-09 07:22:33'
					},
					{
						title: '被替代变电站：110kV仁寿变电站',
						content: '被替代点：110KV备用线173无功值',
						info: '替代点：110KV保红线AB电压',
						date: '记录时间：2022-01-09 07:22:33'
					}, {
						title: '被替代变电站：110kV仁寿变电站',
						content: '被替代点：110KV备用线173无功值',
						info: '替代点：110KV保红线AB电压',
						date: '记录时间：2022-01-09 07:22:33'
					}
				],

			}
		},
		onLoad() {

		},
		methods: {
			handleNavigate() {
				uni.navigateTo({
					url: './replaceInfoDetail'
				})
			},

			open(i){
				this.filterBtns.forEach((item, index)=>{
					if(index !=i)
					{
						this.$set(this.filterBtns[index], "popShow", false);
					}
				})
				this.$set(this.filterBtns[i], "popShow", !this.filterBtns[i].popShow);
				console.log(2)
			},
			select(btni, i){
				if(i==0){
					this.$set(this.filterBtns[btni], "name", this.filterBtns[btni].list[i].value);
					this.$set(this.filterBtns[btni], "selected", false);
				}else{
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
		height: 140rpx;
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

	.btn-wrap {
		margin: 20rpx 0;
		display: flex;

		.filter-btn {
			display: flex;
			font-size: 26rpx;
			flex: 1;
			justify-content: flex-end;
			overflow: hidden;

			text.active {
				color: #187759;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			&:first-child {
				justify-content: flex-start;
			}
		}
	}

	.popup {
		position: absolute;
		top: 180rpx;
		left: 0;
		right: 0;
		height: 300rpx;
		padding: 0 20rpx;
		overflow-y: hidden;
		background-color: #ffffff;
		z-index: 100006;
		transition: all .2s;

		&.closed {
			height: 0;
		}

		.pop-item {
			padding: 10rpx 0;
			font-size: 26rpx;

			&.active {
				color: #187759;
			}
		}
	}

	.overlay {
		display: block;
		position: absolute;
		top: 180rpx;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(16, 16, 16, .4);
		z-index: 10000;
		transition: all .2s;

		&.closed {
			display: none;
		}
	}

	// .list-wrap{
	// 	height: calc(100% - 180rpx);
	// }

	.list-item {
		margin: 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: -2rpx -2rpx 6rpx 2rpx rgba(79, 79, 79, 0.1);

		.item-title {
			padding-bottom: 6rpx;
			font-size: 28rpx;
			color: #101010;
		}

		.item-content {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #4F4F4F;
		}

		.item-info {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #BD3124;
		}

		.item-date {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #101010;
		}

	}
</style>
