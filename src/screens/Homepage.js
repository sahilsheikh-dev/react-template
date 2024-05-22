import "../assets/css/style.css";
import React from "react";
import { useEffect } from "react";
import HeroSection from "../components/homepageComponents/HeroSection";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
};

export default Homepage;
