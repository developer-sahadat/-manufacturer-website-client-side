import React from "react";
import f1 from "../../../Assets/Images/f1.jpg";
import f2 from "../../../Assets/Images/f2.jpg";
import f3 from "../../../Assets/Images/f3.jpg";
import f4 from "../../../Assets/Images/f4.jpg";

const Featured = () => {
  return (
    <section className="bg-secondary py-20">
      <h2 className="text-center text-5xl text-white font-bold mb-10">
        Our Featured
      </h2>
      <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-3">
        <div>
          <img src={f1} alt="" />
        </div>
        <div>
          <img src={f2} alt="" />
        </div>
        <div>
          {" "}
          <img src={f3} alt="" />
        </div>
        <div>
          <img src={f4} alt="" />
        </div>
      </div>
      <div className="text-center pt-10 pb-5 ">
        <button className="banner-btn1 text-white font-medium">
          View Featured
        </button>
      </div>
    </section>
  );
};

export default Featured;
