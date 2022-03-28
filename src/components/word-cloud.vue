<template>
  <div id="cloud" ref="cloud"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    let cloud = echarts.init(this.$refs.cloud);
    var option;
    let colorList = [
      "#CF4645",
      "#B580B2",
      "#29008A",
      "#146A90",
      "#8956FF",
      "#70C9A8",
      "#bfbfbf",
      "#595959",
      "#40a9ff",
      "#1890ff",
      "#ffd666",
      "#ffc53d",
      "#ffc53d",
      "#ffc069",
      "#ffa940",
      "#fa8c16",
      "#eccbd9",
      "#ffadad",
      "#ff6392",
      "#ffc09f",
      "#ffcb77",
      "#ffe066",
      "#ffd53e",
      "#ffda3d",
      "#adf7b6",
      "#a0e8af",
      "#80ed99",
      "#07beb8",
      "#17c3b2",
      "#48cae4",
      "#97d2fb",
      "#83bcff",
      "#91e5f6",
      "#9381ff",
    ];
    let colorListLen = colorList.length;
    let fontSizeList = [
      12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
      19.5, 20, 20.5, 21, 22, 23, 24,
    ];
    let i = 0;
    let values = [
      330, 186, 167, 135, 72, 71, 63, 58, 70, 58, 49, 47, 45, 44, 38, 39, 31,
      30, 26, 26, 23, 17, 15, 18, 14, 13, 13, 13, 13, 13, 13, 11, 11, 11, 10,
      10, 10, 10, 10, 10, 10, 10,
    ];
    let names = [
      "冰墩墩",
      "排面",
      "雪容融",
      "中国",
      "开幕式",
      "可以",
      "大哭",
      "冬奥会",
      "知识",
      "心心",
      "浪漫",
      "喜欢",
      "绒花",
      "支持",
      "央视",
      "文化",
      "节气",
      "梦幻",
      "北京",
      "滑雪",
      "点赞",
      "太帅",
      "漂亮",
      "谷爱凌",
      "张艺谋",
      "传统",
      "闭幕式",
      "苏翊鸣",
      "火炬",
      "五环",
      "速滑",
      "期待",
      "震撼",
      "好帅",
      "喜极而泣",
      "可爱",
      "冬天",
      "徐梦桃",
      "华夏",
      "惊艳",
      "好美",
      "未来",
    ];
    let fontSizeListLen = fontSizeList.length;
    let customLabel = {
      color: colorList[Math.floor(Math.random() * colorListLen)],
      fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
    };
    let bgColor = "#fffcf9";
    let canDraggable = true; //可以拖动
    option = {
      backgroundColor: "#fffcf9",
      color: ["#37A2DA", "#32C5E9", "#67E0E3"],
      title: {
        show: true,
        text: "词频统计字符云",
        x: "center",
        y: "bottom",
        // 文字的颜色,默认 #333。
        color: "#666",
        fontSize: 24,
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          //   magicType: {type: ['line', 'bar']},
          restore: {},
          //   saveAsImage: {}
        },
      },
      itemStyle: {
        color: bgColor,
      },
      tooltip: {
        //提示框组件
        trigger: "item", //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
        triggerOn: "mousemove", //提示框触发的条件,'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发
        showContent: true, //是否显示提示框浮层
        alwaysShowContent: true, //是否永远显示提示框内容
        showDelay: 0, //浮层显示的延迟，单位为 ms
        hideDelay: 100, //浮层隐藏的延迟，单位为 ms
      },

      series: [
        {
          type: "graph",
          layout: "force",
          force: {
            repulsion: 80,
            edgeLength: 10,
          },
          roam: "scale",
          symbol: "",
          symbolSize: 0,
          label: {
            show: true,
            color: "auto",
            fontSize: 14,
          },

          data: [
            {
              name: names[i],
              value: values[i++],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: 75,
              },
            },
            {
              name: names[i],
              value: values[i++],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: 60,
              },
            },
            {
              name: names[i],
              value: values[i++],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: 58,
              },
            },
            {
              name: names[i],
              value: values[i++],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: 53,
              },
            },
            {
              name: names[i],
              value: values[i++],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: 45,
              },
            },
            {
              name: names[i],
              value: values[i++],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: 44,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },
            {
              name: names[i],
              value: values[i],
              draggable: canDraggable,
              itemStyle: {
                color: bgColor,
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: values[i++] * 0.5,
              },
            },

            // {
            //   name: "排面",
            //   value: 186,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "雪容融",
            //   value: 167,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "中国",
            //   value: 135,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "开幕式",
            //   value: 72,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "可以",
            //   value: 71,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "大哭",
            //   value: 63,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "冬奥会",
            //   value: 58,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "浪漫",
            //   value: 49,
            //   draggable: canDraggable,
            //   itemStyle: {
            //     color: bgColor,
            //   },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "喜欢",
            //   value: 47,
            //   draggable: canDraggable,
            //   // itemStyle: {
            //   //     color: bgColor
            //   // },
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "绒花",
            //   value: 45,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "支持",
            //   value: 44,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "文化",
            //   value: 39,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "节气",
            //   value: 31,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "梦幻",
            //   value: 30,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "北京",
            //   value: 26,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "滑雪",
            //   value: 26,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "点赞",
            //   value: 23,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "太帅",
            //   value: 17,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "漂亮",
            //   value: 15,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "谷爱凌",
            //   value: 18,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "张艺谋",
            //   value: 14,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "传统",
            //   value: 13,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "闭幕式",
            //   value: 13,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "苏翊鸣",
            //   value: 13,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "五环",
            //   value: 13,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "速滑",
            //   value: 13,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "期待",
            //   value: 11,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
            // {
            //   name: "震撼",
            //   value: 11,
            //   draggable: canDraggable,
            //   label: {
            //     color: colorList[Math.floor(Math.random() * colorListLen)],
            //     fontSize:
            //       fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            //   },
            // },
          ],
        },
      ],
    };
    cloud.setOption(option);
  },
};
</script>

<style scoped>
#cloud {
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>