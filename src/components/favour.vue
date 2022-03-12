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
					trigger: 'item'
				},
				visualMap: {
					show: false,
					min: 80,
					max: 600,
					inRange: {
						colorLightness: [0, 1]
					}
				},
				series: [{
					name: 'Access From',
					type: 'pie',
					radius: '75%',
					center: ['50%', '50%'],
					data: [{
							value: 335,
							name: 'Direct'
						},
						{
							value: 310,
							name: 'Email'
						},
						{
							value: 274,
							name: 'Union Ads'
						},
						{
							value: 235,
							name: 'Video Ads'
						},
						{
							value: 400,
							name: 'Search Engine'
						}
					].sort(function(a, b) {
						return a.value - b.value;
					}),
					roseType: 'radius',
					label: {

						normal: {
							textStyle: {
								fontSize: 10, //显示文字的大小
							}
						},
						color: 'rgba(0, 0, 0, 0.8)'
					},
					labelLine: {
						lineStyle: {
							color: 'rgba(0, 0, 0, 0.8)'
						},
						smooth: 0.2,
						length: 5,
						length2: 5
					},
					itemStyle: {
						color: '#59CBEC',
						shadowBlur: 200,
						shadowColor: 'rgba(0, 0, 0, 0.0)'
					},
					animationType: 'scale',
					animationEasing: 'elasticOut',
					animationDelay: function(idx) {
						return Math.random() * 200;
					}
				}]
			};
			favour.setOption(option);
		}

	}
</script>

<style>
	#favour {
		width: 400px;
		height: 277px;
	}
</style>
