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
				// top: '15%',
				 bottom: '10%',
				},
				xAxis: [{
					type: 'category',
					data: ['14届', '15届', '16届', '17届', '18届', '19届', '20届', '21届', '22届', '23届', '24届'],
					axisPointer: {
						type: 'shadow'
					},
					axisLabel: {
						interval: 0,
						// rotate: 40
						color: 'black',
						fontSize: 12,
						margin: 10,
					}
				}],
				yAxis: [{
						type: 'value',
						name: '比赛项目数量',
						nameTextStyle: {
						    color: 'black',
						    fontSize: 12,
						},
						min: 0,
						max: 150,
						interval: 30,
						axisLabel: {
							formatter: '{value} 项',
							color: 'black',
							fontSize: 12,
							margin: 10,
						}
					},
					{
						type: 'value',
						name: '花费',
						nameTextStyle: {
						    color: 'black',
						    fontSize: 12,
						},
						min: 0,
						max: 550,
						interval: 110,
						axisLabel: {
							formatter: '{value} 亿美元',
							color: 'black',
							fontSize: 12,
							margin: 10,
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
						data: [4.2, 14, 36, 17, 186, 19, 27, 64, 510, 130, 31]
					}
				]
			};
			cost.setOption(option);
		}

	}
</script>

<style>
	#cost {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
