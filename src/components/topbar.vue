<template>
	<div class="topbar">
		<img src="../assets/2022冬奥会.png">
		<div class="txt">
			<text class="txt1">北京冬奥会可视化</text>
			<text class="txt2">更高 更快 更强 更团结</text>
		</div>
		<img src="../assets/wuhuan.png">
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
		width: 50%;
		height: 15vh;
		background-color: rgba(236, 249, 255, 0.4);
		border-radius: 12px;
		display: flex;
		justify-content: center;
		img {}
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
				font-family: LiSu;
				font-size: 50px;
			}

			.txt2 {
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-family: LiSu;
				// font-weight: bold;
				font-size: 20px;
			}
		}
	}
</style>
