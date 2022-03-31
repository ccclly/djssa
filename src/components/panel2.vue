<template>
  <div class="Box">
	  <div class="left">
	  	
	  </div>
	  <div class="right">
	  	    <game></game>
	  </div>
  </div>
</template>

<script>
import game from "../components/question-game.vue";

export default {
  data() {
    return {};
  },
  components: {
    game,
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
	background-color: red;
  margin: 0 auto;
  width: 1000px;
  height: 520px;
  background-color: rgba(236, 249, 255, 0.4);
  margin: 0 auto;
  display: flex;
  position: relative;
  box-shadow: 0 0 15px #7cb7fd;
  // margin-top: 70px;
  margin-bottom: 50px;
  border-radius: 10px;
  .left{
	  width: 625px;
  }
  .right{
	  width: 375px;
  }
}
</style>