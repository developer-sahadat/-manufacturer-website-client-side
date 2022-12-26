import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { success } from "daisyui/src/colors";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ data }) => {
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [transaction, setTransaction] = useState("");
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const { price, name, email, _id } = data;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://construction-tools.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setCardSuccess("");
    setTransaction("");
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
    } else {
      setCardError("");
      setCardSuccess("Your Payment is completed");
      console.log(paymentIntent);
      setTransaction(paymentIntent?.id);

      fetch(`https://construction-tools.onrender.com/my-order/${_id}`, {
        method: "PUT",
        body: JSON.stringify({
          transaction: paymentIntent?.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="mt-5 border border-primary px-10 py-2 custom_btn custom_btn2"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
      {cardError && <p className="text-center my-5 text-error">{cardError}</p>}
      {cardSuccess && (
        <p className="text-center my-5 text-primary">{cardSuccess}</p>
      )}
      {transaction && (
        <p className="text-center my-5 text-primary">
          Your Transaction id{transaction}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
