import React, { useState } from "react";
import DeleteConfirmModal from "../../Shear/Modal/DeleteConfirmModal/DeleteConfirmModal";

const Order = ({ service, index, refetch }) => {
  const [orderDeleting, setOrderDeleting] = useState(null);

  const { productName, price, name } = service;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{productName}</td>
        <td>${price} </td>
        <td>
          <label
            onClick={() => setOrderDeleting(service)}
            htmlFor="delete-confirm-modal"
            className="btn btn-xs btn-error text-white"
          >
            Delete
          </label>
        </td>
        <td>
          <button className="btn btn-xs btn-primary text-white  ">
            Pay <i className="fa-solid fa-file-invoice-dollar ml-1"></i>
          </button>
        </td>
      </tr>
      {orderDeleting && (
        <DeleteConfirmModal refetch={refetch} service={service} />
      )}
    </>
  );
};

export default Order;
