<script>
	import earth from './components/earth.vue'
	import topbar from './components/topbar.vue'
	import cost from './components/cost.vue'
	import sex from './components/sex.vue'
	import radar from './components/radar.vue'
	import cloudword from './components/cloudword.vue'
	import favour from './components/favour.vue'
	import scroll from './components/scroll.vue'
	import game from "./components/question-game.vue";
	import * as snow from '../snow.js'
	export default {
		data() {
			return {

			}
		},
		components: {
			earth,
			topbar,
			cost,
			sex,
			radar,
			cloudword,
			favour,
			scroll
		}
	}
</script>
<template>
	<div id="app">
		<router-view></router-view>
	</div>
	<div id="contain">
		<div class="left">
			<div class="left_one">
				<sex></sex>
			</div>
			<div class="left_two">
				<radar></radar>
			</div>
			<div class="left_three">
				<favour></favour>
			</div>
		</div>
		<div class="min">
			<div class="min_one">
				<topbar></topbar>
			</div>
			<div class="min_two">
				<earth></earth>
			</div>
			<div class="min_three">
				<cost></cost>
			</div>
		</div>
		<div class="right">
			<div class="right_one">
			</div>
			<div class="right_two">
			<scroll></scroll>
			</div>
			<div class="right_three">
				<cloudword></cloudword>
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
		width: 100%;
		background: url(../src/assets/bj8.png);
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
			flex: 1;
			display: flex;
			flex-direction: column;

			.left_one {
				border:1px solid white;
				flex: 1;
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

			}

			.left_two {
				border:1px solid white;
				flex: 2;
				margin: 10px;
				// background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
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
			}

			.left_three {
				border:1px solid white;
				flex: 1;
				margin: 10px;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
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
			}
		}

		.min {
			width: 100%;
			height: 100%;
			flex: 1.5;
			display: flex;
			flex-direction: column;

			.min_one {
				margin-top: 10px;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				height: 100%;
				flex: 1.5;
				display: flex;
				justify-content: center;
				border:1px solid white;
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
			}

			.min_two {
				margin-top: 10px;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				flex: 5.2;
				border:1px solid white;
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
			}

			.min_three {
				border:1px solid white;
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
				// display: flex;
				// justify-content: center;
				// align-items: center;
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
			}
		}

		.right {
			height: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;

			.right_one {
				border:1px solid white;
				flex: 0.9;
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
									background-color: rgba(236, 249, 255, 0.2);
				 background-size: 5px 20px, 20px 5px;
			}

			.right_two {
				border:1px solid white;
				flex: 5;
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
									background-color: rgba(236, 249, 255, 0.2);
				 background-size: 5px 20px, 20px 5px;
			}

			.right_three {
				border:1px solid white;
				flex: 3;
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
									background-color: rgba(236, 249, 255, 0.2);
				 background-size: 5px 20px, 20px 5px;
			}
		}
	}
</style>