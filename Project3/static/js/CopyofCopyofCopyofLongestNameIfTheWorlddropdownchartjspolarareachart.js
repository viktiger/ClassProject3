

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


// config


// render init block
