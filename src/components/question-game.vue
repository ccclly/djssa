<template>
	<div class="box">
		<div class="welcomePage">
		  <div class="ice">冰雪知识问答</div>
		
		  <div class="start">开始答题</div>
		  <!-- <div class="foot">© 2019-现在 C & C 版权所有</div> -->
		</div>
		<div class="mainPage">
		  <div class="timeout"></div>
		  <div class="qno"></div>
		  <div class="again"></div>
		</div>
		<div class="scorePage">
		  <div class="score">
		    <h3>您的分数为:</h3>
		    <h1></h1>
		  </div>
		  <!-- <div class="rank">
		    <h2>排行榜</h2>
		    <div class="player1 list"></div>
		    <div class="player2 list"></div>
		    <div class="player3 list"></div>
		    <div class="player4 list"></div>
		    <div class="player5 list"></div>
		    <div class="player6 list"></div>
		    <div class="player7 list"></div>
		    <div class="player8 list"></div>
		    <div class="player9 list"></div>
		    <div class="player10 list"></div>
		  </div> -->
		  <div class="again">再试一次</div>
		</div>
	</div>

</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  mounted() {
    let player = null;
    let score = 0;
    let quizList = null;

    let timeleft = 15;
    let quizleft = 10;
    let rank = localStorage.rank ? JSON.parse(localStorage.rank) : [];
    let status = true;

    quizList = [
      {
        no: 1,
        answer: 1,
        options: [
          "简约、安全、精彩",
          "简约、绿色、精彩",
          "简约、绿色、和谐",
          "简约、安全、和谐",
        ],
        quiz: "中方将竭诚为世界奉献一届（ ）的奥运盛会，践行“更快、更高、更强——更团结”的奥林匹克格言。",
      },
      {
        no: 2,
        answer: 4,
        options: [
          "更快、更高、更强——更和谐",
          "更快、更高、更远——更团结",
          "更快、更高、更远——更和谐",
          "更快、更高、更强——更团结",
        ],
        quiz: "中方将竭诚为世界奉献一届简约、安全、精彩的奥运盛会，践行“（ ）”的奥林匹克格言。",
      },
      {
        no: 3,
        answer: 3,
        options: ["22", "23", "24", "25"],
        quiz: "2022年北京冬奥会是第（ ）届冬奥会",
      },
      {
        no: 4,
        answer: 3,
        options: ["东京", "纽约", "北京", "希腊"],
        quiz: "世界上举办过夏奥运会又举办过冬奥会的城市有？",
      },
      {
        no: 5,
        answer: 1,
        options: ["1", "2", "3", "4"],
        quiz: "北京是全球第（ ）个双奥会城市",
      },
      {
        no: 6,
        answer: 1,
        options: ["意大利", "希腊", "英国", "挪威"],
        quiz: "迄今为止，同时举办过夏奥和冬奥的国家有9个国家，下列国家同时举办过夏奥和冬奥的是？",
      },
      {
        no: 7,
        answer: 4,
        options: ["6", "7", "8", "9"],
        quiz: "在北京成为世界首座“双奥之城”的同时，中国也将成为全球第几个同时举办冬夏两季奥运会的国家？",
      },
      {
        no: 8,
        answer: 2,
        options: ["6", "7", "8", "9"],
        quiz: "北京2022年冬奥会新增几个比赛小项？",
      },
      {
        no: 9,
        answer: 3,
        options: ["10", "62", "109", "160"],
        quiz: "整个冬奥会共将产生几枚金牌？",
      },
      {
        no: 10,
        answer: 4,
        options: ["首都体育馆", "五棵松体育中心", "北京工人体育馆", "鸟巢"],
        quiz: "北京2022年冬奥会和冬残奥会的开、闭幕式,将在国家体育场哪里举办？",
      },
      {
        no: 7,
        answer: 2,
        options: ["中国", "日本", "泰国", "越南"],
        quiz: "亚洲第一个参加冬奥会的国家是？",
      },
      {
        no: 8,
        answer: 3,
        options: ["1996 ", "1988 ", "1992", "1990"],
        quiz: "中国实现冬奥会奖牌零突破的时间？",
      },
      {
        no: 9,
        answer: 1,
        options: ["亨利. 迪东", "顾拜旦", "索尼娅. 海泥", "维凯拉斯"],
        quiz: "奥林匹克格言的提出者是？",
      },
      {
        no: 10,
        answer: 2,
        options: ["李坚柔", "杨杨", "张虹", "王濛"],
        quiz: "中国第一枚冬奥会金牌获得者是?",
      },
      {
        answer: 2,
        options: ["法国", "美国", "英国", "加拿大"],
        quiz: "顾拜日是哪国人?",
      },
      {
        answer: 1,
        options: ["冰墩墩", "雪融融", "冰多多", "海宝"],
        quiz: "冬奥会吉祥物是？",
      },
      {
        answer: 3,
        options: [
          "第一名",
          "第二名",
          "第三名",
          "第四名",
        ],
        quiz: "中国队在北京冬奥会中获得第几名？",
      },
      {
        answer: 2,
        options: ["5", "9", "13", "8"],
        quiz: "中国队在北京冬奥会中获得几枚金牌？",
      },
      {
        answer: 4,
        options: ["10", "11", "14", "15"],
        quiz: "中国队在北京冬奥会中一共获得多少枚奖牌？",
      },
      {
        answer: 4,
        options: ["沈阳", "张家口", "北京", "北京和张家口"],
        quiz: "2022年冬季奥林匹克运动会将在(城市)举行?",
      },
      {
        answer: 3,
        options: ["短道速滑", "跳水", "冰壶", "滑雪"],
        quiz: "以下哪个项目不属于冬奥会的比赛项目?",
      },
      {
        answer: 4,
        options: ["1", "2", "3", "4"],
        quiz: "现代冬奥会几年举行一次?",
      },
      {
        answer: 1,
        options: ["美国普菜西德湖冬奥会", "韩国平昌冬奥会", "法国阿尔贝维尔冬奥会", "加拿大温哥华冬季奥运会"],
        quiz: "中国第一次参加冬奥会是哪一届?",
      },
      {
        answer: 3,
        options: ["5", "6", "7", "8"],
        quiz: "2022年冬奥会有几个大项？",
      },
      {
        answer: 1,
        options: ["冰壶", "滑雪", "短道速滑", "冰球"],
        quiz: "国家游泳中心水立方在2022年将承担哪个项目的比赛?",
      },
      {
        answer: 4,
        options: ["刘翔", "田亮", "刘翔", "申雪"],
        quiz: "从下面选项中哪位是2022年冬奥会形象大使?",
      },
      {
        answer: 3,
        options: ["5", "10", "15", "20"],
        quiz: "2022年冬奥会中预计从奥运村到比赛场馆用时最多不超过几分钟?",
      },
      {
        answer: 1,
        options: ["张艺谋", "徐峥", "陈凯歌", "郑晓龙"],
        quiz: "北京申办2022年冬奥会宣传片总导演是?",
      },
      
    ];

    //输入框浮动效果
    $(".welcomePage .input input").focus(function () {
      $(".welcomePage .input").css("box-shadow", "0px 6px 10px dimgrey");
    });
    $(".welcomePage .input input").blur(function () {
      $(".welcomePage .input").css("box-shadow", "none");
    });

    //开始游戏，转场
    //点击转场
    $(".welcomePage .start").click("ontouchstart", function () {
      if ($(".welcomePage .input input").val() != "1" && status) {
        status = false;
        $(".welcomePage .start").css("box-shadow", "none");
        setTimeout(function () {
          $(".welcomePage").fadeOut(500);
          $(".mainPage").fadeIn(500);
          player = "1";
          refresh();
          delayDone();
        }, 300);
      }
    });
    //按键转场
    $(".welcomePage .input input").keypress(function (e) {
      if (
        $(".welcomePage .input input").val() != "1" &&
        e.key == "Enter" &&
        status
      ) {
        status = false;
        $(".welcomePage .start").css("box-shadow", "none");
        // setTimeout(function () {
        //   $(".welcomePage").fadeOut(500);
        //   $(".mainPage").fadeIn(500);
        //   player = "1";
        //   refresh();
        //   delayDone();
        // }, 300);
      }
    });

    //题目更新
    function refresh() {
      quizleft--;
      if (quizleft < 0) {
        $(".mainPage").fadeOut(500);
        $(".scorePage").fadeIn(500);
        $(".scorePage .again").css("box-shadow", "0px 6px 10px dimgrey");
        //进入分数页面时刷新题目数
        quizleft = 10;
        scoreRefresh();
      } else {
        let question = quizList.splice(
          Math.floor(quizList.length * Math.random()),
          1
        )[0];
        //开始新题目时重置时间
        timeleft = 15;
        // $(".mainPage .timeout").html("15");
        $(".mainPage .qno").html(`
		<div class="question"
  style="
  width: 330px;
  margin: 30px auto;
  background-color: #ffc000;
  color: white;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
  font-weight: bold;
  animation: spin 0.6s 1;"
    >Q${10 - quizleft}: ${question.quiz}</div>
\t\t\t\t<div class="answer" data-index="1" id="a1" 
style=" width: 330px;
  margin: 20px auto;
  background-color: #b3a2c7;
  color: white;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
  animation: spin 0.6s 1;
  transition: box-shadow 0.7s;"
  >1、${question.options[0]}</div>
\t\t\t\t<div class="answer" data-index="2" id="a2"
style=" width: 330px;
  margin: 20px auto;
  background-color: #b3a2c7;
  color: white;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
  animation: spin 0.6s 1;
  transition: box-shadow 0.7s;"
  >2、${question.options[1]}</div>
\t\t\t\t<div class="answer" data-index="3" id="a3"
style=" width: 330px;
  margin: 20px auto;
  background-color: #b3a2c7;
  color: white;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
  animation: spin 0.6s 1;
  transition: box-shadow 0.7s;"
>3、${question.options[2]}</div>
\t\t\t\t<div class="answer" data-index="4" id="a4"
style=" width: 330px;
  margin: 20px auto;
  background-color: #b3a2c7;
  color: white;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
  animation: spin 0.6s 1;
  transition: box-shadow 0.7s;"
>4、${question.options[3]}</div>
		`);
        let countDown = setInterval(function () {
          timeleft--;
          // $(".mainPage .timeout").html(`${timeleft}`);
          // if (timeleft == 0) {
          //   clearInterval(countDown);
          //   $(".mainPage .qno").off("click");
          //   $("#a" + question.answer).css("background-color", "#92d050");
          //   setTimeout(refresh, 2000);
          // }
        }, 1000);
        $(".mainPage .qno").click(function (e) {
          if (e.target.className == "answer") {
            clearInterval(countDown);
            $(".mainPage .qno").off("click");
            $("#a" + e.target.dataset.index).css("box-shadow", "none");
            if (e.target.dataset.index == question.answer) {
              $("#a" + e.target.dataset.index).css(
                "background-color",
                "#92d050"
              );
              score += 10;
            } else {
              $("#a" + question.answer).css("background-color", "#92d050");
              $("#a" + e.target.dataset.index).css("background-color", "red");
            }
            setTimeout(refresh, 2000);
          }
        });
      }
    }

    //刷新排行榜
    function scoreRefresh() {
      $(".scorePage .score h1").html(score);
      if (rank.length == 0) {
        rank.push({
          name: player,
          score: score,
        });
      } else {
        for (let i = 0; i < rank.length; i++) {
          if (score > rank[i].score) {
            rank.splice(i, 0, {
              name: player,
              score: score,
            });
            break;
          }
          if (i == rank.length - 1) {
            rank.push({
              name: player,
              score: score,
            });
            break;
          }
        }
      }
      if (rank.length > 10) {
        rank.splice(10, rank.length - 9);
      }

      rank.forEach(function (item, index) {
        $(".scorePage .rank .player" + (index + 1)).html(
          item.name + "&nbsp&nbsp" + item.score + "分"
        );
      });
      localStorage.rank = JSON.stringify(rank);
      score = 0;
      player = null;
    }

    //重新进入开始界面
    $(".scorePage .again").click(function () {
      if (status) {
        status = false;
        $(".scorePage .again").css("box-shadow", "none");
        setTimeout(function () {
          $(".scorePage").fadeOut(500);
          $(".welcomePage").fadeIn(500);
          $(".welcomePage .start").css("box-shadow", "0px 6px 10px dimgrey");
          delayDone();
        }, 300);
      }
    });

    //等等页面完全fadeout再允许按键
    function delayDone() {
      setTimeout(function () {
        status = true;
      }, 600);
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box{
	width: 100%;
	height: 100%;
	position: relative;
.welcomePage {
  width: 375px;
  height: 100%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  left: 0%;
  top: 0;
  //  rgb(5, 48, 63)
  // background-color: #ddf6f2;
  background-image: url("@/assets/img/aa.png");

  // background-image: url("@/assets/img/Quiz-Time.png"),
  // ,url("@/assets/img/sun.png");
  // background-size: 375px auto;
  background-repeat: no-repeat;
  // background-position: center 50px, 160px bottom;
  z-index: 2;
}
.welcomePage .input {
  height: 40px;
  width: 200px;
  padding: 0 15px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  margin-top: 90px;
  box-shadow: none;
  transition: box-shadow 0.3s;
}
.welcomePage .input input {
  height: 40px;
  width: 170px;
  outline: none;
  border: rgba(0, 0, 0, 0);
  // background-color: rgba(0, 0, 0, 0);
  font-size: 25px;
  line-height: 40px;
  color: white;
}

.welcomePage .ice {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: KJ;
  color: white;
  font-size: 45px;
}

.welcomePage .start {
  height: 50px;
  width: 180px;
  margin: 40px calc((375px - 180px) / 2);
  background-color: darkorange;
  line-height: 46px;
  font-size: 36px;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  border: 2px solid white;
  box-shadow: 0px 6px 10px dimgrey;
  transition: box-shadow 0.3s;
}
.welcomePage .foot {
  position: absolute;
  top: calc(100% - 50px);
  width: 375px;
  text-align: center;
  font-size: 10px;
  color: #6c6c6c;
}
.mainPage {
  width: 375px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgb(255, 255, 255);
  // background-image: url("@/assets/bdd.png");
  background-repeat: no-repeat;
  background-size: 375px auto;
  background-position: bottom;
  z-index: 1;
}
.mainPage .timeout {
  width: 375px;
  height: 40px;
  color: red;
  // background-image: url("@/assets/img/time.png");
  background-repeat: no-repeat;
  background-size: auto 35px;
  background-position: 330px center;
  font-size: 27px;
  font-weight: bold;
  padding-left: 290px;
  line-height: 40px;
}
.mainPage .question {
  width: 330px;
  margin: 30px auto;
  background-color: #ffc000;
  color: white;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
  font-weight: bold;
  animation: spin 0.6s 1;
}
.mainPage .answer {
  width: 330px;
  margin: 20px auto;
  background-color: #b3a2c7;
  color: white;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
  animation: spin 0.6s 1;
  transition: box-shadow 0.7s;
}
@keyframes spin {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(360deg);
  }
}
.scorePage {
  width: 375px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: deepskyblue;
  // background-image: url("@/assets/img/score.png");
  background-repeat: no-repeat;
  background-size: 375px auto;
  background-position: top;
  z-index: 0;
}
.scorePage .score h3 {
  margin-top: 120px;
  text-align: center;
  font-family: KJ;
  font-weight: bold;
  color: white;
  font-size: 25px;
}
.scorePage .score h1 {
  margin-top: 180px;
  text-align: center;
  font-weight: bold;
  font-family: KJ;
  color: rgb(230, 16, 16);
  font-size: 60px;
  text-shadow: 0 0 8px white;
}
.scorePage .rank {
  width: 330px;
  height: 50%;
  margin: 15px auto;
  background-color: darkorange;
  border-radius: 15px;
  box-shadow: 0px 6px 10px dimgrey;
}
.scorePage .rank h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% / 11);
  font-weight: bold;
}
.scorePage .rank .list {
  height: calc(100% / 11);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /*省略号*/
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.scorePage .again {
  height: 50px;
  width: 180px;
  margin: 30px calc((375px - 180px) / 2);
  background-color: #92d050;
  line-height: 46px;
  font-size: 36px;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  border: 2px solid white;
  box-shadow: 0px 6px 10px dimgrey;
  transition: box-shadow 0.3s;
}
}

</style>