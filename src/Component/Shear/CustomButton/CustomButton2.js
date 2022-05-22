import React from "react";

const CustomButton2 = ({ children }) => {
  return (
    <>
      <button className="border border-primary px-10 py-2 custom_btn custom_btn2 ">
        {children}
      </button>
    </>
  );
};

export default CustomButton2;
