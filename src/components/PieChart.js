import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { pieChartData } from "../utils/graphData";
import { plugins } from "../../postcss.config";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  return (
    <div>
      <Doughnut
        data={pieChartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Income - Expense",
              align: "start",
              color: "#0F172A",
              font: { size: 16, lineHeight: 3 },
            },
            legend: { display: false, position: "right" },
          },
        }}
      />
    </div>
  );
};
