// set the dimensions and margins of the graph
var margin = { top: 30, right: 40, bottom: 30, left: 30 },
  width = 1200 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#heatmap")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

queue().defer(d3.json, "/Register/Type/State/Age").await(makeGraphs_3);
function makeGraphs_3(error, RegisterTypeStateAge, statesJson) {
  const short_name = RegisterTypeStateAge.map((item) => item.short_name).filter(
    (value, index, self) => self.indexOf(value) === index
  );
  const vehicles_type = RegisterTypeStateAge.map(
    (item) => item.vehicles_type
  ).filter((value, index, self) => self.indexOf(value) === index);

  // Labels of row and columns
  var myGroups = vehicles_type;
  var myVars = short_name;

  // Build X scales and axis:
  var x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.01);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .attr("font-size", "7.5")
    .attr("angle", -90);

  // Build y scales and axis:
  var y = d3.scaleBand().range([height, 0]).domain(myVars).padding(0.01);
  svg.append("g").call(d3.axisLeft(y)).attr("font-size", "8");

  // Build color scale
  var myColor = d3.scaleLinear().range(["white", "#266c99"]).domain([1, 100]);

  // // create a tooltip
  // var tooltip = d3
  //   .select("#heatmap")
  //   .append("div")
  //   .style("opacity", 0)
  //   .attr("class", "tooltip")
  //   .style("background-color", "white")
  //   .style("border", "solid")
  //   .style("border-width", "2px")
  //   .style("border-radius", "5px")
  //   .style("padding", "5px");

  // // Three function that change the tooltip when user hover / move / leave a cell
  // var mouseover = function (d) {
  //   tooltip.style("opacity", 1);
  // };
  // var mousemove = function (d) {
  //   tooltip
  //     .html("The exact value of<br>this cell is: " + d.age_used)
  //     .style("left", d3.mouse(this)[0] + 6000 + "px")
  //     .style("top", d3.mouse(this)[1] + 7000 + "px");
  // };
  // var mouseleave = function (d) {
  //   tooltip.style("opacity", 0);
  // };

  // add the squares
  svg
    .selectAll()
    .data(RegisterTypeStateAge, function (d) {
      return d.vehicles_type + ":" + d.short_name;
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return x(d.vehicles_type);
    })
    .attr("y", function (d) {
      return y(d.short_name);
    })
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())

    .style("fill", function (d) {
      return myColor(d.age_used);
    });
  // .on("mouseover", mouseover)
  // .on("mousemove", mousemove)
  // .on("mouseleave", mouseleave);
}
