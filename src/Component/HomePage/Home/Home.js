import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeServices from "../HomeSevices/HomeServices";
import Headers from "../../Shear/Header/Header";
import Footer from "../../Shear/Footer/Footer";

const Home = () => {
  return (
    <>
      <Headers />
      <BannerSection />
      <HomeServices />
      <Footer />
    </>
  );
};

export default Home;
