<template>
	<div id="contain">
		<div class="min">
			<div class="min_one">
				<topbar></topbar>
			</div>
			<div class="min_two">
				<div class="Box">
					<video width="625" height="520" controls autoplay="true">
						<source :src="videoList" type="video/mp4">
						<object data="movie.mp4" width="320" height="240">
							<embed width="625" height="520" src="/kp.mp4">
						</object>
					</video>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import topbar from "../components/topbar.vue";
	import {
		goSnow
	} from "@/assets/js/snow.js";
	export default {
		data() {
			return {
				videoList:require('../assets/1.mp4'),
				video1: require('../assets/1.mp4'),
				video2: require('../assets/2.mp4'),
				name: ""
			};
		},
		methods:{
			getPathFun() {
			  if (this.$route.path === "/page7") {
			    var snowBox = "contain", //雪花容器
			      src = 'https://s1.ax1x.com/2022/04/11/LZgood.png', //雪花图基本命名<图片名就是snow+1/2/3/4...>
			      num = 40, //雪花数量
			      style = 2; //图片种类数
			    goSnow(snowBox, src, num, style);
			  }
			},
		},
		mounted() {
			this.name = this.$route.params.name;
			this.getPathFun();
			console.log(this.name)
			switch(this.name){
				case'自由式滑雪':
				this.videoList = this.video1
				console.log("111")
				break;
				case'短道速滑':
				this.videoList = this.video2
				console.log("2222")
				break;
			}
		},
		components: {
			topbar
		},
	};
</script>
<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	#contain {
		background: url(@/assets/bj4.jpg);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		min-width: 1000px;
		z-index: -10;
		zoom: 1;
		background-color: #fff;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-background-size: cover;
		-o-background-size: cover;
		background-position: center 0;
		align-items: center;
		min-height: 70vh;

		.min {
			display: flex;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			.min_one {
				width: 50%;
				flex: 1;
				margin: 0 auto;
				margin-top: 10px;
				display: flex;
				justify-content: center;
			}

			.min_two {
				.Box {
					margin: 0 auto;
					width: 800px;
					height: 500px;
					box-shadow: 0 0 10px #5f7da2;
					margin-bottom: 100px;
					border-radius: 10px;

					video {
						width: 100%;
						background-color: white;
						border-radius: 10px;
					}
				}
			}
		}
	}
</style>
