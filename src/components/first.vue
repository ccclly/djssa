<template>
	<div class="yqlist">
		<ul>
			<li>
				<div class="yq">45%</div>
				<span>女性参赛比例</span>
			</li>
			<li>
				<div class="yq">27亿</div>
				<span>参与冬奥话题讨论人数</span>
			</li>
			<li>
				<div class="yq">100%</div>
				<span>绿色供电率</span>
			</li>
			<li>
				<div class="yq">0.01%</div>
				<span>闭环内阳性病率</span>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style lang="less">
	.yqlist {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		ul{
			padding-top: 20px;
		li {
			// background-color: #42B983;
			float: left;
			width: 50%;
			padding: 1px 0;
			text-align: center;
			list-style-type: none;

			.yq {
				width: 100px;
				height: 100px;
				margin: 0 auto 5px auto;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30px;
				font-family: SZ;
				color: #1A80EB;
			}

			span {
				// opacity: .6;
				font-size: 14px;
				color: #1A80EB;
				font-family: KJ;
				}
		}
		}
	}

	.yq:before {
		position: absolute;
		width: 100%;
		height: 100%;
		content: "";
		background: url(../assets/img1.png) center center;
		border-radius: 100px;
		background-size: 100% 100%;
		opacity: .7;
		left: 0;
		top: 0;
		animation: myfirst2 15s infinite linear;
	}

	.yq:after {
		position: absolute;
		width: 86%;
		background: url(../assets/img2.png) center center;
		border-radius: 100px;
		background-size: 100% 100%;
		opacity: .7;
		height: 86%;
		content: "";
		left: 7%;
		top: 7%;
		animation: myfirst 15s infinite linear;
	}


	@keyframes myfirst {
		to {
			transform: rotate(-360deg)
		}
	}

	@keyframes myfirst2 {
		to {
			transform: rotate(360deg)
		}
	}
</style>
