import React from "react";
import { FaChartBar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

import { GrTransaction } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

import { GoGraph } from "react-icons/go";
import Graph from "./Graph";
const DailyTrends = () => {
  return (
    <>
      <div className="border border-black/20 m-5 mb-0 p-5 bg-white rounded-lg flex justify-between">
        <div>
          <div className="flex items-center font-semibold ">
            <span className="bg-blue-200 text-blue-500 p-2 rounded-xl mr-1">
              <FaChartBar />
            </span>
            <h3 className="text-lg">Daily Performance Trends</h3>
          </div>
          <div className=" text-gray-600 flex items-center ml-8 ">
            <CiCalendar />
            <p className="text-gray-600 ">Last 30 Days Active Viewing</p>
          </div>
        </div>
        <div>
          <button className="bg-gray-100 rounded-xl p-1 m-2">All</button>
          <button className="bg-gray-100 rounded-xl p-1 m-2">Financial</button>
          <button className="bg-gray-100 rounded-xl p-1 m-2">Line</button>
          <button className="bg-gray-100 rounded-xl p-1 m-2">Area</button>
          <button className="bg-gray-100 rounded-xl p-1 m-2">Mixed</button>
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-gray-100 rounded-xl p-1 "
            >
              30 Days <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-gray-100 rounded-box z-1 w-36 p-2 shadow-sm"
            >
              <li>
                <a>15 Days</a>
              </li>
              <li>
                <a>10 Days</a>
              </li>
            </ul>
          </div>
          <button className=" bg-gray-100 rounded-xl p-1 m-2">Refresh</button>
        </div>
      </div>
      <div className="border border-black/20 m-5 my-0 p-5 bg-white rounded-lg">
        <div
          className="flex
            gap-3 p-6"
        >
          <div className="border-l-4 border-green-600 shadow-xl/20 w-1/3 px-2 py-2 rounded-lg bg-gradient-to-t from-green-100 to-green-50">
            <h3>Deposits</h3>

            <h2 className="font-bold text-2xl flex items-center  ">
              <button className="bg-white text-green-600 text-xl   rounded-lg m-1 p-1">
                <FaArrowTrendUp />
              </button>
              $0
            </h2>
          </div>
          <div className="border-l-4 border-red-600 shadow-xl/20 w-1/3 px-2 py-2 rounded-lg bg-gradient-to-t from-red-100 to-red-50">
            <h3>Withdrawls</h3>

            <h2 className=" font-bold text-2xl flex items-center ">
              <button className="bg-white text-red-600 text-xl   rounded-lg m-1 p-1">
                <FaArrowTrendDown />
              </button>
              $0
            </h2>
          </div>
          <div className="border-l-4 border-yellow-600 shadow-xl/20 w-1/3 px-2 py-2 rounded-lg bg-gradient-to-t from-yellow-100 to-yellow-50">
            <h3>Transactions</h3>
            <h2 className=" font-bold text-2xl flex items-center ">
              <button className="bg-white text-yellow-600 text-xl   rounded-lg m-1 p-1">
                <GrTransaction />
              </button>
              $0
            </h2>
          </div>

          <div className="border-l-4 border-purple-500 shadow-xl/20 w-1/3 px-2 py-2 rounded-lg bg-gradient-to-l from-purple-100 to-purple-50">
            <h3>IB Partner</h3>

            <h2 className=" font-bold text-2xl flex items-center">
              <button className="bg-white text-purple-600 text-xl   rounded-lg m-1 p-1">
                <IoMdPersonAdd />
              </button>
              0
            </h2>
          </div>
        </div>
      </div>

      <div className="border border-black/20 m-5 my-0 p-5 bg-white rounded-lg">
        <h3 className="font-semibold flex gap-1 items-center text-black">
          <GoGraph />
          Today's Performance
        </h3>
        <div className="flex justify-evenly">
          <div>
            <h3 className="text-green-500 font-semibold text-3xl">$0</h3>
            <h5>Deposits</h5>
          </div>
          <div>
            <h3 className="text-red-500 font-semibold text-3xl">$0</h3>
            <h5>Withdrawls</h5>
          </div>
          <div>
            <h3 className="text-blue-500 font-semibold text-3xl">$0</h3>
            <h5>Transaction</h5>
          </div>
          <div>
            <h3 className="text-green-500 font-semibold text-3xl">$0</h3>
            <h5>Net Flow</h5>
          </div>
        </div>
      </div>
      <Graph />
    </>
  );
};

export default DailyTrends;
