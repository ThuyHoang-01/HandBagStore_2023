; (function() {
	function getPieConfig(dataArr) {
		return {
			type: 'doughnut',
			data: {
				datasets: [
					{
						data: dataArr,
						backgroundColor: ['#facc15', '#3b82f6', '#ef4444', '#22c55e'],
						label: 'Dataset 1',
					},
				],
				labels: ['Đang chuẩn bị', 'Đang giao', 'Đã huỷ', 'Đã giao' ],
			},
			options: {
				responsive: true,
				cutoutPercentage: 80,
				/**
				 * Default legends are ugly and impossible to style.
				 * See examples in charts.html to add your own legends
				 *  */
				legend: {
					display: false,
				},
			},
		}
	}

	function renderPieChart(option){
		fetch(`http://localhost:8080/api_sale_admin/satus_chart?option=` + option)
			.then(resp => resp.text())
			.then(data => {
				const canvasContainer = document.querySelector('.canvas-container')
				canvasContainer.innerHTML = `<canvas id="order-pie-chart"></canvas>`

				var pieData = data.substring(1, data.length - 1).split(',').map(Number);
				const pieConfig = getPieConfig(pieData)

				const pieCtx = document.getElementById('order-pie-chart')
				let chart = new Chart(pieCtx, pieConfig)
			})
	}

	;(function (){
		renderPieChart(1)
	})()

	;(function (){
		const orderStaticOptionList = document.getElementsByClassName('order-static-option')

		for (let i = 0; i < orderStaticOptionList.length; ++i){
			orderStaticOptionList[i].addEventListener('click', function (){
				let option = orderStaticOptionList[i].value

				renderPieChart(option)
			})
		}
	})()
})()