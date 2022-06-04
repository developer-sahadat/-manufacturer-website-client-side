import React from "react";
import "./businesses.css";

const Businesses = () => {
  return (
    <section className="px-20 bg-secondary">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center w-11/12 mx-auto py-20">
        <div class="flex justify-center items-center">
          <div class="stats-icon mr-4">
            <i class="fa-solid fa-thumbs-up text-4xl text-primary"></i>
          </div>
          <div class="stats-info">
            <h3 className="text-6xl font-semibold text-white">1501</h3>
            <p className="text-gray-200 mt-2 text-lg font-medium">
              Satisfied Customers
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="stats-icon mr-4">
            <i class="fa-solid fa-comment-dots text-4xl text-primary"></i>
          </div>
          <div class="stats-info ">
            <h3 className="text-6xl font-semibold text-white">1355</h3>
            <p className="text-gray-200 mt-2 text-lg font-medium">Consulteds</p>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="stats-icon mr-4">
            <i class="fa-solid fa-lightbulb text-4xl text-primary"></i>
          </div>
          <div class="stats-info">
            <h3 className="text-6xl font-semibold text-white">15</h3>
            <p className="text-gray-200 mt-2 text-lg font-medium">
              Years Experience
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="stats-icon mr-4">
            <i class="fa-solid fa-suitcase text-4xl text-primary"></i>
          </div>
          <div class="stats-info">
            <h3 className="text-6xl font-semibold text-white">1111</h3>
            <p className="text-gray-200 mt-2 text-lg font-medium">
              Projects Done
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Businesses;
