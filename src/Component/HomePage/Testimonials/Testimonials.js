import React from "react";
import TestiSlider from "../TestiSlider/TestiSlider";

const Testimonials = () => {
  return (
    <section className=" bg-secondary py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-white mt-10 text-4xl font-bold before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            Our Business Member
          </h2>
          <p className="mt-4 md:w-5/12 text-gray-300 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
