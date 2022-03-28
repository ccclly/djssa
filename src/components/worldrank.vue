<template>
  <!-- <div>123123</div>
  {{ this.$route.params.name }} -->
  <div id="worldrank" ref="worldrank"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    var nob = this.$route.params.num;
    // console.log("这里收到了：" + nob);
    var name = this.$route.params.name;
    var yearData = [
      {
        nation: "中国", // 国家
        num: 1,
        data: [
          [320, 332, 301, 334, 390],
          [150, 232, 201, 154, 190],
          [234, 221, 201, 456, 333],
          [820, 932, 901, 934, 1290],
        ],
      },
      {
        nation: "美国", // 国家
        num: 2,
        data: [
          [150, 232, 201, 154, 190],
          [234, 221, 201, 456, 333],
          [820, 932, 901, 934, 1290],
          [320, 332, 301, 334, 390],
        ],
      },
    ];

    let worldrank = echarts.init(this.$refs.worldrank);
    var option;
    option = {
      title: {
        text: "\n"+yearData[nob].nation+"近五年冬奥会奖牌情况",
        x: "center",
        textStyle: {
          fontSize: 18,
          color: "#333333",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: false, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true,
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["第一届", "第二届", "第三届", "第四届", "第五届"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "奖牌总数",
          type: "line",
          // 折线修饰为圆滑
          smooth: true,
          data: yearData[nob].data[0],
        },
        {
          name: "金牌",
          type: "line",
          // 折线修饰为圆滑
          smooth: true,
          data: yearData[nob].data[1],
        },
        {
          name: "银牌",
          type: "line",
          // 折线修饰为圆滑
          smooth: true,
          data: yearData[nob].data[2],
        },
        {
          name: "铜牌",
          type: "line",
          // 折线修饰为圆滑
          smooth: true,
          data: yearData[nob].data[3],
        },
      ],
    };
    worldrank.setOption(option);
  },
};
</script>

<style>
#worldrank {
  width: 98%;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
