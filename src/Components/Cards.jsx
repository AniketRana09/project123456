import React from "react";
import { LuWallet } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
const Cards = () => {
  return (
    <div
      className="md:flex
    gap-3 p-6"
    >
      <div className="border-t-4 border-blue-600 shadow-xl/20 md:w-1/3 px-5 py-8 rounded-lg bg-gradient-to-t from-blue-100 to-blue-50 hover:scale-105">
        <h3>Total Balance</h3>

        <h2 className="text-blue-600 font-bold text-4xl flex my-4 items-center gap-9 justify-between">
          $0.00
          <button className="bg-white rounded-lg m-2 p-2">
            <LuWallet />
          </button>
        </h2>
      </div>
      <div className="border-t-4 border-green-600 shadow-xl/20 my-4 md:w-1/3 px-5 py-8 rounded-lg bg-gradient-to-t from-green-100 to-green-50 hover:scale-105">
        <h3>Total Deposits</h3>

        <h2 className="text-green-600 font-bold text-4xl flex items-center gap-9 justify-between">
          $0.00
          <button className="bg-white rounded-lg m-2 p-2">
            <FaArrowTrendUp />
          </button>
        </h2>
      </div>
      <div className="border-t-4 border-red-600 shadow-xl/20 my-4 md:w-1/3 px-5 py-8 rounded-lg bg-gradient-to-t from-red-100 to-red-50 hover:scale-105">
        <h3>Total Withdrawls</h3>

        <h2 className="text-red-600 font-bold text-4xl flex items-center gap-9 justify-between">
          $0.00
          <button className="bg-white rounded-lg m-2 p-2">
            <FaArrowTrendDown />
          </button>
        </h2>
      </div>
      <div className="border-t-4 border-purple-500 shadow-xl/20 my-4 md:w-1/3 px-5 py-8  rounded-lg bg-gradient-to-l from-purple-100 to-purple-50 hover:scale-105">
        <h3>MTS Account</h3>

        <h2 className="text-purple-600 font-bold text-4xl flex items-center justify-between gap-9">
          4
          <button className="bg-white rounded-lg m-2 p-2 ">
            <MdAccountBalance />
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Cards;
