; (function() {

	function getUserPieConfig(userData) {
		return {
			type: 'doughnut',
			data: {
				datasets: [
					{
						data: userData,

						backgroundColor: ['#3b82f6', '#22c55e'],
						label: 'Dataset 1',
					},
				],
				labels: ['Nam', 'Nữ'],
			},
			options: {
				responsive: true,
				cutoutPercentage: 80,
				legend: {
					display: false,
				},
			},
		}
	}

	fetch(`http://localhost:8080/api_customer_admin/status_chart`)
		.then(resp => resp.text())
		.then(data => {
			
			var pieData = data.substring(1, data.length - 1).split(',').map(Number);
			const pieConfig = getUserPieConfig(pieData.slice(1))

			const pieCtx = document.getElementById('order-pie-chart')
			let chart = new Chart(pieCtx, pieConfig)
		})
})()