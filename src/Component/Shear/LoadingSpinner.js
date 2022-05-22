import React from "react";
import spinner from "../../Assets/Icons/spinner.gif";

const LoadingSpinner = () => {
  return (
    <div className="min-w-full  min-h-screen flex justify-center items-center">
      <div>
        <img src={spinner} alt="" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
