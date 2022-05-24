const DeleteConfirmModal = ({ service, refetch }) => {
  const { name, _id } = service;

  const deleteHandler = (id) => {
    const url = `http://localhost:5000/my-order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.acknowledged) {
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">
            {name}, are you sure you want to delete it? !
          </h3>

          <div className="modal-action">
            <button
              className="btn btn-error text-white"
              onClick={() => deleteHandler(_id)}
            >
              Delete
            </button>
            <label
              htmlFor="delete-confirm-modal"
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

export default DeleteConfirmModal;
