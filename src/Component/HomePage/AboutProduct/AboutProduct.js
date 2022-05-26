import React from "react";
import tool from "../../../Assets/Images/tool.png";
import CustomButton2 from "../../Shear/CustomButton/CustomButton2";

const AboutProduct = () => {
  return (
    <div className=" py-10 bg-slate-50">
      <section className="w-11/12 gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center">
        <div>
          <img src={tool} className="md:max-w-lg min-h-full mx-auto  " alt="" />
        </div>
        <div>
          <h4 className="mb-2 text-gray-500 text-md font-semibold">
            EXPLORE THE FEATURES
          </h4>
          <h1 className="text-3xl font-bold text-secondary">
            All Construction Tools Product
          </h1>
          <p className="mt-5 mb-4 text-gray-500">
            We try to keep the products of all kinds of construction tools. We
            try our best to make our products. Try to send the right product to
            the interest. We hope he has got a lot of success. If you take our
            product, you will benefit a lot
          </p>
          <CustomButton2>Read More</CustomButton2>
        </div>
      </section>
    </div>
  );
};

export default AboutProduct;
