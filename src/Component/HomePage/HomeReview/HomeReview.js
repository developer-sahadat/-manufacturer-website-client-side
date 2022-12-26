import React from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import Review from "./Review";

const HomeReview = () => {
  const { data, isLoading } = useQuery(["review"], () =>
    fetch(`https://construction-tools.onrender.com/review`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <section class="mb-20 text-gray-700">
        <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
          <h3 class="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
          <p class="mb-6 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
          {[...data]
            ?.reverse()
            ?.slice(0, 3)
            ?.map((review) => (
              <Review key={review._id} review={review} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomeReview;
