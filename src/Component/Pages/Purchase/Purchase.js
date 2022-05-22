import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  return (
    <div className="py-10">
      <div className="lg:w-2/5 border md:w-9/12 w-10/12	 px-10 pb-7 rounded	 mx-auto shadow shadow-blue-200">
        <h1 className="text-center py-5 text-2xl  font-bold">
          Order information
        </h1>
        <form>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info mb-3  w-full"
            required
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info mb-3  w-full"
            required
          />
          <input
            type="text"
            placeholder="Type here"
            required
            className="input input-bordered input-info mb-3  w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info mb-3  w-full"
            required
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info mb-3 w-full"
            required
          />
          <button className="border border-primary px-10 py-2 text-sm md:text-lg  custom_btn custom_btn2 w-full lg:font-medium">
            {" "}
            complete the purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
