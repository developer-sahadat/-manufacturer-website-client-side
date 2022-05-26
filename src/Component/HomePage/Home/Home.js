import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeServices from "../HomeSevices/HomeServices";
import Headers from "../../Shear/Header/Header";
import Footer from "../../Shear/Footer/Footer";
import HomeReview from "../HomeReview/HomeReview";
import Businesses from "../businesses/Businesses";
import LatestOffers from "../LatestOffers/LatestOffers";
import AboutProduct from "../AboutProduct/AboutProduct";

const Home = () => {
  return (
    <>
      <Headers />
      <BannerSection />
      <HomeServices />
      <AboutProduct />
      <HomeReview />
      <LatestOffers />
      <Businesses />
      <Footer />
    </>
  );
};

export default Home;
