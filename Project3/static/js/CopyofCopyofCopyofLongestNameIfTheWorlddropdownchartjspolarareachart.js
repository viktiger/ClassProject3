// Started with documentation from https://www.chartjs.org/docs/latest/ and pasted below
// Setup d3.json and console.log(data)
// Then setup variables and console.log specific "columns" 
//    e.g. brand_names or report_years = data.map(x=>x.report_year)
// Then setup filter and called variable get_by_year and built that into each previous variable 
//    e.g. report_years = get_by_year.map(x=>x.report_year)

// const data = {
//   labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [11, 16, 7, 3, 14],
//     backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(201, 203, 207)', 'rgb(54, 162, 235)']
//   }]
// };


// Below section plots chart and upon navigating to site displays data for 2016
d3.json("/Register/Brand", function(data) {

  get_by_year = data.filter(x=>x.report_year===2016)

  brand_names = get_by_year.map(x=>x.brand_name)
  register_amounts = get_by_year.map(x=>x.register_amount)
  report_years = get_by_year.map(x=>x.report_year)

  var data1 = {
    labels: brand_names,
    datasets: [
      {
        label: "My First Dataset &#1044",
        data:register_amounts,
        backgroundColor:false
      },
    ],
  };
  var config1 = {
    type: "polarArea",
    data: data1,
    options: {},
  };
  mychart = new Chart(document.getElementById("polarareaChart"), config1);
});


// Below section destroys existing chart and upon selecting dropdown or toggle of year it displays data for that year
function plot_chart(year){
  mychart.destroy()
  d3.json("/Register/Brand", function(data) {

    get_by_year = data.filter(x=>x.report_year===parseInt(year))
  
    brand_names = get_by_year.map(x=>x.brand_name)
    register_amounts = get_by_year.map(x=>x.register_amount)
    report_years = get_by_year.map(x=>x.report_year)
  
    var data1 = {
      labels: brand_names,
      datasets: [
        {
          label: "My First Dataset &#1044",
          data:register_amounts,
          backgroundColor:false
        },
      ],
    };
    var config1 = {
      type: "polarArea",
      data: data1,
      options: {},
    };
     mychart = new Chart(document.getElementById("polarareaChart"), config1);

  });
}