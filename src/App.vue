<script>
import earth from './components/earth.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    earth
  }
}
</script>
<template>
	<div id="main">
		<earth></earth>
    <div>yes</div>
	</div>
</template>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	#main {
		cursor:url('./assets/f2.png'),auto;
		background: url(./assets/bj.jpg);
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
