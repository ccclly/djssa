// 封装成组件
<template>
  <div>
    <div id="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud";
// import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  data() {
    return {
      wordList: [
        {
          name: "张艺谋太懂中国人的浪漫了",
          value: 15000,
        },
        {
          name: "冬奥邓超",
          value: 10081,
        },
        {
          name: "北京冬奥会开幕式",
          value: 9386,
        },
        {
          name: "冰墩墩",
          value: 7500,
        },
        {
          name: "中国人的浪漫",
          value: 7500,
        },
        {
          name: "开幕式羽绒服",
          value: 6500,
        },
        {
          name: "谷爱凌",
          value: 6500,
        },
        {
          name: "花样滑冰",
          value: 6000,
        },
        {
          name: "中国女冰北京冬奥首胜",
          value: 4500,
        },
        {
          name: "张艺谋真的太稳了",
          value: 3800,
        },
        {
          name: "韩聪",
          value: 3000,
        },
        {
          name: "冬奥会黑科技",
          value: 2500,
        },
        {
          name: "智慧餐厅",
          value: 2300,
        },
        {
          name: "2008北京奥运会",
          value: 2000,
        },
        {
          name: "羽生结弦",
          value: 1900,
        },
        {
          name: "王濛",
          value: 1800,
        },
        {
          name: "巴赫不冷吗",
          value: 1700,
        },
        {
          name: "24节气倒计时",
          value: 1600,
        },
        {
          name: "五环破冰",
          value: 1500,
        },
        {
          name: "北京冬奥会",
          value: 1200,
        },
      ],
    };
  },
  mounted() {
    this.initchart();
  },
  methods: {
    initchart() {
      let myChart = echarts.init(document.querySelector("#chart"));
      myChart.setOption({
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 7,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [10, 45],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [ 0,45],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              color: function () {
                return (
                  "rgb(" +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ")"
                );
              },
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "100%",
            height: "100%",
            //数据
            data: this.wordList,
          },
        ],
      });
    },
  },
};
</script>
<style lang="less">
	#chart{
		width: 300px; 
		height: 280px; 
	}
</style>

//页面中使用,引入组件并使用,宽高可以以当做参数做动态来写
    <wordcloud />
