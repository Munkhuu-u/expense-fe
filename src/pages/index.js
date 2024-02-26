import { useState } from "react";
// import "./App.css";
import BarChart from "../components/BarChart";
// import LineChart from "./components/LineChart";
// import PieChart from "./components/PieChart";
import { UserData } from "../utils/data";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div style={{ width: 700 }}>
      <Bar data={userData} />
    </div>
  );
}
