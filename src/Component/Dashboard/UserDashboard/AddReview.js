import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const imageStorageKey = `c57edde5c6208c27a5d91c5e10163c0f`;
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          fetch("http://localhost:5000/review", {
            method: "POST",
            body: JSON.stringify({
              image: result?.data?.url,
              name: data?.name,
              rating: data?.rating,
              description: data?.description,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((response) => response.json())
            .then((json) => {
              if (json.acknowledged) {
                toast("Thanks! you for your Review");
              }
            });
        }
      });
  };

  return (
    <section className="lg:pl-10 pt-10">
      <div className="shadow-lg bg-gray-100 rounded-lg  w-full lg:w-10/12 p-5 md:px-10 ">
        <h2 className=" pb-10 pt-10 text-xl lg:text-2xl text-secondary font-bold">
          Add Feedback
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 ">
            <input
              required
              className="input input-bordered input-info mb-2 w-full max-w-xs"
              placeholder="Enter Name"
              {...register("name")}
            />
            <input
              className="input md:ml-4 mb-2 input-bordered input-info w-full max-w-xs"
              placeholder="Enter a Rating"
              type="number"
              {...register("rating")}
            />
          </div>
          <div className="mb-3 ">
            <p className="mr-1 text-secondary font-medium">
              Please add your Photo
            </p>
            <input
              className="input mb-2  cursor-pointer input-bordered input-info p-2 w-full max-w-xs"
              placeholder="image"
              type="file"
              {...register("image")}
              required
            />
          </div>

          <textarea
            {...register("description")}
            placeholder="description"
            class="textarea mb-2  textarea-info w-full max-w-xs"
          ></textarea>

          <div className="mt-5">
            <input
              className="text-center font-bold cursor-pointer border border-primary px-10 py-3 custom_btn "
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
