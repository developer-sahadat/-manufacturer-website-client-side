import React from "react";
import { Link } from "react-router-dom";
import google from "../../../Assets/Images/google.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit/FirebaseInit";

const SingUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(user || error);
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <section className="lg:h-screen lg:w-4/5 mx-auto py-10 lg:py-0">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone_image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={submitHandler}>
                <div className="mb-6">
                  <input
                    name="name"
                    required
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    name="email"
                    required
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    name="password"
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div className=" mb-6">
                  <span className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                    {" "}
                    Already Have an account?
                  </span>
                  <Link to="/login">Login</Link>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
              </form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <button
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: " #3b5998" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-3.5 h-3.5 mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
                Continue with Facebook
              </button>
              <a
                className="px-7 py-3  font-medium text-sm leading-snug uppercase rounded border hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style={{ backgroundColor: "white" }}
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src={google}
                  className="mr-3"
                  style={{ width: "20px" }}
                  alt=""
                />
                Continue with Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingUp;
