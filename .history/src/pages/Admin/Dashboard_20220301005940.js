import React from "react";

// components
  
import CardLineChart from "../../components/Cards/CardLineChart";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-wrap">
        <h1>Dashboard</h1>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardPageVisits /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardSocialTraffic /> */}
        </div>
      </div>
    </>
  );
}
