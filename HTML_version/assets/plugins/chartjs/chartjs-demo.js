			var doughnutData = [
				
				{
					value: 180,
					color: "#00ddd8",
					label: 'Homepage'
				},
				{
					value : 100,
					color : "#ff606e",
					label: 'Suche'
				},
				{
					value : 50,
					color : "#517398",
					label: 'Facebook'
				},
				{
					value : 10,
					color : "#ffffff",
					label: 'Sonstige'
				},
			
			];

	var myDoughnut = new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(doughnutData);
	
	
			var doughnutData2 = [

				{
					value : 45,
					color : "#00ddd8",
					label: "Homepage",

				},
				{
					value : 55,
					color : "#ff606e",
					label: "Suche",
				},
				{
					value : 50,
					color : "#517398",
					label: 'Facebook'
				},
				{
					value : 10,
					color : "#ffffff",
					label: 'Sonstige',
				},
			
			];
	
	var myDoughnut2 = new Chart(document.getElementById("doughnut2").getContext("2d")).Doughnut(doughnutData2);


				var doughnutData3 = [
				
				{
					value: 180,
					color:"#1fda9a"
				},
				{
					value : 130,
					color : "#D8BA38"
				},
				{
					value : 60,
					color : "#28ABE3"
				},
				{
					value : 10,
					color : "#DB3340"
				},
			
			];

	var myDoughnut3 = new Chart(document.getElementById("doughnut3").getContext("2d")).Doughnut(doughnutData);

	//var myLine = new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);

/*
	var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					data : [28,48,40,19,96,27,100]
				}
			]
			
		}
*/
	//var myBar = new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);

	/*var chartData = [
			{
				value : Math.random(),
				color: "#D97041"
			},
			{
				value : Math.random(),
				color: "#C7604C"
			},
			{
				value : Math.random(),
				color: "#21323D"
			},
			{
				value : Math.random(),
				color: "#9D9B7F"
			},
			{
				value : Math.random(),
				color: "#7D4F6D"
			},
			{
				value : Math.random(),
				color: "#584A5E"
			}
		];*/
//	var myPolarArea = new Chart(document.getElementById("polarArea").getContext("2d")).PolarArea(chartData);







