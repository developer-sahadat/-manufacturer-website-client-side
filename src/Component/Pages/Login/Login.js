import { async } from "@firebase/util";
import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const checkboxRef = useRef(false);
  let from = location.state?.from?.pathname || "/";

  /** Login  in With email password start here **/
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  /** send password reset email start here **/
  const [sendPasswordResetEmail, sending, rError] =
    useSendPasswordResetEmail(auth);

  /** Google Sign in code start here **/
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  /** Facebook Sign in code start here **/
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);

  if (user || gUser || fUser) {
    navigate(from, { replace: true });
  }

  /** Sign Up loading code start **/
  if (loading || sending || gLoading || fLoading) {
    return <LoadingSpinner />;
  }

  /** Sign Up error code start **/
  let errorMessage = "";
  if (error || rError || gError || fError) {
    errorMessage =
      error?.message || rError?.message || gError?.message || fError?.message;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const checkbox = checkboxRef.current.checked;
    if (checkbox) {
      signInWithEmailAndPassword(email, password);
    } else {
      toast.error("please check to Remember me");
    }
  };

  return (
    <div className="">
      <section className="lg:h-screen lg:w-4/5 mx-auto py-10 lg:py-0">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="SampleImage"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="text-lg mb-0 mr-4">Sign in with</p>
                <button
                  onClick={() => signInWithFacebook()}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => signInWithGoogle()}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <i className="fa-brands fa-google w-4 h-4"></i>
                </button>
              </div>
              <form>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div className="mb-6">
                  <input
                    ref={emailRef}
                    name="email"
                    required
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    ref={passwordRef}
                    name="password"
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <span className="text-center py-2 text-error">
                  {errorMessage}
                </span>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      ref={checkboxRef}
                      type="checkbox"
                      name="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <span
                    onClick={async () => {
                      if (emailRef.current.value) {
                        await sendPasswordResetEmail(emailRef.current.value);
                        toast("Please Check Email");
                      } else {
                        toast.error("Enter your Email");
                      }
                    }}
                    className="text-gray-800 cursor-pointer"
                  >
                    Forgot password?
                  </span>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    onClick={submitHandler}
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <Link
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  to="/sign-up"
                >
                  Registration
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
