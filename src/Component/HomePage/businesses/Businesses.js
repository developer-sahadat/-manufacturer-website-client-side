import React from "react";
import "./businesses.css";
import shopping from "../../../Assets/Images/shooping.png";
import user from "../../../Assets/Images/user.png";
import review from "../../../Assets/Images/review.png";
import message from "../../../Assets/Images/message (1).png";
const Businesses = () => {
  return (
    <section className="section_businesses mt-10 py-10 ">
      <h2 className="text-center text-primary mt-10  font-bold  text-xl md:text-2xl lg:text-3xl">
        Millions of businesses have believed in us
      </h2>
      <h4 className="text-center mt-5 text-secondary  md:text-xl font-bold">
        Try to understand user express
      </h4>
      <hr className="w-32 mx-auto mt-5  border-2 border-primary" />
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 py-20 w-10/12  text-center mx-auto">
        <div>
          <img className="mx-auto" src={shopping} alt="" />
          <h1 className="text-3xl font-bold mt-4">1000M</h1>
          <h4 className="mt-2 text-primary font-bold"> Worldwide Delivery</h4>
        </div>
        <div>
          <img className="mx-auto " src={review} alt="" />
          <h1 className="text-3xl font-bold mt-4">450K</h1>
          <h4 className="mt-2 text-primary font-bold">Feedback</h4>
        </div>
        <div>
          <img
            className=" h-16 mx-auto"
            style={{ width: "80px" }}
            src={user}
            alt=""
          />
          <h1 className="text-3xl  font-bold mt-3">235K</h1>
          <h4 className="mt-1 text-primary font-bold">Happy Client</h4>
        </div>
        <div>
          <img className="mx-auto" src={message} alt="" />
          <h1 className="text-3xl  font-bold mt-3">100M</h1>
          <h4 className="mt-1 text-primary font-bold">24/7 Help Center</h4>
        </div>
      </div>
    </section>
  );
};

export default Businesses;
