<script>
import earth from "../components/earth.vue";
import topbar from "../components/topbar.vue";
import cost from "../components/cost.vue";
import sex from "../components/sex.vue";
import radar from "../components/radar.vue";
import trend from "../components/trend.vue";
import favour from "../components/favour.vue";
import scroll from "../components/scroll.vue";
import first from "../components/first.vue";
import poor from "../components/poor.vue";
// import game from "../components/question-game.vue";
import { goSnow } from "@/assets/js/snow.js";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
export default {
  data() {
    return {};
  },
  components: {
    earth,
    topbar,
    cost,
    sex,
    radar,
    trend,
    favour,
    first,
    scroll,
    poor,
  },
  watch: {
    $route: "getPathFun",
  },
  methods: {
    getPathFun() {
      if (this.$route.path === "/mainPage") {
        var snowBox = "contain", //雪花容器
          src = "https://s1.ax1x.com/2022/04/11/LZgood.png", //雪花图基本命名<图片名就是snow+1/2/3/4...>
          num = 40, //雪花数量
          style = 2; //图片种类数
        goSnow(snowBox, src, num, style);
      }
    },
  },
  mounted() {
    this.getPathFun();
  },
};
</script>
<template>
  <div id="contain">
    <div class="left">
      <div class="left_one">
        <div class="left_one_title">运动员性别比例</div>
        <el-tooltip
          content='<p>&nbsp; &nbsp; 北京冬奥会女运动员人数为1314名，占比45%，</p><p>为历届冬奥会之最，从图表看出，不论是总体运动</p><p>员参赛男女比例还是中国运动员参赛男女比例都接</p><p>近于1：1,同时中国运动员获奖的性别比例也十分</p><p>接近。体现了中国的<a target ="_blank" href="https://baike.baidu.com/item/%E7%94%B7%E5%A5%B3%E5%B9%B3%E7%AD%89/2939686?fr=aladdin"><strong>男女平等</strong></a>的基本国策。</p>'
          raw-content
          effect="light"
          placement="right"
        >
          <img src="../assets/i.png" />
        </el-tooltip>
        <sex></sex>
      </div>
      <div class="left_two">
        <div class="left_two_title">中国队得牌分布</div>
        <el-tooltip
          content='<p>&nbsp; &nbsp; 北京冬奥会前，“冰强雪弱”一直是中国冰雪运动</p><p>的一个标签。2002年盐湖城冬奥会，中国的首枚冬奥</p><p>会金牌诞生在冰上项目，但是本届冬奥会中，中国雪</p><p>上项目的奖牌数以8比7超越了冰上项目，说明了中国</p><p>冰强雪弱格局正在改变，也为中国建设<a target ="_blank" href="https://baike.baidu.com/item/%E4%BD%93%E8%82%B2%E5%BC%BA%E5%9B%BD"><strong>体育强国</strong></a>的路</p><p>上竖起了一座里程碑。</p>'
          raw-content
          effect="light"
          placement="right"
        >
          <img src="../assets/i.png" />
        </el-tooltip>
        <radar></radar>
      </div>
      <div class="left_three">
        <div class="left_three_title">民众最关注的比赛项目</div>
        <el-tooltip
          content="<p>&nbsp; &nbsp; 冰壶项目在国内的关注度正在快速提升，超越</p><p>滑雪、滑冰等经典项目，成为北京冬奥会赛事搜</p><p>索热度首位紧随其后的是中国队的传统冰雪优势</p><p>项目短道速滑、花样滑冰。此外，冰球、跳台滑</p><p>雪、单板滑雪、高山滑雪等一系列的滑雪类项目，</p><p>也通过独有的竞技魅力，点燃了国人对冰雪运动</p><p>的热情。</p>"
          raw-content
          effect="light"
          placement="right"
        >
          <img src="../assets/i.png" />
        </el-tooltip>
        <favour></favour>
      </div>
    </div>
    <div class="min">
      <div class="min_one">
        <topbar></topbar>
      </div>
      <div class="min_two">
        <div class="min_two_title">冬奥奖牌榜排名</div>
        <el-tooltip
          content="<p>&nbsp; &nbsp; 中国队的奖牌收获为9金4银2铜，其中，9枚金牌</p><p>让中国队在奖牌榜上最后时刻反超美国的8金，中国</p><p>队最终排名第3，仅次于第1的挪威和第2的德国。这</p><p>是中国队参加冬奥会历史以来的最高排名。</p>"
          raw-content
          effect="light"
          placement="left"
        >
          <img src="../assets/i.png" />
        </el-tooltip>
        <earth></earth>
      </div>
      <div class="min_three">
        <div class="min_three_title">历届冬奥比赛项目数量及花费</div>
        <el-tooltip
          content='<p>&nbsp; &nbsp; 据悉，在俄罗斯举办的索契冬奥会，前后一共花费了510</p><p>亿美元，而在平昌冬奥会，则花了130亿美元，这无疑是很</p><p>恐怖的一项数据，而中国冬奥会，提交给国际奥委会的预算</p><p>是39亿美元，这几乎是平昌奥运会的一个零头。而在实际过</p><p>程中，费用其实是低于了这个预算的，因为冬奥会费用总共</p><p>有两项：一个是赛事编制预算约为15.6亿美元；另一个是场</p><p>馆建设预算约为15.1亿美元，总合计约31亿美元。其中本届</p><p>冬奥会设置项目131项，可见规模之大，但花费却如此之低，</p><p>可见中国的<a target ="_blank" href="https://baijiahao.baidu.com/s?id=1726046253934604505&amp;wfr=spider&amp;for=pc"><strong>绿色办奥</strong></a>的理念。</p>'
          raw-content
          effect="light"
          placement="top-end"
        >
          <img src="../assets/i.png" />
        </el-tooltip>
        <cost></cost>
      </div>
    </div>
    <div class="right">
      <div class="right_one">
        <div
          class="right_one_title"
          style="
            -webkit-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
          "
        >
          北京冬奥亮点
        </div>
        <div class="right_one_title"></div>
        <el-tooltip
          content="<p>&nbsp; &nbsp; 本届冬奥会中有如下四大亮点，一是本届冬奥会</p><p>参赛女性运动比例达到<strong>45%</strong>以上，使得北京冬奥会</p><p>成为有史以来女性运动员人数最多、比例最高的一</p><p>届冬奥会。二是北京冬奥会创造了冬奥会史上最高</p><p>收视率，全球超过<strong>27亿</strong>人参与了冬奥互动。三是对</p><p>于北京冬奥会碳中和目标的实现，一个重要创举与</p><p>跨越是冬奥会全部场馆达到<strong>100%</strong>绿电供应。四是</p><p>北京冬奥会闭环内核酸检测阳性率仅为<strong>0.01%</strong>，防</p><p>疫措施与成效赢得国际社会广泛点赞。</p>"
          raw-content
          effect="light"
          placement="left"
        >
          <img src="../assets/i.png" />
        </el-tooltip>
        <first></first>
      </div>
      <div class="right_two">
        <div
          class="right_two_title"
          style="
            -webkit-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
          "
        >
          冬奥网友热评
        </div>
        <router-link to="/page6">
          <scroll></scroll>
        </router-link>
      </div>
      <div class="right_three">
        <!-- <div class="right_three_title">中国冰雪运动发展趋势</div> -->
        <div
          class="right_three_title"
          style="
            -webkit-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
          "
        >
          冬奥助力发展
        </div>
        <!-- zzf的代码 -->
        <!-- <el-tooltip
          content='<p>&nbsp; &nbsp; 统计调查报告显示,截至2021年10月,全国冰雪运动参与</p><p>人数为3.46亿人居民参与率达24.56%;全国已有654块标准</p><p>冰场、803个滑雪场,较2015年增幅达317%和41%。成功</p><p>筹办举办北京冬奥会、冬残奥会,极大激发了中国亿万人民</p><p>的体育热情,“<a target ="_blank" href="https://baike.baidu.com/item/%E2%80%9C%E5%B8%A6%E5%8A%A8%E4%B8%89%E4%BA%BF%E4%BA%BA%E5%8F%82%E4%B8%8E%E5%86%B0%E9%9B%AA%E8%BF%90%E5%8A%A8%E2%80%9D%E5%AE%9E%E6%96%BD%E7%BA%B2%E8%A6%81%EF%BC%882018-2022%E5%B9%B4%EF%BC%89"><strong>带动三亿人参与冰雪运动</strong></a>”目标的实现,开启</p><p>了中国乃至全球冰雪运动新时代。</p>'
          raw-content
          effect="light"
          placement="top-start"
        > -->
        <el-tooltip
          content='<p>&nbsp; &nbsp; 北京冬奥组委发布了“<a target ="_blank" href="https://baike.baidu.com/item/%E5%8C%97%E4%BA%AC2022%E5%B9%B4%E5%86%AC%E5%A5%A5%E4%BC%9A%E5%92%8C%E5%86%AC%E6%AE%8B%E5%A5%A5%E4%BC%9A%E5%8C%BA%E5%9F%9F%E5%8F%91%E5%B1%95%E9%81%97%E4%BA%A7%E6%8A%A5%E5%91%8A%282022%29/60070952?fr=aladdin"><strong>《北京2022年冬奥会和冬残奥会遗产报告集(2022)》</strong></a>”。</p><p>
		  相关报告显示，在北京冬奥会的带动下，在当地直接或间接从事冰雪产业和旅游服务人员</p><p>
		  达3万多人，其中贫困人口9000多人。此外成功筹办举办北京冬奥会、冬残奥会,极大激发</p><p>
		  了中国亿万人民的体育热情,成功“<a target ="_blank" href="https://baike.baidu.com/item/%E2%80%9C%E5%B8%A6%E5%8A%A8%E4%B8%89%E4%BA%BF%E4%BA%BA%E5%8F%82%E4%B8%8E%E5%86%B0%E9%9B%AA%E8%BF%90%E5%8A%A8%E2%80%9D%E5%AE%9E%E6%96%BD%E7%BA%B2%E8%A6%81%EF%BC%882018-2022%E5%B9%B4%EF%BC%89"><strong>带动三亿人参与冰雪运动</strong></a>”目标的实现,开启了中国乃</p><p>
		 至全球冰雪运动新时代。</p>'
          raw-content
          effect="light"
          placement="top-start"
        >
          <img src="../assets/i.png" />
        </el-tooltip>

        <!-- <trend></trend> -->
        <poor></poor>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
