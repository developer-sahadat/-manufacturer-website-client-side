import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);

  const { data, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/services/${id}`).then((res) => res.json())
  );
  // console.log(data);
  if (loading || isLoading) {
    return <LoadingSpinner />;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const address = event.target.address.value;

    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        productName,
        name,
        email,
        number,
        address,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.insertedId) {
          toast("Thank you for ordering correctly 😊");
          event.target.reset();
        }
      });
  };

  return (
    <div className="py-10">
      <div className="lg:w-2/5 border md:w-9/12 w-10/12	 px-10 pb-7 rounded	 mx-auto shadow shadow-blue-200">
        <h1 className="text-center py-5 text-2xl  font-bold">
          Order information
        </h1>
        <form onSubmit={submitHandler}>
          <input
            value={data?.name}
            readOnly
            disabled
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info mb-3 w-full"
            required
            name="productName"
          />
          <input
            type="text"
            placeholder="Enter Name"
            className="input input-bordered input-info mb-3  w-full"
            required
            name="name"
          />
          <input
            type="email"
            name="email"
            disabled
            readOnly
            value={user?.email}
            placeholder="Type here"
            className="input input-bordered input-info mb-3  w-full"
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Enter Number"
            required
            className="input input-bordered input-info mb-3  w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered input-info mb-3  w-full"
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
