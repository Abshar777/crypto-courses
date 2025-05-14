"use client"
import React from "react";
import "../../../app/assets/css/hero.css";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile()
  return (
    <div className="hero-container">
      <p style={{fontSize:isMobile ? ".8rem" : "1rem",textAlign:"center",color:"white"}} className="hero-tagline">
        Master <span className="highlight">Crypto</span> Navigate the Future of Finance.
      </p>
      
      <h1 style={{fontFamily:"monospace",width:isMobile ? "100%" : "50%",color:"white"}} className="hero-title">
      Unlock Crypto Empower Your Financial Future
      </h1>
      <div className="hero-background">
        <img className="hero-image" src="/img/bg.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
