import React from "react";
import { Link } from "react-router-dom";
import about from "../../../Assets/Images/about.png";
import "./about.css";

const About = () => {
  return (
    <div className="about py-20">
      <div className="max-w-[1200px] gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center">
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
          <Link
            to="/login"
            class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
