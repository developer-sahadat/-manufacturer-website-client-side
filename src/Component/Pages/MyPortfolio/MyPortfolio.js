import React from "react";
import Footer from "../../Shear/Footer/Footer";
import Header from "../../Shear/Header/Header";
import personal from "../../../Assets/Images/personal.png";

const MyPortfolio = () => {
  return (
    <>
      <Header />

      <div className="w-10/12 mx-auto py-20 ">
        <div className=" w-11/12 gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center">
          <div className="flex items-center justify-center">
            <div class="avatar">
              <div class="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={personal} alt="" />
              </div>
            </div>
            <div className="ml-3">
              <h3 className="mt-3 font-bold text-secondary text-xl">
                {" "}
                Md Shahadat Hossain
              </h3>
              <h6 className="text-gray-500 mt-1">Junior Web Developer</h6>
            </div>
          </div>

          <div>
            <div className="personal-info"></div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                Skills and Abilities:
              </h2>
              <p className="mt-3">
                {" "}
                HTML5, CSS3, Bootstrap5, Tailwind, JavaScript, ES6, React Js,
                Rest API, Node Js, Express Js, MongoDB,
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary mt-5">
                Work Experience
              </h2>
              I am collaborating with the developer build team to create a
              single-page application I have been working on development
              services at Fiverr and Upwork for 6 months
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary mt-5">
                Objective
              </h2>
              <p>
                I am a junior web developer. I have been working with Developer
                Build for over 1 year and this year's experience has helped me a
                lot to develop. I am confident in my skills and I am ready to
                accept any challenge
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary mt-5">Contact</h2>
              <ul>
                <li>
                  <span className="font-bold">Email:</span>{" "}
                  mdridoysikder862@gmail.com
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Phone Number:</span>{" "}
                  +8801998839126
                </li>
                <li>
                  <span className="font-bold">Address:</span> Savar, Dhaka-1344,
                  Bangladesh
                </li>
                <li>
                  <span className="font-bold">Github:</span>{" "}
                  https://github.com/developer-sahadat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyPortfolio;
