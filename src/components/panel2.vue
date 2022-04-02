<template>
  <div class="Box">
	  <div class="left">
		  <div class="title">
		  	冬奥知识大科普
		  </div>
	  	<video width="625" height="520" controls>
	  	                <source src="/kp.mp4" type="video/mp4">
	  	                <object data="movie.mp4" width="320" height="240">
	  	                    <embed width="625" height="520" src="/kp.mp4">
	  	                </object>
	  	            </video>

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
  margin: 0 auto;
  width: 1000px;
  height: 520px;
  // background-color: rgba(236, 249, 255, 0.4);
  margin: 0 auto;
  display: flex;
  position: relative;
  box-shadow: 0 0 10px #5f7da2;
  // margin-top: 70px;
  margin-bottom: 50px;
  border-radius: 10px;
  .left{
	  width: 625px;
	  height: 520px;
	  position: relative;
	  .title{
	  position: absolute;
      left: 50%;
	  transform: translateX(-50%);
	  top: 20px;
	  font-family: STHeiti;
	  font-weight: bold;
	  color: #5470C6;
	  font-size: 35px;
	  }
	  video{
		  background-color:white;
		  border-top-left-radius:10px;
		  border-bottom-left-radius:10px;
	  }
  }
  .right{
	  width: 375px;
	    border-radius: 10px;
  }
}
</style>