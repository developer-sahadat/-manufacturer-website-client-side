import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import Order from "./Order";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  let navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(["my-order", user], () =>
    fetch(`http://localhost:5000/my-order?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
        signOut(auth);
      }

      return res.json();
    })
  );

  if (loading || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((service, index) => (
              <Order
                refetch={refetch}
                service={service}
                index={index}
                key={service._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
