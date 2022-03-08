<template>
	<div class="topbar">
		<img class="img1" src="../assets/dah3.png">
		<div class="txt">
			<text class="txt1">北京冬奥会可视化</text>
			<text class="txt2">更高 更快 更强 更团结</text>
		</div>
		<img src="../assets/wuhuan2.png">
	</div>
</template>

<script>
	export default {
		data() {
			return {

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
