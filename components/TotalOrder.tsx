"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TotalOrder = () => {
  const data = {
    labels: ["12am", "4am", "8am", "12pm", "4pm", "8pm", "11pm"],
    datasets: [
      {
        label: "Orders Over Time",
        data: [0, 5000, 0, 10000, 0, 12000, 0],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false, // No shaded area
        tension: 0.3, // Slight curve to the line
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
  };

  return (
    <div className="bg-white rounded-xl mybox-shadow p-4">
      <h2>Today Order</h2>
      <h3 style={{ fontSize: "2em", margin: "10px 0" }}>16.5K</h3>
      <p style={{ color: "green" }}>⬆ 6% vs last day</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default TotalOrder;
