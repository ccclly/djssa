<template>
  <div class="Box">
    <clouds></clouds>
    <pie></pie>
  </div>
</template>

<script>
import clouds from "../components/word-cloud.vue";
import pie from "../components/pie-chart.vue";
export default {
  data() {
    return {};
  },
  components: {
    clouds,
    pie,
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
  display: flex;
  box-shadow: 0 0 15px #7cb7fd;
  // margin-top: 70px;
  margin-bottom: 50px;
  border-radius: 10px;
}
</style>