a {
  text-decoration-line: none;
  color: black;
}

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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;
      position: relative;

      .left_one_title {
        font-size: 18px;
        position: absolute;
        left: 10px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
      }

      img {
        cursor: pointer;
        width: 7%;
        position: absolute;
        right: 7px;
        top: 7px;
        z-index: 20;
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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;

      .left_two_title {
        font-size: 18px;
        position: absolute;
        left: 10px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
      }
      img {
        cursor: pointer;
        width: 7%;
        position: absolute;
        right: 7px;
        top: 7px;
        z-index: 20;
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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;

      .left_three_title {
        font-size: 18px;
        position: absolute;
        left: 10px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
      }
      img {
        cursor: pointer;
        width: 7%;
        position: absolute;
        right: 7px;
        top: 7px;
        z-index: 20;
      }
    }
  }

  .min {
    width: 100%;
    height: 100%;
    flex: 1.5;
    display: flex;
    flex-direction: column;

    .min_one {
      // background-color: #42B983;
      margin-top: 10px;
      height: 100%;
      flex: 1.5;
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
      flex: 4;
      border: 1px solid white;
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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;

      .min_two_title {
        font-size: 18px;
        position: absolute;
        left: 10px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
      }
      img {
        cursor: pointer;
        width: 3.3%;
        position: absolute;
        right: 7px;
        top: 7px;
        z-index: 20;
      }

      // .min_two_title2 {
      // 	font-size: 18px;
      // 	position: absolute;
      // 	right: 10px;
      // 	top: 5px;
      // 	font-family: KJ;
      // 	color: #0669D2;
      // }
    }

    .min_three {
      border: 1px solid white;
      height: 100%;
      background-color: green;
      flex: 3;
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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;

      .min_three_title {
        font-size: 18px;
        position: absolute;
        left: 10px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
      }
      img {
        cursor: pointer;
        width: 3.3%;
        position: absolute;
        right: 7px;
        top: 7px;
        z-index: 20;
      }
    }
  }

  .right {
    height: 100%;
    flex: 0.9;
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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;

      .right_one_title {
        font-size: 18px;
        position: absolute;
        left: 40px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
      }
      img {
        cursor: pointer;
        width: 7%;
        position: absolute;
        left: 7px;
        top: 7px;
        z-index: 20;
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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;

      .right_two_title {
        font-size: 18px;
        position: absolute;
        left: 10px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
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
      background-color: rgba(236, 249, 255, 0.1);
      background-size: 5px 20px, 20px 5px;

      .right_three_title {
        font-size: 18px;
        position: absolute;
        left: 40px;
        top: 5px;
        font-family: KJ;
        color: #0669d2;
      }
      img {
        cursor: pointer;
        width: 7%;
        position: absolute;
        left: 7px;
        top: 7px;
        z-index: 20;
      }
    }
  }
}
</style>
