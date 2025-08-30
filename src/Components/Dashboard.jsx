import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import Cards from "./Cards";
import DailyTrends from "./DailyTrends";
const Dashboard = () => {
  return (
    <>
      <div className="border border-black/20 m-5 p-5  bg-gray-200 rounded-lg">
        <div className="md:flex justify-between items-center">
          <div>
            <h2 className="text-primary font-bold text-4xl">Dashboard</h2>
            <p>Welcome Back! Here's your Trading overview</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-500 p-4 rounded-lg text-white font-semibold flex items-center gap-2 ">
              <span>
                {" "}
                <IoIosAddCircleOutline />
              </span>{" "}
              Open Account
            </button>
            <button className="bg-primary p-4 rounded-lg text-white font-semibold flex items-center gap-2  ">
              <LuRefreshCw />
              Refresh
            </button>
          </div>
        </div>
      </div>
      <Cards />
      <DailyTrends />
    </>
  );
};

export default Dashboard;
