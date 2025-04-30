"use client"
import React from "react";
import "../../../app/assets/css/hero.css";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile()
  return (
    <div className="hero-container">
      <p style={{fontSize:isMobile ? ".8rem" : "1rem",textAlign:"center"}} className="hero-tagline">
        Master <span className="highlight">Crypto</span> Navigate the Future of Finance.
      </p>
      
      <h1 style={{fontFamily:"monospace",width:isMobile ? "100%" : "50%"}} className="hero-title">
      Unlock Crypto Empower Your Financial Future
      </h1>
      <div className="hero-background">
        <div className="hero-image-wrapper">
          <img src="/hero2.jpeg" alt="" className="hero-image" />
        </div>
        <div style={{display:isMobile ? "none" : "block"}} className="hero-image-wrapper2">
          <img src="/hero2.jpeg" alt="" className="hero-image" />
        </div>
        <div style={{display:isMobile ? "none" : "block"}} className="hero-image-wrapper3">
          <img src="/hero2.jpeg" alt="" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
