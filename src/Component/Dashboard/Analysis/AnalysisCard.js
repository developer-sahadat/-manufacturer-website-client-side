import React from "react";

const AnalysisCard = ({ product }) => {
  const { name, amount, month, arraySine } = product;
  console.log(arraySine);
  return (
    <div
      className="rounded-md p-10 cursor-pointer"
      style={{ boxShadow: "0  4px 21px -12px rgb(0, 0, 0, 0.5)" }}
    >
      <h4 className="text-xl font-bold">{name}</h4>
      <div className="mt-2">
        <span className="font-bold text-xl  mr-2">${amount}</span>{" "}
        <span className="text-sm font-bold">
          -10.5
          <i class={` text-sm text-primary ml-2 ${arraySine}`}></i>
        </span>
      </div>
      <p className="mt-1 font-medium">{month}</p>
    </div>
  );
};

export default AnalysisCard;
