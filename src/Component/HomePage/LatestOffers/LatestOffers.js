import React, { useEffect, useState } from "react";
import Offers from "./Offers";
import "./Offers.css";

const LatestOffers = () => {
  const [offers, setOffers] = useState([]);
  console.log(offers);
  useEffect(() => {
    fetch("https://construction-tools.onrender.com/offer")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <section className="">
      <div className="latestOffer bg-secondary py-20">
        <h2 className="text-center  text-white font-bold mb-3 lg:text-3xl">
          Exclusive Savings And Helpful Articles
        </h2>
        <p className=" mx-auto text-center lg:text-md text-white lg:w-5/12">
          Join over half a million tools lovers and get our latest deals,
          articles, and resources sent straight to your inbox!
        </p>
        <div class="flex justify-center">
          <div class="mb-3 mt-10  md:w-4/12 ">
            <div class="input-group relative flex flex-wrap items-stretch  mb-4">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter Email "
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                class="btn inline-block px-6 bg-blue-600 py-2 border-2 border-blue-600  font-medium text-xs leading-tight uppercase rounded text-white hover:text-white hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 text-xl md:text-3xl font-bold text-secondary">
        Stay Informed @Construction Tool
      </h1>
      <p className="text-center mt-4 font-medium text-gray-700">
        Latest offers, promos, product releases and industry news
      </p>
      <div className="grid gap-10  mt-7 pb-10 lg:grid-cols-3 md:grid-cols-2 lg:w-11/12 mx-auto">
        {offers.map((offer) => (
          <Offers key={offer?._id} offer={offer} />
        ))}
      </div>
    </section>
  );
};

export default LatestOffers;
