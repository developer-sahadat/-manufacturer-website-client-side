import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeServices from "../HomeSevices/HomeServices";
import Headers from "../../Shear/Header/Header";
import Footer from "../../Shear/Footer/Footer";
import HomeReview from "../HomeReview/HomeReview";
import Businesses from "../businesses/Businesses";
import LatestOffers from "../LatestOffers/LatestOffers";
import About from "../HomeAbout/About";
import Featured from "../HomeFeatured/Featured";
import BrandLogo from "../BrandLogo/BrandLogo";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Headers />
      <BannerSection />
      <About />
      <HomeServices />
      <Featured />

      <HomeReview />
      <LatestOffers />
      <Testimonials />
      <Businesses />
      <BrandLogo />

      <Footer />
    </>
  );
};

export default Home;
