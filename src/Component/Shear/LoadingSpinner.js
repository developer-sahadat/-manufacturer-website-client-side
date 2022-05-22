import React from "react";
import spinner from "../../Assets/Icons/spinner.gif";

const LoadingSpinner = () => {
  return (
    <div>
      <div>
        <img src={spinner} alt="" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
