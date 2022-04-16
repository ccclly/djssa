<template>
  <section id="knowledge" class="viewBlock">
    <div class="bookBox">
      <a class="lastBtn">《</a>
      <a class="nextBtn">》</a>

      <!-- 首页的图片 -->
      <div class="bookPage frist">
        <img src="../assets/bookimg/习近平闭幕式.png" />
      </div>
      <!-- 第一页的内容 -->
      <div>
        <div class="bookPage runPage">
          <div class="bookWord">
            <p>
              2015年7月31日，世界选择了北京。
              <br />
              2022年2月4日，北京惊艳了世界。
              <br />
              “从无到有啊！2015年申办成功，奔着当时提出的愿景目标，我们按计划一件事一件事地办，都办成了。走到今天不容易。”北京冬奥会开幕前夕，习近平总书记这样感慨。
              <br />
              “北京冬奥会可以说已经非常成功了。运动员们非常开心，也感到非常满意。”国际奥委会主席巴赫也由衷点赞。
              <br />
              一步步走来，一个个瞬间镌刻在中国人民的记忆深处。
              回首中国的冬奥之路，从申办到筹办，习近平总书记一路引领。
            </p>
            <span class="pageNumber">1</span>
          </div>
          <img src="../assets/bookimg/带动冰雪运动.png" />
        </div>
      </div>
      <!-- 第二页的内容 -->
      <div>
        <div class="bookPage runPage">
          <div class="bookWord">
            <p>
              习近平总书记指出：“北京冬奥会是我国重要历史节点的重大标志性活动，是展现国家形象、促进国家发展、振奋民族精神的重要契机，对京津冀协同发展有着强有力的牵引作用。”
            </p>
            <p>
              “办好北京冬奥会、冬残奥会是党和国家的一件大事，是我们对国际社会的庄严承诺，做好北京冬奥会、冬残奥会筹办工作使命光荣、意义重大。”
            </p>
            <p>
              “成功举办北京冬奥会、冬残奥会，不仅可以增强我们实现中华民族伟大复兴的信心，而且有利于展示我们国家和民族致力于推动构建人类命运共同体，阳光、富强、开放的良好形象，增进各国人民对中国的了解和认识。”
            </p>
            <span class="pageNumber">2</span>
          </div>
          <img src="../assets/bookimg/习近平视察.png" />
        </div>
      </div>
      <!-- 第三页的内容 -->
      <div>
        <div class="bookPage runPage">
          <div class="bookWord">
            <p>
              这些年，习近平总书记先后5次实地考察冬奥筹办工作。北京、延庆、张家口三个赛区都留下了他的“冬奥足迹”。
              在北京冬奥会场馆总体规划的沙盘前，他看得细、想得细：“要用节约、绿色、廉洁的理念去规划好场馆的建设和利用。”
              在北京冬奥会、冬残奥会主媒体中心，他仔细了解“双闭环”管理模式：“闭环管理很有必要，设计必须科学合理，不能因管理的生硬和简单粗放而影响冬奥的顺利举办。”
            </p>
            <p>
              在冬奥村，他同来自高校的志愿者亲切交流：“给各国参赛人员讲述一个古老而现代的北京，让他们感受到中国人民的热情好客，这会是一段难忘的人生经历。”
            </p>
            <span class="pageNumber">3</span>
          </div>

          <img src="../assets/bookimg/闭幕式.png" />
        </div>
      </div>
      <div class="bookPage last">
        <div class="bookWord">
          <p>
            从担任2008年北京奥运会、残奥会筹备工作领导小组组长，助力中国百年奥运梦圆，到领导新时代中国成功举办2014年南京青奥会，再到亲自推动申办、筹办2022年北京冬奥会、冬残奥会，习近平与奥林匹克运动有着特别的缘分。
            “我真希望给习主席颁发一枚金牌！”正如国际奥委会主席巴赫所言，就推动奥林匹克运动而言，习近平主席是当之无愧的冠军。
          </p>
          <span class="pageNumber">4</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    $(function () {
      var pageNum = 0;
      console.log("数量为：" + $(".runPage").length);
      for (var i = 0; i < $(".runPage").length; i++) {
        $(".runPage")
          .eq(i)
          .css("z-index", 7 - 2 * i);
        $(".runPage")
          .eq(i)
          .children("div")
          .css("z-index", 7 - 2 * i);
        $(".runPage")
          .eq(i)
          .children("img")
          .css("z-index", 6 - 2 * i);
      }

      $(".nextBtn").bind("click", function () {
        if (pageNum <= 2) {
          runNext(pageNum);
          pageNum++;
        }
        console.log(pageNum);
      });

      function runNext(index) {
        $(".runPage").eq(index).addClass("runClass");
        zIndexNext(index, $(".runPage").eq(index));
      }

      function zIndexNext(index, element) {
        if (index >= 1) {
          element.css("z-index", 3 + 2 * index);
        }
        setTimeout(function () {
          if (index == 0) {
            element.css("z-index", 3 + 2 * index);
          }
          element.children("div").css("z-index", 2 + 2 * index);
          element.children("img").css("z-index", 3 + 2 * index);
        }, 1000);
      }

      $(".lastBtn").bind("click", function () {
        if (pageNum >= 1) {
          pageNum--;
          runLast(pageNum);
        }
        console.log(pageNum);
      });

      function runLast(index) {
        $(".runPage").eq(index).removeClass("runClass");
        zIndexLast(index, $(".runPage").eq(index));
      }

      function zIndexLast(index, element) {
        if (index == 0) {
          element.css("z-index", 7 - 2 * index);
        }
        setTimeout(function () {
          element.css("z-index", 7 - 2 * index);
          element.children("div").css("z-index", 7 - 2 * index);
          element.children("img").css("z-index", 6 - 2 * index);
        }, 1000);
      }
    });
  },
};
</script>

