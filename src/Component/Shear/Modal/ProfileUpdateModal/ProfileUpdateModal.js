import React from "react";
import { useForm } from "react-hook-form";

const ProfileUpdateModal = ({ user, refetch }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = user?.email;
    console.log(email);
    if (email) {
      fetch(`http://localhost:5000/profile/${email}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };
  return (
    <>
      <input type="checkbox" id="profile-update-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="profile-update-modal"
            class="btn btn-sm btn-secondary btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 class="font-bold text-lg">Update Your Profile!</h3>
          <div className="text-center my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input input-bordered w-full "
                required
                placeholder="Enter phone number"
                {...register("number")}
              />
              <input
                className="input input-bordered w-full mt-5 "
                required
                placeholder="Enter Address"
                {...register("address")}
              />
              <input
                className="input input-bordered w-full mt-5 "
                required
                placeholder="Enter Education"
                {...register("education")}
              />
              <input
                className="input input-bordered w-full mt-5 "
                required
                placeholder="Enter Linkedin URl"
                {...register("linkedin")}
              />
              <input
                className="input input-bordered w-full mt-5 "
                required
                placeholder="Enter Facebook URl"
                {...register("facebook")}
              />

              <button className="w-6/12 mt-7 border border-primary px-10 py-2 custom_btn custom_btn2 ">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdateModal;
