<template>
	<div class="body">
		<div class="stars" ref="starsRef">
			<div class="star" v-for="(item, index) in starsCount" :key="index"></div>
		</div>
		<div class="bigsnow">
			<img src="../assets/bs.png" >
			<div class="hj" @click="dianhuo">
				<img :src="isfire" >
			</div>
		</div>
		 <div>
		    {{ this.$route.params.name }}
		  </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				 count:"",//倒计时
				starsCount: 800, //星星数量
				distance: 900, //间距
				isfire:require('../assets/hynull.png'),
			}
		},
		mounted() {
			console.log(this.$refs.starsRef.children);
			let starNodes = Array.from(this.$refs.starsRef.children);
			starNodes.forEach((item) => {
				let speed = 0.2 + Math.random() * 1;
				let thisDistance = this.distance + Math.random() * 300;
				item.style.transformOrigin = `0 0 ${thisDistance}px`;
				item.style.transform =
					`
		        translate3d(0,0,-${thisDistance}px)
		        rotateY(${Math.random() * 360}deg)
		        rotateX(${Math.random() * -50}deg)
		        scale(${speed},${speed})`;
			});
		},
		methods:{
			dianhuo(){
				this.isfire=require('../assets/hy.gif')
				       const timejump = 1;
				        if(!this.timer){
				            this.count = timejump ;
				            this.show = false;
				            this.timer = setInterval(()=>{
				            if(this.count > 0 && this.count <= timejump ){
				                this.count--;
				            }else{
				                this.show = true;
				                clearInterval(this.timer);
				                this.timer = null;
				                //跳转的页面写在此处
				                this.$router.push({path: '/mainPage'});
				            }
				          },1000)
				        }
			}
		}
	}
</script>

<style lang="less">
	.body {
		position: absolute;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background: url(../assets/bjbj.jpg);
		background-attachment: fixed;
		overflow: hidden;
		.stars {
			transform: perspective(500px);
			transform-style: preserve-3d;
			position: absolute;
			perspective-origin: 50% 100%;
			left: 45%;
			animation: rotate 90s infinite linear;
			bottom: 0;
			.star {
				width: 2px;
				height: 2px;
				background: #f7f7b6;
				position: absolute;
				left: 0;
				top: 0;
				backface-visibility: hidden;
			}
		}
		.bigsnow{
			width: 800px;
			height: 800px;
			position: relative;
			left: 50%;
			top: 50%;
			margin-top: -400px;
			margin-left: -400px;
			img{
				width: 100%;
			}
			.hj{
				cursor: url(../assets/hj22.png), auto;
				width: 100px;
				height: 100px;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-top: -18px;
				margin-left: -47px;
				img{
					width: 100%;
				}
			}
		}
	}

	@keyframes rotate {
		0% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
		}

		100% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
		}
	}

</style>

