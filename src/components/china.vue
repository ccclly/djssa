<template>
<div class="map" ref="map"></div>
  <el-dialog v-model="dialogTableVisible" :title="url" fullscreen="true" >
    <iframe class="vrview" :src="url"></iframe>
  </el-dialog>
</template>

<script>
	import * as echarts from 'echarts'
	import * as china from '../assets/js/china.js'
	export default {

		data() {
			return {
        dialogTableVisible: false,
        url: 'http://www.beidahuski.com/'
			}
		},
		mounted() {
			let map = echarts.init(this.$refs.map)
			var option;
var data = [
     {name: '北大壶滑雪场',  value: 1, url:"http://www.beidahuski.com/"},
     {name: '庙香山滑雪度假区',  value: 1, url:"http://www.mxsski.com/"},
     {name: '净月潭滑雪场',  value: 1, url:"http://www.jl.xinhuanet.com/shangye/jingyueski/"},
     {name: '天定山滑雪场',  value: 1, url:"https://www.j-j-j.cn/news/421.html"},
     {name: '亚布力滑雪场',  value: 1, url:"http://www.yabuliski.cn/lyhx?nid=4"},
     {name: '奥悦滑雪场',  value: 1, url:"http://www.olympjoy.com/nd.jsp?id=89"},
     {name: '丝绸之路国际滑雪场',  value: 1, url:"http://www.silkroadresort.com/"},
     {name: '可可托海滑雪场',  value: 1, url:"http://www.esnow.com.cn/product/gsjj_97.html"},
     {name: '鳌山滑雪场',  value: 1, url:"https://www.aoshanresort.com/home/ski/index"},
     {name: '白鹿原滑雪场',  value: 1, url:"http://www.bailuyuan.cn/picture/"},
     {name: '照金滑雪场',  value: 1, url:"http://www.zhaojinhuaxuechang.com/about/"},
     {name: '松鸣岩滑雪场',  value: 1, url:"http://www.smyhx.com/"},
     {name: '太舞滑雪小镇',  value: 1, url:"http://www.thaiwoo.com/p/skiresort_introduction"},
     {name: '翠云山银河滑雪场',  value: 1, url:"http://www.cuiyunshan.com.cn/page/channel/xczl"},
     {name: '西部长青滑雪场',  value: 1, url:"http://www.xbcq.net/h-col-111.html"},
     {name: '蓟州国际滑雪场',  value: 1, url:"http://www.jizhouski.com/?log=about&scat=132"},
     {name: '渔阳国际滑雪场',  value: 1, url:"http://www.yuyangski.com.cn/"},
     {name: '万科石京龙滑雪场',  value: 1, url:"http://www.vksjl.com/index.asp"},
     {name: '岱海国际滑雪场',  value: 1, url:"https://www.daihaiski.com/Hxcjj.asp"},
     {name: '美林谷滑雪场',  value: 1, url:"http://www.mylinvalley.com/"},
     {name: '大同万龙白登山国际滑雪场',  value: 1, url:"https://mp.weixin.qq.com/s/U_8YdntKxi9p71SW9MVU7A"},
     {name: '成都西岭雪山滑雪场',  value: 1, url:"http://www.xiling.cn/"},
     {name: '金佛山滑雪场',  value: 1, url:"https://mp.weixin.qq.com/s/W13FUxIBGwHmbOz9nD_5YA"},


];
var geoCoordMap = {
    '北大壶滑雪场':[126.647898,43.432911],
    '庙香山滑雪度假区':[125.894584,43.965436],
    '净月潭滑雪场':[125.485361,43.779051],
    '天定山滑雪场':[125.604809,43.887413],
    '亚布力滑雪场':[128.473123,44.775051],
    '奥悦滑雪场':[122.853716,47.548165],
    '丝绸之路国际滑雪场':[87.42169,43.448565],
    '可可托海滑雪场':[89.878317,47.223135],
    '鳌山滑雪场':[107.411291,34.033017],
    '白鹿原滑雪场':[109.101024,34.222726],
    '照金滑雪场':[108.654644,35.071464],
    '松鸣岩滑雪场':[103.41411,35.270801],
    '太舞滑雪小镇':[115.457877,40.900479],
    '翠云山银河滑雪场':[115.315354,41.005795],
    '西部长青滑雪场':[114.305639,38.034752],
    '蓟州国际滑雪场':[117.387982,40.118146],
    '渔阳国际滑雪场':[117.153508,40.084865],
    '万科石京龙滑雪场':[115.976121,40.531232],
    '岱海国际滑雪场':[112.562343,40.671411],
    '美林谷滑雪场':[118.252523,41.686002],
    '大同万龙白登山国际滑雪场':[113.397066,40.132253],
    '成都西岭雪山滑雪场':[103.196367,30.705004],
    '金佛山滑雪场':[116.889343,40.479233],


};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
				url:data[i].url
            });
        }
    }
		console.log(res)
    return res;
};

option = {

    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
		zoom:1.2,
        itemStyle: {
            normal: {
                areaColor: 'rgba(2,37,101,.5)',
                borderColor: 'rgba(112,187,252,.5)'
            },
            emphasis: {
                areaColor: 'rgba(2,37,101,.8)'
            }
        }
    },
    series : [
        {
            name: '标题名',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2]*8;
            },
            label: {
                normal: {
                    // formatter: '{b}',
					                formatter: function(params) {
					                  return (
					                    params.data.name
					                  )
									  },

                    position: 'right',
                    show: false,
					               backgroundColor: "#6199DD", // 背景色
					                padding: [5, 5], // 左右间距
					                borderRadius: 3, //  圆角
					                lineHeight: 22, //  行高
					                color: "white", //  颜色
								   // areaColor: 'rgba(2,37,101,.5)',
								   // borderColor: 'rgba(112,187,252,.5)'

                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                    color: '#ffeb7b'
            }
        }

    ]
};
			map.setOption(option);
      // var url = this.url
      // var d = this.dialogTableVisible
			 map.on("click", (params)=> {
			        // console.log(params.data.url);
			        //   window.location.href = params.data.url;
		 // this.url=params.data.url
   //       this.dialogTableVisible = true
         this.url = params.data.url
		 this.dialogTableVisible = true
		 console.log(this.url)
		 console.log(this.dialogTableVisible)
			      });

		}

	}
</script>

<style lang="less">
	.map {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width:700px;
		height: 470px;
	}
	.vrview{
		height: 85vh;
		width: 100%;
	}
</style>
