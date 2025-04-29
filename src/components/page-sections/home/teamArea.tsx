"use client";
import { useState, useEffect } from "react";

const TeamArea = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < 35) {
      const interval = setInterval(() => {
        setCounter(counter + 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [counter]);
  return (
    <section
      style={{
        position: "relative",
      }}
      className="team-area"
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "100",
          width: "50%",
          height: "50%",
          backgroundColor: "#7963ff",
          filter: "blur(100px)",
          opacity: "0.1",
          // zIndex:"-1",
          borderRadius: "50%",
          // transform:"translate(-50%,-50%)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "100vh",
          right: "0",
          width: "50%",
          height: "50%",
          backgroundColor: "#7963ff",
          filter: "blur(100px)",
          opacity: "0.1",
          // zIndex:"-1",
          borderRadius: "50%",
          // transform:"translate(-50%,-50%)",
        }}
      ></div>
      <div className="container">
        <div className="team-area-inner">
          <div className="shape-2">
            <img
              className="show-light"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-15.webp"
              alt="shape image"
            />
            <img
              className="show-dark"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-15-dark.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-3">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-26.webp"
              alt="shape image"
            />
          </div>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has-left-line has_fade_anim">
                  KHDA
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  WHY CHOOSE US
                </h2>
              </div>
            </div>
          </div>
          <div className="team-card-box">
            <div className="team-card">
              <div className="shape-1"></div>
              <div className="card-header has_fade_anim" data-fade-from="left">
                <img
                  className="thumb"
                  src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-25.webp"
                  alt="image"
                />
                <h3 className="title">
                  Our accredited academy, endorsed by <b>KHDA</b>, is dedicated
                  to providing
                </h3>
                <div className="btn-wrapper">
                  <a
                    href="https://crowdytheme.com/html/arolax/contact.html"
                    className="wc-btn wc-btn-primary btn-text-flip"
                  >
                    <span data-text="Join the team">Join the team</span>
                  </a>
                </div>
              </div>
              <div className="feature-list-wrapper">
                <div className="feature-list">
                  <div
                    className="feature-list-item has_fade_anim"
                    data-fade-from="left"
                  >
                    <span className="icon">
                      <img
                        src="https://crowdytheme.com/html/arolax/assets/imgs/icon/check.webp"
                        alt="icon image"
                      />
                    </span>
                    <p className="text">
                      comprehensive education in Forex Trading, Webinars, Stock
                      Analysis,
                    </p>
                  </div>
                  <div
                    className="feature-list-item has_fade_anim"
                    data-fade-from="left"
                  >
                    <span className="icon">
                      <img
                        src="https://crowdytheme.com/html/arolax/assets/imgs/icon/check.webp"
                        alt="icon image"
                      />
                    </span>
                    <p className="text">
                      Cryptocurrency Trading, Establishment of Forex Brokers
                    </p>
                  </div>
                  <div
                    className="feature-list-item has_fade_anim"
                    data-fade-from="left"
                  >
                    <span className="icon">
                      <img
                        src="https://crowdytheme.com/html/arolax/assets/imgs/icon/check.webp"
                        alt="icon image"
                      />
                    </span>
                    <p className="text">
                      One-On-One Mentorship, Live Mentorship, Live Trading Hubs,
                      Workshops,
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-members has_fade_anim" data-fade-from="left">
                <h3
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // alignItems:"center",
                    gap: "10px",
                  }}
                  className="title"
                >
                  {counter}+
                </h3>
                <p className="text">
                  We have 35+ talented and skilled Trainers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
