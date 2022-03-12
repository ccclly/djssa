<template>
	<div id="favour" ref="favour">

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
			let favour = echarts.init(this.$refs.favour)
			var option;

			option = {
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c}'
				},
				legend: {
					data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
				},
				series: [{
					name: '热度值：',
					type: 'funnel',
					left: '10%',
					top: 40,
					bottom: 40,
					width: '80%',
					min: 20000,
					max: 90000,
					minSize: '30%',
					maxSize: '100%',
					sort: 'descending',
					gap: 2,
					label: {
						show: true,
						position: 'inside'
					},
					labelLine: {
						length: 10,
						lineStyle: {
							width: 1,
							type: 'solid'
						}
					},
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 1
					},
					emphasis: {
						label: {
							fontSize: 20
						}
					},
					data: [{
							value: 88547,
							name: '冰壶'
						},
						{
							value: 54250,
							name: '花样滑冰'
						},
						{
							value: 51442,
							name: '冰球'
						},
						{
							value: 36646,
							name: '短道速滑'
						},
						{
							value: 20259,
							name: '越野滑雪'
						}
					]
				}]
			};
			favour.setOption(option);
		}

	}
</script>

<style>
	#favour {
		width: 360px;
		height: 300px;
	}
</style>
