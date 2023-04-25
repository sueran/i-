<template>
	<view>
			<web-view src="http://200.200.200.21:8989/CanvasTest/page/common_websocket.html?key=xml/pages/%E7%B3%BB%E7%BB%9F%E7%9B%91%E8%A7%86/%E5%8E%82%E7%AB%99%E7%B4%A2%E5%BC%95.xml"></web-view>
		</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			filterBtns: [{
				name: '电压等级',
				selected: false,
				popShow: false,
				list: [{
					title: '全部',
					value: '电压等级'
				}, {
					title: '电压等级1'
				}, {
					title: '电压等级2'
				}, {
					title: '电压等级3'
				}, {
					title: '电压等级4'
				}]
			},
			{
				name: '运维班',
				selected: false,
				popShow: false,
				list: [{
					title: '全部',
					value: '运维班'
				}, {
					title: '运维班1'
				}, {
					title: '运维班2'
				}, {
					title: '运维班3'
				}, {
					title: '运维班4'
				}]

			},
			{
				name: '区域',
				selected: false,
				popShow: false,
				list: [{
					title: '全部',
					value: '区域'
				}, {
					title: '区域1'
				}, {
					title: '区域2'
				}, {
					title: '区域3'
				}, {
					title: '区域4'
				}]

			}
			],
			columns: [
				['options1', 'options2', 'options3', 'options4'],
			]
		}
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
		},

		handleClose() {
			console.log("111")
			this.show = false
		},
		hancleConfirm(arry) {
			console.log(arry)
			this.show = false
			console.log(arry.value[0])
		},
		// 跳转到图界面
		handleImage() {
			uni.navigateTo({
				url: '../stationIndexes/stationIndexesImage'
			})
		}
	},
	mounted: function() {
	    console.log('App Launch');
		plus.screen.lockOrientation('landscape-primary'); //锁定
	},
	        
	    
	
}
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/c/font_3612023_xx58jimtxj.css");

.searchOptions {
	padding: 10rpx 20rpx;
}

.searchOptions>view {
	display: flex;
	line-height: 50rpx;

}

.sort {
	color: #187759;
	font-size: 26rpx;
}

.contentContainer {
	background-color: #f7f8f8;
	padding: 10rpx 0;
}

.listContainer {
	background-color: white;
	border-radius: 8rpx;
}

.itemContainer {
	padding: 0 20rpx;

}

.headerContainer {
	line-height: 80rpx;
}

.titleStyle {
	font-size: 30rpx;
	margin-left: 22rpx;
	line-height: 80rpx;
}

.fontStyle {
	color: #9A9A9A;
	font-size: 20rpx;
	margin-left: 30rpx;
	line-height: 80rpx;

}

.footerContainer {
	display: flex;
	justify-content: center;
	align-items: baseline;
	padding-bottom: 10rpx;
	border-bottom: 3rpx solid #9A9A9A;
}

.footerContainer text:first-child {
	color: #9A9A9A;
	font-size: 20rpx;

}

.footerContainer text:nth-child(2) {
	color: #9A9A9A;
	font-size: 20rpx;
	margin-left: 30rpx;
	margin-right: 50rpx;
}

.buttonsStyle {
	width: 150rpx;
	height: 55rpx;

}

.btn-wrap {
	margin: 20rpx 0;
	display: flex;
	padding: 0 40rpx;


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

		&:nth-child(2) {
			justify-content: center;
		}

		&:nth-child(3) {
			justify-content: center;
		}
	}
}

.popup {
	position: absolute;
	top: 145rpx;
	left: 0;
	right: 0;
	height: 300rpx;
	padding: 0 40rpx;
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
	height: calc(100Vh - 300rpx);
	background-color: rgba(16, 16, 16, .4);
	z-index: 10000;
	transition: all .2s;

	&.closed {
		display: none;
	}
}
</style>
