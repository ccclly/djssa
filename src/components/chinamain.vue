<template>
  <div class="Box">
      <div class="search">

          <div class="daohang">
              <ul>
                  <li>中国滑雪场分布</li>
                  <li>中国冬奥设计</li>
                  <li>中国冬奥防疫</li>
                  <li>中国冬奥黑科技</li>
                  <li>中国冬奥成绩</li>
              </ul>
          </div>
      </div>
      <div class="content">
          <div class="item">
              <div class="oneself">
                 <china></china>
              </div>
          </div>
          <div class="item">
              <div class="music">
				  <div class="medal">
				  	<img src="../assets/medal.png" >
				  </div>
              </div>
          </div>
          <div class="item">
              <div class="cartoon">
				  99999999999999999999999
             </div>  
          </div>
          <div class="item">
              <div class="life">
              </div>
          </div>
          <div class="item">
              <div class="bj">

              </div>
          </div>
        </div>
  </div>
</template>

<script>
	import china from "../components/china.vue";
export default {
		data() {
			return {};
		},
		components: {
			china,

		},
mounted() {
	//获取元素
	var list = document.querySelector('.daohang');
	var lis = list.querySelectorAll('li');
	var items = document.querySelectorAll('.item');
	var imgs = document.querySelector('.bj').querySelectorAll('img');
	//注册事件
	for(var i = 0; i < lis.length; i++){
	    lis[i].setAttribute('index',i);//自定义属性
	    lis[i].onclick = function (){
	         var index = this.getAttribute('index');
	         for(var i = 0; i < items.length; i++){
	             items[i].style.display = 'none';
	         }
	         //留下点击的
	         items[index].style.display = 'block';
	    }
	}
}
}

</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
body{ 
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.Box{
	margin: 0 auto;
    width: 1000px;
    height: 520px;
	background-color: rgba(236, 249, 255, 0.4);
    margin: 0 auto;
	box-shadow: 0 0 15px #7cb7fd;
    // margin-top: 70px;
	margin-bottom: 50px;
    border-radius: 10px;
	.search{
	    float: left;
	    width: 150px;
	    height: 600px;
		.daohang{
		    width: 150px;
		    height:520px;
		    background-color:#6199dd;
			border-top-left-radius:10px;
			border-bottom-left-radius:10px;
			ul{
			    // padding-top: 10px;
				li{
				    width: 150px;
				    height: 30px;
				    line-height: 30px;
				    /* background-color: pink; */
				    margin-top: 10px;
				    text-align: center;
				    cursor: pointer;
					color: white;
				}
				li:hover{
				    background-color: rgb(163, 161, 161);
				}
			}
		}
	}
	.content{
	    float: left;
		.item{
		    display: none;
			.oneself{
                width: 800px;
			     height: 400px;
				 left:0px;
				 top: 15px;
				 position:relative;
				}
				.music{
	      .medal{
				// position: absolute;
				// left: 0;
				// top: 0;
				img{
					width: 50%;
				}
			}
				}
				.cartoon{
				    float: left;
				    margin-top: 30px;
				    margin-left: 30px;
					background-color: black;
					ul{
						li {
						    float: left;
						    font-size: 20px;
						}
					}
				}
				.life{
				    float: left;
				    font-size: 20px;
				    margin-top: 30px;
				    margin-left: 30px;
				}
				.bj{
				    float: left;
				    font-size: 20px;
				    margin-top: 30px;
				    margin-left: 30px;
				}
		}
	}
}

</style>