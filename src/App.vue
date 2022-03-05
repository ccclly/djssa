<script>
import earth from './components/earth.vue'
import topbar from './components/topbar.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    earth,
	topbar
  }
}
</script>
<template>
	<div id="main">
<!-- 		<div class="topbar">
		<img src="./assets/2022冬奥会.png">
		<text>北京冬奥会可视化</text>
		<img src="./assets/wuhuan.png" >
		</div> -->
		<topbar></topbar>
		<earth></earth>
    <div>yes</div>
	<div>no</div>
	</div>
</template>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	#main {
		background: url(./assets/bj5.jpg);
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
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-height: 70vh;
	}
</style>
