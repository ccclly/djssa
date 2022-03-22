<script>
	import topbar from "../components/topbar.vue";
	import china from "../components/china.vue";
	import {
		goSnow
	} from "@/assets/js/snow.js";

	export default {
		data() {
			return {};
		},
		components: {
         china,
		 topbar
		},
		watch: {
			'$route': 'getPathFun'
		},
		methods: {
			getPathFun() {
				if (this.$route.path === '/') {
					var snowBox = 'contain', //雪花容器
						src = "/img/snow.png", //雪花图基本命名<图片名就是snow+1/2/3/4...>
						num = 40, //雪花数量
						style = 2; //图片种类数
					goSnow(snowBox, src, num, style);
				}
			}
		},
		mounted() {
			this.getPathFun()
		}
	};
</script>
<template>
	<div id="contain">
		<div class="left">
			<div class="left_one">
				<div class="left_one_title">
					运动员性别比例
				</div>

			</div>
			<div class="left_two">
				<div class="left_two_title">
					中国队冬奥强项
				</div>

			</div>
			<div class="left_three">
				<div class="left_three_title">
					民众最关注的比赛项目
				</div>

			</div>
		</div>
		<div class="min">
			<div class="min_one">
				<topbar></topbar>
			</div>
			<div class="min_two">
				<div class="min_two_title">
					冬奥奖牌榜排名
				</div>

				<china></china>

			</div>
<!-- 			<div class="min_three">
				<div class="min_three_title">
					历届冬奥比赛项目数量及花费
				</div>

			</div> -->
		</div>
		<div class="right">
			<div class="right_one">
				<div class="right_one_title">
					北京冬奥亮眼数据
				</div>

			</div>
			<div class="right_two">
				<div class="right_two_title">
					冬奥网友热评
				</div>

			</div>
			<div class="right_three">
				<div class="right_three_title">
					冬奥网友热搜词云图
				</div>

			</div>
		</div>
	</div>
</template>

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
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-height: 70vh;

		.left {
			height: 100%;
			flex: 0.7;
			display: flex;
			flex-direction: column;

			.left_one {
				border: 1px solid white;
				flex: 0.9;
				border-radius: 12px;
				margin: 10px;
				margin-bottom: 0;
				display: flex;
				justify-content: center;
				align-items: center;

				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.left_one_title{
					font-size: 15px;
					position: absolute;
					left: 30px;
					top: 18px;
					font-family: KJ;
					color:#5470C6;
				}
			}

			.left_two {
				border: 1px solid white;
				flex: 1;
				margin: 10px;
				// background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin-bottom: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.left_two_title{
					font-size: 15px;
					position: absolute;
					left: 20px;
					top: 5px;
					font-family: KJ;
					color:#5470C6;
				}
			}

			.left_three {
				border: 1px solid white;
				flex: 1;
				margin: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				position: relative;
				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.left_three_title{
					font-size: 15px;
					position: absolute;
					left: 20px;
					top: 5px;
					font-family: KJ;
					color:#5470C6;
				}
			}
		}

		.min {
			width: 100%;
			height: 100%;
			flex: 1.2;
			display: flex;
			flex-direction: column;

			.min_one {
				// background-color: #42B983;
				margin-top: 10px;
				height: 100%;
				flex: 1;
				display: flex;
				justify-content: center;
				background-image: url(../assets/top1.png);
				background-repeat: no-repeat;
				background-size: 100% 104%;
				-moz-background-size: 100% 100%;
			}

			.min_two {
				margin-top: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				flex: 6;
				border: 1px solid white;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				position: relative;
				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.min_two_title{
					font-size: 15px;
					position: absolute;
					left: 20px;
					top: 5px;
					font-family: KJ;
					color:#5470C6;
				}
			}

			.min_three {
				border: 1px solid white;
				height: 100%;
				background-color: green;
				flex: 3.4;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				width: 100%;
				height: 26.2vh;
				// background-color: rgba(236, 249, 255, 0.4);
				// border-radius: 12px;
				margin-top: 10px;
				margin-bottom: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.min_three_title{
					font-size: 15px;
					position: absolute;
					left: 20px;
					top: 5px;
					font-family: KJ;
					color:#5470C6;
				}
				
			}
		}

		.right {
			height: 100%;
			flex: 0.7;
			display: flex;
			flex-direction: column;

			.right_one {
				border: 1px solid white;
				flex: 1;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin: 10px;
				margin-bottom: 0;
				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				position: relative;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.right_one_title{
					font-size: 15px;
					position: absolute;
					left: 20px;
					top: 5px;
					font-family: KJ;
					color:#5470C6;
				}

			}

			.right_two {
				border: 1px solid white;
				flex: 1;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin: 10px;
				margin-bottom: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				position: relative;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.right_two_title{
					font-size: 15px;
					position: absolute;
					left: 20px;
					top: 5px;
					font-family: KJ;
					color:#5470C6;
				}
			}

			.right_three {
				border: 1px solid white;
				flex: 1.2;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: linear-gradient(white, white) left top,
					linear-gradient(white, white) left top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) right top,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) left bottom,
					linear-gradient(white, white) right bottom,
					linear-gradient(white, white) right bottom;
				background-repeat: no-repeat;
				position: relative;
				background-color: rgba(236, 249, 255, 0.2);
				background-size: 5px 20px, 20px 5px;
				.right_three_title{
					font-size: 15px;
					position: absolute;
					left: 20px;
					top: 5px;
					font-family: KJ;
					color:#5470C6;
				}
			}
		}
	}
</style>
