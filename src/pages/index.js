import { Login, Bar } from "../components";
// import Login from "../components/Login.jsx";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import "./styles.css";

Chart.register(CategoryScale);

export default function Home() {
  const [chartData, setChartData] = useState({
    // ...chart data
  });

  return (
    <div>
      <p>Hello world</p>
      <Bar />
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
    </div>
  );
}
