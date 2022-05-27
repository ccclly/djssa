<template>
	<div id="contain">
		<div class="min">
			<div class="min_one">
				<topbar></topbar>
			</div>
			<div class="min_two">
				<div class="Box">
					<video width="625" height="520" controls autoplay>
						<source :src="videoList" type="video/mp4">
						<object data="movie.mp4" width="320" height="240">
							<embed width="625" height="520" src="/kp.mp4">
						</object>
					</video>
				</div>
			</div>
		</div>
		<div class="imgs">
			<div class="title">
				{{Title}}
			</div>
			<img :src="itemImg">
		</div>
		<div class="medal">
			<img src="../assets/img/mm.png">
			<div class="num">
				<div class="gold">
					{{medalnum[0]}}
				</div>
				<div class="silver">
					{{medalnum[1]}}
				</div>
				<div class="copper">
					{{medalnum[2]}}
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
				videoList: require('../assets/1.mp4'),
				video1: require('../assets/1.mp4'),
				video2: require('../assets/2.mp4'),
				video3: require('../assets/3.mp4'),
				video4: require('../assets/4.mp4'),
				video5: require('../assets/5.mp4'),
				video6: require('../assets/6.mp4'),
				name: "",
				itemImg: require('../assets/img/a.png'),
				itemImg1: require('../assets/img/a.png'),
				itemImg2: require('../assets/img/b.png'),
				itemImg3: require('../assets/img/c.png'),
				itemImg4: require('../assets/img/d.png'),
				itemImg5: require('../assets/img/e.png'),
				itemImg6: require('../assets/img/f.png'),
				name2: "",
				Title: "",
				title1: "自由式滑雪集锦",
				title2: "短道速滑集锦",
				title3: "钢架雪车集锦",
				title4: "花样滑冰集锦",
				title5: "单板滑雪集锦",
				title6: "速度滑冰集锦",
				name3: "",
				medalnum: [4, 2, 0],
				medalnum1: [4, 2, 0],
				medalnum2: [2, 1, 1],
				medalnum3: [0, 0, 1],
				medalnum4: [1, 0, 0],
				medalnum5: [1, 1, 0],
				medalnum6: [1, 0, 0],
			};
		},
		methods: {
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
			switch (this.name) {
				case '自由式滑雪':
					this.videoList = this.video1
					this.itemImg = this.itemImg1
					this.Title = this.title1
					this.medalnum = this.medalnum1
					break;
				case '短道速滑':
					this.videoList = this.video2
					this.itemImg = this.itemImg2
					this.Title = this.title2
					this.medalnum = this.medalnum2
					break;
				case '钢架雪车':
					this.videoList = this.video3
					this.itemImg = this.itemImg3
					this.Title = this.title3
					this.medalnum = this.medalnum3
					break;
				case '花样滑冰':
					this.videoList = this.video4
					this.itemImg = this.itemImg4
					this.Title = this.title4
					this.medalnum = this.medalnum4
					break;
				case '单板滑雪':
					this.videoList = this.video5
					this.itemImg = this.itemImg5
					this.Title = this.title5
					this.medalnum = this.medalnum5
					break;
				case '速度滑冰':
					this.videoList = this.video6
					this.itemImg = this.itemImg6
					this.Title = this.title6
					this.medalnum = this.medalnum6
					break;

			}
			console.log(this.Title)
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
				//flex: 1;
        height: 200px;
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
					box-shadow: 0 0 10px #5470C6;
					margin-bottom: 100px;
					border-radius: 10px;

					video {
						width: 100%;
						background-color: #5470C6;
						border-radius: 10px;
					}
				}
			}
		}

		.imgs {
			width: 340px;
			height: 450px;
			position: absolute;
			left: 15px;
			top: 20%;

			.title {
				width: 340px;
				height: 50px;
				font-family: KJ;
				font-size: 40px;
				text-align: center;
				color: #5470C6;
				margin-bottom: 5px;
			}

			img {
				width: 100%;
			}
		}

		.medal {
			width: 340px;
			height: 450px;
			position: absolute;
			right: 15px;
			top: 20%;
			color: #C71332;

			img {
				width: 100%;
			}

			.num {
				width: 100%;
				height: 20%;
				display: flex;
				font-family: SZ;
				font-size: 100px;
				text-align: center;

				.gold {
					flex: 1;
					border-right: 1px solid #000000;
				}

				.silver {
					flex: 1;
					border-right: 1px solid #000000;
				}

				.copper {
					flex: 1;
				}
			}
		}
	}
</style>
