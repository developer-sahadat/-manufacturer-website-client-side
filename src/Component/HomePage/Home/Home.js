import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeServices from "../HomeSevices/HomeServices";
import Headers from "../../Shear/Header/Header";
import Footer from "../../Shear/Footer/Footer";
import HomeReview from "../HomeReview/HomeReview";
import Businesses from "../businesses/Businesses";
import LatestOffers from "../LatestOffers/LatestOffers";
import AboutProduct from "../AboutProduct/AboutProduct";
import About from "../HomeAbout/About";
import Featured from "../HomeFeatured/Featured";
import BrandLogo from "../BrandLogo/BrandLogo";

const Home = () => {
  return (
    <>
      <Headers />
      <BannerSection />
      <About />
      <HomeServices />
      <Featured />
      <AboutProduct />
      <HomeReview />
      <LatestOffers />
      <Businesses />
      <BrandLogo />
      <Footer />
    </>
  );
};

export default Home;
