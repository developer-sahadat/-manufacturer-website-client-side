import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeServices from "../HomeSevices/HomeServices";
import Headers from "../../Shear/Header/Header";
import Footer from "../../Shear/Footer/Footer";
import HomeReview from "../HomeReview/HomeReview";
import Businesses from "../businesses/Businesses";

const Home = () => {
  return (
    <>
      <Headers />
      <BannerSection />
      <HomeServices />

      <HomeReview />
      <Businesses />
      <Footer />
    </>
  );
};

export default Home;
