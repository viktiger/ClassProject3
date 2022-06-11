queue().defer(d3.json, "/donorschoose/projects")
    .await(makeGraphs);

	function makeGraphs(error, projectsJson, statesJson) {
		// const report_year = projectsJson.map(item => item.report_year)
		// 					.filter((value, index, self) => self.indexOf(value) === index)
		console.log(projectsJson)
		// const report_year = projectsJson.map(item => item.report_year)
		// .filter((value, index, self) => self.indexOf(value) === index)
		// max_age = Math.max.apply(Math, age_used);
		// min_age = Math.min.apply(Math, age_used);
		names.forEach(function(name) {
			d3.select('#selDataset')
				.append('option')
				.text(name)
			});
		  

	};