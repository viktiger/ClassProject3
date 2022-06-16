const data1 = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "My First Dataset &#1044",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132,0.2)",
        "rgb(75, 192, 192,0.2)",
        "rgb(255, 205, 86,0.2)",
        "rgb(201, 203, 207,0.2)",
        "rgb(54, 162, 235,0.2)",
      ],
    },
  ],
};

// config
const config1 = {
  type: "polarArea",
  data: data1,
  options: {},
};

// render init block
const myChart1 = new Chart(document.getElementById("polarareaChart"), config1);
