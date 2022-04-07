<template>
  <div id="myChart" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    let myCharts = echarts.init(this.$refs.myChart);
    var option;
    var colorList = [
      "#afa3f5",
      "#00d488",
      "#3feed4",
      "#3bafff",
      "#f1bb4c",
      "#3feed4",
    ];
    var colorList1 = [
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
    ];
    var sportsIcon = {};
    option = {
      silent: true,
      title: {
        show: true,
        text: "情感分析结果",
        x: "center",
        y: "bottom",
        // 文字的颜色,默认 #333。
        color: "#666",
        fontSize: 24,
      },
      series: [
        // 主要展示层的
        {
          radius: ["0%", "75%"],
          center: ["50%", "50%"],
          type: "sunburst",
          startAngle: 0,
          minAngle: 15,
          nodeClick: "link",
          z: 1,
          label: {
            fontSize: 16,
            color: "#fff",
            normal: {
              padding: [0, -60],
              formatter: function (params) {
                var str = "";
                switch (params.name) {
                  case "体育技能":
                    str =
                      // 498 349 188
                      "{rate|48}" +
                      "{nameStyle1| %|积极评论 }\n{nameStyle| \xa0\xa0\xa0\xa0  }";
                    break;
                  case "体育行为":
                    str =
                      "{rate|34}" +
                      "{nameStyle1| %|中性评论 }\n{nameStyle| \xa0\xa0\xa0\xa0 }";
                    break;
                  case "体质健康":
                    str =
                      "{rate|18}" +
                      "{nameStyle1| %|消极评论 }\n{nameStyle| \xa0\xa0\xa0\xa0 }";
                    break;
                }
                return str;
              },
              rich: {
                rate: {
                  fontSize: 45,
                  color: "#fff",
                  fontWeight: "bold",
                  lineHeight: 25,
                  textShadowColor: "transparent",
                },
                nameStyle: {
                  fontSize: 14,
                  color: "#fff",
                  align: "center",
                  lineHeight: 25,
                },
                nameStyle1: {
                  fontSize: 16,
                  color: "#fff",
                  align: "center",
                  fontWeight: "bold",
                  lineHeight: 25,
                },
              },
            },
          },
          levels: [
            {},

            {
              selectedMode: "true",
              itemStyle: {
                color: "#fff",
              },
              label: {
                rotate: "tangential",
                align: "right",
                position: "insideRight",
                distance: 70,
              },
            },
          ],
          itemStyle: {
            borderWidth: 10,
            color: "#fff",
          },
          data: [
            {
              value: 188,
              name: "体质健康",
              target: "blank",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFCA43" },
                  { offset: 1, color: "#FEC436" },
                ]),
              },
            },
            {
              value: 348,
              name: "体育技能",
              target: "blank",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FF5A4D" },
                  { offset: 1, color: "#FF7D77" },
                ]),
              },
            },
            {
              value: 349,
              name: "体育行为",
              target: "blank",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FDA15F" },
                  { offset: 1, color: "#FF7727" },
                ]),
              },
            },
          ],
        },
        {
          radius: ["0%", "30%"],
          center: ["50%", "50%"],
          type: "pie",
          startAngle: 0,
          z: 2,
          legendHoverLink: false,
          hoverAnimation: false,
          selectedOffset: 0,
          label: {
            position: "inner",
            fontSize: 14,
            normal: {
              formatter: function (params) {
                var str = "";
                switch (params.name) {
                  case "1":
                    str = "{a|}";
                    break;
                  case "2":
                    str = "{b|}";
                    break;
                  case "3":
                    str = "{c|}";
                    break;
                }
                return str;
              },
              padding: [0, -20],
              rich: {
                // a: {
                //   width: 30,
                //   height: 30,
                //   lineHeight: 30,
                //   //   backgroundColor: {
                //   //     // image: sportsIcon.a,
                //   //   },
                //   align: "center",
                // },
                // b: {
                //   width: 30,
                //   height: 30,
                //   lineHeight: 30,
                //   //   backgroundColor: {
                //   //     // image: sportsIcon.b,
                //   //   },
                //   align: "center",
                // },
                // c: {
                //   width: 30,
                //   height: 30,
                //   lineHeight: 30,
                //   //   backgroundColor: {
                //   //     // image: sportsIcon.c,
                //   //   },
                //   align: "center",
                // },
                // d: {
                //   width: 30,
                //   height: 30,
                //   lineHeight: 30,
                //   //   backgroundColor: {
                //   //     // image: sportsIcon.d,
                //   //   },
                //   align: "center",
                // },
                // e: {
                //   width: 30,
                //   height: 30,
                //   lineHeight: 30,
                //   //   backgroundColor: {
                //   //     // image: sportsIcon.e,
                //   //   },
                //   align: "center",
                // },
                // f: {
                //   width: 30,
                //   height: 30,
                //   lineHeight: 30,
                //   //   backgroundColor: {
                //   //     // image: sportsIcon.f,
                //   //   },
                //   align: "center",
                // },
                textStyle: {
                  fontSize: 20,
                  color: "#1ab4b8",
                  align: "left",
                },
              },
            },
          },
          tooltip: {
            //提示框组件
            trigger: "item", //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
            triggerOn: "mousemove", //提示框触发的条件,'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发
            showContent: true, //是否显示提示框浮层
            alwaysShowContent: false, //是否永远显示提示框内容
            showDelay: 0, //浮层显示的延迟，单位为 ms
            hideDelay: 100, //浮层隐藏的延迟，单位为 ms
          },
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList1[params.dataIndex];
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
              length: -35,
              length2: 0,
              align: "center",
            },
            emphasis: {
              show: false,
            },
          },
          data: [
            { value: 348, name: "3" },
            { value: 348, name: "2" },
            { value: 348, name: "3" },
            { value: 348, name: "4" },
            { value: 16, name: "5" },
            { value: 16, name: "6" },
          ],
        },
      ],
    };
    myCharts.setOption(option);
  },
};
</script>

<style scoped>
#myChart {
  width: 50%;
  height: 100%;
  display: flex;
  /* background-color: white; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>