import React from "react";

const AllOrder = ({ order, refetch, index }) => {
  const { name, email, number, paid, _id, productName, shipped } = order;

  const pendingHandler = (id) => {
    fetch(`https://construction-tools.onrender.com/order/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        shipped: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
        console.log(result);
      });
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{productName}</td>

        <td>{name}</td>
        <td>{email}</td>
        <td>{number}</td>
        <td>
          {shipped ? (
            <span className="text-secondary font-bold"> shipped</span>
          ) : paid ? (
            <button
              onClick={() => pendingHandler(_id)}
              className="btn btn-xs btn-primary text-white"
            >
              pending
            </button>
          ) : (
            <span className="text-error font-bold">Unpaid</span>
          )}
        </td>
      </tr>
    </>
  );
};

export default AllOrder;
