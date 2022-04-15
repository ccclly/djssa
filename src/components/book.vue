<template>
  <section id="knowledge" class="viewBlock">
    <div class="bookBox">
      <a class="lastBtn">《</a>
      <a class="nextBtn">》</a>
      <div class="bookPage frist">
        <img src="../assets/bookimg/dataImg1.png" />
      </div>
      <div class="bookPage runPage">
        <div class="bookWord">
          <span>Glacier</span> is the polar or alpine areas exist on the surface
          for many years and has a natural ice body along the ground motions.
          Ice snow for many years, after compaction, recrystallization, then
          freeze into ice. About 1/10 of the land area of glaciers on earth, and
          4/5 of the fresh water resource is stored in the glacier.
          <span class="pageNumber">1</span>
        </div>
        <img src="../assets/bookimg/dataImg1.png" />
      </div>
      <div class="bookPage runPage">
        <div class="bookWord">
          <span>Surface</span> water is the floorboard of the dynamic water and
          static water on land surface, which belongs to dynamic water lakes,
          rivers, and marshes, is the most important and most direct source of
          water supply, the earth's ecosystem system is to maintain stable
          operation of the blood.
          <span class="pageNumber">2</span>
        </div>
        <img src="../assets/bookimg/dataImg1.png" />
      </div>
      <div class="bookPage runPage">
        <div class="bookWord">
          <span>Groundwater</span> as an important bodies of water, the earth
          has close relationship with human society. Groundwater storage is in
          the ground to form a large reservoir, with its stable water supply
          conditions, good water quality, become the human society of water less
          than nuuk.
          <span class="pageNumber">3</span>
        </div>
        <img src="../assets/bookimg/dataImg1.png" />
      </div>
      <div class="bookPage last">
        <div class="bookWord">
          <span>Ocean</span> is the world's most extensive water, center part of
          the ocean called the, edges as the sea, and communicate with each
          other of unified bodies of water. Contains more than one billion three
          hundred million and five thousand cubic kilometers of sea water,
          accounting for about 97% of the total water on the earth, and can be
          used for human consumption accounts for only 2%.
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
  font-size: 16px;
  color: #333;
  font-family: "Microsoft YaHei";
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
  padding: 40px 0;
}
.bookBox {
  width: 1000px;
  height: 500px;
  position: relative;
  margin: 30px auto;
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
  display: inline-block;
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
  word-break: break-all;
  -webkit-column-count: 2;
  -webkit-column-gap: 40px;
  -moz-column-count: 2;
  -moz-column-gap: 40px;
  -ms-column-count: 2;
  -ms-column-gap: 40px;
  column-count: 2;
  column-gap: 40px;
}
.bookWord span {
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
}
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