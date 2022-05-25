import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeServices from "../HomeSevices/HomeServices";
import Headers from "../../Shear/Header/Header";
import Footer from "../../Shear/Footer/Footer";
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
  return (
    <>
      <Headers />
      <BannerSection />
      <HomeServices />
      <HomeReview />
      <Footer />
    </>
  );
};

export default Home;
