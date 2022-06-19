queue().defer(d3.json, "/donorschoose/projects").await(makeGraphs_2);

let incomeChart;
const incomeDataOfAllMonth = {};
let incomeDataOfAllState;

const renderIncomeChart = (data) => {
  // config
  const config = {
    type: "scatter",
    data,
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: true,
            text: "Weekly Income/Week",
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

  // render init block
  myChart3 = new Chart(document.getElementById("filter_dar"), config);
};

/**
 * Input:
 *  average_income: 1119.6
 *  average_register: 0.795476592
 *  population_number: 4845152
 *  register_amount: 3854205
 *  report_year: 2016
 *   states_name: "Queensland"

 Output:
 [states_name] = [
    { x: report_year, y: average_register },
    { x: report_year, y: average_register },
  ]
 */
const parsingIncomeData = (rawData) => {
  const result = {};

  rawData.forEach(({ states_name, average_register, average_income }) => {
    // console.log({states_name, report_year, average_register });

    // 1: result = {}; states_name: vic;
    // 2: result = {vic: [...]}; states_name: vic;
    if (result[states_name]) {
      result[states_name].push({ x: average_income, y: average_register });
    } else {
      // 1: result = {}; states_name: vic;
      result[states_name] = [{ x: average_income, y: average_register }];
      // 1: result = {vic: [...]}; states_name: vic;
    }
  });

  // ['vic', 'nsw', ]             vic
  Object.keys(result).forEach((stateName) => {
    // [ { x: report_year, y: average_register },]
    result[stateName] = result[stateName].sort((a, b) => a.x - b.x);
  });

  return result;
};

/**
 * Fetch data - Jan & Feb data
 * default to use Jan data to make graph
 */
function makeGraphs_2(error, projectsJson_scatter, statesJson) {
  incomeDataOfAllState = parsingIncomeData(projectsJson_scatter);
  // setup
  const data = {
    // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: "State",
        data: incomeDataOfAllState["Victoria"],
        backgroundColor: ["rgba(255, 138, 41, 0.2)"],
        borderColor: ["rgba(255, 138, 41, 1)"],
        borderWidth: 1,
      },

      {
        type: "scatter",
        label: "Total Australia",
        data: incomeDataOfAllState["Total Australia"],
        fill: false,
        backgroundColor: ["rgba(36, 110, 112, 0.2)"],
        borderColor: ["rgb(36, 110, 112,1)"],
      },
    ],
  };

  renderIncomeChart(data);
}

function updateMonth(state) {
  myChart3.config.data.datasets[0].data = incomeDataOfAllState[state.value];
  myChart3.update();
}
