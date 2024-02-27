import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";
import { CategoryScale, scales } from "chart.js";
import { barChartData } from "../utils/graphData";

Chart.register(CategoryScale);

export const BarChart = () => {
  return (
    <div>
      <Bar
        data={barChartData}
        options={{
          // scales: [{ ticks: { stepSize: 100000 } }],
          plugins: {
            title: {
              display: true,
              text: "Income - Expense",
              align: "start",
              color: "#0F172A",
              font: { size: 16, lineHeight: 3 },
            },
            legend: { display: false },
          },
        }}
      />
    </div>
  );
};
