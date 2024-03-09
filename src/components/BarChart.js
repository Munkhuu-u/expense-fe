import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";
import { CategoryScale, scales } from "chart.js";
import { barChartData } from "../utils/graphData";

Chart.register(CategoryScale);

export const BarChart = () => {
  return (
    <div className="w-full h-[162px]">
      <Bar
        data={barChartData}
        options={{
          // scales: { ticks: { stepSize: 100000 } },
          // scales: { x: { grid: { offset: true } } },
          plugins: {
            // title: {
            //   display: true,
            //   text: "Income - Expense",
            //   align: "start",
            //   color: "#0F172A",
            //   font: { size: 16, lineHeight: 3 },
            // },
            legend: { display: false },
          },
        }}
      />
    </div>
  );
};
