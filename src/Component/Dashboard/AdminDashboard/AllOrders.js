import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";

const AllOrders = () => {
  let navigate = useNavigate();
  const { data, isLoading } = useQuery("all-order", () =>
    fetch(` https://fathomless-temple-10901.herokuapp.com/order`, {
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

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(data);
  return (
    <div>
      <div class="overflow-x-auto z-0 w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Title</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr key={order?._id}>
                <td>{index + 1}</td>
                <td>{order?.productName}</td>

                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.number}</td>
                <td>{order?.paid ? "Completed" : "Not completed"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
