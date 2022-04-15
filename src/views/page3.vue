<template>
  <div class="content">
    <topbar class="topb"/>
    <div class="main">
      <div class="control-bar">
        <div></div>
        <div><span>北京赛区</span></div>
        <div>张家口赛区</div>
        <div>延庆赛区</div>
      </div>
      <div class="tabs">
        <div v-if="curTab===1">
          <el-tabs class="page3-tabs1" @tab-click="handleClick">
            <el-tab-pane label="鸟巢">
              <div class="test">
                <div class="card">
                  <div class="photo">
                    <img src="../assets/page3/北京赛区/1鸟巢.png"/>
                  </div>
                  <h1>鸟巢</h1>
                  <h2></h2>
                  <p>
                    鸟巢体育场位于北京奥林匹克公园中心区南部，为2008年北京奥运会的主体育场，占地20.4公顷，建筑面积25.8万平方米，可容纳观众9.1万人。根据规划，国家体育场成为北京冬奥会开、闭幕式的场馆。
                  </p>
                  <el-button type="primary" @click="dialogTableVisible = true">浏览全景图</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="五棵松体育馆">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/北京赛区/2五棵松体育中心.png"/>
                </div>
                <h1>五松湖体育馆</h1>
                <h2></h2>
                <p>
                  五棵松体育中心可在6小时内实现冰球、篮球两种比赛模式的转换，是国内首个在一块比赛场地同时举办篮球、冰球两种职业体育赛事的场馆。按超低能耗建筑标准设计建造的五棵松冰上运动中心在北京冬奥会期间将作为冰球训练馆使用，其特殊设计的多彩外幕墙体系，让场馆得名“冰菱花”。
                </p>
                <el-button type="primary"><a href="https://baike.baidu.com/item/%E4%BA%94%E6%A3%B5%E6%9D%BE%E4%BD%93%E8%82%B2%E9%A6%86/6524540?fr=aladdin" target="_blank">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="国家速滑馆">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/北京赛区/3国家速滑馆.png"/>
                </div>
                <h1>国家速滑馆</h1>
                <h2></h2>
                <p>
                  国家速滑馆又称“冰丝带”，是本届赛事唯一新建冰上竞赛场馆，与“鸟巢”、“水立方”共同组成“双奥”之城的标志性建筑群。“冰丝带”是冬奥历史上第一个使用二氧化碳作为制冷剂的速滑场馆，将承担速度滑冰项目的比赛，产生14块金牌，是冬奥会产生金牌数量最多的单个场馆。
                </p>
                <el-button type="primary"><a
                  href="https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E9%80%9F%E6%BB%91%E9%A6%86/18241635?fr=aladdin" target="_blank">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="国家体育馆">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/北京赛区/4国家体育馆.png"/>
                </div>
                <h1>国家体育馆</h1>
                <h2></h2>
                <p>
                  国家体育馆作为北京2008年奥运会及残奥会的竞赛场馆之一，曾经举办体操、蹦床等项目。改造后将举办北京2022年冬奥会男子冰球和女子冰球部分比赛、冬残奥会残疾人冰球比赛。场馆赛后除开展冰球运动外，还可以开展花样滑冰、短道速滑等项目，还具有开展夏季运动的多功能转换能力。
                </p>
                <el-button type="primary"><a
                  href="https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E4%BD%93%E8%82%B2%E9%A6%86/7481073?fr=aladdin" target="_blank">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="国家游泳中心">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/北京赛区/5国家游泳中心.png"/>
                </div>
                <h1>国家游泳中心</h1>
                <h2></h2>
                <p>
                  “双奥场馆”国家游泳中心在2019年首次通过“水冰转换”制出4条冬奥标准的冰壶赛道。“水冰转换”让国家游泳中心可以在“水上功能”和“冰上功能”之间自由切换，可以同时具备开展水上运动、冰上运动，及各类大型活动的能力。场馆泳池正常向公众开放。
                </p>
                <el-button type="primary"><a href="https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E6%B8%B8%E6%B3%B3%E4%B8%AD%E5%BF%83/1379581?fr=aladdin" target="_blank">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="首都体育馆">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/北京赛区/6首都体育馆.png"/>
                </div>
                <h1>首都体育馆</h1>
                <h2></h2>
                <p>
                  1968年建成，国内第一座人工室内冰场，曾举办2008年北京奥运会排球比赛。2022年北京冬奥会期间将承担短道速滑和花样滑冰比赛任务，产生14枚金牌。这是北京冬奥会第一项完工的改扩建竞赛场馆工程：外观“修旧日如1日”，延续经典；场馆内着力打造“最美的冰”，营造更好观赛体验。
                </p>
                <el-button type="primary"><a target="_blank" href="https://baike.baidu.com/item/%E9%A6%96%E9%83%BD%E4%BD%93%E8%82%B2%E9%A6%86/7293811?fr=aladdin">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="首钢滑雪跳台">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/北京赛区/7首钢滑雪跳台.png"/>
                </div>
                <h1>首钢滑雪跳台</h1>
                <h2></h2>
                <p>
                  首钢滑雪大跳台将在北京冬奥会期间承担单板和自由式滑雪大跳台比赛项目，设计理念源自中国敦煌壁画中传统的飞天造型，从侧面看去又犹如一只灵动的“水晶鞋”。赛道结束区未来还可举办演唱会、发布会等大型户外活动。
                </p>
                <el-button type="primary"><a target="_blank" href="https://baike.baidu.com/item/%E9%A6%96%E9%92%A2%E6%BB%91%E9%9B%AA%E5%A4%A7%E8%B7%B3%E5%8F%B0/59560678?fr=aladdin">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div v-else-if="curTab===2">
          <el-tabs class="page3-tabs2" @tab-click="handleClick">
            <el-tab-pane label="国家跳台滑雪中心">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/张家口赛区/3国家跳台滑雪中心.png"/>
                </div>
                <h1>国家跳台滑雪中心</h1>
                <h2></h2>
                <p>
                  国家跳台滑雪中心将承担北京冬奥会跳台滑雪、北欧两项的比赛。国家跳台滑雪中心是我国首座符合国际标准的跳台滑雪场地，也是张家口赛区冬奥会场馆群建设中工程量最大、技术难度最高的竞赛场馆。跳台剖面因与中国传统吉祥饰物“如意”的S形曲线契合，因此被形象地称为“雪如意”。
                </p>
                <el-button type="primary" @click="dialogTableVisiblezhangjiakou = true">浏览全景图</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="云顶滑雪跳台">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/张家口赛区/1云顶滑雪跳台.png"/>
                </div>
                <h1>云顶滑雪跳台</h1>
                <h2></h2>
                <p>
                  云顶滑雪公园包括U型场地技巧、坡面障碍技巧、雪上技巧、空中技巧、障碍追逐、平行大回转六条赛道，共计产生20块金牌。张家口山地媒体中心位于场馆群内，由云顶大酒店改建而成。云顶滑雪公园不仅是自由式滑雪及单板滑雪国家队的训练基地，也为大众冰雪运动提供了优质场地。
                </p>
                <el-button type="primary"><a target="_blank" href="https://baike.baidu.com/item/%E4%BA%91%E9%A1%B6%E6%BB%91%E9%9B%AA%E5%85%AC%E5%9B%AD/55513952?fr=aladdin">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="国家冬季两项">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/张家口赛区/2国家冬季两项.png"/>
                </div>
                <h1>国家冬季两项</h1>
                <h2></h2>
                <p>
                  国家冬季两项中心位于张家口市崇礼区太子城区域东北侧山谷，依次布置靶场、赛道与起终点区、场馆技术楼等。国家冬季两项中心将承担北京冬奥会冬季两项以及冬残奥会冬季两项的比赛。
                </p>
                <el-button type="primary"><a target="_blank" href="https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E5%86%AC%E5%AD%A3%E4%B8%A4%E9%A1%B9%E4%B8%AD%E5%BF%83/53860972?fr=aladdin">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="国家越野滑雪中心">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/张家口赛区/4国家越野滑雪中心.png"/>
                </div>
                <h1>国家越野滑雪中心</h1>
                <h2></h2>
                <p>
                  国家越野滑雪中心将承担北京冬奥会越野滑雪和北欧两项的比赛。越野滑雪是冬季项目中的马拉松，赛道路线长、运动员比赛时间长，是典型的耐力项目。
                </p>
                <el-button type="primary"><a target="_blank" href="https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E8%B6%8A%E9%87%8E%E6%BB%91%E9%9B%AA%E4%B8%AD%E5%BF%83/54561862?fr=aladdin">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div v-else>
          <el-tabs class="page3-tabs3" @tab-click="handleClick">
            <el-tab-pane label="国家高山滑雪中心">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/延庆赛区/1国家高山滑雪中心.png"/>
                </div>
                <h1>国家高山滑雪中心</h1>
                <h2></h2>
                <p>
                  高山滑雪被誉为“冬奥会皇冠上的明珠”。国家高山滑雪中心设7条雪道，雪道坡度大、落差大，建设难度极高，主要承担高山滑雪赛事。同时国家高山滑雪中心还包括山顶出发区、中间平台、竞技结束区、集散广场、索道等配套设施，最多同时容纳8000人观赛。
                </p>
                <el-button type="primary"><a target="_blank" href="https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E9%AB%98%E5%B1%B1%E6%BB%91%E9%9B%AA%E4%B8%AD%E5%BF%83/19858093?fr=aladdin">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="国家雪车雪橇中心">
              <div class="card">
                <div class="photo">
                  <img src="../assets/page3/延庆赛区/2国家学车雪橇中心.png"/>
                </div>
                <h1>国家学车雪橇中心</h1>
                <h2></h2>
                <p>
                  国家雪车雪橇中心是北京冬奥会雪车、雪橇、钢架雪车项目比赛场地。场馆共有16个角度、坡度不同的弯道，2020年10月赛道制冰完成后，迎来国家队入驻训练，成为北京冬奥会首个国家队入驻训练的竞赛场馆。
                </p>
                <el-button type="primary"><a target="_blank" href="https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E9%9B%AA%E8%BD%A6%E9%9B%AA%E6%A9%87%E4%B8%AD%E5%BF%83/19858100?fr=aladdin">去看看百科</a></el-button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
  <el-dialog class="view-dialog" fullscreen="true" v-model="dialogTableVisible" destroy-on-close>
    <iframe class="vrview" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
            oallowfullscreen="true" msallowfullscreen="true" name="mapFrame" scrolling="no" frameborder="0"
            src="https://720yun.com/t/7f2jOzyyvu0?scene_id=3170830"></iframe>
  </el-dialog>
  <el-dialog class="view-dialog" fullscreen="true" v-model="dialogTableVisiblezhangjiakou" destroy-on-close>
    <iframe class="vrview" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
            oallowfullscreen="true" msallowfullscreen="true" name="mapFrame" scrolling="no" frameborder="0"
            src="https://720yun.com/t/f0vkzwiq0rq?scene_id=80663427"></iframe>
  </el-dialog>

