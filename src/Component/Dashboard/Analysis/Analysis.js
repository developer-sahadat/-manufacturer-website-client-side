import React from "react";
import AnalysisCard from "./AnalysisCard";
import Chart from "./Chart";

const Analysis = () => {
  const productAnalysis = [
    {
      name: "Revenue",
      amount: 12434545,
      month: "Compared to last month",
      arraySine: "fa-solid fa-arrow-down font-bold",
    },
    {
      name: "Sales",
      amount: 24312.5,
      month: "Compared to last month",
      arraySine: "fa-solid fa-arrow-down  font-bold",
    },
    {
      name: "Cost",
      amount: 522432.5,
      month: "Compared to last month",
      arraySine: "fa-solid fa-arrow-up  font-bold",
    },
  ];

  return (
    <div>
      <div className="grid gap-8 p-5 md:grid-cols-3">
        {productAnalysis.map((product) => (
          <AnalysisCard key={product?._id} product={product} />
        ))}
      </div>
      <Chart />
    </div>
  );
};

export default Analysis;
