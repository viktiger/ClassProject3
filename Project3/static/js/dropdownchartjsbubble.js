const data = {
  // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  // x = year, y = year, bubble = brand, size = amount
  datasets: [
    {
      label: "First Dataset - Mazda",
      data: [
        {
          x: 2016,
          y: 2016,
          r: 1061824,
        },
        {
          x: 2017,
          y: 2017,
          r: 1616581,
        },
        {
          x: 2018,
          y: 2018,
          r: 1206051,
        },
        {
          x: 2019,
          y: 2019,
          r: 1266407,
        },
        {
          x: 2020,
          y: 2020,
          r: 1366407,
        },
      ],
      backgroundColor: "rgb(255, 99, 132,0.2)",
    },
    {
      label: "First Dataset 2 Golf cart",
      data: [
        {
          x: 2016,
          y: 2016,
          r: 2061824,
        },
        {
          x: 2017,
          y: 2017,
          r: 2616581,
        },
        {
          x: 2018,
          y: 2018,
          r: 2206051,
        },
        {
          x: 2019,
          y: 2019,
          r: 2266407,
        },
        {
          x: 2020,
          y: 2020,
          r: 12366407,
        },
      ],
      backgroundColor: "rgb(155, 230, 32,0.2)",
    },
  ],
};

// config
const config = {
  type: "bubble",
  data,
  options: {},
};

// render init block
const myChart = new Chart(document.getElementById("bubbleChart"), config);
