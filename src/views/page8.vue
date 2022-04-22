<template>
  <div id="contain">
    <div class="min">
      <div class="min_one">
        <topbar></topbar>
      </div>
      <div class="min_two">
        <xi :key="menukey"></xi>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "../components/topbar.vue";
import xi from "../components/xi.vue";
import { goSnow } from "@/assets/js/snow.js";
export default {
  data() {
    return {
      menukey: 0,
      setDateTime: null,
    };
  },
  mouted() {
    // console.log("+++++++++++++++" + this.data.mounted);
    this.setDateTimeInterval();
    this.name = this.$route.params.name;
    this.getPathFun();
  },
  methods: {
    // 设置定时器
    setDateTimeInterval() {
      this.setDateTime = setInterval(() => {
        this.menukey++;
      }, 1000 * 60 * 3);
    },
    // 清除定时器
    destroyed() {
      clearInterval(this.setDateTime);
      this.setDateTime = null;
    },
    getPathFun() {
      if (this.$route.path === "/page7") {
        var snowBox = "contain", //雪花容器
          src = "https://s1.ax1x.com/2022/04/11/LZgood.png", //雪花图基本命名<图片名就是snow+1/2/3/4...>
          num = 40, //雪花数量
          style = 2; //图片种类数
        goSnow(snowBox, src, num, style);
      }
    },
  },
  components: {
    xi,
    topbar,
  },
};
</script>
<style scoped lang="less">
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
  align-items: center;
  min-height: 70vh;

  .min {
    display: flex;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .min_one {
      width: 50%;
      flex: 1;
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      justify-content: center;
    }

    .min_two {
      .Box {
        margin: 0 auto;
        width: 800px;
        height: 500px;
        box-shadow: 0 0 10px #5470c6;
        margin-bottom: 100px;
        border-radius: 10px;

        video {
          width: 100%;
          background-color: #5470c6;
          border-radius: 10px;
        }
      }
    }
  }

  .imgs {
    width: 340px;
    height: 450px;
    position: absolute;
    left: 15px;
    top: 20%;

    .title {
      width: 340px;
      height: 50px;
      font-family: KJ;
      font-size: 40px;
      text-align: center;
      color: #5470c6;
      margin-bottom: 5px;
    }

    img {
      width: 100%;
    }
  }

  .medal {
    width: 340px;
    height: 450px;
    position: absolute;
    right: 15px;
    top: 20%;
    color: #c71332;

    img {
      width: 100%;
    }

    .num {
      width: 100%;
      height: 20%;
      display: flex;
      font-family: SZ;
      font-size: 100px;
      text-align: center;

      .gold {
        flex: 1;
        border-right: 1px solid #000000;
      }

      .silver {
        flex: 1;
        border-right: 1px solid #000000;
      }

      .copper {
        flex: 1;
      }
    }
  }
}
</style>
