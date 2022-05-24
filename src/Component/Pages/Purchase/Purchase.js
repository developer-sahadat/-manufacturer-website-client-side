import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../FirebaseInit/FirebaseInit";
import Header from "../../Shear/Header/Header";
import LoadingSpinner from "../../Shear/LoadingSpinner";

const Purchase = () => {
  const [increaseDecrease, setIncreaseDecrease] = useState(0);
  const [data, setData] = useState({});

  const { id } = useParams();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((service) => {
        setData(service);
        setIncreaseDecrease(service.minimumQuantity);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
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
        price,
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

  const increaseHandler = (availableQuantity) => {
    if (parseInt(increaseDecrease) <= availableQuantity) {
      setIncreaseDecrease(parseInt(increaseDecrease) + 1);
    } else {
      // setDecreaseDisabled(!disabledIncrease);
      toast.error("Sorry, we don't have that many products right now");
    }
  };
  const decreaseHandler = (minimumQuantity) => {
    if (minimumQuantity < increaseDecrease) {
      setIncreaseDecrease(parseInt(increaseDecrease) - 1);
    } else {
      // setIncreaseDisabled(!disabledDecrease);
      toast.error(
        "We do not sell the product of the unfortunate minimum product"
      );
    }
  };

  return (
    <>
      <Header />
      <section className="py-10">
        <div className="grid lg:px-10 justify-center  lg:grid-cols-2 ">
          <div className=" border px-10 pb-7 rounded w-11/12  md:w-8/12 	 mx-auto shadow shadow-blue-200">
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
                value={data?.price}
                readOnly
                disabled
                type="text"
                placeholder="Type price"
                className="input input-bordered input-info mb-3 w-full"
                required
                name="price"
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
                Complete The Purchase
              </button>
            </form>
          </div>
          <div>
            <h1 className=" py-5 text-2xl  font-bold">Product Information</h1>
            <div>
              <div className="grid justify-center mx-2 items-center  border-b-2 grid-cols-3">
                <div className="w-24 rounded-xl">
                  <img src={data?.image} alt="" />
                </div>
                <h5 className="font-bold text-left">{data?.name}</h5>
                <h6 className="font-bold text-center text-primary">
                  ${data?.price}
                </h6>
              </div>
              <div className="grid mx-2 py-3">
                <h6 className="font-bold mt-3 text-secondary  flex justify-between">
                  <span> Available Quantity</span>
                  <span className="text-primary">
                    {data?.availableQuantity}
                  </span>
                </h6>
                <h6 className="font-bold mt-4 flex justify-between text-secondary">
                  <span>Minimum Order Quantity</span>
                  <span className="text-primary"> {data?.minimumQuantity}</span>
                </h6>
                <div className="mt-10 overflow-hidden border border-gray-200 text-center py-1  w-40   ">
                  <button
                    className="w-10  text-white btn-primary "
                    onClick={() => decreaseHandler(data?.minimumQuantity)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    className="w-10  mx-2 font-bold text-primary  text-center"
                    type="text"
                    value={increaseDecrease}
                  />
                  <button
                    className="w-10 btn-primary text-white "
                    onClick={() => increaseHandler(data?.availableQuantity)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
