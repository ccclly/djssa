<script>
	import earth from './components/earth.vue'
	import topbar from './components/topbar.vue'
	import * as snow from '../snow.js'
	export default {
		data() {
			return {

			}
		},
		components: {
			earth,
			topbar
		}
	}
</script>
<template>
	<div id="contain">
		<div class="left">
			<div class="left_one">
				1
			</div>
			<div class="left_two">
				2
			</div>
			<div class="left_three">
				3
			</div>
		</div>
		<div class="min">
			<topbar></topbar>
			<earth></earth>
			<div class="bottom">
				7
			</div>
		</div>
		<div class="right">
			<div class="right_one">
				4
			</div>
			<div class="right_two">
				5
			</div>
			<div class="right_three">
				6
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
		background: url(../src/assets/bj2.jpg);
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
		.left{
			height: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			.left_one{
				flex: 1;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin: 10px;
				margin-bottom: 0;
			}
			.left_two{
				flex: 1;
				margin: 10px;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin-bottom: 0;
			}
			.left_three{
				flex: 1;
				margin: 10px;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
			}
		}
		.min{
			width: 100%;
			height: 100%;
			flex: 1;
			.bottom{
				width: 100%;
				height: 26.2vh;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin-top: 10px;
				margin-bottom: 10px;
			}
		}
		.right{
			height: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			.right_one{
				flex:1;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin: 10px;
				margin-bottom: 0;				
			}
			.right_two{
				flex:5;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin: 10px;
				margin-bottom: 0;
			}
			.right_three{
				flex:3;
				background-color: rgba(236, 249, 255, 0.4);
				border-radius: 12px;
				margin: 10px;
			}
		}
	}
</style>
