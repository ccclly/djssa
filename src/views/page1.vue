<template>
	<div class="body">
		<audio :src="xhmusic" ref="music">
			Your browser does not support the audio element.
		</audio>

		<div class="stars" ref="starsRef">
			<div class="star" v-for="(item, index) in starsCount" :key="index"></div>
		</div>
		<div id="wuhuan">
			<img src="../assets/wuhuan78.gif">
		</div>
		<transition name="fade">
			<div class="bigsnow" v-show="show">
				<img src="../assets/bs.png">
				<div class="hj" @click="dianhuo">
					<img :src="isfire">
				</div>
				<div class="tip" v-show="isclick">
					<img src="../assets/tip2.gif">
				</div>
			</div>
		</transition>

		<div>
			{{ this.$route.params.name }}
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	export default {
		data() {
			return {
				xhmusic:require("../assets/xh.mp3"),
				isclick:true,
				isplay: false,
				show: true,
				count: "", //倒计时
				starsCount: 800, //星星数量
				distance: 900, //间距
				isfire: require('../assets/hynull.png'),
			}
		},
		mounted() {
			console.log(this.$refs.starsRef.children);
			let starNodes = Array.from(this.$refs.starsRef.children);
			starNodes.forEach((item) => {
				let speed = 0.2 + Math.random() * 1;
				let thisDistance = this.distance + Math.random() * 300;
				item.style.transformOrigin = `0 0 ${thisDistance}px`;
				item.style.transform =
					`
		        translate3d(0,0,-${thisDistance}px)
		        rotateY(${Math.random() * 360}deg)
		        rotateX(${Math.random() * -50}deg)
		        scale(${speed},${speed})`;
			});
		},
		methods: {
			dianhuo() {
				this.isclick = false
				this.isfire = require('../assets/hy.gif')
				this.$refs.music.play()
				this.$refs.music.volume =1;
				const timejump = 1;
				if (!this.timer) {
					this.count = timejump;
					this.timer = setInterval(() => {
						this.show = false;
						$("#wuhuan").fadeIn(3000);
					}, 1000)
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= timejump) {
							this.count--;
						} else {
							clearInterval(this.timer);
							this.timer = null;
							//跳转的页面写在此处
							this.$router.push({
								path: '/mainPage'
							});
						}
						// this.show = false

					}, 4000)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.fade-leave-to {
		opacity: 0;
	}

	.fade-leave-active {
		transition: opacity 3s;
	}


	.body {
		cursor: url(../assets/hj22.png), auto;
		position: absolute;
		background: url(../assets/bj15.jpg);
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

		.stars {
			transform: perspective(500px);
			transform-style: preserve-3d;
			position: absolute;
			perspective-origin: 50% 100%;
			left: 45%;
			animation: rotate 90s infinite linear;
			bottom: 0;

			.star {
				width: 2px;
				height: 2px;
				background: #f7f7b6;
				position: absolute;
				left: 0;
				top: 0;
				backface-visibility: hidden;
			}
		}

		.bigsnow {
			width: 800px;
			height: 800px;
			position: relative;
			left: 50%;
			top: 50%;
			margin-top: -400px;
			margin-left: -400px;

			img {
				width: 100%;
			}

			.hj {
				width: 100px;
				height: 100px;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-top: -18px;
				margin-left: -47px;
                z-index: 50;
				img {
					width: 100%;
				}
			}
			.tip{
				position: absolute;
				width: 300px;
				left: 50%;
				top: 50%;
				transform: translate(-25%,-25%);
				z-index: 10;
				img {
					width: 50%;
					
				}
			}
		}

		#wuhuan {
			width: 650px;
			position: absolute;
			transform: translate(-50%);
			left: 50%;
			top: 10%;
			display: flex;
			justify-content: center;
			align-items: center;
			display: none;
			// background-color: red;
            
			img {
				width: 100%;
				 z-index: 200;
			}
		}
	}

	@keyframes rotate {
		0% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
		}

		100% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
		}
	}
</style>
