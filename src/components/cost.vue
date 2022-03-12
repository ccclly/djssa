<template>
	<div id="cost" ref="cost">

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
			let cost = echarts.init(this.$refs.cost)
			var option;
			const colors = ['#5470C6', '#91CC75', '#EE6666'];
			option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					}
				},
				legend: {
					data: ['比赛项目数量', '花费']
				},
				grid: {
				  top: '15%',
				},
				xAxis: [{
					type: 'category',
					data: ['十四届', '十五届', '十六届', '十七届', '十八届', '十九届', '二十届', '二十一届', '二十二届', '二十三届', '二十四届'],
					axisPointer: {
						type: 'shadow'
					},
					axisLabel: {
						interval: 0,
						rotate: 40
					}
				}],
				yAxis: [{
						type: 'value',
						name: '比赛项目数量',
						min: 0,
						max: 150,
						interval: 30,
						axisLabel: {
							formatter: '{value} 项'
						}
					},
					{
						type: 'value',
						name: '花费',
						min: 0,
						max: 550,
						interval: 110,
						axisLabel: {
							formatter: '{value} 亿美元'
						}
					}
				],
				series: [{
						name: '比赛项目数量',
						type: 'bar',
						barWidth: 25, //柱图宽度
						tooltip: {
							valueFormatter: function(value) {
								return value + '项';
							}
						},
						itemStyle: {

							barBorderRadius: [50, 50, 0, 0],
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#57cdff'
								},
								{
									offset: 1,
									color: '#419DFB'
								}
							])
						},
						data: [
							39, 46, 64, 67, 68, 78, 84, 86, 98, 102, 131
						]
					},
					{
						name: '花费',
						type: 'line',
						yAxisIndex: 1,
						tooltip: {
							valueFormatter: function(value) {
								return value + ' 亿美元';
							}
						},
						data: [4.2, 14, 36, 17, 186, 19, 27, 64, 510, 130, 30]
					}
				]
			};
			cost.setOption(option);
		}

	}
</script>

<style>
	#cost {
	   margin-top: 30px;
		width: 100%;
		height: 280px;
	}
</style>
