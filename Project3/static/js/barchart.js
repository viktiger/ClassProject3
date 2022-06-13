queue().defer(d3.json, "/donorschoose/projects").await(makeGraphs);

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
// .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
// .append("g")
//     .attr("transform",
//         "translate(" + margin.left + "," + margin.top + ")");

function makeGraphs(error, projectsJson, statesJson) {
  const states_name = projectsJson
    .map((item) => item.states_name)
    .filter((value, index, self) => self.indexOf(value) === index);
  const report_year = projectsJson
    .map((item) => item.report_year)
    .filter((value, index, self) => self.indexOf(value) === index);

  // // console.log(projectsJson)
  //     // List of groups (here I have one group per column)
  //     var allGroup = d3.map(projectsJson, function(d){return(d.states_name)}).keys()

  //     // add the options to the button
  //     d3.select("#selectButton")
  //       .selectAll('myOptions')
  //      	.data(allGroup)
  //       .enter()
  //     	.append('option')
  //       .text(function (d) { return d; }) // text showed in the menu
  //       .attr("value", function (d) { return d; }) // corresponding value returned by the button

  //     // A color scale: one color for each group
  //     var myColor = d3.scaleOrdinal()
  //       .domain(allGroup)
  //       .range(d3.schemeSet2);

  //     // Add X axis --> it is a date format
  //     var x = d3.scaleLinear()
  //       .domain(d3.extent(projectsJson, function(d) { return d.report_year; }))
  //       .range([ 0, width ]);
  //     svg.append("g")
  //       .attr("transform", "translate(0," + height + ")")
  //       .call(d3.axisBottom(x).ticks(report_year.length));

  //     // Add Y axis
  //     var y = d3.scaleLinear()
  //       .domain([0, d3.max(projectsJson, function(d) { return d.average_register; })])
  //       .range([ height, 0 ]);
  //     svg.append("g")
  //       .call(d3.axisLeft(y));

  //     // Initialize line with first group of the list
  //     var line = svg
  //       .append('g')
  //       .append("path")
  //         .datum(projectsJson.filter(function(d){return d.states_name==allGroup[0]}))
  //         .attr("d", d3.line()
  //           .x(function(d) { return x(+d.report_year) })
  //           .y(function(d) { return y(+d.average_register) })
  //         )
  //         .attr("stroke", function(d){ return myColor("valueA") })
  //         .style("stroke-width", 4)
  //         .style("fill", "none")

  //     // A function that update the chart
  //     function update(selectedGroup) {

  //       // Create new data with the selection?
  //       var dataFilter = projectsJson.filter(function(d){return d.states_name==selectedGroup})

  //       // Give these new data to update line
  //       line
  //           .datum(dataFilter)
  //           .transition()
  //           .duration(1000)
  //           .attr("d", d3.line()
  //             .x(function(d) { return x(d.report_year) })
  //             .y(function(d) { return y(+d.average_register) })
  //           )
  //           .attr("stroke", function(d){ return myColor(selectedGroup) })
  //     }

  //     // When the button is changed, run the updateChart function
  //     d3.select("#selectButton").on("change", function(d) {
  //         // recover the option that has been chosen
  //         var selectedOption = d3.select(this).property("value")
  //         // run the updateChart function with this selected option
  //         update(selectedOption)
  //     })

  var statedata = [];
  for (var i = 0; i < report_year.length; i++) {
    var data = [];
    for (var k = 0; k < states_name.length - 1; k++) {
      const filterresult = projectsJson.filter(
        (obj) =>
          obj.report_year == report_year[i] && obj.states_name == states_name[k]
      );
      data.push(filterresult[0].average_register);
    }
    statedata.push(data);
  }
  // console.log(report_year)
  // console.log(statedata)
  // console.log(statedata[1])

  var totalaustralia = [];
  for (var i = 0; i < report_year.length; i++) {
    const fitleraustralia = projectsJson.filter(
      (obj) =>
        obj.report_year == report_year[i] &&
        obj.states_name == "Total Australia"
    );
    totalaustralia.push(fitleraustralia[0].average_register);
  }
  // console.log(totalaustralia)

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "scatter",
    data: {
      labels: report_year,
      datasets: [
        {
          type: "bar",
          label: states_name[0],
          data: statedata[0],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          type: "bar",
          label: states_name[1],
          data: statedata[1],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(255, 159, 64, 0.2)",
        },
        {
          type: "bar",
          label: states_name[2],
          data: statedata[2],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(255, 205, 86, 0.2)",
        },
        {
          type: "bar",
          label: states_name[3],
          data: statedata[3],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
        {
          type: "bar",
          label: states_name[4],
          data: statedata[4],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(54, 162, 235, 0.2)",
        },
        {
          type: "bar",
          label: states_name[5],
          data: statedata[5],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(153, 102, 255, 0.2)",
        },
        {
          type: "bar",
          label: states_name[6],
          data: statedata[6],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(201, 203, 207, 0.2)",
        },
        {
          type: "bar",
          label: states_name[7],
          data: statedata[7],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(101, 223, 157, 0.2)",
        },
        {
          type: "line",
          label: states_name[8],
          data: totalaustralia,
          fill: false,
          borderColor: "rgb(54, 162, 235)",
        },
      ],
    },
    options: {
      scales: {
        myScale: {
          // type: 'logarithmic',
          position: "left", // `axis` is determined by the position as `'y'`
          min: 0.6,
          max: 1,
        },
      },
    },
  });
}
