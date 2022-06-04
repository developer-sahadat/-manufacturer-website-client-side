import React from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import Review from "./Review";

const HomeReview = () => {
  const { data, isLoading } = useQuery(["review"], () =>
    fetch(` https://fathomless-temple-10901.herokuapp.com/review`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h2 className="text-secondary text-2xl md:text-4xl font-bold text-center py-10">
        Our Customer Reviews
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto text-center pb-10  md:w-11/12">
        {[...data]
          .reverse()
          .slice(0, 4)
          .map((review) => (
            <Review key={review._id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default HomeReview;