</template>

<script>
import topbar from '@/components/topbar';
import { ref } from 'vue';

const dialogTableVisible = ref(false);

export default {
  data () {
    return {
      curTab: 1,
      dialogTableVisible: false,
      dialogTableVisiblezhangjiakou: false
    };
  },
  methods: {
    switchRegion (tab) {
      this.curTab = tab;
    },
  },
  components: {
    topbar: topbar,
  },
};
</script>

<style lang="less" scoped>
.content {
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

  .topb {
    left: 50%;
    transform: translateX(-50%);
  }

  .main {
    display: flex;
    position: absolute;
    height: 85vh;
    width: 90vw;
    top: 15vh;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    //transform: translateY(15px);
    .control-bar {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 50%;
      line-height: 60px;
      margin-bottom: 10px;
      font-family: KJ, serif;
      letter-spacing: 2px;
      position: relative;

      :nth-child(1) {
        background: url("../assets/page3/北京赛区/1鸟巢.png") no-repeat;
        background-size: 100% auto;
        background-position: center;
      }

      :nth-child(2) {
        background-color: #7cb7fd;
        opacity: 0.5;
        width: 30%;
        height: 60px;
        position: absolute;
        span{
          opacity: 1;
        }
      }


      div {
        border: 3px solid #1A80EB;
        margin-left: 20px;
        border-radius: 10px;
        flex: 1;
      }

    }
    .tabs{
      width: 70vw;
      margin-left: 20px;
    }
  }
}

