<script>
import * as echarts from "echarts";
import "echarts-gl";
import { onMounted } from "vue";
import world from "../assets/world.json";
import medalrank from "./medalrank.vue";
import router from "@/router/index.js";

export default {
  components: {
    medalrank,
  },
  setup() {
    const initTexture = () => {
      const canvas = document.createElement("canvas");
      const baseTexture = echarts.init(canvas, null, {
        width: 4096,
        height: 2048,
      });
      // TODO 地球的贴图地图点击事件
      // baseTexture.on('geoselectchanged', function (e) {
      //   console.log(e)
      // });
      // baseTexture.on('geoselected', (e) => {
      //   console.log(e)
      // });
      echarts.registerMap("world", world);
      const tooltipEl = document.querySelector('#tooltip')
      const tooltipNameEl = document.querySelector('#tooltip-name')
      const gold = document.querySelector('#gold')
      const silver = document.querySelector('#silver')
      const copper = document.querySelector('#copper')
      baseTexture.setOption({
        // 散点设置 https://echarts.apache.org/zh/option.html#series-scatter

        visualMap: {
          left: "right",
          min: 0,
          max: 30,
          inRange: {
            color: ["#79b3fc", "#5faef8", "#419dfb", "#1f86f1", "#0669d2"],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        tooltip: {
          show: true,
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 1,
          showContent: true,
          backgroundColor: 'rgba(50,50,50,0.7)',
          extraCssText: 'width: 170px',
          textStyle: { // 提示框浮层的文本样式。
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
          },
        },
        label: {
          formatter: '',
          fontSize: 20
        },
        series: [
          {
            type: "map",
            name: "世界地图",
            map: "world",
            geoIndex: 0,
            data: [
              {
                name: "China",
                value: 32,
                num: 0,
                label: {
                  formatter: '中国',
                }
              },
              {
                name: "Norway",
                value: 47,
                num: 1,
                label: {
                  formatter: '挪威',
                }
              },
              {
                name: "Germany",
                value: "27",
                num: 2,
                label: {
                  formatter: '德国',
                }
              },
              {
                name: "United States",
                value: 25,
                num: 3,
                label: {
                  formatter: '美国',
                }
              },
              {
                name: "Sweden",
                value: 18,
                num: 4,
                label: {
                  formatter: '瑞典',
                }
              },
              {
                name: "Netherlands",
                value: 17,
                num: 5,
                label: {
                  formatter: '芬兰',
                }
              },
              {
                name: "Austria",
                value: 18,
                num: 6,
                label: {
                  formatter: '奥地利',
                }
              },
            ],
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [
              [-180, 90],
              [180, -90],
            ],
            itemStyle: {
              areaColor: "#6AABFB",
            },
            tooltip: {
              formatter: function (params) {
                if (params.data) {
                  tooltipEl.style.display = 'block';
                  tooltipNameEl.innerText = params.data.label.formatter;
                  const ev = event || window.event;
                  tooltipEl.style.left = ev.pageX + 20 + 'px';
                  tooltipEl.style.top = ev.pageY + 20 + 'px';
                  switch (params.name) {
                    case 'China':
                      gold.innerHTML = '9';
                      silver.innerHTML = '4';
                      copper.innerHTML = '2';
                      break;
                    case 'Norway':
                      gold.innerHTML = '16';
                      silver.innerHTML = '8';
                      copper.innerHTML = '13';
                      break;
                    case 'Germany':
                      gold.innerHTML = '12';
                      silver.innerHTML = '10';
                      copper.innerHTML = '5';
                      break;
                    case 'United States':
                      gold.innerHTML = '8';
                      silver.innerHTML = '10';
                      copper.innerHTML = '7';
                      break;
                    case 'Sweden':
                      gold.innerHTML = '8';
                      silver.innerHTML = '5';
                      copper.innerHTML = '5';
                      break;
                    case 'Netherlands':
                      gold.innerHTML = '8';
                      silver.innerHTML = '5';
                      copper.innerHTML = '4';
                      break;
                    case 'Austria':
                      gold.innerHTML = '7';
                      silver.innerHTML = '7';
                      copper.innerHTML = '4';
                      break;
                  }
                } else {
                  tooltipEl.style.display = 'none';
                }
              },
              borderColor: '#333',
              borderWidth: 200,
              extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
              position: 'right'
            },
            select: {
              // itemStyle: {
              //   areaColor: '#419dfb'
              // }
              disable: true,
            },
            emphasis: {
              itemStyle: {
                areaColor: "#4976fe",
              },
              label: {
                show: true,
                color: "black",
                fontSize: 28,
              },
              disable: false,
            },
            selectedMode: false,
          },
          //   {
          // 	type: 'scatter',
          // 	coordinateSystem: 'geo',
          // 	symbolSize: [20, 20],
          // 	itemStyle: {
          // 		color: 'red'
          // 	},
          // 	label: {
          // 		show: true,
          // 		color: 'red',
          // 		fontSize: 32,
          // 		formatter: '{b}',
          // 		position: 'top'
          // 	},
          //
          // 	data: placeData
          // }
        ],
      });

      baseTexture.on("click", (e) => {
        tooltipEl.style.display = 'none';
        router.push({
          name: "page5",
          params: { name: e.data.name, value: e.data.value, num: e.data.num },
        });
      });
      baseTexture.on('globalout', function (e) {
        tooltipEl.style.display = 'none';
      })
      return baseTexture;
    };

    const initEarth = () => {
      const baseTexture = initTexture();

      // 地球设置 https://echarts.apache.org/zh/option-gl.html#globe
      const option = {
        globe: {
          baseTexture: baseTexture,
          globeOuterRadius: 10,
          globeRadius: 80,
          displacementScale: 0.1,
          shading: "color",

          viewControl: {
            autoRotate: true,
            autoRotateAfterStill: 5,
            autoRotateSpeed: 5,
            // rotateSensitivity: [1, 0],
            zoomSensitivity: 0,
            beta: 200,
            alpha: 22,
            distance: 120,
          },
        },
      };

      const myChart = echarts.init(document.getElementById("container"));
      myChart.clear();
      myChart.setOption(option, true);
    };

    onMounted(() => {
      initEarth();
    });
  },
};
</script>

<template>
  <div id="main">
    <div id="mr">
      <medalrank></medalrank>
    </div>
    <div id="et">
      <div id="container"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

#main {
  width: 770px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;

  #mr {
    width: 400px;
    height: 380px;
  }

  #et {
    width: 500px;
    height: 380px;

    #container {
      width: 400px;
      height: 380px;
    }
  }
}
</style>
