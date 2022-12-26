import React from "react";

const ProductDeleteConfirmModal = ({ refetch, service, setManageProduct }) => {
  const deleteHandler = (id) => {
    const url = `https://construction-tools.onrender.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setManageProduct(null);
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="product-delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">
            are you sure you want to delete it? !
          </h3>

          <div className="modal-action">
            <button
              onClick={() => deleteHandler(service?._id)}
              className="btn btn-error text-white"
            >
              Delete
            </button>
            <label
              htmlFor="product-delete-confirm-modal"
              className="btn btn-primary text-white"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteConfirmModal;
