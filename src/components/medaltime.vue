<template>
  <div class="container">
    <div class="button prev iconfont icon-zuojiantou"></div>
    <div class="button next iconfont icon-zuojiantou"></div>
    <div class="slide_wrap">
      <ul class="slide_items clearfix">
        <li class="on">
          <span>2月5日</span>
          <div class="circle">
            <i></i>
          </div>
        </li>
        <li>
          <span>2月7日</span>
          <div class="circle">
            <i></i>
          </div>
        </li>
        <li>
          <span>2月8日</span>
          <div class="circle">
            <i></i>
          </div>
        </li>
        <li>
          <span>2月10日</span>
          <div class="circle">
            <i></i>
          </div>
        </li>
        <li>
          <span>2月11日</span>
          <div class="circle">
            <i></i>
          </div>
        </li>
        <li>
          <span>2月12日</span>
          <div class="circle">
            <i></i>
          </div>
        </li>
        <li>
          <a href="jacascript:;">
            <span>2月13日</span>
            <div class="circle">
              <i></i>
            </div>
          </a>
        </li>
        <li>
          <a href="jacascript:;">
            <span>2月14日</span>
            <div class="circle">
              <i></i>
            </div>
          </a>
        </li>
        <li>
          <a href="jacascript:;">
            <span>2月15日</span>
            <div class="circle">
              <i></i>
            </div>
          </a>
        </li>
        <li>
          <a href="jacascript:;">
            <span>2月16日</span>
            <div class="circle">
              <i></i>
            </div>
          </a>
        </li>
        <li>
          <a href="jacascript:;">
            <span>2月18日</span>
            <div class="circle">
              <i></i>
            </div>
          </a>
        </li>
        <li>
          <a href="jacascript:;">
            <span>2月19日</span>
            <div class="circle">
              <i></i>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 对应的内容 -->
    <div class="slide-content">
      <ul class="on">
        <li><img src="../assets/img/t1.png" alt="" /></li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t2.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t3.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t4.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t5.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t6.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t7.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t8.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t9.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t10.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t11.png" alt="" /></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/t12.png" alt="" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import * as es from "../assets/js/jquery.easing.min.js";
export default {
  data() {
    return {};
  },
  mounted() {
    // 声明变量
    // 1、li元素的宽度  $li_width
    var $li = $(".slide_items li");
    var $li_width = $li.width();
    var $ul = $(".slide_items");
    // 2、ul dom
    var $ul_dom = $(".slide_items");
    // 3、定义移动的初始值
    var go = 0;
    // 上一个
    // 计算ul的宽度
    var ul_width = 0;
    for (var i = 0; i < $li.length; i++) {
      ul_width += $li.eq(i).width();
    }
    $ul.width(ul_width);
    // 定义初始标记
    var flag = 0;
    $(".button.next").on("click", function (e) {
      go_next();
    });

    $(".button.prev").on("click", function () {
      go_prev();
    });
    $(".slide_items li").on("click", function (e) {
      var index = $(this).index();
      flag = index;
      go_next_item(index);
      return false;
    });
    var go_next_length = 0;

    //  向右动画函数
    function go_next() {
      if (flag > $li.length - 2) {
        return false;
      }
      flag = flag + 1; //下标的标记
      go = go + $li_width;
      go_next_length = -go;
      move(); //移动函数
      // // 活跃的年份
      onYear(flag);
      content_switch(flag);
    }
    function go_next_item(index) {
      go = $li_width * index;
      go_next_length = -go;
      move();
      onYear(index);
      content_switch(index);
    }
    //  向右动画函数向左函数动画
    function go_prev() {
      if (flag <= 0) {
        return false;
      }
      flag = flag - 1; //下标的标记
      go = go - $li_width;
      go_next_length = -go;
      move(); //移动函数
      onYear(flag);
      content_switch(flag);
    }
    // 移动函数
    function move() {
      $ul_dom.stop().animate(
        {
          left: go_next_length,
        },
        800,
        "easeOutCirc"
      );
    }
    // 活跃的年份
    function onYear(index) {
      var index;
      $(".slide_items li")
        .eq(index)
        .addClass("on")
        .siblings()
        .removeClass("on");
    }

    function content_switch(index) {
      $(".slide-content ul").eq(index).fadeIn(800).siblings().hide();
    }
  },
};
</script>

<style scoped>
/* css 的初始化 */

/* 指定当前css文件, 编码格式是utf-8 */
@charset "UTF-8";

/* 清除默认的外边距和内边距 */
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
img {
  margin: 0;
  padding: 0;
}

img,
input,
button,
textarea {
  border: none;
  padding: 0;
  margin: 0;
  outline-style: none;
}

ul,
ol {
  list-style: none;
}

input {
  font-family: "SimSun", "宋体";
}

select,
input,
textarea {
  font-size: 12px;
  margin: 0;
}

textarea {
  resize: none;
}

img {
  border: 0;
  /* 可以防止 img 下边出现缝隙问题 */
  vertical-align: middle;
  border-radius: 12px;
  box-shadow: 10px 10px 10px #4a4a4a;
}
.medal_1 {
  width: 850px;
  height: 520px;
  background-color: #00d6b2;
}
table {
  border-collapse: collapse;
}

body {
  /* 将整个页面的字体, 默认重置 */
  font: 12px/18px Microsoft YaHei, Arial, Verdana, "SimSun";
  color: #666;
  background: #fff;
}

.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}

.clearfix::after {
  clear: both;
}

/* 兼容 IE 67 */
.clearfix {
  *zoom: 1;
}

a {
  color: #666;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-decoration: none;
  font-weight: normal;
  font-size: 100%;
}

