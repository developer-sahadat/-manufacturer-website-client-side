import React from "react";

import useServices from "../../../Hook/useServices";

const ManageProducts = () => {
  const [services] = useServices();
  console.log(services);

  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Title</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service?._id}>
                <th>{index + 1}</th>
                <td>
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src={service?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{service?.name}</td>

                <th>
                  <button class="btn  btn-error font-bold btn-xs">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
