"use client";
import { useState } from "react";
import { useEffect } from "react";

const Feature = () => {
  // i want to ceate counter 0 to 6000
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < 6000) {
      const interval = setInterval(() => {
        setCounter(counter + 1);
      }, 5);
      return () => clearInterval(interval);
    }
  }, [counter]);
  return (
    <section id="features" className="features-area">
      <div className="container large">
        <div className="features-area-inner">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-21.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-2">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-22.webp"
              alt="shape image"
            />
          </div>
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper overflow-hidden">
                <span className="section-subtitle has-left-line has_fade_anim">
                  
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                GET STARTED WITH A
                POWERFUL FOREX EDUCATION
                </h2>
              </div>
            </div>
            <div className="text-wrapper has-left-line">
              <h2 className="title wc-counter">
                {counter} <span>+</span>
              </h2>
              <p className="text">
              happy
              Members
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
