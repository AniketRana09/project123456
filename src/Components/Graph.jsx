import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
const data1 = [
  { date1: "10 Aug", Deposit: 0, Withdraw: 0 },
  { date1: "15 Aug", Deposit: 2, Withdraw: 2 },
  { date1: "20 Aug", Deposit: 3, Withdraw: 7 },
  { date1: "25 Aug", Deposit: 0, Withdraw: 2 },
  { date1: "30 Aug", Deposit: 7, Withdraw: 1 },
];
const Graph = () => {
  return (
    <div className="border border-black/20 m-5 mb-0 p-4 bg-white rounded-lg mt-0 h-72 ">
      <ResponsiveContainer>
        <LineChart data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date1" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Deposit"
            stroke="green"
            strokeWidth={3}
            dot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Withdraw"
            stroke="red"
            strokeWidth={3}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
