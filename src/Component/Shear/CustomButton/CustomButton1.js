import React from "react";
import "./Button.css";

const CustomButton1 = ({ children }) => {
  return (
    <>
      <button className="border border-primary px-10 py-2 custom_btn">
        {children}
      </button>
    </>
  );
};

export default CustomButton1;
