export const barChartData = {
  labels: ["Jun", "Jul", "Aug", "Sep", "Nov", "Dev"],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      barThickness: "16",
      borderRadius: "8",
      label: "Income of month",
      data: [3200000, 3200000, 3200000, 3200000, 3200000, 3200000],
      // you can set indiviual colors for each bar
      backgroundColor: [
        "rgb(132, 204, 22,1)",
        "rgb(132, 204, 22,1)",
        "rgb(132, 204, 22,1)",
        "rgb(132, 204, 22,1)",
        "rgb(132, 204, 22,1)",
        "rgb(132, 204, 22,1)",
      ],
      borderWidth: 1,
    },
    {
      barThickness: "16",
      borderRadius: "8",
      label: "Expenses of month",
      data: [2200000, 2200000, 2200000, 2200000, 2200000, 2200000],
      // you can set indiviual colors for each bar
      backgroundColor: [
        "rgb(249, 115, 22,1)",
        "rgb(249, 115, 22,1)",
        "rgb(249, 115, 22,1)",
        "rgb(249, 115, 22,1)",
        "rgb(249, 115, 22,1)",
        "rgb(249, 115, 22,1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const pieChartData = {
  labels: ["Bill", "Food", "Shop", "Insurance", "Cloth"],
  datasets: [
    {
      label: "My First Dataset",
      data: [3000000, 3000000, 3000000, 3000000, 3000000],
      backgroundColor: [
        // "rgb(28, 100, 242)",
        "#1C64F2",
        // "rgb(231, 70, 148)",
        "#E74694",
        // "rgb(253, 186, 140)",
        "#FDBA8C",
        // "rgb(22, 189, 202)",
        "#16BDCA",
        // "rgb(242, 144, 28)",
        "#F2901C",
      ],
      hoverOffset: 4,
    },
  ],
};
