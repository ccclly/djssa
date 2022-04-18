<template>
  <el-carousel
    indicator-position="inside"
    height="520px"
    :autoplay="false"
    @change="suspended()"
  >
    <el-carousel-item v-for="item in dataList" :key="item.index">
      <div class="it1">
        <div class="img">
          <div class="itname">
            {{ item.title }}
          </div>
          <!-- 播放按钮 -->
          <div class="play" ref="audio_ctr" @click="myplay1(item.i)"></div>
          <div class="image">
            <img :src="item.img" />
          </div>
        </div>
        <div class="introduce_outer">
          <div class="listen">
            <!-- 语音播放功能 -->
            <audio ref="music">
              <source :src="item.no" type="audio/mpeg" />
            </audio>
          </div>
          <div class="introduce" v-html="item.txt"></div>
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
    // opacity: 0.75;

    .it1 {
      width: 100%;
      height: 100%;
      display: flex;

      .img {
        width: 50%;
        margin-top: 20px;
        margin-bottom: 35px;
        overflow: hidden;

        .itname {
          margin: 0 auto;
          width: 50%;
          height: 10vh;
          font-size: 27px;
          font-family: LS;
          text-align: center;
          line-height: 10vh;
          background-image: url(../assets/kk2.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          -webkit-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
        }

        .image {
          height: 60vh;
          margin-top: 5px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 80%;
          }
        }
      }

      .introduce_outer {
        flex: 1;
        width: 50%;
        font-size: 25px;
        line-height: 30px;
        font-family: LiSu;
        padding-left: 15px;
        padding-right: 5px;
        margin: 20px 0;
        margin-right: 10px;
        background-image: url(../assets/kkk3.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        .introduce {
          overflow: auto;
          overflow-x: hidden;
          width: 100%;
          height: 80%;
          margin-top: 45px;
        }
      }
    }
  }
}
/*停止图片旋转动画*/
.pause {
  width: 45px;
  height: 45px;
  background: url(../assets/voice//play.png) no-repeat;
  background-size: 45px 45px;
  position: absolute;
  top: 32px;
  left: 330px;
  -webkit-animation: test3 2s infinite linear;
  animation: test3 2s infinite linear;
}
/*开始图片静止*/
.play {
  width: 65px;
  height: 65px;
  background: url(../assets/voice//play.png) no-repeat;
  background-size: 45px 45px;
  position: absolute;
  top: 32px;
  left: 330px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@-webkit-keyframes test3 {
  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}
@keyframes test3 {
  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}
</style>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          img: require("../assets/img_page2/hj.gif"),
          i: 0,
          no: require("../assets/voice/冬奥创意/火炬.mp3"),
          title: "冬奥火炬",
          txt: "<p>&nbsp; &nbsp; 2022年冬奥会火炬“飞扬”，向2008奥运火炬塔形致敬，犹如一个大卷轴。</p><p>&nbsp; &nbsp; “飞扬”设计灵感是受大自然中树叶的启发，遵循“道法自然”的东方哲学。红色和银色的外观，象征着冰与火的融合，寓意火炬照亮冰雪世界带来温暖和光明。</p><p>&nbsp; &nbsp; 为更好呼应友谊长久、团结一致的奥林匹克精神，两支火炬交接时，顶端完美结合，就像不同民族紧紧握在一起的双手。</p>",
        },
        {
          img: require("../assets/img_page2/bdd.jpg"),
          i: 1,
          no: require("../assets/voice/冬奥创意/冰墩墩.mp3"),
          title: "冬奥吉祥物",
          txt: "<p>&nbsp; &nbsp; “冰”象征纯洁、坚强，是冬奥会的特点。“墩墩”意喻敦厚、敦实、可爱，契合熊猫的整体形象，象征着冬奥会运动员强壮有力的身体、坚韧不拔的意志和鼓舞人心的奥林匹克精神。</p><p>&nbsp; &nbsp; 冰墩墩熊猫形象与冰晶外壳的结合将文化要素和冰雪运动融合并赋予了新的文化属性和特征，体现了冬季冰雪运动的特点。熊猫是世界公认的中国国宝，形象友好可爱、憨态可掬。这样设计既能代表举办冬奥的中国，又能代表中国味道的冬奥。头部彩色光环灵感源自于北京国家速滑馆——“冰丝带”，线条流动象征着冰雪运动的赛道和5G高科技。头部外壳造型取自冰雪运动头盔。熊猫整体造型像航天员，是一位来自未来的冰雪运动专家，寓意现代科技和冰雪运动的结合。</p><p>&nbsp; &nbsp; 冰墩墩抛弃了传统元素，充满未来感、时代感、速度感。</p>",
        },
        {
          img: require("../assets/img_page2/bs.gif"),
          i: 2,
          no: require("../assets/voice/冬奥创意/大雪花.mp3"),
          title: "冬奥大雪花",
          txt: "<p>&nbsp; &nbsp; 为体现“团结”、“我们是一家人”、“我们是共同体”的文化理念，“大雪花”的设计导演决定外圈雪花采用象征和平的橄榄枝为元素进行创作。像一个橄榄枝花环长出了枝蔓，根据花环这一特点，图形就要体现编织感和连接感。</p><p>&nbsp; &nbsp; 最初是以雪花等边对称的标准来创作，图形略显僵硬，不太像橄榄枝，更像是树长在花环上。紧接着又尝试了许多方案，线条疏密、枝叶茂盛程度、雪花形态、分支长短等都是需要考究的问题，同时图形不能丢失美感。经过300余版图形设计的迭代，最终完成了“大雪花”的设计。</p><p>&nbsp; &nbsp; “雪花火炬台”的设计黑弓这次充分运用了程序计算和数字可视化，为让每个小雪花都能独立发光，设计了程序算法。这样，整个大雪花每一秒都富于变化，很是浪漫——既有雪花绽放的晶莹感，也有橄榄枝的生命力。</p><p>&nbsp; &nbsp; 最终，为满足装置实际制作，在进行例如线条粗细、光点数量等多方面的测试、调整后，“大雪花火炬台”装置宽14.899米，雪花火炬台装置由中国结和橄榄枝编织而成，雪花内核则是96个以中国结元素编织的小雪花紧密相连，在突出“一起向未来”理念的同时将东方美学与奥运精神有机结合。</p>",
          // txt: "<p>&nbsp; &nbsp; 为体现“团结”、“我们是一家人”、“我们是共同体”的文化理念，“大雪花”的设计导演决定外圈雪花采用象征和平的橄榄枝为元素进行创作。像一个橄榄枝花环长出了枝蔓，根据花环这一特点，图形就要体现编织感和连接感。</p><p>&nbsp; &nbsp; 最初是以雪花等边对称的标准来创作，图形略显僵硬，不太像橄榄枝，更像是树长在花环上。紧接着又尝试了许多方案，线条疏密、枝叶茂盛程度、雪花形态、分支长短等都是需要考究的问题，同时图形不能丢失美感。经过300余版图形设计的迭代，最终完成了“大雪花”的设计。</p><p>&nbsp; &nbsp; “雪花火炬台”的设计黑弓这次充分运用了程序计算和数字可视化，为让每个小雪花都能独立发光，设计了程序算法。这样，整个大雪花每一秒都富于变化，很是浪漫——既有雪花绽放的晶莹感，也有橄榄枝的生命力。</p><p>&nbsp; &nbsp; 最终，为满足装置实际制作，在进行例如线条粗细、光点数量等多方面的测试、调整后，“大雪花火炬台”装置宽14.899米，雪花火炬台装置由中国结和橄榄枝编织而成，雪花内核则是96个以中国结元素编织的小雪花紧密相连，在突出“一起向未来”理念的同时将东方美学与奥运精神有机结合。</p><p><br><br>作者：王志鸥<br>链接：https://www.zhihu.com/question/514768224/answer/2357689168<br>来源：知乎<br>&nbsp;</p>",
        },
        {
          img: require("../assets/img_page2/t.png"),
          i: 3,
          no: require("../assets/voice/冬奥创意/火种台.mp3"),
          title: "冬奥火种台",
          txt: "<p>&nbsp; &nbsp; &nbsp;北京冬奥会仪式火种台采用无烟无毒涂料，体现可持续环保理念。以“承天载物”为设计理念，传承“双奥之城”精神。</p><p>&nbsp; &nbsp; 创意灵感来自中国传统青铜礼器——尊，造型风格与火炬、火种灯和谐一致。仪式火种台采用了尊的曲线造型，基座沉稳，象征“地载万物”。顶部舒展开阔，寓意着迎接纯洁的奥林匹克火种。祥云纹路由下而上渐化为雪花，象征了“双奥之城”的精神传承。红色丝带飘逸飞舞、环绕向上，与火炬设计和谐统一。红银交映的色彩，象征了传统与现代、科技与激情的融合。</p>",
        },
        {
          img: require("../assets/img_page2/dd.png"),
          i: 4,
          no: require("../assets/voice/冬奥创意/火种灯.mp3"),
          title: "冬奥火种灯",
          txt: "<p>&nbsp; &nbsp; 北京冬奥会火炬接力火种灯的创意源于“中华第一灯”——西汉长信宫灯。长信宫灯是2000多年前的西汉宫灯，造型轻巧华丽，设计巧妙环保。“长信”，就是永恒的信念，代表人们对光明和希望的追求和向往。</p><p>&nbsp; &nbsp; 飞舞的红色丝带环绕在火种灯顶部，与火炬“飞扬”视觉形象统一，象征着拼搏的奥运激情。</p><p>&nbsp; &nbsp; 方圆嵌套象征天圆地方，银色金属光泽和晶莹剔透的玻璃形成对比，表达了中华民族优秀传统文化与奥林匹克精神的完美契合。</p><p>&nbsp; &nbsp; 灯体使用了环保材料再生铝合金，从整体上来看是往减碳的目标去做。首创双层玻璃结构，保证了火种灯在低温、严寒、大风等自然环境下不会熄灭，打造出既有传统中国韵味，又具现代感的火种灯。</p>",
        },
        {
          img: require("../assets/img_page2/dah.png"),
          i: 5,
          no: require("../assets/voice/冬奥创意/会徽.mp3"),
          title: "冬奥会徽",
          txt: "<p>&nbsp; &nbsp; 会徽以汉字“冬”为灵感来源，运用中国书法的艺术形态,将厚重的东方文化底蕴与国际化的现代风格融为一体，呈现出新时代的中国新形象、新梦想，传递出新时代中国为办好北京冬奥会，圆冬奥之梦，实现“三亿人参与冰雪运动”目标，圆体育强国之梦，推动世界冰雪运动发展,为国际奥林匹克运动做出新贡献的不懈努力和美好追求。</p><p>&nbsp; &nbsp; 会徽图形上半部分展现滑冰运动员的造型，下半部分表现滑雪运动员的英姿。中间舞动的线条流畅且充满韵律，代表举办地起伏的山峦、赛场、冰雪滑道和节日飘舞的丝带，为会徽增添了节日喜庆的视觉感受，也象征着北京冬奥会将在中国春节期间举行。</p><p>&nbsp; &nbsp; 会徽以蓝色为主色调，寓意梦想与未来，以及冰雪的明亮纯洁。红黄两色源自中国国旗，代表运动的激情、青春与活力。</p><p>&nbsp; &nbsp; 在“BEIJING 2022”字体的形态上汲取了中国书法与剪纸的特点，增强了字体的文化内涵和表现力，也体现了与会徽图形的整体感和统一性。</p>",
        },
        {
          img: require("../assets/img_page2/medal.jpg"),
          i: 6,
          no: require("../assets/voice/冬奥创意/奖牌.mp3"),
          title: "冬奥奖牌",
          txt: "<p>&nbsp; &nbsp; 北京2022年冬奥会奖牌命名为“同心”，寓意团结一致，“一起向未来”。</p><p>&nbsp; &nbsp; 奖牌正面中心刻有奥林匹克五环标志，周围刻有北京2022年冬奥会英文全称。圆环做打洼处理，取意传统弦纹玉璧，上面浅刻装饰纹样，均来自中国传统纹样，其中冰雪纹表现冬奥会的特征，祥云纹传达吉祥的寓意。奖牌背面圆环上刻有24个点及运动弧线，取意古代天文图，象征着浩瀚无垠的星空，人与自然的和谐，也象征着第24届冬季奥林匹克运动会上运动员如群星璀璨，创造精彩。</p><p>&nbsp; &nbsp; 从2008年“金镶玉”到2022年“同心圆”，不变的是“双奥之城”北京对“更高、更快、更强——更团结”奥林匹克精神的诠释和创新表达。</p>",
        },
      ],
    };
  },
  methods: {
    suspended() {
      var ttsAudio = this.$refs.music[0];
      ttsAudio.pause(); // 这个就是暂停
      var ttsAudio = this.$refs.music[1];
      ttsAudio.pause(); // 这个就是暂停
      var ttsAudio = this.$refs.music[2];
      ttsAudio.pause(); // 这个就是暂停
      var ttsAudio = this.$refs.music[3];
      ttsAudio.pause(); // 这个就是暂停
      var ttsAudio = this.$refs.music[4];
      ttsAudio.pause(); // 这个就是暂停
      var ttsAudio = this.$refs.music[5];
      ttsAudio.pause(); // 这个就是暂停
      var ttsAudio = this.$refs.music[6];
      ttsAudio.pause(); // 这个就是暂停
      var audio_ctr = this.$refs.audio_ctr[0]; //获取按钮
      audio_ctr.className = "play"; //动态更改标签的类名
      var audio_ctr = this.$refs.audio_ctr[1]; //获取按钮
      audio_ctr.className = "play"; //动态更改标签的类名
      var audio_ctr = this.$refs.audio_ctr[2]; //获取按钮
      audio_ctr.className = "play"; //动态更改标签的类名
      var audio_ctr = this.$refs.audio_ctr[3]; //获取按钮
      audio_ctr.className = "play"; //动态更改标签的类名
      var audio_ctr = this.$refs.audio_ctr[4]; //获取按钮
      audio_ctr.className = "play"; //动态更改标签的类名
      var audio_ctr = this.$refs.audio_ctr[5]; //获取按钮
      audio_ctr.className = "play"; //动态更改标签的类名
      var audio_ctr = this.$refs.audio_ctr[6]; //获取按钮
      audio_ctr.className = "play"; //动态更改标签的类名
    },
    myplay1(e) {
      //   console.log("到这来了" + e);
      var ttsAudio = this.$refs.music[e];
      var audio_ctr = this.$refs.audio_ctr[e]; //获取按钮
      //   console.log(this.$refs.music);
      //   console.log(this.$refs.audio_ctr);
      if (ttsAudio !== null) {
        //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
        if (ttsAudio.paused) {
          ttsAudio.play(); // 这个就是播放
          audio_ctr.className = "pause"; //动态更改标签的类名
        } else {
          ttsAudio.pause(); // 这个就是暂停
          audio_ctr.className = "play"; //动态更改标签的类名
        }
      }
    },
  },
};
</script>
