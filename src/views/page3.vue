<template>
  <div class="Box">
    <div class="search">
      <div class="avatar">
        <!-- <img src="image/ava1.jpg" alt="" /> -->
        <p>孤独等待黎明~</p>
      </div>
      <div class="daohang">
        <ul>
         <router-link to="/page3/test"> <li >添加的一个跳转</li></router-link>
         <router-link to="/page3/test2"> <li>添加的第二个跳转</li></router-link>
          <li>喜欢的动漫</li>
          <li>喜欢的生活</li>
          <li>更换背景</li>
        </ul>
      </div>
    </div>
    <div class="content">
        <router-view></router-view>
      <div class="item">
        <div class="oneself">
          <p>昵称: A</p>
          <p>生日: 1月1日</p>
          <p>爱好: 唱，跳，rap，篮球，刷最右，敲代码</p>
        </div>
      </div>
      <div class="item">
        <div class="music">
          <!-- <img src="image/music.PNG" alt="" /> -->
        </div>
      </div>
      <div class="item">
        <div class="cartoon">
          <ul>
            <li>《火影忍者》</li>
            <li>《鬼灭之刃》</li>
            <li>《斗破苍穹》</li>
            <li>《斗罗大陆》</li>
            <li>《国王排名》</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="life">一个人也很快乐~</div>
      </div>
      <div class="item">
        <div class="bj">
          <ul>
            <!-- <li><img src="image/bj2.jpg" alt="" /></li>
            <li><img src="image/bj3.jpg" alt="" /></li>
            <li><img src="image/bj1.jpg" alt="" /></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
body{ 
    background-image:blue;
    /* url('image/bj2.jpg'); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.Box{
    width: 1000px;
    height: 600px;
    background-color: rgb(88, 86, 86, 0.5);
    margin: 0 auto;
    margin-top: 70px;
    border-radius: 10px;
}
.search{
    float: left;
    width: 150px;
    height: 600px;
    background-color: #fff;
}
.avatar{
    width: 130px;
    height: 150px;
    /* background-color: pink; */
    border-bottom: 1px solid rgb(88, 86, 86);
    margin-left: 9px;
}
.avatar img{
    width: 100px;
    height: 100px;
    padding: 10px 15px;
    border-radius: 50%;
}
.avatar p{
    font-size: 14px;
    text-align: center;
}
.daohang{
    margin-top:10px;
    width: 150px;
    height: 300px;
    background-color: rgb(224, 228, 224);
}
.daohang ul{
    padding-top: 10px;
}
.daohang ul li{
    width: 150px;
    height: 30px;
    line-height: 30px;
    /* background-color: pink; */
    margin-top: 10px;
    text-align: center;
    cursor: pointer;
}
.daohang ul li:hover{
    background-color: rgb(163, 161, 161);
}
.content{
    float: left;
}
.item{
    display: none;
}
.bj{
    width: 450px;
    height: 120px;
    background-color: #fff;
    margin-left: 200px; 
    margin-top: 200px;
}
.bj ul li{
    float: left;
    padding: 0 1px;
}
.bj img{
    width: 146px;
    height: 120px;
}
.cartoon{
    float: left;
    /* background-color: pink; */
    margin-top: 30px;
    margin-left: 30px;
}
.cartoon ul li {
    float: left;
    font-size: 20px;
}
.music{
    float: left;
    width: 850px;
    height: 600px;
}
.music img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.life{
    float: left;
    font-size: 20px;
    margin-top: 30px;
    margin-left: 30px;
}
.oneself{
    margin-top: 20px;
    margin-left: 30px;
}
.oneself p{
    font-size: 20px;
}
</style>