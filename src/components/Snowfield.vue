<template>
  <div id="sf" ref="sf"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    let sf = echarts.init(this.$refs.sf);
    var option;
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: null, // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '<div style="text-align: center;"></div>{b} : {c}',
      },
      grid: {
        left: '10%',
        right: '4%',
        top: '2px',
        bottom: "3.5%",
        // weight: "100%",
        height: 500, //设置grid高度
        containLabel: true,
      },
      xAxis: [
        {
          type: "value",
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "category",
          boundaryGap: true,
          axisTick: {
            show: true,
          },
          axisLabel: {
            interval: null,
          },
          data: [
            "黑龙江",
            "山东",
            "新疆",
            "河北",
            "山西",
            "吉林",
            "河南",
            "内蒙古",
            "辽宁",
            "陕西",
            "北京",
            "甘肃",
            "浙江",
            "江苏",
            "湖北",
            "重庆",
            "宁夏",
            "天津",
            "四川",
            "湖南",
            "贵州",
            "青海",
            "云南",
            "广东",
            "安徽",
            "江西",
            "广西",
            "福建",
          ].reverse(),
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "流量",
          type: "bar",
          barWidth: 8,
          label: {
            normal: {
              show: true,
              position: "right",
            },
          },

          roam: false,
          visualMap: false,
          itemStyle: {
            color: "#3377ff",
            opacity: 0.5,
          },
          label: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              color: "#60ACFC",
              opacity: 0.5,
            },
            label: {
              show: false,
            },
          },
          silent: true,
          barWidth: 14,
          barGap: "-100%",
          //   barGap:'-80%',
          animation: false,

          data: [
            124, 67, 65, 61, 49, 45, 44, 42, 38, 35, 25, 22, 20, 18, 16, 16, 14,
            13, 12, 10, 10, 8, 5, 3, 3, 2, 2, 1,
          ].reverse(),
        },
      ],
    };
    sf.setOption(option);
  },
};
</script>

<style lang="less" scoped>
#sf {
  width: 300px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
