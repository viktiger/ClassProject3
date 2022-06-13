queue().defer(d3.json, "/donorschoose/projects").await(makeGraphs_2);

let incomeChart;
const incomeDataOfAllMonth = {};
let incomeDataOfAllState;

const renderIncomeChart = (data) => {
  // config
  const config = {
    type: "line",
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          min: 0.6,
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

  rawData.forEach(({ states_name, report_year, average_register }) => {
    // console.log({states_name, report_year, average_register });

    // 1: result = {}; states_name: vic;
    // 2: result = {vic: [...]}; states_name: vic;
    if (result[states_name]) {
      result[states_name].push({ x: report_year + "", y: average_register });
    } else {
      // 1: result = {}; states_name: vic;
      result[states_name] = [{ x: report_year + "", y: average_register }];
      // 1: result = {vic: [...]}; states_name: vic;
    }
  });

  // ['vic', 'nsw', ]             vic
  Object.keys(result).forEach((stateName) => {
    // [ { x: report_year, y: average_register },]
    result[stateName] = result[stateName].sort((a, b) => a.x - b.x);
  });

  console.log({ result });
  return result;
};

/**
 * Fetch data - Jan & Feb data
 * default to use Jan data to make graph
 */
function makeGraphs_2(error, projectsJson, statesJson) {
  incomeDataOfAllState = parsingIncomeData(projectsJson);

  // setup
  const data = {
    // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: "State",
        data: incomeDataOfAllState["Victoria"],
        backgroundColor: ["rgba(255, 26, 104, 0.2)"],
        borderColor: ["rgba(255, 26, 104, 1)"],
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Total Australis",
        data: incomeDataOfAllState["Total Australia"],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  renderIncomeChart(data);
}

function updateMonth(state) {
  myChart3.config.data.datasets[0].data = incomeDataOfAllState[state.value];
  myChart3.update();
}
