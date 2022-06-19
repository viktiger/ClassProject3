queue().defer(d3.json, "/Register/Brand").await(makeGraphs4);
function makeGraphs4(error, projectsJson, statesJson) {
  const brand_year = projectsJson
    .map((item) => item.report_year)
    .filter((value, index, self) => self.indexOf(value) === index);
  const brand_rigister = projectsJson
    .map((item) => item.register_amount)
    .filter((value, index, self) => self.indexOf(value) === index);
  console.log(projectsJson);
  // set the dimensions and margins of the graph
  var width = 700;
  var height = 600;
  colorpalette = [
    "#ff8a29",
    "#275a70",
    "#cf0000",
    "#882c3a",
    "#007be3",
    "#403474",
  ];
  // A = [8, 128, 228, 328, 428];
  // append the svg object to the body of the page
  var svg = d3
    .select("#my_dataviz2")
    .append("svg")
    // .attr("width", width)
    // .attr("height", height);
    // .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "85 -50 700 700");

  svg
    .append("circle")
    .attr("cx", 98)
    .attr("cy", 640)
    .attr("r", 8)
    .style("fill", colorpalette[0])
    .style("opacity", "0.75");

  svg
    .append("text")
    .attr("x", 118)
    .attr("y", 640)
    .text(brand_year[0])
    .style("font-size", "220%")
    .attr("alignment-baseline", "middle");
  svg
    .append("circle")
    .attr("cx", 198)
    .attr("cy", 640)
    .attr("r", 8)
    .style("fill", colorpalette[1])
    .style("opacity", "0.75");

  svg
    .append("text")
    .attr("x", 218)
    .attr("y", 640)
    .text(brand_year[1])
    .style("font-size", "220%")
    .attr("alignment-baseline", "middle");

  svg
    .append("circle")
    .attr("cx", 298)
    .attr("cy", 640)
    .attr("r", 8)
    .style("opacity", "0.75")
    .style("fill", colorpalette[2]);
  svg
    .append("text")
    .attr("x", 318)
    .attr("y", 640)
    .text(brand_year[2])
    .style("font-size", "220%")
    .attr("alignment-baseline", "middle");

  svg
    .append("circle")
    .attr("cx", 398)
    .attr("cy", 640)
    .attr("r", 8)
    .style("opacity", "0.75")
    .style("fill", colorpalette[3]);
  svg
    .append("text")
    .attr("x", 418)
    .attr("y", 640)
    .text(brand_year[3])
    .style("font-size", "220%")
    .attr("alignment-baseline", "middle");
  svg
    .append("circle")
    .attr("cx", 508)
    .attr("cy", 640)
    .attr("r", 8)
    .style("opacity", "0.75")
    .style("fill", colorpalette[4]);
  svg
    .append("text")
    .attr("x", 528)
    .attr("y", 640)
    .text(brand_year[4])
    .style("font-size", "220%")
    .attr("alignment-baseline", "middle");

  svg
    .append("circle")
    .attr("cx", 618)
    .attr("cy", 640)
    .attr("r", 8)
    .style("opacity", "0.75")
    .style("fill", colorpalette[5]);
  svg
    .append("text")
    .attr("x", 628)
    .attr("y", 640)
    .text(brand_year[5])
    .style("font-size", "220%")
    .attr("alignment-baseline", "middle");

  // Color palette for continents?
  var color = d3.scaleOrdinal().domain(brand_year).range(colorpalette);

  // Size scale for countries
  var size = d3.scaleLinear().domain([22221, 3038983]).range([7, 55]); // circle will be between 7 and 55 px wide

  // // create a tooltip
  // var Tooltip = d3
  //   .select("#my_dataviz2")
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
  //   Tooltip.style("opacity", 1);
  // };
  // var mousemove = function (d) {
  //   Tooltip.html(
  //     "<u>" +
  //       d.brand_name +
  //       "</u>" +
  //       "<br>" +
  //       d.register_amount +
  //       " inhabitants"
  //   )
  //     .style("left", d3.mouse(this)[0] + 20 + "px")
  //     .style("top", d3.mouse(this)[1] + "px");
  // };
  // var mouseleave = function (d) {
  //   Tooltip.style("opacity", 0);
  // };

  // Initialize the circle: all located at the center of the svg area
  // var node = svg
  //   .append("g")
  //   .selectAll("circle")
  //   .data(projectsJson)
  //   .enter()
  //   .append("circle")
  //   .attr("class", "node")
  //   .attr("r", function (d) {
  //     return size(d.register_amount);
  //   })
  //   .attr("cx", width / 2)
  //   .attr("cy", height / 2)
  //   .style("fill", function (d) {
  //     return color(d.report_year);
  //   })
  //   .style("fill-opacity", 0.8)
  //   .attr("stroke", "black")
  //   .style("stroke-width", 1);

  var node1 = svg
    .selectAll("text")
    .data(projectsJson)
    .enter()
    .append("text")
    .attr("class", "node1")
    // Add your code below this line
    .text(function (d) {
      return d.brand_name;
    })
    .attr("x", width / 2)
    .attr("y", height / 2)
    .attr("font-size", function (d) {
      return size(d.register_amount * 1.3);
    })
    .style("fill", function (d) {
      return color(d.report_year);
    })
    .style("font-weight", "bold")
    .style("opacity", "0.80");

  // .append("title")
  // .text((item) => {
  //   return item.report_year;
  // });

  // .on("mouseover", mouseover) // What to do when hovered
  // .on("mousemove", mousemove)
  // .on("mouseleave", mouseleave)
  // .call(
  //   d3
  //     .drag() // call specific function when circle is dragged
  //     .on("start", dragstarted)
  //     .on("drag", dragged)
  //     .on("end", dragended)
  // );
  // Features of the forces applied to the nodes:
  var simulation1 = d3
    .forceSimulation()
    .force(
      "center",
      d3
        .forceCenter()
        .x(width / 2)
        .y(height / 2)
    ) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(0.1)) // Nodes are attracted one each other of value is > 0
    .force(
      "collide",
      d3
        .forceCollide()
        .strength(0.1)
        .radius(function (d) {
          return size(d.register_amount) + 7;
        })
        .iterations(1)
    ); // Force that avoids circle overlapping

  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  simulation1.nodes(projectsJson).on("tick", function (d) {
    node1
      .attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y;
      });
  });

  // var simulation = d3
  //   .forceSimulation()
  //   .force(
  //     "center",
  //     d3
  //       .forceCenter()
  //       .x(width / 2)
  //       .y(height / 2)
  //   ) // Attraction to the center of the svg area
  //   .force("charge", d3.forceManyBody().strength(0.1)) // Nodes are attracted one each other of value is > 0
  //   .force(
  //     "collide",
  //     d3
  //       .forceCollide()
  //       .strength(0.2)
  //       .radius(function (d) {
  //         return size(d.register_amount) + 3;
  //       })
  //       .iterations(1)
  //   ); // Force that avoids circle overlapping
  // simulation.nodes(projectsJson).on("tick", function (d) {
  //   node
  //     .attr("cx", function (d) {
  //       return d.x - 1;
  //     })
  //     .attr("cy", function (d) {
  //       return d.y - 1;
  //     });
  // });

  // // What happens when a circle is dragged?
  // function dragstarted(d) {
  //   if (!d3.event.active) simulation.alphaTarget(0.03).restart();
  //   d.fx = d.x;
  //   d.fy = d.y;
  // }
  // function dragged(d) {
  //   d.fx = d3.event.x;
  //   d.fy = d3.event.y;
  // }
  // function dragended(d) {
  //   if (!d3.event.active) simulation.alphaTarget(0.03);
  //   d.fx = null;
  //   d.fy = null;
  // }
}
