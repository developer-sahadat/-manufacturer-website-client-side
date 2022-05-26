import React from "react";
import Footer from "../../Shear/Footer/Footer";
import Header from "../../Shear/Header/Header";
const Blogs = () => {
  return (
    <>
      <Header />
      <div className="md:w-8/12  mx-auto py-10">
        <div class="card w-full shadow-2xl  bg-base-100 mb-3 ">
          <div class="card-body">
            <h2 class="card-title text-xl">
              How will you improve the performance of a React Application?
            </h2>
            <p className="">
              To optimize React rendering, you need to make sure that components
              receive only necessary props. It will let you control the CPU
              consumption and avoid over-rendering unnecessary features. The
              solution is to create a functional component that will collect all
              props and redistribute them to other components.
            </p>
          </div>
        </div>
        <div class="card w-full shadow-2xl mb-3  bg-base-100 ">
          <div class="card-body">
            <h2 class="card-title text-xl">
              How does prototypical inheritance work?
            </h2>
            <p className="">
              Prototype-based programming is a style of object-oriented
              programming in which behaviour reuse (known as inheritance) is
              performed via a process of reusing existing objects that serve as
              prototypes. This model can also be known as prototypal,
              prototype-oriented, classless, or instance-based programming.
            </p>
          </div>
        </div>
        <div class="card w-full shadow-2xl mb-3  bg-base-100 ">
          <div class="card-body">
            <h2 class="card-title text-xl">
              {" "}
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h2>
            <p className="">
              React compares the previous state with the updated state to decide
              if the component needs to be re-rendered. Modifying the state
              directly will disturb this process. As a result the component will
              behave unexpectedly.
            </p>
          </div>
        </div>
        <div class="card w-full shadow-2xl mb-3  bg-base-100 ">
          <div class="card-body">
            <h2 class="card-title text-xl">
              You have an array of products. Each object has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p className="">
              Use filter if you want to find all items in an array that meet a
              specific condition. Use find if you want to check if that at least
              one item meets a specific condition. Use includes if you want to
              check if an array contains a particular value. Use indexOf if you
              want to find the index of a particular item in an array
            </p>
          </div>
        </div>
        <div class="card w-full shadow-2xl mb-3  bg-base-100 ">
          <div class="card-body">
            <h2 class="card-title text-xl">
              What is a unit test? Why should write unit tests?
            </h2>
            <p className="">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
