<template>
	<div class="topbar">
		<img class="img1" :src="leftimg" @mouseenter="mouseenter1" @mouseleave="mouseleave1">
		<div class="txt">
			<text class="txt1">北京冬奥会可视化</text>
			<text class="txt2">更高 更快 更强 更团结</text>
		</div>
		<img :src="rightimg" @mouseenter="mouseenter2" @mouseleave="mouseleave2">
	</div>
</template>

<script>
	export default {
		data() {
			return {
            leftimg:require('../assets/dah3.png'),
			rightimg:require('../assets/wuhuan2.png')
			}
		},
		methods: {
		    // 2、进入元素
		    mouseenter1 () {
		      this.leftimg=require('../assets/dah.png')
		    },
			   // 5、离开元素
			    mouseleave1 () {
			     this.leftimg=require('../assets/dah3.png')
			    },
				// 2、进入元素
				mouseenter2 () {
				  this.rightimg=require('../assets/wuhuan.png')
				},
				   // 5、离开元素
				    mouseleave2 () {
				     this.rightimg=require('../assets/wuhuan2.png')
				    }
		  }
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	.topbar {
		position: absolute;
		top: 10px;
		height: 15vh;
		// background-color: rgba(236, 249, 255, 0.4);
		// border-radius: 12px;
		display: flex;
		justify-content: center;
		img {
			
		}
		.txt {
			margin-top: 13px;
			display: flex;
			flex-direction: column;
			justify-content: center;
            align-items: center;
			.txt1 {
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-family: KJ;
				color: white;
				font-size: 45px;
			}

			.txt2 {
				display: flex;
				margin-top: 5px;
				flex-direction: column;
				justify-content: center;
				font-family: KJ;
				color: white;
				// font-weight: bold;
				font-size: 18px;
			}
		}
	}
</style>
