"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { point } from "leaflet";
import { callback } from "chart.js/helpers";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const AnalyticsCard = ({
  title,
  amount,
  percentage,
  isPositive,
  height,
}: any) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Orders ",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "transparent",
        borderColor: "#FF4D4D", // Shaded area color
        fill: true, // This creates the shaded area
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4, //  Adds curve to the line
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true, // Display the legend
        labels: {
          usePointStyle: true, // Use circles instead of squares for legend markers
          pointStyle: "circle", // Ensure the markers are circles
        },
      },
      //   tooltip: {
      //     callbacks: {
      //       label: function (tooltipItem: any) {
      //         return tooltipItem.dataset.label + ": " + tooltipItem.raw;
      //       },
      //     },
      //   },
    },
    scales: {
      x: {
        grid: { display: false },
        beginAtZero: true,
        display: false,
      },
      y: {
        beginAtZero: true,
        display: false, // Hides the y-axis
        //   ticks:{
        //     stepSize:12,
        //     callback:(value:any)=>value+"K"
        //   },
        //   grid:{
        //     borderDash:[10]
        //   }
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm overflow-hidden">
      <h3 className="text-sm  mb-2 font-bold text-black">{title}</h3>
      <h5 className="text-xs  mb-2  text-gray-500">{"Last 7 days"}</h5>

      <div className={`${height ?? "h-16"} flex items-center `}>
        <div className="items-baseline">
          <span className="text-2xl font-semibold">{amount}</span>
        </div>
        <div className="ml-2 -mb-4 ">
          <Line data={data} options={options} />
        </div>
      </div>
      {/* text and progress bar functions */}
      <div className="flex pt-2">
        <span
          className={`ml-2 text-sm w-22  ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "↑" : "↓"} {Math.abs(percentage)}%
          {/* <span className="text-gray-500 text-xs"> vs last 7days</span> */}
        </span>
        <div className="mt-2 grow">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className={`h-1 rounded-full ${
                isPositive ? "bg-green-500" : "bg-red-500"
              }`}
              style={{ width: `${Math.min(Math.abs(percentage), 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
