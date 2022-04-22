<template>
  <div class="Box">
    <!-- <input type="button" value="调用子组件的方法" @click="ziff()" /> -->
    <div class="search">
      <div class="daohang">
        <ul>
          <li>冬奥新创意图鉴</li>
          <li>冬奥黑科技图鉴</li>
          <li>中国获奖日历</li>
          <li>滑雪场分布图</li>
          <li>滑雪产业趋势</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="music">
          <design ref="design"></design>
        </div>
      </div>
      <div class="item">
        <div class="life">
          <technology ref="technology"></technology>
        </div>
      </div>
      <div class="item">
        <div class="bj">
          <medaltime></medaltime>
        </div>
      </div>
      <div class="item">
        <div class="oneself">
          <china></china>
          <snowfield></snowfield>
        </div>
      </div>

      <div class="item">
        <div class="cartoon">
          <!-- <xi></xi> -->
          <trend></trend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import china from "../components/china.vue";
import design from "../components/design.vue";
import technology from "../components/technology.vue";
import medaltime from "../components/medaltime.vue";
import snowfield from "../components/Snowfield.vue";
import xi from "../components/xi.vue";
import trend from "../components/trend.vue";
export default {
  data() {
    return {};
  },
  components: {
    china,
    design,
    technology,
    medaltime,
    snowfield,
    xi,
    trend,
  },
  mounted() {
    //获取元素
    var that = this;
    var list = document.querySelector(".daohang");
    var lis = list.querySelectorAll("li");
    var items = document.querySelectorAll(".item");
    var imgs = document.querySelector(".bj").querySelectorAll("img");
    //注册事件
    items[0].style.display = "block";
    lis[0].style.backgroundColor = "rgb(163, 161, 161)";
    for (var i = 0; i < lis.length; i++) {
      lis[i].setAttribute("index", i); //自定义属性
      lis[i].onclick = function () {
        var index = this.getAttribute("index");
        // console.log("点击侧边栏++++————————");
        that.ziff();
        for (var i = 0; i < items.length; i++) {
          items[i].style.display = "none";
          lis[i].style.backgroundColor = "#6199DD";
        }
        //留下点击的
        items[index].style.display = "block";

        lis[index].style.backgroundColor = "rgb(163, 161, 161)";
      };
    }
  },
  methods: {
    ziff() {
      this.$refs.technology.suspended();
      this.$refs.design.suspended();
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

body {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}

.Box {
  margin: 0 auto;
  width: 1000px;
  height: 520px;
  background-color: rgba(236, 249, 255, 0.4);
  margin: 0 auto;
  box-shadow: 0 0 15px #7cb7fd;
  margin-bottom: 50px;
  border-radius: 10px;

  .search {
    float: left;
    width: 150px;
    height: 600px;

    .daohang {
      width: 150px;
      height: 520px;
      background-color: #6199dd;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      ul {
        padding-top: 10px;

        li {
          width: 150px;
          height: 30px;
          line-height: 30px;
		  font-family: KJ;
          margin-top: 10px;
          text-align: center;
          cursor: pointer;
          color: white;
          -webkit-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
        }

        li:hover {
          background-color: rgb(163, 161, 161);
        }
      }
    }
  }

  .content {
    float: left;

    .item {
      display: none;
      width: 850px;
      height: 520px;

      .oneself {
        width: 500px;
        height: 520px;
        left: 0px;
        top: 15px;
        position: relative;
        display: flex;
      }

      .music {
      }

      .cartoon {
        float: left;
        margin-top: 30px;
        margin-left: 30px;

        ul {
          li {
            float: left;
            font-size: 20px;
          }
        }
      }

      .life {
      }

      .bj {
        width: 850px;
        height: 520px;
      }
    }
  }
}
</style>
