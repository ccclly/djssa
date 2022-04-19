<template>
  <div class="topbar">
    <img
      class="img1"
      :src="leftimg"
      @mouseenter="mouseenter1"
      @mouseleave="mouseleave1"
      @click="img1To"
    />
    <div class="txt">
      <text class="txt1">北京冬奥会可视化</text>
      <text class="txt2">
        <router-link exact to="/mainPage" ref="l1">首页</router-link>
        <router-link exact to="/page2" ref="l2">知识专区</router-link>
        <router-link exact to="/page3" ref="l3">三大赛区</router-link>
        <router-link exact to="/page8">冬奥时政</router-link>
        <router-link exact to="/page4" ref="l4">科普答题</router-link>
      </text>
    </div>
    <img
      :src="rightimg"
      @mouseenter="mouseenter2"
      @mouseleave="mouseleave2"
      @click="img2To"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftimg: require("../assets/dah3.png"),
      rightimg: require("../assets/wuhuan2.png"),
    };
  },
  mounted() {
    let l1 = this.$refs.l1;
    let l2 = this.$refs.l2;
    let l3 = this.$refs.l3;
    let l4 = this.$refs.l4;
    if (this.$route.path === "/mainPage") {
      console.log("dddd");
    }
  },
  methods: {
    // 2、进入元素
    mouseenter1() {
      this.leftimg = require("../assets/dah.png");
    },
    // 5、离开元素
    mouseleave1() {
      this.leftimg = require("../assets/dah3.png");
    },
    // 2、进入元素
    mouseenter2() {
      this.rightimg = require("../assets/wuhuan.png");
    },
    // 5、离开元素
    mouseleave2() {
      this.rightimg = require("../assets/wuhuan2.png");
    },
    img1To() {
      window.open("https://www.beijing2022.cn/", "_blank");
    },
    img2To() {
      window.open("https://olympics.com/en/", "_blank");
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.topbar {
  position: absolute;
  top: 10px;
  height: 15vh;
  // background-color: rgba(236, 249, 255, 0.4);
  // border-radius: 12px;
  display: flex;
  justify-content: center;

  img {
    cursor: pointer;
  }

  .txt {
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .txt1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: KJ;
      color: white;
      font-size: 45px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    .txt2 {
      display: flex;
      margin-top: 5px;
      // flex-direction: column;
      justify-content: center;
      font-family: KJ;
      color: white;
      // font-weight: bold;
      font-size: 14px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;

      // text-decoration: none;
      a {
        text-decoration: none;
        color: white;
        font-size: 18px;
        margin: 0 5px;
      }
      a:hover {
        color: #0669d2; /*鼠标移动到链接的颜色*/
      }

      // a:active {
      //     color: orange; /*鼠标点击时的颜色*/
      // }
      .router-link-active {
        color: #0669d2;
      }
    }
  }
}
</style>
