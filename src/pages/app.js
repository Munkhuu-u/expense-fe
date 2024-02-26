// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { data } from "../utils/data";
// import PieChart from "../components/PieChart";
import { BarChart } from "../components/BarChart";
// import "./styles.css";

Chart.register(CategoryScale);

export default function app() {
  console.log("app page is working");
  console.log("data: ", data);
  const [chartData, setChartData] = useState(data);

  return (
    <div>
      <p>APP PAGE</p>
      <BarChart chartData={chartData} />
    </div>
  );
}