//:root {
//  --background-color: #2c3e50;
//  --border-color: #7591AD;
//  --text-color: #34495e;
//  --color1: #EC3E27;
//  --color2: #fd79a8;
//  --color3: #0984e3;
//  --color4: #00b894;
//  --color5: #fdcb6e;
//  --color6: #e056fd;
//  --color7: #F97F51;
//  --color8: #BDC581;
//  --a_border_color: #86a3b3;
//  --h2_border_color: #8ea2b8;
//  --a_hover_background_color: #86a3b3;
//  --font_color: #e8f6fd;
//}

.card {
  /* flex布局下元素不按比例缩放 */
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  //width: 600px;
  width: 80vw;
  //height: 500px;
  height: 60vh;
  overflow: hidden;
  opacity: 0.8;
  margin: 20px auto;
  background-color: rgb(123,182,252);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex 子元素 纵向排列 */
  flex-direction: column;
  /* 增加个阴影 */
  //box-shadow: 0 0 30px #2c2c2c;
  /* 同意给字体价格颜色 */
  color: var(--font_color)
}

.photo {
  position: absolute;
  /* 默认为放大 */
  width: 100%;
  height: 100%;
  top: 0px;
  border-radius: 0%;
  overflow: hidden;
  transition: 0.5s;
}

.photo::before {
  /* 通过before增加渐变背景实现遮罩，让文字默认看起来清晰一些 */
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #333, transparent);
}

.card:hover .photo::before {
  /* 缩小时隐藏 */
  display: none;
}

.photo img {
  /* 图片高宽均为100% */
  /* 然后按照cover缩放，裁切长边 */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover .photo {
  /* 鼠标移上变小 */
  width: 120px;
  height: 120px;
  top: 30px;
  border-radius: 50%;
  box-shadow: 0 0 20px #111;
}


h1 {
  position: absolute;
  top: 380px;
  transition: 0.5s;
  color: white;
}

.card:hover h1 {
  position: absolute;
  top: 170px;
  color: black;
}

h2 {
  margin-top: 220px;
  width: 80%;
  font-weight: normal;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--h2_border_color);
}

p {
  width: 90%;
  /* 段落缩进2个字符大小 */
  text-indent: 2em;
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 30px;
}

a {
  color: var(--font_color);
  text-decoration: none;
  padding: 12px 36px;
  border: 1px solid var(--a_border_color);
  border-radius: 8px;
}

a:hover {
  color: #Fff;
  background-color: var(--a_hover_background_color);
}

.page3-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-tabs__content {
  flex: 1;
}

.vrview {
  height: 85vh;
  width: 100%;
}
</style>

