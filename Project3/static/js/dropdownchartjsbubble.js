
let DataOfState;

const renderbubbleChart = (data) => {
  const config_a = {
    type: "bubble",
    data: data,
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
bubbleChart = new Chart(document.getElementById("bubbleChart"), config_a);
};

// Get data
d3.json("/Used/Age/Income/Register/State", function(rawData) {
  console.log(rawData);
  
  const parsingData = (rawData) => {
    const result = {};

    rawData.forEach(({ states_name, report_year, average_register, average_income, average_age_used }) => {

      if (result[states_name]) {
        result[states_name].push({ x:average_income, y:average_register, r:average_age_used });
      } else {

        result[states_name] = [{ x:average_income, y:average_register, r:average_age_used }];
      }
    });
    
    return result;
  };

  DataOfState = parsingData(rawData);
  console.log(DataOfState);
  console.log(Object.keys(DataOfState));

  const report_year = rawData
  .map((item) => item.report_year)
  .filter((value, index, self) => self.indexOf(value) === index);
  console.log(report_year);

  var data = {
      labels: report_year,
      datasets: [{
        type: "bubble",
        label: Object.keys(DataOfState)[0],
        data: [DataOfState[`${Object.keys(DataOfState)[0]}`]],
        backgroundColor: "rgba(255, 138, 41, 0.5)",
      },
      {
        type: "bubble",
        label: Object.keys(DataOfState)[1],
        data: [DataOfState[`${Object.keys(DataOfState)[1]}`]],
        backgroundColor: "rgba(40, 90, 112, 0.5)",
      },
      {
        type: "bubble",
        label: Object.keys(DataOfState)[2],
        data: [DataOfState[`${Object.keys(DataOfState)[2]}`]],
        backgroundColor: "rgba(255, 205, 86, 0.5)",
      },
      {
        type: "bubble",
        label: Object.keys(DataOfState)[3],
        data: [DataOfState[`${Object.keys(DataOfState)[3]}`]],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        type: "bubble",
        label: Object.keys(DataOfState)[4],
        data: [DataOfState[`${Object.keys(DataOfState)[4]}`]],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        type: "bubble",
        label: Object.keys(DataOfState)[5],
        data: [DataOfState[`${Object.keys(DataOfState)[5]}`]],
        backgroundColor: "rgba(154, 262, 235, 0.5)",
      },
      {
        type: "bubble",
        label: Object.keys(DataOfState)[6],
        data: [DataOfState[`${Object.keys(DataOfState)[6]}`]],
        backgroundColor: "rgba(201, 203, 207, 0.5)",
      },
    ],
  };
  renderbubbleChart(data);
});

// // Plot charts
// function plotGraph (error, Statedata, statesJson) {
//   DataOfState = parsingData(Statedata);
//   // setup
//   const data = {
//       labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
//       datasets: [
//         {label: "Australian Capital Territory",
//         data: [DataOfState["Australian Capital Territory"]],
//         backgroundColor: "rgba(255, 138, 41, 0.5)",
//       },
//       {
//         label: "New South Wales",
//         data: DataOfState["New South Wales"],
//         backgroundColor: "rgba(40, 90, 112, 0.5)",
//       },
//       {
//         label: "Victoria",
//         data: DataOfState["Victoria"],
//         backgroundColor: "rgba(255, 205, 86, 0.5)",
//       },
//       {
//         label: "Northern Territory",
//         data: DataOfState["Northern Territory"],
//         backgroundColor: "rgba(75, 192, 192, 0.5)",
//       },
//       {
//         label: "Queensland",
//         data: DataOfState["Queensland"],
//         backgroundColor: "rgba(54, 162, 235, 0.5)",
//       },
//       {
//         label: "Tasmania",
//         data: DataOfState["Tasmania"],
//         backgroundColor: "rgba(154, 262, 235, 0.5)",
//       },
//       {
//         label: "South Australia",
//         data: DataOfState["South Australia"],
//         backgroundColor: "rgba(201, 203, 207, 0.5)",
//       },
//     ],
//   };
//   renderbubbleChart(data);
// }




// function plot_chart(year){
  
//   d3.json("/Used/Age/Income/Register/State", function(DataOfState) {

//     DataOfState = parsingData(data);

//     var data_a = {
//       //labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
//       datasets: [
//         {label: "Australian Capital Territory",
//         data: [DataOfState["Australian Capital Territory"]],
//         backgroundColor: "rgba(255, 138, 41, 0.5)",
//       },
//       {
//         label: "New South Wales",
//         data: DataOfState["New South Wales"],
//         backgroundColor: "rgba(40, 90, 112, 0.5)",
//       },
//       {
//         label: "Victoria",
//         data: DataOfState["Victoria"],
//         backgroundColor: "rgba(255, 205, 86, 0.5)",
//       },
//       {
//         label: "Northern Territory",
//         data: DataOfState["Northern Territory"],
//         backgroundColor: "rgba(75, 192, 192, 0.5)",
//       },
//       {
//         label: "Queensland",
//         data: DataOfState["Queensland"],
//         backgroundColor: "rgba(54, 162, 235, 0.5)",
//       },
//       {
//         label: "Tasmania",
//         data: DataOfState["Tasmania"],
//         backgroundColor: "rgba(154, 262, 235, 0.5)",
//       },
//       {
//         label: "South Australia",
//         data: DataOfState["South Australia"],
//         backgroundColor: "rgba(201, 203, 207, 0.5)",
//       },
//     ],
//     };
//     var config_a = {
//       type: "bubble",
//       data: data_a,
//         options: { scales: {
//           x: {
//             position: "bottom",
//             title: {
//               display: true,
//               text: "Average Income ",
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: "Average Register",
//             },
//           },
//         },
//       },
//     };
//     bubbleChart = new Chart(document.getElementById("bubbleChart"), config_a);
//   });
  
// }

// Config


// function updateState(state) {
//   bubbleChart.config.data.datasets[0].data = DataOfState[state.value];
//   bubbleChart.update();
// }
