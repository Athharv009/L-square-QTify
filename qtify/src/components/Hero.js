import React from "react";
import "../components/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../assets/hero_headphone.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
