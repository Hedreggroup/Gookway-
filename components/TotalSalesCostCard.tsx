"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
} from "chart.js";
import { point } from "leaflet";
import { callback } from "chart.js/helpers";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const TotalSalesCostCard = ({ title, amount, percentage, isPositive }: any) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "transparent",
        borderColor: "#FF4D4D", // Shaded area color
        fill: true, // This creates the shaded area
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4, //  Adds curve to the line
      },
      {
        label: "Cost Data",
        data: [45, 49, 70, 71, 46, 45, 30],
        backgroundColor: "transparent",
        borderColor: "blue", // Shaded area color
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
        display: false, // Display the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.dataset.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        beginAtZero: true,
        // display: false,
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
    <div className="bg-white p-4 pb-8 flex items-center rounded-2xl  shadow-sm ">
      <div className="flex flex-col justify-evenly h-36   ">
        <h3 className="text-sm  mb-2 font-bold text-black">
          Total Sales & Cost
        </h3>
        <h5 className="text-xs  mb-2  text-gray-500">{"Last 7 days"}</h5>
        <div className="flex items-baseline">
          <span className="text-2xl font-semibold">{amount}</span>
        </div>
        <span
          className={`ml-2 text-sm w-22  ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "↑" : "↓"} {Math.abs(percentage)}%
          {/* <span className="text-gray-500 text-xs"> vs last 7days</span> */}
        </span>
      </div>
      <div className=" -mb-4 ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalSalesCostCard;
