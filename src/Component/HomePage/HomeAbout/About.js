import React from "react";
import about from "../../../Assets/Images/about.png";
import "./about.css";

const About = () => {
  return (
    <div className="about py-20">
      <div className="w-11/12 gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center">
        <div>
          <img
            className="md:max-w-lg min-h-full mx-auto  "
            src={about}
            alt=""
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className=" mb-10 text-3xl lg:text-5xl text-white">
            Build and civil construction Tools
          </h2>
          <p className="text-white mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-white mb-8">
            sum dolor sit amet consectetur adipisicing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation
          </p>
          <button className="banner-btn1 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
