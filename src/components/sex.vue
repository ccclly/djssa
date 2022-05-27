<template>
		<div id="sex" ref="sex">
		</div>
</template>

<script>
	import * as echarts from 'echarts'
	export default {

		data() {
			return {

			}
		},
		mounted() {
			let sex = echarts.init(this.$refs.sex)
			var option;
			option = {
			  color:['#189dfe','#f0c219'],
			  tooltip: {
			    trigger: 'axis',
			    axisPointer: {
			      type: 'shadow'
			    },
			     formatter: function (params) {
			         let res = '';
			          params.forEach((v,i)=>{
			            res+=`${i==0?v.name:''}<div style="display:flex;align-items:center">
			                    <span
			                      style="display:inline-block;
			                        margin-right:5px;
			                        border-radius:10px;
			                        width:10px;
			                        height:10px;
			                        background-color:${v.color}"
			                    ></span>
			                    <span>${v.seriesName}: ${Math.abs(v.value)}%</span>
			                  </div>`
			          })
					return (res)
					}
			  },
			 legend: {
				top:'10%'
				},
			  grid: {
			    left: '3%',
			    right: '4%',
			    bottom: '10%',
			    containLabel: true
			  },
			 xAxis:[
					{
					name: '(%)',
					type: 'value',
					axisLabel: {
						fontSize: 12,
						margin: 10,
						color: 'black',
					formatter: value => {
							if (value < 0) return -value;
							//这里是针对取负值
							else return value;
						}
					}
				}
			],
			  yAxis: [
			    {
			      type: 'category',
			      // name:'单位',
			      axisTick: {
			        show: false
			      },
				  axisLabel: {
				      color: 'black',
				      fontSize: 13,
				      margin: 10,
				  },
			      data: ['中国获奖', '中国参赛', '全球参赛']
			    }
			  ],
			  series: [
			    {
			      name: '男',
			      type: 'bar',
			      stack: 'Total',
			       label: {
							normal: {//正常情况
							show: false, //是否显示标签
							position: 'inside',
							formatter: function(params){return Math.abs(params.value)}  //返回绝对值
						}
				},
			 emphasis: {
			        focus: 'series'
			      },
                itemStyle: {
                    emphasis: {
                        // barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 50,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#3977E6'},
                                {offset: 1, color: '#37BBF8'}

                            ]
                        )
                    }
                },
			      data: [-53, -50.6, -55]
			    },
			    {
			      name: '女',
			      type: 'bar',
			      stack: 'Total',
			      label: {
							normal: {//正常情况
							show: false, //是否显示标签
							position: 'inside'
						}
				},
			 emphasis: {
			       focus: 'series'
			     },
                itemStyle: {

                    normal: {
                        barBorderRadius: 50,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ff81c2'},
                                {offset: 1, color: '#c55d93'}

                            ]
                        )
                    }
                },
			   data: [47, 49.4, 45,]
			    }
			  ]
			};
			sex.setOption(option);
		}

	}
</script>

<style>
	#sex {
		width: 100%;
		height:100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
	}
</style>
