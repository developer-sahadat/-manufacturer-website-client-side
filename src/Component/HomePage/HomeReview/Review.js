import React from "react";
import "./review.css";

const Review = ({ review }) => {
  const { name, image, description, rating } = review;
  return (
    <div className=" our-customer">
      <div class="our-customer-item p-4 text-white  mt-5">
        <div class="avatar customer-img">
          <div class="w-24 rounded-full ring ring-gray-100 shadow-xl ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
          </div>
        </div>
        <h4 class="pt-3">{name}</h4>
        <span class="card-text py-3 ">
          {parseInt(rating) === 5 ? (
            <>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
            </>
          ) : parseInt(rating) === 4 || parseInt(rating) === 3 ? (
            <>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fa-solid fa-star-half-stroke text-primary"></i>
            </>
          ) : (
            <>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fa-solid fa-star-half text-primary"></i>
              <i class="fa-solid fa-star-half text-primary"></i>
              <i class="fa-solid fa-star-half text-primary"></i>
            </>
          )}
        </span>
        <p class="pt-2">{description.slice(0, 80)} ...</p>
      </div>
    </div>
  );
};

export default Review;
