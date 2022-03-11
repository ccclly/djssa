<template>
	<div id="medalrank" ref="medalrank">

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
			let medalrank = echarts.init(this.$refs.medalrank)
			var option;

			option = {

				tooltip: {
			  trigger: 'axis',
					axisPointer: {
						// Use axis to trigger tooltip
						type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
					}
				},
				legend: {},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '18%',
					top: '8%',
					containLabel: true
				},
				xAxis: {
					type: 'value'

				},
				yAxis: {
					type: 'category',
					data: ['奥地利', '荷兰', '瑞典', '美国', '中国', '德国', '挪威']
				},
				series: [{
						name: '金牌',
						type: 'bar',
						stack: 'total',
						itemStyle: {
							normal: {
								color: '#5470C6'
							}
						},
						label: {
							show: true
						},
						emphasis: {
							focus: 'series'
						},
						data: [7, 8, 8, 8, 9, 12, 16]
					},
					{
						name: '银牌',
						type: 'bar',
						stack: 'total',
						itemStyle: {
							normal: {
								color: '#FAC858'
							}
						},
						label: {
							show: true
						},
			 		emphasis: {
							focus: 'series'
						},
						data: [7, 5, 5, 10, 4, 10, 8]
					},
					{
						name: '铜牌',
						type: 'bar',
						stack: 'total',
						itemStyle: {
							normal: {
								color: '#EE6666'
							}
						},
						label: {
							show: true
						},
						emphasis: {
							focus: 'series'
						},
						data: [4, 4, 5, 7, 2, 5, 13]
					}
				]
			};
			medalrank.setOption(option);
		}

	}
</script>

<style>
	#medalrank {
		margin-top: 50px;
		width: 350px;
		height: 385px;
	}
</style>