/* 废物利用 1*/
s,
i,
em {
  font-style: normal;
  text-decoration: none;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1457575_wc4kbab342e.eot?t=1571103794780"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1457575_wc4kbab342e.eot?t=1571103794780#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ0AAsAAAAACMAAAAPmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqETIQbATYCJAMUCwwABCAFhG0HWRu4B8gehXEsLBShUansf34QD19r6Pu7exdglJGA46Oo44HAAilVYVtjO/UEwuX/dOp3TiETj7eViAQFMpxsGSJXOhdQLpCnEsEaAJyKOOa5yu3/71A1c1peaH6LxeUu+7LmpIQGYCgdQLXa3lgqWQtSUe8yNhm+gkz1HR8TaDauL93+9Lks5CnIVYG4LIV8kBf5lQ5paHTVlQeLeA/ZGtOLrAoA7/Tvxy8YHHkkVUZuPDg7LQgTv+o+9ENaRoOVkgLGw0UxeoyMVaAQN6vxy5Ctr0KaF6cztoFmjZJ0qOOyP/T+0C+TwVtuyNlM/+GRFSERNWJvxcztRuGrjmvJfM021By9wSvA0Q8aEl7XgzSjDR9A9AMRjLooq2Sp22szIuUggx41cA42cVLNnHTjDdzao9qxtEc4kXLzxw/6qIszyuoxg+nMwY2I1knSQFIbn+xr+sA3fxQa33MN7zYzwhoc3tz0IWhJHzt1VG9+efzMCYE9qkjqQJX0MY3lOIrwAa0pwMck7Gk6mpuFpqaNjPAGh9mGhhXGo8qPH3Sy0WPpO2fgNZ3IXrLCBtZrHDt6nQbC9klVPTnxIUMKufWH0xtAeFjJWd/YuPZ21s6KF3O2N1bu1avuxtf213ndDi08MDocHn3gIkMKufWL00nI7GjJxji7hXoxFhY/YTpSXcTkNRawFg0xWJpTvrzunf9a91bfW48nv9yvqyO2Cqs47BCtldaWN0MqbwhvqLABnpnwgvmbecm8apCVPWf+RRHCJxnUARdRYzO6jC6h2EV0YSG5hC7fNuKYrNKN7owndPnKBvdG8TIXuO+pVH74w/MTJrybgCd0TbgwgJ4OSwFOW9EN1ENf3oCeoIkA5E+6R3+Ov/F/+pzCNZax/xsNBXwunzYY5k41BvJzgG/YYWPjX8G44UpZmkmgKvNFbpgnK+tvoj0tdprxB0h36zqMs2/jYUKjPg9JgzHIGs1SC3MVKi3WoNZoC5qtmPF4ix4KJEoTlu1BEDo9gKTdR8g6VVILsxMq/b5DrTMQNDsMxwtbzIekn6IQHyVB7N+EpYBcILIQ1ZvRxSSUjPmU0KwVPFFUqYQH9R+YtmaQAqIc4hZ1fWgwpSIWFTmOp6PPkVhMxglFjpAA7R+mNDF6wACx9k39A3Ic9PYoCB+KCML8NsEkAbICotxO6bOfX4wISYrxUTqWLnR5hEIlHR0bpL+BG1Bn2As2WnopX1GtFzIYRYkwkUIWh01HUSJG6zIsUT8vggig+gvvUE0YbQDeJG5q7396Z/w9PgTNyMuqSJGjRBW15ouSr4DKyU3MaXDVfpuTsp6bQmeu9gEAAAA=")
      format("woff2"),
    url("//at.alicdn.com/t/font_1457575_wc4kbab342e.woff?t=1571103794780")
      format("woff"),
    url("//at.alicdn.com/t/font_1457575_wc4kbab342e.ttf?t=1571103794780")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1457575_wc4kbab342e.svg?t=1571103794780#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiantouyou:before {
  content: "\e62a";
}

.icon-jiantou-zuo:before {
  content: "\e62d";
}

.icon-zuojiantou:before {
  content: "\e601";
}

.icon-jiantou:before {
  content: "\e605";
}

.button {
  position: absolute;
  cursor: pointer;
  top: 15%;
  font-size: 40px;
  color: #333;
}
.prev {
  left: -20px;
}
.next {
  right: -20px;
  transform: rotate(-180deg);
}
.container {
  width: 850px;
  /*    margin: 0 auto; */
  height: 500px;
  position: relative;
  /*    padding: 50px; */
  transform: scale(70%);
  bottom: 70px;
}
.slide_wrap {
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  margin-bottom: -40px;
}
.slide_wrap ul {
  position: relative;
  left: 0px;
}
.slide_wrap::after {
  width: 100%;
  height: 1px;
  background-color: #999;
  content: "";
  position: absolute;
  top: 48px;
  left: 0px;
}
.slide_items li {
  float: left;
  font-size: 20px;
  width: 200px;
  text-align: center;
}
.slide_items li a {
  display: block;
}
.slide_items li.on {
  color: yellow;
  border-radius: 30px;
}
.slide_items li span {
  color: #333333;
  font-size: 24px;
  display: block;
}
.slide_items li div {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #a2a2a2;
  border-radius: 13px;
  padding: 2px;
  box-sizing: border-box;
  margin-top: 22px;
}
.slide_items li i {
  display: block;
  width: 10px;
  height: 10px;
  background-color: #a2a2a2;
  border-radius: 5px;
}
.slide_items li.on div {
  display: inline-block;
  width: 26px;
  height: 26px;
  background-color: #d3d3d3;
  border-radius: 13px;
  padding: 8px;
  box-sizing: border-box;
  margin-top: 16px;
}

.slide-content {
  margin-top: 100px;
}
.slide-content img {
  width: 100%;
}
.slide-content ul {
  display: none;
}
.slide-content ul.on {
  display: block;
}
</style>