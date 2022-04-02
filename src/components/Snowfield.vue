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
    // var citydata = [
    //   {
    //     name: "北京",
    //     value: 974,
    //   },
    //   {
    //     name: "天津",
    //     value: 532,
    //   },
    //   {
    //     name: "上海",
    //     value: 834,
    //   },
    //   {
    //     name: "重庆",
    //     value: 683,
    //   },
    //   {
    //     name: "河北",
    //     value: 283,
    //   },
    //   {
    //     name: "河南",
    //     value: 345,
    //   },
    //   {
    //     name: "云南",
    //     value: 72,
    //   },
    //   {
    //     name: "辽宁",
    //     value: 194,
    //   },
    //   {
    //     name: "黑龙江",
    //     value: 342,
    //   },
    //   {
    //     name: "湖南",
    //     value: 389,
    //   },
    //   {
    //     name: "安徽",
    //     value: 267,
    //   },
    //   {
    //     name: "山东",
    //     value: 675,
    //   },
    //   {
    //     name: "新疆",
    //     value: 14,
    //   },
    //   {
    //     name: "江苏",
    //     value: 974,
    //   },
    //   {
    //     name: "浙江",
    //     value: 978,
    //   },
    //   {
    //     name: "江西",
    //     value: 528,
    //   },
    //   {
    //     name: "湖北",
    //     value: 144,
    //   },
    //   {
    //     name: "广西",
    //     value: 448,
    //   },
    //   {
    //     name: "甘肃",
    //     value: 197,
    //   },
    //   {
    //     name: "山西",
    //     value: 203,
    //   },
    //   {
    //     name: "内蒙古",
    //     value: 73,
    //   },
    //   {
    //     name: "陕西",
    //     value: 563,
    //   },
    //   {
    //     name: "吉林",
    //     value: 147,
    //   },
    //   {
    //     name: "福建",
    //     value: 112,
    //   },
    //   {
    //     name: "贵州",
    //     value: 373,
    //   },
    //   {
    //     name: "广东",
    //     value: 2747,
    //   },
    //   {
    //     name: "青海",
    //     value: 38,
    //   },
    //   {
    //     name: "西藏",
    //     value: 12,
    //   },
    //   {
    //     name: "四川",
    //     value: 215,
    //   },
    //   {
    //     name: "宁夏",
    //     value: 172,
    //   },
    //   {
    //     name: "海南",
    //     value: 77,
    //   },
    //   {
    //     name: "台湾",
    //     value: 123,
    //   },
    //   {
    //     name: "香港",
    //     value: 32,
    //   },
    //   {
    //     name: "澳门",
    //     value: 43,
    //   },
    //   {
    //     name: "南海诸岛",
    //     value: 53,
    //   },
    // ];

    // var yMax = 1000;
    // var dataShadow = [];

    // var resultdata0 = [];
    // var titledata = [];
    // var bartop10 = [];

    // function NumDescSort(a, b) {
    //   return b.value - a.value;
    // }

    // function NumAsceSort(a, b) {
    //   return a.value - b.value;
    // }

    // // 先进行一次降序排序，找出最大的前十个
    // citydata.sort(NumDescSort);

    // for (var i = 0; i < 20; i++) {
    //   var top10 = {
    //     name: citydata[i].name,
    //     value: citydata[i].value,
    //   };
    //   bartop10.push(top10);
    //   dataShadow.push(yMax);
    // }

    // bartop10.sort(NumAsceSort);
    // for (var i = 0; i < bartop10.length; i++) {
    //   titledata.push(bartop10[i].name);
    // }

    // // console.log(citydata);
    // // console.log(bartop10);
    // // console.log(titledata);

    // option = {
    //   title: [
    //     {
    //       show: false,
    //       text: "地域分布",
    //     },
    //     {
    //       show: true,
    //       text: "省份/直辖市TOP20",
    //       right: "20",
    //       textStyle: {
    //         color: "#666666",
    //         fontSize: 12,
    //       },
    //     },
    //   ],
    //   tooltip: {
    //     trigger: "item",
    //   },
    //   legend: {
    //     show: false,
    //   },
    //   grid: {
    //     // 仅仅控制条形图的位置
    //     show: true,
    //     containLabel: false,
    //     right: 40,
    //     top: 50,
    //     bottom: 30,
    //     width: "70%",
    //   },
    //   visualMap: {
    //     type: "continuous",
    //     min: 0,
    //     max: 1000,
    //     text: ["多", "少"],
    //     seriesIndex: [0, 2],
    //     dimension: 0,
    //     realtime: false,
    //     left: 0,
    //     itemWidth: 18,
    //     itemHeight: 100,
    //     calculable: true,
    //     inRange: {
    //       color: ["rgba(159,205,253,0.50)", "#60ACFC"],
    //       symbolSize: [100, 100],
    //     },
    //     outOfRange: {
    //       color: ["#eeeeee"],
    //       symbolSize: [100, 100],
    //     },
    //   },
    //   toolbox: {
    //     show: false,
    //   },

    //   xAxis: [
    //     {
    //       type: "value",
    //       position: "top",
    //       inside: false,
    //       axisLabel: {
    //         show: false,
    //       },
    //       splitLine: {
    //         show: false,
    //       },
    //       margin: 10,
    //     },
    //   ],
    //   yAxis: [
    //     {
    //       type: "category",
    //       boundaryGap: true,
    //       axisLine: {
    //         show: false,
    //       },
    //       axisLabel: {
    //         align: "right",
    //         margin: 10,
    //         showMaxLabel: true,
    //       },
    //       data: titledata,
    //     },
    //   ],

    //   series: [
    //     {
    //       name: "背景",
    //       type: "bar",
    //       roam: false,
    //       visualMap: false,
    //       itemStyle: {
    //         color: "#eeeeee",
    //         opacity: 0.5,
    //       },
    //       label: {
    //         show: false,
    //       },
    //       emphasis: {
    //         itemStyle: {
    //           color: "#eeeeee",
    //           opacity: 0.5,
    //         },
    //         label: {
    //           show: false,
    //         },
    //       },
    //       silent: true,
    //       barWidth: 18,
    //       barGap: "-100%",
    //       data: dataShadow,
    //       animation: false,
    //     },
    //     {
    //       name: "占比",
    //       type: "bar",
    //       roam: false,
    //       visualMap: false,
    //       itemStyle: {
    //         color: "#60ACFC"
    //       },
    //       barWidth: 18,
    //       label: {
    //         normal: {
    //           show: true,
    //           fontSize: 12,
    //           position: "insideLeft",
    //         },
    //         emphasis: {
    //           show: true,
    //         },
    //       },
    //       data: bartop10,
    //     },
    //   ]

    // };

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

<style>
#sf {
  width: 300px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
