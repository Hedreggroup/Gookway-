// TopSellingCategory.js
"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TopSellingCategory = ({ height }: any) => {
  const data = {
    labels: ["Kids", "Shoes", "Fashion", "Essentials"],
    datasets: [
      {
        label: "Top Selling Categories",
        data: [300, 500, 200, 100],
        backgroundColor: ["#FF392B", "#00C3F8", "#2F80ED", "#FF8901"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        // position: "bottom",
        labels: {
          usePointStyle: true, // Use circles instead of squares for legend markers
          pointStyle: "circle", // Ensure the markers are circles
        },
      },
    },
  };

  return (
    <div
      className={`${height ?? "h-auto"} bg-white rounded-xl mybox-shadow p-4 `}
    >
      <h2>Top Selling Categories</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TopSellingCategory;
