<template>
	<div id="radar" ref="radar">

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
			let radar = echarts.init(this.$refs.radar)
			var option;
			option = {
				radar: {
					center: ['50%', '50%'],
					nameGap: 10,
					shape: 'radar',
					axisLine: {
						lineStyle: {
							color: '#6BD3F2',
						},
					},
					triggerEvent: true,
					indicator: [{
							name: '自由式滑雪',
							max: 7
						},
						{
							name: '短道速滑',
							max: 8
						},
						{
							name: '钢架雪车',
							max: 2
						},
						{
							name: '花样滑冰',
							max: 4
						},
						{
							name: '速度滑冰',
							max: 10
						},
						{
							name: '单板滑雪',
							max: 10
						},
					],
					splitArea: {
						//设置渐变背景色
						areaStyle: {
							color: ['rgba(11,89,140,1)',
								'rgba(11,89,140,0.8)',
								'rgba(11,89,140,0.6)',
								'rgba(11,89,140,0.4)',
								'rgba(11,89,140,0.2)'
							],
							shadowColor: 'rgba(0,0,0,0.3)',
							shadowBlur: 10
						}
					},
					name: { //设置文字颜色
						textStyle: {
							color: '#fff',
							backgroundColor: 'rgba(11,89,140,0.4)',
							fontSize: 10,
							borderRadius: 3,
							padding: [3, 5]
						}
					},
				},
				series: [{
					name: 'Budget vs spending',
					type: 'radar',
					itemStyle: {
						normal: {
							color: 'white',
							lineStyle: {
					   color: 'white',
							},
						},
					},
					data: [{
							value: [6, 6, 1, 1, 1, 5],
							name: '中国队强项',

						},


					]
				}]
			};
			radar.setOption(option);
			radar.on('click', function(params) {
				alert(params.name)
			});
		}
	}
</script>

<style lang="less">
	#radar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width:100%;
		height: 100%;
	}
</style>
