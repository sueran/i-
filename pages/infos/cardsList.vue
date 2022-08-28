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
					<u-icon name="arrow-down-fill" size="10" v-if="!item.popShow && item.selected" color="#187759">
					</u-icon>
					<view class="popup" :class="{closed: !item.popShow}">
						<view v-for="(iitem, i) in item.list">
							<view class="pop-item" :class="{active: iitem.title==item.name || iitem.value==item.name}"
								@click.stop="select(index, i)">{{iitem.title}}</view>
						</view>
					</view>
					<view class="overlay" :class="{closed: !item.popShow}"></view>
				</view>
				<view class="btn-right">
					<u-icon name="grid" color="#4f4f4f" size="28" @click="isList=!isList"></u-icon>
					<u-line direction="col" length="40rpx" color="#bbbbbb"></u-line>
					<u-icon name="/static/images/icons/filter.svg" label="筛选"></u-icon>
					 <!-- @click="filterShow = true" -->
				</view>
			</view>

		</view>
		<view class="card-wrap" v-if="!isList">
			<view v-for="(item, index) in indexList" :key="index" class="card-item">
				<view class="item-left">
					<view class="item-title">{{item.title}}</view>
					<view class="item-content">{{item.content}}</view>
				</view>
				<image :src="item.src"></image>
			</view>
		</view>
		<u-list class="list-wrap" v-if="isList">
			<u-list-item v-for="(item, index) in indexList" :key="index" class="list-item">
				<u-cell value="详情" center rightIconStyle="color: #4B9E6A" :border="false">
					<view slot="title" class="item-title">[挂牌对象类型] {{item.device}}</view>
					<view slot="label" class="u-slot-value">
						<view class="item-content">间隔名称：{{item.jiange}}</view>
						<u-icon name="map" color="#333" size="14" :label="item.content+item.title" labelSize="24rpx" labelColor="#333"></u-icon>
						<view class="item-date">{{item.founder}} {{item.date}}</view>
					</view>
					<view slot="value">
						<u-icon v-if="item.name=='警告牌'" name="warning-fill" color="#FFB800" size="40" :label="item.name" labelPos="bottom" labelSize="20rpx" labelColor="#6c6c6c"></u-icon>
						<u-icon v-if="item.name=='维修牌'" name="/static/images/icons/repair.png" color="#2979ff" size="40" :label="item.name" labelPos="bottom" labelSize="20rpx" labelColor="#6c6c6c"></u-icon>
					</view>
				</u-cell>
			</u-list-item>
		</u-list>
		<u-popup :show="filterShow" :round="15" class="bottomPop" customStyle="padding:30rpx">
			<view>
				<view class="title">全部筛选条件</view>
				<view class="item-title">挂牌对象类型</view>
				    <checkbox-group>
						
						<label v-for="item in checkboxList" :key="item.value">
							<view>
								<checkbox :value="item.value" :checked="item.checked" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</checkbox-group>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isList: true,
				filterShow: false,
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
							title: '操作员name'
						}, {
							title: '操作员1'
						}, {
							title: '操作员2'
						}, {
							title: '操作员3'
						}, {
							title: '操作员4'
						}, {
							title: '操作员5'
						}]
					}
				],
				indexList: [{
						title: '仁寿变电站',
						content: '110KV',
						name: '维修牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 5,
						src: '/static/images/numbers/5.svg'
					},
					{
						title: '仁寿变电站',
						content: '110KV',
						name: '维修牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 5,
						src: '/static/images/numbers/5.svg'
					},
					{
						title: '仁寿变电站',
						content: '110KV',
						name: '警告牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						info: 0,
						src: '/static/images/numbers/0.svg'
					},
					{
						title: '仁寿变电站',
						content: '220KV',
						name: '维修牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 0,
						src: '/static/images/numbers/0.svg'
					}, {
						title: '仁寿变电站',
						content: '110KV',
						name: '维修牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 0,
						src: '/static/images/numbers/0.svg'
					},
					{
						title: '仁寿变电站',
						content: '220KV',
						name: '维修牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 0,
						src: '/static/images/numbers/0.svg'
					}, {
						title: '仁寿变电站',
						content: '110KV',
						name: '警告牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 0,
						src: '/static/images/numbers/0.svg'
					},
					{
						title: '仁寿变电站',
						content: '220KV',
						name: '维修牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 0,
						src: '/static/images/numbers/0.svg'
					}, {
						title: '仁寿变电站',
						content: '110KV',
						name: '维修牌',
						device: '911三相断路器',
						jiange: '祖福一线',
						founder: 'diankong1',
						date: '2022-06-19 11:06:19',
						num: 0,
						src: '/static/images/numbers/0.svg'
					}
				],
				checkboxList: [{
                    name: '全部',
                    value: ''
                },{
                    name: '事件类型1',
                    value: ''
                },{
                    name: '事件类型2',
                    value: ''
				},{
				    name: '事件类型3',
				    value: ''
				},{
				    name: '事件类型4',
				    value: ''
				}],
				checkboxValue: []
			}
		},
		computed: {
			numSrc() {
				return '/static/images/numbers/'+this.info+'.svg'
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
		align-items: center;

		.filter-btn {
			display: flex;
			align-items: baseline;
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

		.btn-right {
			display: flex;
			width: 160rpx;
			margin-left: 40rpx;
			justify-content: space-around;
		}
	}

	.popup {
		position: absolute;
		top: 180rpx;
		left: 0;
		right: 0;
		max-height: 300rpx;
		padding: 0 20rpx;
		overflow-y: hidden;
		background-color: #ffffff;
		z-index: 100006;
		transition: all .2s;
		overflow-y: scroll;

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

	.card-wrap {
		display: flex;
		flex-wrap: wrap;
		margin: 10rpx;
	}

	.card-item {
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
	
	.list-item {
		margin: 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: -2rpx -2rpx 6rpx 2rpx rgba(79, 79, 79, 0.1);
		padding-right: 30rpx;
	
		.item-title {
			padding-bottom: 6rpx;
			font-size: 32rpx;
			color: #101010;
		}
	
		.item-content {
			padding: 6rpx 0;
			font-size: 28rpx;
			color: #333333;
			margin-bottom: 30rpx;
		}
	
	
		.item-date {
			padding: 6rpx 0;
			font-size: 24rpx;
			color: #9a9a9a;
		}
	
	}
	.bottomPop{
		
		.title{
			font-size: 32rpx;
			line-height: 46rpx;
		}
		
		.item-title{
			margin-top: 20rpx;
			font-size: 28rpx;
			color: #4f4f4f;
		}
	}
</style>
