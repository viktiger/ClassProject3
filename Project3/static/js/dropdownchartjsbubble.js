const data = {
  // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: "First Dataset",
      data: [
        {
          x: 10,
          y: 10,
          r: 15,
        },
        {
          x: 13,
          y: 11,
          r: 14,
        },
        {
          x: 12,
          y: 14,
          r: 15,
        },
        {
          x: 15,
          y: 12,
          r: 21,
        },
        {
          x: 17,
          y: 5,
          r: 12,
        },
      ],
      backgroundColor: "rgb(255, 99, 132,0.2)",
    },
    {
      label: "First Dataset 2",
      data: [
        {
          x: 11,
          y: 11,
          r: 13,
        },
        {
          x: 15,
          y: 8,
          r: 1,
        },
        {
          x: 4,
          y: 10,
          r: 9,
        },
        {
          x: 5,
          y: 2,
          r: 13,
        },
        {
          x: 7,
          y: 8,
          r: 11,
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
