import React from "react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <h1>Hero Section</h1>
        <h1>{theme} theme</h1>
      </div>
    </>
  );
};

export default HeroSection;
