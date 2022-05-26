import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import paymentImg from "../../../Assets/Images/payment.png";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L0XAjISdb4BDwvSRL9XdpWcaeuw9AiiTVG3RsqUNrWeEQeXJLX2E1N5Sa6CStKIhoq12CUk4KLR4RMfWtfczV5d00TGphtGwC"
);

const Payment = () => {
  const { paymentId } = useParams();
  let navigate = useNavigate();
  const { data, isLoading } = useQuery(["my-order", paymentId], () =>
    fetch(
      ` https://fathomless-temple-10901.herokuapp.com/my-order/${paymentId}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
        signOut(auth);
      }

      return res.json();
    })
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <div className="shadow-2xl text-center p-5 rounded-xl shadow-slate-300 mx-auto mt-10  md:w-8/12">
        <div>
          <h2 className="text-secondary font-bold text-xl">
            Pay for {data?.productName}
          </h2>
          <h2 className="font-bold text-secondary mt-2">
            Please Pay <span className="text-primary">${data?.price}</span>
          </h2>
          <h2 className="text-secondary mt-3 font-bold">
            Email: {data?.email}
          </h2>
          <h2 className="text-secondary mt-2 font-bold">
            Address: {data?.address}
          </h2>
        </div>
        <img src={paymentImg} alt="" />
        <div className="py-10 w-96 mx-auto">
          <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
