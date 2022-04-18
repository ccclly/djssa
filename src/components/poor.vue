<template>
  <div>
    <div id="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initchart();
  },
  methods: {
    initchart() {
      let myChart = echarts.init(document.querySelector("#chart"));
      let resultData = {
        status: "success",
        data: [
          {
            name: "0.038%",
            value: 900,
            til: "冬奥助力脱贫",
            txt: "截至2019年底，崇礼区贫困发生率从2015年底的16.81%下降至0.038%",
            url: "https://baijiahao.baidu.com/s?id=1669027554612641321&wfr=spider&for=pc",
            draggable: true,
          },
          {
            name: "3万",
            value: 700,
            til: "创造岗位",
            txt: "直接或间接从事冰雪产业和旅游服务人员达3万多人，其中贫困人口9000多人",
            url: "https://baijiahao.baidu.com/s?id=1729577042265489494&wfr=spider&for=pc",
            draggable: true,
          },
          {
            name: "500万",
            til: "冰雪运动全面普及",
            value: 600,
            txt: "梦圆“冰雪”张家口市冰雪运动参与人次突破500万",
            url: "https://zjk.focus.cn/zixun/007c2c8f0e7b6d9b.html",
            draggable: true,
          },
          {
            name: "93.9万",
            til: "冬奥助力脱贫",
            value: 1800,
            txt: "张家口12个贫困县区、1970个贫困村、93.9万贫困人口全部实现脱贫",
            url: "https://baijiahao.baidu.com/s?id=1722354796404105173&wfr=spider&for=pc",
            draggable: true,
          },
          {
            name: "3.46亿",
            til: "冬奥会带动“冰雪热”",
            value: 1800,
            txt: "全国冰雪运动参与人数为3.46亿人，居民参与率达24.56%，“带动三亿人参与冰雪运动”目标已经实现。",
            url: "http://news.youth.cn/qdc/pic_list/202202/t20220222_13469644.htm",
            draggable: true,
          },
          {
            name: "100%",
            til: "首个“碳中和”冬奥会",
            value: 1800,
            txt: "北京冬奥会向世界展现中国环保力量",
            url: "https://m.thepaper.cn/baijiahao_16767758",
            draggable: true,
          },
          // {
          //   name: "增强民族自信心",
          //   value: 900,
          //   txt: "在世界上提升我国的知名度，让世界其他的国家了解到我们。",
          //   url: "http://www.yznews.com.cn/yzwzt/2022-02/12/content_7361875.htm",
          // },
          {
            name: "4亿元",
            til: "冰天雪地是金山银山",
            value: 1200,
            txt: "数据显示，寒区试车产业每年冬季可为黑河带来超过4亿元的消费收入。",
            url: "https://baijiahao.baidu.com/s?id=1723704255322631956&wfr=spider&for=pc",
            draggable: true,
          },
        ],
        msg: "exercitation in",
      };

      //  颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
      let colorList = [
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: "rgba(59, 181, 182, 1)",
          },
          {
            offset: 1,
            color: "rgba(66, 227, 151, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(254, 220, 69, 1)",
          },
          {
            offset: 1,
            color: "rgba(251, 112, 153, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(0, 138, 255, 1)",
          },
          {
            offset: 1,
            color: "rgba(0, 216, 255, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: "rgba(246, 191, 159, 1)",
          },
          {
            offset: 1,
            color: "rgba(219, 138, 222, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(247, 138, 158, 1)",
          },
          {
            offset: 0.5,
            color: "rgba(245, 111, 135, 0.5)",
          },
          {
            offset: 1,
            color: "rgba(254, 152, 139, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(144, 125, 228, 1)",
          },
          {
            offset: 1,
            color: "rgba(33, 223, 209, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: "rgba(32, 156, 255, 1)",
          },
          {
            offset: 1,
            color: "rgba(104, 224, 207, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(94, 209, 225, 1)",
          },
          {
            offset: 0.5,
            color: "rgba(191, 194, 254, 0.5)",
          },
          {
            offset: 1,
            color: "rgba(232, 189, 219, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(238, 114, 125, 1)",
          },
          {
            offset: 1,
            color: "rgba(253, 162, 63, 0.2)",
          },
        ]),
      ];
      let colorListLen = colorList.length;

      // 生成随机坐标的不重叠圆
      function drawCircles(maxLength, radius, max_x, max_y) {
        let circles = [];
        let anti_crash_count = 0;
        while (circles.length < maxLength) {
          let circle = {
            x: getRandomNumber(radius, max_x - radius),
            y: getRandomNumber(radius, max_y - radius),
            radius,
          };

          let isOverlapping = false;

          for (let j = 0; j < circles.length; j++) {
            let previous_circle = circles[j];
            let distance = Math.hypot(
              circle.x - previous_circle.x,
              circle.y - previous_circle.y
            );

            if (distance < circle.radius + previous_circle.radius) {
              isOverlapping = true;
              break;
            }
          }

          if (!isOverlapping) {
            circles.push(circle);
          }
          anti_crash_count++;
          if (anti_crash_count > 10000) {
            break;
          }
        }
        return circles;
      }

      // 生成随机数坐标
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      // 数据数组
      let countList = resultData.data;
      var showData = [];
      var sum = 0,
        max = 0;
      countList.forEach((e, i) => {
        e.id = i;
        e.label = {
          normal: {
            show: true,
            color: "#fff", //"rgba(23,124,231)", // "#fff",//"rgba(30,30,60)", //气泡的字体颜色
            fontWeight: "bold",
          },
        };
        e.itemStyle = {
          normal: {
            color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [
              {
                offset: 0,
                color: "#409eff",
              },
              {
                offset: 1,
                color: "rgba(1,98,156,0.6)",
              },
            ]),
            opacity: 0.8,
            shadowColor: "#409eff",
            shadowBlur: 10,
            shadowOffsetX: 1,
            shadowOffsetY: 1,

            // color: colorList[Math.floor(Math.random() * colorListLen)],
            // shadowBlur: 16,
            // shadowOffsetY: 16,
            // shadowColor: "rgba(0,0,0,0.1)",
          },
        };
        sum += e.value;
        if (e.value >= max) max = e.value;
      });
      // 放大规则
      var number = Math.round(max * 0.5);
      let graphCanvas = document
        .querySelector("#chart")
        .getBoundingClientRect();
      let randomCircleArr = drawCircles(
        countList.length,
        ((max + number) / max) * 8,
        graphCanvas.width,
        graphCanvas.height
      );
      countList.forEach((e, i) => {
        if (randomCircleArr[i]) {
          e.x = randomCircleArr[i].x;
          e.y = randomCircleArr[i].y;
          e.symbolSize = ((e.value + number) / max) * 50;
          e.label.normal.fontSize = ((e.value + number) / max) * 15;
        } else {
          e.symbolSize = 0;
          e.x = 0;
          e.y = 0;
        }
      });
      var option = {
        title: {},
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (params["data"]["name"] !== "") {
              return (
                "<b>" +
                params["data"]["til"] +
                "</b>：<b>" +
                params["data"]["txt"] +
                " </b>"
              );
            }
          },
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
        },
        series: [
          {
            name: "词条分布",
            type: "graph",
            layout: "force",
            // layout: "none",
            force: {
              repulsion: 89,
              collideStrength:0.8,
              edgeLength: 22,
            },
            roam: "scale",
            label: {
              show: true,
              normal: {
                color: "rgba(30,30,30)",
              },
            },
            data: countList,
          },
        ],
      };

      myChart.setOption(option);
      var url = this.url;
      var d = this.dialogTableVisible;
      myChart.on("click", (params) => {
        // console.log(params.data.url);
        window.open(params.data.url, "_blank");
      });
    },
  },
};
</script>
<style lang="less" scoped>
#chart {
  position: relative;
  top: 10px;
  width: 300px;
  height: 27vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

