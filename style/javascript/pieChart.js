var ctxP = document.getElementById("pieChart").getContext("2d");
var myPieChart = new Chart(ctxP, {
  type: "pie",
  data: {
    labels: [
      "General",
      "Apex",
      "App Logic",
      "Security",
      "Integration",
      "Reporting",
      "Database",
      "Visualforce",
      "CRM",
      "App Lifecycle",
      "Data Management",
      "Mobile",
    ],
    datasets: [
      {
        data: [22, 16, 13, 10, 9, 7, 5, 5, 5, 4, 2, 2],
        backgroundColor: [
          "#92c221",
          "#e6d96a",
          "#d45a1e",
          "#db0d0d",
          "#11d95a",
          "#144526",
          "#13ada3",
          "#1e4b6e",
          "#3c4e7a",
          "#6855a1",
          "#663382",
          "#8c2989",
          "#7d1447",
          "#b36875",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
