<script>
import * as echarts from 'echarts';
import 'echarts-gl';
import { onMounted } from 'vue';
import world from '../assets/world.json';
import medalrank from './medalrank.vue';
import router from '@/router/index.js';

export default {
  components: {
    medalrank,
  },
  setup () {
    // https://zh.wikipedia.org/wiki/%E5%86%AC%E5%AD%A3%E5%A5%A5%E6%9E%97%E5%8C%B9%E5%85%8B%E8%BF%90%E5%8A%A8%E4%BC%9A
    const placeData = [
      {
        name: '北京',
        value: [116.4, 40],
      },
      {
        name: '平昌',
        value: [128.4, 37.36],
      },
      {
        name: '索契',
        value: [40, 44],
      },
      {
        name: '温哥华',
        value: [-123, 50],
      },

      {
        name: '都灵',
        value: [7.7, 45.07],
      },
      {
        name: '盐湖城',
        value: [-112, 40.75],
      },
      {
        name: '长野',
        value: [138.19, 36.6],
      },
      {
        name: '利勒哈默尔',
        value: [10.467, 61.114],
      },
      {
        name: '阿尔贝维尔',
        value: [6.39, 45.676],
      },
      {
        name: '卡尔加里',
        value: [-114.05, 51.0333],
      },
      {
        name: '萨拉热窝',
        value: [18.413, 43.856],
      },
      {
        name: '普莱西德湖',
        value: [-73.985, 44.285],
      },
    ];

    const initTexture = () => {
      const canvas = document.createElement('canvas');
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
      echarts.registerMap('world', world);
      baseTexture.setOption({
        // 散点设置 https://echarts.apache.org/zh/option.html#series-scatter

        // 地图设置 https://echarts.apache.org/zh/option-gl.html#geo3D
        // geo: {
        // 	type: 'map',
        // 	map: 'world',
        // 	left: 0,
        // 	top: 0,
        // 	right: 0,
        // 	bottom: 0,
        // 	boundingCoords: [
        // 		[-180, 90],
        // 		[180, -90]
        // 	],
        //
        // 	tooltip: {
        // 		show: false
        // 	},
        //
        // 	itemStyle: {
        // 		areaColor: '#419dfb',
        // 		borderColor: '#564fc2',
        // 		borderWidth: '1'
        // 	},
        //
        // 	// 鼠标放到地球上的高亮显示
        // 	emphasis: {
        // 		itemStyle: {
        // 			areaColor: '#4976fe'
        // 		},
        // 		label: {
        // 			show: true,
        // 			color: 'black',
        // 			fontSize: 28
        // 		}
        // 	}
        // },
        visualMap: {
          left: 'right',
          min: 0,
          max: 40,
          inRange: {
            color: [
              '#79b3fc',
              '#5faef8',
              '#419dfb',
              '#1f86f1',
              '#0669d2',
            ],
          },
          text: ['High', 'Low'],
          calculable: true,
        },
        series: [
          {
            type: 'map',
            name: '世界地图',
            map: 'world',
            geoIndex: 0,
            data: [
              {
                name: 'China',
                value: 32,
              },
              {
                name: 'Norway',
                value: 47,
              },
              {
                name: 'Germany',
                value: '27'
              }
            ],
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [
              [-180, 90],
              [180, -90],
            ],
            tooltip: {
              show: false
            },
            itemStyle:{
              areaColor: '#6AABFB'
            },
            select: {
              // itemStyle: {
              //   areaColor: '#419dfb'
              // }
              disable: true
            },
            emphasis: {
              itemStyle: {
                areaColor: '#4976fe',
              },
              label: {
                show: true,
                color: 'black',
                fontSize: 28,
              },
              disable: false,
            },
            selectedMode: false
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

      baseTexture.on('click', (e) => {
        console.log(e.data);
        router.push({
          name: 'page5',
          params: { name: e.data.name, value: e.data.value },
        });
      });
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
          shading: 'color',

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

      const myChart = echarts.init(document.getElementById('container'));
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
