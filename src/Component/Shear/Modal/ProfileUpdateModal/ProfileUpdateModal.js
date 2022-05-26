import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProfileUpdateModal = ({ user, refetch, setUpdateProfile }) => {
  const imageStorageKey = `c57edde5c6208c27a5d91c5e10163c0f`;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const image = data.image[0];
    const email = user?.email;

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success && email) {
          fetch(
            ` https://fathomless-temple-10901.herokuapp.com/profile/${email}`,
            {
              method: "PUT",
              body: JSON.stringify({
                image: result.data.image.url,
                number: data.number,
                address: data.address,
                education: data.education,
                linkedin: data.linkedin,
                facebook: data.facebook,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                refetch();
                toast("Thanks for updating the profile correctly");
                setUpdateProfile(null);
              }
            });
        }
      });
  };

  return (
    <>
      <input
        type="checkbox"
        id="profile-update-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="profile-update-modal"
            className="btn btn-sm btn-secondary btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Update Your Profile!</h3>
          <div className="text-center my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input mb-2  cursor-pointer  input-bordered w-ful p-2 w-full "
                placeholder="image"
                type="file"
                {...register("image")}
                required
              />
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
