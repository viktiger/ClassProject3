// Get data
d3.json("/Used/Age/Income/Register/State", function (rawData) {
  console.log(rawData);

  const parsingData = (rawData) => {
    const result = {};

    rawData.forEach(
      ({ states_name, average_register, average_income, average_age_used }) => {
        if (result[states_name]) {
          result[states_name].push({
            x: average_age_used,
            y: average_income,
            r: average_register * 10,
          });
        } else {
          result[states_name] = [
            {
              x: average_age_used,
              y: average_income,
              r: average_register * 10,
            },
          ];
        }
      }
    );

    return result;
  };

  DataOfState = parsingData(rawData);
  console.log(DataOfState);
  console.log(Object.keys(DataOfState));
  console.log(DataOfState[`${Object.keys(DataOfState)[0]}`]);

  const report_year = rawData
  .map((item) => item.report_year)
  .filter((value, index, self) => self.indexOf(value) === index);
  console.log(report_year);

  const data = {
    labels: report_year,
    datasets: [
      {
        label: `${Object.keys(DataOfState)[0]}`,
        data: DataOfState[`${Object.keys(DataOfState)[0]}`],
        backgroundColor: "rgba(255, 138, 41, 0.5)",
      },
      {
        label: `${Object.keys(DataOfState)[1]}`,
        data: DataOfState[`${Object.keys(DataOfState)[1]}`],
        backgroundColor: "rgba(40, 90, 112, 0.5)",
      },
      {
        label: `${Object.keys(DataOfState)[2]}`,
        data: DataOfState[`${Object.keys(DataOfState)[2]}`],
        backgroundColor: "rgba(255, 205, 86, 0.5)",
      },
      {
        label: `${Object.keys(DataOfState)[3]}`,
        data: DataOfState[`${Object.keys(DataOfState)[3]}`],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: `${Object.keys(DataOfState)[4]}`,
        data: DataOfState[`${Object.keys(DataOfState)[4]}`],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: `${Object.keys(DataOfState)[5]}`,
        data: DataOfState[`${Object.keys(DataOfState)[5]}`],
        backgroundColor: "rgba(154, 262, 235, 0.5)",
      },
      {
        label: `${Object.keys(DataOfState)[6]}`,
        data: DataOfState[`${Object.keys(DataOfState)[6]}`],
        backgroundColor: "rgba(201, 203, 207, 0.5)",
      },
      {
        label: `${Object.keys(DataOfState)[7]}`,
        data: DataOfState[`${Object.keys(DataOfState)[7]}`],
        backgroundColor: "rgba(201, 145, 207, 0.5)",
      },
    ],
  };

  // config
  const config = {
    type: "bubble",
    data,
    options: {
      scales: {
        x: {
          position: "bottom",
          title: {
            display: true,
            text: "Average Age Used ",
          },
        },
        y: {
          title: {
            display: true,
            text: "Average Income",
          },
        },
      },
    },
  };

  // render init block
  const myChart = new Chart(document.getElementById("bubbleChart"), config);
});
