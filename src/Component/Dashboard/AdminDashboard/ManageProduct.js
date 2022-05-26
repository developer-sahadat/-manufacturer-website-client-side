import React, { useState } from "react";
import ProductDeleteConfirmModal from "../../Shear/Modal/ProductDeleteConfirmModal/ProductDeleteConfirmModal";

const ManageProduct = ({ service, index, refetch }) => {
  const [manageProduct, setManageProduct] = useState(null);
  return (
    <>
      <tr>
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
          <label
            onClick={() => setManageProduct(service)}
            htmlFor="product-delete-confirm-modal"
            className="btn btn-xs btn-error text-white"
          >
            Delete
          </label>
        </th>
      </tr>
      {manageProduct && (
        <ProductDeleteConfirmModal
          service={service}
          refetch={refetch}
          setManageProduct={setManageProduct}
        />
      )}
    </>
  );
};

export default ManageProduct;
