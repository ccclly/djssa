<template>
	<el-carousel indicator-position="none" height="520px" :autoplay="false">
		<el-carousel-item v-for="item in dataList" :key="item.index">
			<div class="it1">
				<div class="img">
					<div class="itname">
						{{item.title}}
					</div>
					<div class="image">
						<img :src="item.img">
					</div>
				</div>
				<div class="introduce_outer">
					<div class="introduce" v-html="item.txt">

					</div>
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
						font-size: 20px;
						font-family: KJ;
						text-align: center;
						line-height: 10vh;
						color: white;
						background-image: url(../assets/header.png);
						background-repeat: no-repeat;
						background-size: 100% 100%;
						-moz-background-size: 100% 100%;
					}

					.image {
						height: 50vh;
						overflow: hidden;
						margin-top: 10px;
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;   
						
						img {
							margin-top: 10px;
							width: 75%;
			                border-radius: 20px;

						}
					}
				}

				.introduce_outer {
					flex: 1;
					width: 50%;
					font-size: 20px;
					line-height: 30px;
					font-family: KJ;
					color: #004660;
					padding: 20px;
					margin: 20px 0;
					margin-right: 10px;
					background-image: url(../assets/kkl.png);
					background-repeat: no-repeat;
					background-size: 100% 104%;
					-moz-background-size: 100% 100%;
					// background-color: yellow;
					.introduce {
				    padding-top: 10px;
					margin-top: 30px;
					overflow: hidden;
                     width: 90%;
					 margin-left: 20px;
					 margin-top: 30px;
					 height: 85%;
					 border-radius: 12px;
					 background-color: rgba(99, 188, 255, 0.4);
					 padding-left: 7px;
					}
				}
			}

		}

	}
</style>
<script>
	export default {
		data() {
			return {
				dataList: [
					{
						title:'机器人黑科技',
						img: require('../assets/img_page2/jq1.gif'),
						txt: '<p>&nbsp; &nbsp; 在本次冬奥会餐厅中，没有了我们以前常见的餐厅厨师和服务员，而忙活的身影都是这些智能机器人。餐厅中共设置了120台机器人，可以24小时的工作，能够为上千人服务。它们能够完成中餐、西餐、鸡尾酒的配制，烹饪、包装、上菜可以一体化完成。在这里无需排队，不用接触、屋顶送餐，机器人可以直接将你的饭菜吊到你的手里，极大了方便了奥运会人员用餐。</p>'
					},
					{
						title:'转播黑科技',
						img: require('../assets/img_page2/sxtt.gif'),
						txt: '<p>&nbsp; &nbsp; 在现场转播方面，传统的转播方式需要大量的工作人员以及庞大的制作团队，以及高昂的设备，由于新冠疫情的影响，尽量的减少人群流动，因此在本次北京冬奥会中用到了像是“高自由视角观赛特效”一样的360度VR技术。不仅可以对整个场馆中高速度的目标进行精准锁定并跟踪，还有多台全景摄影机可以对整个赛事进行360度无死角的播放，让“黑手”无处可逃。</p>'
					},
					{
						title:'防疫黑科技',
						img: require('../assets/img_page2/ffy.jpg'),
						txt: '<p>&nbsp; &nbsp; 防疫黑科技。奥运会期间大量的外国运动员、媒体记者进入中国，为做好防疫工作，中国除了在赛场配置了高能“人脸识别”系统，消杀机器人之外，还开发了“创可贴”式的测温计，随时可以检测人员体温，检测身体状况，为防疫工作提供重要支持。更为神奇的，北京冬奥会可以对场馆内的空气进行核酸检测，通过气溶胶检测系统就能知道现场空气中是否有新冠病毒。</p>'
					},
					{   
						title:'交通黑科技',
						img: require('../assets/img_page2/gt.jpg'),
						txt: '<p>&nbsp; &nbsp; 冬奥会专属列车：无人驾驶的智能高铁“复兴号”，时速高达每小时350公里，最远的赛场可以一小时内到达。全车每个车厢设置了5G华为设备，即便是列车在高速行驶状态中，或者是通过隧道、桥梁、屏蔽区时也可以保持信号稳定。</p>'
					},
					{
						title:'睡眠黑科技',
						img: require('../assets/img_page2/bed.jpg'),
						txt: '<p>&nbsp; &nbsp; 运动员公寓内配备了记忆功能的床，在这个床垫中安放有传感器，运动员可以用遥控器调节腿部、头部的不同角度，达到舒适的标准。北京奥运村的智能床，不仅不是20年日本奥运会的纸板床，而且是一种令人更加舒适，人性化，更具科技含量的智能床，可以提供看“零重力”，看电视，看书，休息等几个模式的身体姿势，特别符合人体工程学的标准。</p>'
					},
					{
						title:'AI手语主播',
						img: require('../assets/img_page2/aii.jpg'),
						txt: '<p>&nbsp; &nbsp; AI手语主播采用语音识别、机器翻译等人工智能技术，她搭载的手语翻译引擎和自然动作引擎能自动翻译文字、音频和视频内容并将手语实时演绎为表情动作，基于这些技术AI手语主播具备高可懂度的手语表达能力和精准连贯的手语呈现效果，AI手语主播掌握的手语词汇规范来自《国家通用手语词典》标准，她学习了百万量级的标准手语平行语料数据和超8500条影视级手语动作数据，手语动作精准度达95%以上。</p>'
					},
					{
						title:'基建黑科技',
						img: require('../assets/img_page2/jj.jpg'),
						txt: '<p>&nbsp; &nbsp; 基建黑科技。这次比赛的19个场馆百分之百的使用风电、太阳能、光伏发电等绿色可再生能源。同时在场地转换中实现了“水立方”到“冰立方”的成功转换，为场馆持续性使用树立了典范。同时为了致力于“碳中和”，在冰丝带及首都体育馆等四个冰上场馆首次使用了碳排放趋于零的二氧化碳制冷剂技术，使得碳排放量减少900吨。</p>'
					},
				]
			};
		}
	}
</script>
