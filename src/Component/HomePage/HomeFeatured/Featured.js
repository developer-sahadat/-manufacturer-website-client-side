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
      <div className="max-w-[1200px] text-center mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-3">
        <div>
          <img className="mx-auto" src={f1} alt="" />
        </div>
        <div>
          <img className="mx-auto" src={f2} alt="" />
        </div>
        <div>
          {" "}
          <img className="mx-auto" src={f3} alt="" />
        </div>
        <div>
          <img className="mx-auto" src={f4} alt="" />
        </div>
      </div>
      <div className="text-center pt-10 pb-5 ">
        <button class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          View Featured
        </button>
      </div>
    </section>
  );
};

export default Featured;
