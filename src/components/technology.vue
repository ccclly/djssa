<template>
	<el-carousel indicator-position="none" height="520px" :autoplay="false">
		<el-carousel-item v-for="item in dataList" :key="item.index">
			<div class="it1">
				<div class="img">
					<div class="itname">
						冬奥会会徽
					</div>
					<div class="image">
						<img :src="item.img">
					</div>
				</div>
				<div class="introduce" v-html="dataList[0].txt">

				</div>
			</div>
		</el-carousel-item>
	</el-carousel>
</template>

<style lang="less" scoped>
	.el-carousel {
		// background-color: red;
		width: 850px;
		height: 520px;

		.el-carousel__item {

			.it1 {
				width: 100%;
				height: 100%;
				display: flex;

				.img {
					width: 50%;
					margin-top: 20px;
                    margin-bottom: 20px;
					overflow: hidden;
					.itname {
                         margin: 0 auto;
						width: 50%;
						height: 10vh;
						font-size: 27px;
						font-family: LiSu;
                        text-align: center; 
						line-height:10vh;   
						background-image: url(../assets/kk2.png);
						background-repeat: no-repeat;
						background-size: 100% 100%;
						-moz-background-size: 100% 100%;
					}

					.image {
						height: 60vh;
						overflow: hidden;
						display: flex;
						justify-content: center;
						align-items: center;

						img {
							width: 80%;
						}
					}
				}

				.introduce {
					flex: 1;
					width: 50%;
					font-size: 20px;
					line-height: 30px;
					font-family: KJ;
					color: #5673C8;
					padding: 20px;
					margin: 20px 0;
					margin-right: 10px;
					box-shadow: 0 0 10px black;
					border-radius: 12px;
					// background-image: url(../assets/kkk.png);
					// background-repeat: no-repeat;
					// background-size: 100% 104%;
					// -moz-background-size: 100% 100%;
					overflow: hidden;
				}
			}

		}

	}
</style>
<script>
	export default {
		data() {
			return {
				dataList: [{
						img: '/img/dah.png',
						txt: '<p>&nbsp; &nbsp; 会徽以汉字“冬”为灵感来源，运用中国书法的艺术形态,将厚重的东方文化底蕴与国际化的现代风格融为一体，呈现出新时代的中国新形象、新梦想，传递出新时代中国为办好北京冬奥会，圆冬奥之梦，实现“三亿人参与冰雪运动”目标，圆体育强国之梦，推动世界冰雪运动发展,为国际奥林匹克运动做出新贡献的不懈努力和美好追求。</p><p>&nbsp; &nbsp; 会徽图形上半部分展现滑冰运动员的造型，下半部分表现滑雪运动员的英姿。中间舞动的线条流畅且充满韵律，代表举办地起伏的山峦、赛场、冰雪滑道和节日飘舞的丝带，为会徽增添了节日喜庆的视觉感受，也象征着北京冬奥会将在中国春节期间举行。</p><p>&nbsp; &nbsp; 会徽以蓝色为主色调，寓意梦想与未来，以及冰雪的明亮纯洁。红黄两色源自中国国旗，代表运动的激情、青春与活力。</p><p>&nbsp; &nbsp; 在“BEIJING 2022”字体的形态上汲取了中国书法与剪纸的特点，增强了字体的文化内涵和表现力，也体现了与会徽图形的整体感和统一性。</p>'
					},
					{
						img: '/img/dah.png',
						txt: "会徽以汉字“冬”为灵感来源，运用中国书法的艺术形态,将厚重的东方文化底蕴与国际化的现代风格融为一体，呈现出新时代的中国新形象、新梦想，传递出新时代中国为办好北京冬奥会，圆冬奥之梦，实现“三亿人参与冰雪运动”目标，圆体育强国之梦，推动世界冰雪运动发展,为国际奥林匹克运动做出新贡献的不懈努力和美好追求。"
					},
				]
			};
		}
	}
</script>