<style  scoped>
* {
  padding: 0px;
  margin: 0px;
  font-size: 20px;
  color: black;
  font-family: "LS";
}
a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
::-moz-selection {
  background: #338fff;
  color: #fff;
}
::-webkit-selection {
  background: #338fff;
  color: #fff;
}
::selection {
  background: #338fff;
  color: #fff;
}
.clear::after {
  content: "";
  display: block;
  height: 0px;
  clear: both;
  visibility: hidden;
}
.response-img {
  display: block;
  max-width: 100%;
}
.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
body {
  width: 100%;
  max-width: 1920px;
  min-width: 1200px;
}
#knowledge {
  width: 100%;
  position: relative;
  background-color: #ccc;
  transform: scale(85%);
  left: -10.5%;
  bottom: 15px;
   box-shadow: 6px 15px 10px #7f7f7f;
}
.bookBox {
  width: 1000px;
  height: 500px;
  position: relative;
  -webkit-perspective-origin: 50% 60%;
  perspective-origin: 50% 60%;
  -webkit-perspective: 1500px;
  perspective: 1500px;
  background: white no-repeat 0 0;
  background-size: 100% 100%;
}
.bookBox:hover .lastBtn {
  display: block;
}
.bookBox:hover .nextBtn {
  display: block;
}
.bookPage {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all linear 2s;
  -moz-transition: all linear 2s;
  -ms-transition: all linear 2s;
  -o-transition: all linear 2s;
  transition: all linear 2s;
  background: url(../assets/bookimg/bookLeft.png) no-repeat;
  background-size: 479.26px 483.33px;
  background-position: 20.74px 8.3px;
}
.bookPage img {
  position: absolute;
  top: 50px;
  left: 50px;
/*  display: inline-block; */
  width: 400px;
}
.bookWord {
  position: absolute;
  top: 50px;
  left: 50px;
  display: inline-block;
  width: 360px;
  height: 360px;
  padding: 20px;
  font-size: 20px;
  line-height: 27px;
  backface-visibility: visible;
  background-color: #f0f0f0;
  /* word-break: break-all;
  -webkit-column-count: 2;
  -webkit-column-gap: 40px;
  -moz-column-count: 2;
  -moz-column-gap: 40px;
  -ms-column-count: 2;
  -ms-column-gap: 40px;
  column-count: 2;
  column-gap: 10px; */
}

/* .bookWord span {
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
} */
.frist {
  left: 0;
  z-index: 1;
}
.frist img {
  z-index: 1;
}
.last {
  right: 0;
  z-index: 1;
}
.last p {
  z-index: 1;
}
.runPage {
  right: 0;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
}
.runPage,
.bookPage:last-child {
  background: url(../assets/bookimg/bookRight.png) no-repeat;
  background-size: 479.26px 483.33px;
  background-position: 0 8.3px;
}
.runClass {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.lastBtn,
.nextBtn {
  display: none;
  position: absolute;
  top: 200px;
  cursor: pointer;
  z-index: 999;
  font-size: 50px;
  line-height: 100px;
  color: #fff;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.lastBtn {
  left: 0;
}
.nextBtn {
  right: 0;
}
.canvasBox {
  display: block;
  width: 158px;
  height: 158px;
}
.pageNumber {
  position: absolute;
  bottom: -40px;
  right: 0;
  font-size: 20px !important;
  line-height: 30px;
}
</style>