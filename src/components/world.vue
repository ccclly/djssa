<template>
  <div class="Box">
      <worldrank></worldrank>
  </div>
</template>

<script>
import worldrank from "../components/worldrank.vue";
export default {
  data() {
    return {};
  },
  components: {
    worldrank,
  },
  mounted() {},
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
  // margin-top: 70px;
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
        // padding-top: 10px;
        li {
          width: 150px;
          height: 30px;
          line-height: 30px;
          /* background-color: pink; */
          margin-top: 10px;
          text-align: center;
          cursor: pointer;
          color: white;
        }
        li:hover {
          background-color: rgb(163, 161, 161);
        }
      }
    }
  }
}
</style>