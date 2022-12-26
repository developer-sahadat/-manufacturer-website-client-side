import React from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shear/LoadingSpinner";
import Review from "../../HomePage/HomeReview/Review";
import Header from "../../Shear/Header/Header";
import Footer from "../../Shear/Footer/Footer";

const Reviews = () => {
  const { data, isLoading } = useQuery(["review"], () =>
    fetch(`https://construction-tools.onrender.com/review`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Header />
      <div>
        <h2 className="text-secondary text-2xl md:text-4xl font-bold text-center py-10">
          Our Customer Reviews
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto text-center pb-10  md:w-11/12">
          {[...data]
            .reverse()

            .map((review) => (
              <Review key={review._id} review={review} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
