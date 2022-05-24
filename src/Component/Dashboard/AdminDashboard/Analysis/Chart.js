import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
    },

    {
      name: "Feb",
      "Active User": 5000,
    },

    {
      name: "Mar",
      "Active User": 2000,
    },

    {
      name: "Apr",
      "Active User": 4000,
    },

    {
      name: "Jun",
      "Active User": 1000,
    },
    {
      name: "Jul",
      "Active User": 9000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 7000,
    },
    {
      name: "Oct",
      "Active User": 4000,
    },
    {
      name: "Nov",
      "Active User": 6000,
    },
    {
      name: "Dec",
      "Active User": 5000,
    },
  ];
  return (
    <div
      className="m-10 px-10 py-5 "
      style={{ boxShadow: "0  4px 21px -12px rgb(0, 0, 0, 0.5)" }}
    >
      <h2 className="text-secondary font-bold text-xl mb-4">Sales Analysis</h2>
      <div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis />
            <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
