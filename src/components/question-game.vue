<template>
  <div class="welcomePage">
    <div class="input">
      <input type="text" placeholder="输入您的姓名" />
    </div>
    <div class="start">开始游戏</div>
    <div class="foot">© 2022-现在 C & C 版权所有</div>
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
    <div class="rank">
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
    </div>
    <div class="again">再试一次</div>
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
    // 问答题题目（10道）
    let quizList = [
      {
        no: 1,
        answer: 1,
        options: ["官名", "人名", "地名", "食材"],
        quiz: "名菜「宫保鸡丁」中的「宫保」是什么东西？",
      },
      {
        no: 2,
        answer: 4,
        options: ["库里", "奥尼尔", "詹姆斯", "科比"],
        quiz: "有着「黑曼巴」之称的篮球明星是？",
      },
      {
        no: 3,
        answer: 3,
        options: ["1945", "1941", "1942", "1944"],
        quiz: "二战中美国第一次轰炸日本本土是哪一年？",
      },
      {
        no: 4,
        answer: 1,
        options: [
          "文章写得好",
          "女子美丽的样子",
          "事情的来龙去脉",
          "画画画的好",
        ],
        quiz: "「取青妃白」所指的意思是？",
      },
      {
        no: 5,
        answer: 2,
        options: ["悠悠我心", "在水一方", "与子偕老", "君子好逑"],
        quiz: "「蒹葭苍苍，白露为霜。所谓伊人」的下一句是？",
      },
      {
        no: 6,
        answer: 4,
        options: ["银", "铁", "铜", "铅"],
        quiz: "松花蛋吃多了容易导致哪种重金属元素中毒？",
      },
      {
        no: 7,
        answer: 3,
        options: ["莫愁湖", "西湖", "青海湖", "洞庭湖"],
        quiz: "古代称为「西海」，蒙古语称为「库库诺尔」的地方是？",
      },
      {
        no: 8,
        answer: 2,
        options: ["企业价值", "市盈率", "净利润", "市净值"],
        quiz: "金融业常说的「P/E」是指？",
      },
      {
        no: 9,
        answer: 4,
        options: ["巴西", "中国", "俄罗斯", "加拿大"],
        quiz: "世界上国土面积第二大的国家是？",
      },
      {
        no: 10,
        answer: 4,
        options: ["CAD", "CHF", "RMB", "CNY"],
        quiz: "人民币的货币代码是？",
      },
    ];
    let timeleft = 15;
    let quizleft = 10;
    let rank = localStorage.rank ? JSON.parse(localStorage.rank) : [];
    let status = true;

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
      if ($(".welcomePage .input input").val() != "" && status) {
        status = false;
        $(".welcomePage .start").css("box-shadow", "none");
        setTimeout(function () {
          $(".welcomePage").fadeOut(500);
          $(".mainPage").fadeIn(500);
          player = $(".welcomePage .input input").val();
          refresh();
          delayDone();
        }, 300);
      }
    });
    //按键转场
    $(".welcomePage .input input").keypress(function (e) {
      if (
        $(".welcomePage .input input").val() != "" &&
        e.key == "Enter" &&
        status
      ) {
        status = false;
        $(".welcomePage .start").css("box-shadow", "none");
        setTimeout(function () {
          $(".welcomePage").fadeOut(500);
          $(".mainPage").fadeIn(500);
          player = $(".welcomePage .input input").val();
          refresh();
          delayDone();
        }, 300);
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
        $(".mainPage .timeout").html("15");

        //答题页面的样式不显示，提升为class为定义不知道为啥
        $(".mainPage .qno").html(`
		<div class="question">Q${10 - quizleft}: ${question.quiz}</div>
\t\t\t\t<div class="answer" data-index="1" id="a1">1、${
          question.options[0]
        }</div>
\t\t\t\t<div class="answer" data-index="2" id="a2">2、${
          question.options[1]
        }</div>
\t\t\t\t<div class="answer" data-index="3" id="a3">3、${
          question.options[2]
        }</div>
\t\t\t\t<div class="answer" data-index="4" id="a4">4、${
          question.options[3]
        }</div>
		`);
        let countDown = setInterval(function () {
          timeleft--;
          $(".mainPage .timeout").html(`${timeleft}`);
          if (timeleft == 0) {
            clearInterval(countDown);
            $(".mainPage .qno").off("click");
            $("#a" + question.answer).css("background-color", "#92d050");
            setTimeout(refresh, 2000);
          }
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
.welcomePage {
  width: 375px;
  height: 100%;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  background-color: deepskyblue;
  background-image: url("@/assets/img/Quiz-Time.png"),
    url("@/assets/img/sun.png");
  background-size: 375px auto;
  background-repeat: no-repeat;
  background-position: center 50px, 160px bottom;
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
  background-color: rgba(0, 0, 0, 0);
  font-size: 25px;
  line-height: 40px;
  color: white;
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
  position: fixed;
  top: calc(100% - 50px);
  width: 375px;
  text-align: center;
  font-size: 10px;
  color: #6c6c6c;
}
.mainPage {
  width: 375px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: deepskyblue;
  background-image: url("@/assets/img/background.png");
  background-repeat: no-repeat;
  background-size: 375px auto;
  background-position: bottom;
  z-index: 1;
}
.mainPage .timeout {
  width: 375px;
  height: 40px;
  color: red;
  background-image: url("@/assets/img/time.png");
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
  position: fixed;
  left: 0;
  top: 0;
  background-color: deepskyblue;
  background-image: url("@/assets/img/score.png");
  background-repeat: no-repeat;
  background-size: 375px auto;
  background-position: top;
  z-index: 0;
}
.scorePage .score h3 {
  margin-top: 70px;
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 25px;
}
.scorePage .score h1 {
  text-align: center;
  font-weight: bold;
  color: red;
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
</style>