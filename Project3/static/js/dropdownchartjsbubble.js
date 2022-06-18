let DataOfState;


// Start Charts
d3.json("/Used/Age/Income/Register/State", function(rawData) {
  
  const parsingData = (rawData) => {
    const result = {};

    rawData.forEach(({ states_name, average_register, average_income, average_age_used }) => {

      if (result[states_name]) {
        result[states_name].push({ x: average_income, y: average_register, r: average_age_used });
      } else {

        result[states_name] = [{ x: average_income, y: average_register, r: average_age_used }];
      }
    });
    
    return result;
  };

  DataOfState = parsingData(rawData);

  year_choice = DataOfState.filter(x=>x.report_year==2016)

  states_each_year = year_choice.map(x=>x.states_name)
  average_income_each_year = year_choice.map(x=>x.average_income)
  average_register_each_year = year_choice.map(x=>x.year_choice)
  average_age_used_each_year = year_choice.map(x=>x.average_age_used)
  each_report_years = year_choice.map(x=>x.report_year)

  var data_a = {
    labels: states_each_year,
    datasets: [
      {
        label: "Australian Capital Territory",
        data: [DataOfState["Australian Capital Territory"]],
        backgroundColor: false
      },
      {
        label: "New South Wales",
        data: DataOfState["New South Wales"],
        backgroundColor: false,
      },
      {
        label: "Victoria",
        data: DataOfState["Victoria"],
        backgroundColor: false,
      },
      {
        label: "Northern Territory",
        data: DataOfState["Northern Territory"],
        backgroundColor: false,
      },
      {
        label: "Queensland",
        data: DataOfState["Queensland"],
        backgroundColor: false,
      },
      {
        label: "Tasmania",
        data: DataOfState["Tasmania"],
        backgroundColor: false,
      },
      {
        label: "South Australia",
        data: DataOfState["South Australia"],
        backgroundColor: false,
      },
    ],
  };

  var config_a = {
    type: "bubble",
    data: data_a,
      options: {scales: {
        x: {
          position: "bottom",
          title: {
            display: true,
            text: "Average Income ",
          },
        },
        y: {
          title: {
            display: true,
            text: "Average Register",
          },
        },
      },
    },
  };
  bubbleChart = new Chart(document.getElementById("bubbleChart"), config1);
});


function plot_chart(year){
  
  d3.json("/Used/Age/Income/Register/State", function(DataOfState) {

    DataOfState = parsingData(data);

    year_choice = DataOfState.filter(x=>x.report_year==parseInt(year))
  
    states_each_year = year_choice.map(x=>x.states_name)
    average_income_each_year = year_choice.map(x=>x.average_income)
    average_register_each_year = year_choice.map(x=>x.year_choice)
    average_age_used_each_year = year_choice.map(x=>x.average_age_used)
    each_report_years = year_choice.map(x=>x.report_year)
  
    var data_a = {
      labels: states_each_year,
      datasets: [
        {label: "Australian Capital Territory",
        data: [DataOfState["Australian Capital Territory"]],
        backgroundColor: false
      },
      {
        label: "New South Wales",
        data: DataOfState["New South Wales"],
        backgroundColor: false,
      },
      {
        label: "Victoria",
        data: DataOfState["Victoria"],
        backgroundColor: false,
      },
      {
        label: "Northern Territory",
        data: DataOfState["Northern Territory"],
        backgroundColor: false,
      },
      {
        label: "Queensland",
        data: DataOfState["Queensland"],
        backgroundColor: false,
      },
      {
        label: "Tasmania",
        data: DataOfState["Tasmania"],
        backgroundColor: false,
      },
      {
        label: "South Australia",
        data: DataOfState["South Australia"],
        backgroundColor: false,
      },
    ],
    };
    var config_a = {
      type: "bubble",
      data: data_a,
        options: { scales: {
          x: {
            position: "bottom",
            title: {
              display: true,
              text: "Average Income ",
            },
          },
          y: {
            title: {
              display: true,
              text: "Average Register",
            },
          },
        },
      },
    };
    bubbleChart = new Chart(document.getElementById("bubbleChart"), config_a);
  });
  
}

function updateState(state) {
  bubbleChart.config.data.datasets[0].data = DataOfState[state.value];
  bubbleChart.update();
}
