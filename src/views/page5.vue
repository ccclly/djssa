<script>
	import topbar from "../components/topbar.vue";
	import world from "../components/world.vue";
	import { goSnow } from "@/assets/js/snow.js";

	export default {
		data() {
			return {};
		},
		components: {
		 topbar,
		 world
		},
		// watch: {
		// 	'$route': 'getPathFun'
		// },
		methods: {
			getPathFun() {
				if (this.$route.path === '/page5') {
					console.log("fuck")
					var snowBox = 'contain', //雪花容器
						src = 'https://s1.ax1x.com/2022/04/11/LZgood.png', //雪花图基本命名<图片名就是snow+1/2/3/4...>
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
		<div class="min">
			<div class="min_one">
				<topbar></topbar>
			</div>
			<div class="min_two"> 
				<world></world>
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
		align-items: center;
		min-height: 70vh;

		.min {
			display: flex;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			.min_one {
				width:50%;
				flex: 1;
				margin:0 auto;
				margin-top: 10px;
				display: flex;
				justify-content: center;
			}

			.min_two {
				
				margin-top: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				flex: 6;
				position: relative;
				.min_two_title{
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
