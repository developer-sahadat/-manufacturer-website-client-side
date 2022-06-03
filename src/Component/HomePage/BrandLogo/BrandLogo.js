import React from "react";
import logo1 from "../../../Assets/Images/logo1.jpg";
import logo2 from "../../../Assets/Images/logo2.jpg";
import logo3 from "../../../Assets/Images/logo3.jpg";
import logo4 from "../../../Assets/Images/logo4.jpg";
import logo5 from "../../../Assets/Images/logo5.jpg";
import logo6 from "../../../Assets/Images/logo6.jpg";
const BrandLogo = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-wrap py-20 justify-center items-center">
      <div>
        <img src={logo1} alt="" />
      </div>
      <div>
        <img src={logo2} alt="" />
      </div>
      <div>
        <img src={logo3} alt="" />
      </div>
      <div>
        <img src={logo4} alt="" />
      </div>
      <div>
        <img src={logo5} alt="" />
      </div>
      <div>
        <img src={logo6} alt="" />
      </div>
    </div>
  );
};

export default BrandLogo;
