import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);

  const { data, isLoading } = useQuery(["my-items", user], () =>
    fetch(`http://localhost:5000/my-items?email=${user?.email}`).then((res) =>
      res.json()
    )
  );

  console.log(data);

  if (loading || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((service, index) => (
              <tr key={service?._id}>
                <th>{index + 1}</th>
                <td>{service?.productName}</td>
                <td>${service?.price} </td>
                <td>
                  <button class="btn btn-xs btn-error text-white  ">
                    Delete
                  </button>
                </td>
                <td>
                  <button class="btn btn-xs btn-primary text-white  ">
                    Pay <i class="fa-solid fa-file-invoice-dollar ml-1"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
