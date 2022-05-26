import React from "react";
import "./Offers.css";

const Offers = ({ offer }) => {
  const { title, image, description } = offer;
  return (
    <div className="offer  lg:w-96 mx-auto w-80 rounded">
      <img className="rounded-t" src={image} alt="" />
      <div className="p-5 ">
        <button className="global_btn mb-3 text-sm">Global World</button>
        <h3 className="text-xl font-bold  hover:text-primary cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-500 mb-3 text-sm mt-2">{description}</p>

        <span className="text-primary pt-5 pb-10 font-bold cursor-pointer">
          Read More
          <i
            style={{ fontSize: "12px" }}
            class="fa-solid fa-chevron-right "
          ></i>
        </span>
      </div>
    </div>
  );
};

export default Offers;
