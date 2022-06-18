queue().defer(d3.json, "/donorschoose/projects").await(makeGraphs);

function makeGraphs(error, projectsJson_bar, statesJson) {
  console.log(projectsJson_bar);
  // A = projectsJson.sort(function (a, b) {
  //   return parseFloat(a.report_year) - parseFloat(b.report_year);
  // });
  const parsingRegister = (rawData) => {
    const result = {};
    rawData.forEach(({ states_name, report_year, average_register }) => {
      // console.log({states_name, report_year, average_register });

      // 1: result = {}; states_name: vic;
      // 2: result = {vic: [...]}; states_name: vic;
      if (result[states_name]) {
        result[states_name].push(average_register);
      } else {
        // 1: result = {}; states_name: vic;
        result[states_name] = [average_register];
        // 1: result = {vic: [...]}; states_name: vic;
      }
    });

    return result;
  };

  registerData = parsingRegister(projectsJson_bar);

  console.log(Object.keys(registerData));

  // const states_name = projectsJson
  //   .map((item) => item.states_name)
  //   .filter((value, index, self) => self.indexOf(value) === index);
  const report_year = projectsJson_bar
    .map((item) => item.report_year)
    .filter((value, index, self) => self.indexOf(value) === index);

  // var statedata = [];
  // var dataname = [];
  // for (var k = 0; k < states_name.length - 1; k++) {
  //   var data = [];
  //   var datayear = [];
  //   for (var i = 0; i < report_year.length; i++) {
  //     var filterresult = projectsJson.filter(
  //       (obj) =>
  //         obj.report_year == report_year[i] && obj.states_name == states_name[k]
  //     );
  //     data.push(filterresult[0].average_register);
  //     datayear.push(filterresult[0].report_year);
  //   }
  //   statedata.push(data);
  //   dataname.push(states_name[k]);
  // }

  // var totalaustralia = [];
  // for (var i = 0; i < report_year.length; i++) {
  //   const fitleraustralia = projectsJson.filter(
  //     (obj) =>
  //       obj.report_year == report_year[i] &&
  //       obj.states_name == "Total Australia"
  //   );
  //   totalaustralia.push(fitleraustralia[0].average_register);
  // }
  console.log(registerData);
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    // type: "scatter",
    data: {
      labels: report_year,
      datasets: [
        {
          type: "bar",
          label: Object.keys(registerData)[0],
          data: registerData[`${Object.keys(registerData)[0]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(255, 138, 41, 0.5)",
        },
        {
          type: "bar",
          label: Object.keys(registerData)[1],
          data: registerData[`${Object.keys(registerData)[1]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(40, 90, 112, 0.5)",
        },
        {
          type: "bar",
          label: Object.keys(registerData)[2],
          data: registerData[`${Object.keys(registerData)[2]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(255, 205, 86, 0.5)",
        },
        {
          type: "bar",
          label: Object.keys(registerData)[3],
          data: registerData[`${Object.keys(registerData)[3]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
        {
          type: "bar",
          label: Object.keys(registerData)[4],
          data: registerData[`${Object.keys(registerData)[4]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(54, 162, 235, 0.5)",
        },
        {
          type: "bar",
          label: Object.keys(registerData)[5],
          data: registerData[`${Object.keys(registerData)[5]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(154, 262, 235, 0.5)",
        },
        {
          type: "bar",
          label: Object.keys(registerData)[6],
          data: registerData[`${Object.keys(registerData)[6]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(201, 203, 207, 0.5)",
        },
        {
          type: "bar",
          label: Object.keys(registerData)[7],
          data: registerData[`${Object.keys(registerData)[7]}`],
          // borderColor: 'rgb(255, 99, 132)',
          backgroundColor: "rgba(101, 223, 157, 0.5)",
        },
        {
          type: "line",
          label: Object.keys(registerData)[8],
          data: registerData[`${Object.keys(registerData)[8]}`],
          fill: false,
          borderColor: "rgb(135, 45, 59)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          // type: 'logarithmic',
          position: "left", // `axis` is determined by the position as `'y'`
          min: 0.6,
          max: 1,
          title: {
            display: true,
            text: "Average Register(per person)",
          },
        },
      },
    },
  });
}
