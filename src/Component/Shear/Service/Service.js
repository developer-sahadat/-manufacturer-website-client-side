import React from "react";
import "./service.css";

const Service = ({ service }) => {
  const {
    image,
    description,
    minimumQuantity,
    name,
    price,
    availableQuantity,
  } = service;
  return (
    <div className="w-72 lg:w-80 mx-auto cursor-pointer service_container text-center md:text-left">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text-service ">
        <h2 className="mt-5 text-xl font-bold mb-3">{name}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        <h4 className="mt-3 text-primary font-medium text-xl">
          Per Unit Price ${price}
        </h4>
        <h6 className="mt-4 text-md font-medium  ">
          Available Quantity: {availableQuantity}
        </h6>
        <h6 className="font-medium text-md ">
          Minimum Order Quantity: {minimumQuantity}
        </h6>
      </div>
      <button className="mt-5 service_btn border border-primary px-10 py-2 custom_btn font-medium">
        Buy Now
      </button>
    </div>
  );
};

export default Service;
