import React from "react";

const WorksSection: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
      }}
      className="works-area"
    >
      <div className="container">
        <div className="works-area-inner section-spacing-bottom">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-7.webp"
              alt="shape image"
            />
          </div>

          <div className="shape-2">
            {/* <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-8.webp"
              alt="shape image"
            /> */}
          </div>

          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper overflow-hidden">
                <span className="section-subtitle has-left-line has_fade_anim">
                  OUR COURSES
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  OUR PREMIUM COURSES
                </h2>
              </div>
            </div>
          </div>

          <div id="courses-uuid" className="works-wrapper-box">
            <div className="works-wrapper">
              {[
                {
                  title: "crypto mania",
                  tag: "4000AED ",
                  offer: "25% off",
                  finalPrice: "3000AED ",
                  img: "/img/c1.png",
                  delay: "0.15",
                  direction: "left",
                },
                {
                  title: "Mastery crypto",
                  tag: "10000AED ",
                  offer: "20% off",
                  finalPrice: "8000AED ",
                  img: "/img/c2.png",
                  delay: "0.30",
                  direction: "right",
                },
              ].map((item, index) => (
                <div
                  className="has_fade_anim"
                  data-fade-from={item.direction}
                  data-delay={item.delay}
                  key={index}
                >
                  <a href="https://crowdytheme.com/html/arolax/work-details.html">
                    <div className="work-box">
                      <div
                        style={{
                          backgroundColor: "#1b1b1b",

                          objectFit: "cover",

                          position: "relative",
                        }}
                        className="thumb"
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          // style={{ opacity: "0" }}
                          src={item.img}
                          alt="work image"
                        />
                        <img
                          // style={{ opacity: "0" }}
                          src={item.img}
                          style={{
                            position: "absolute",
                            filter: "blur(1rem)",
                            opacity: "1",
                            left: "0",
                            zIndex: "-1",
                          }}
                          alt="work image"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                        className=""
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                          className=""
                        >
                          <div className="content">
                            <h2 className="title">{item.title}</h2>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              alignItems: "center",
                            }}
                            className="meta"
                          >
                            <p
                              style={{ textDecoration: "line-through" }}
                              className="tag"
                            >
                              {item.tag}
                            </p>
                            <p
                              style={{
                                color: "black",
                                backgroundColor: "white",
                                padding: "1px 10px",
                                borderRadius: "20px",
                              }}
                              className="tag"
                            >
                              {item.offer}
                            </p>
                            <p style={{ color: "white" }} className="tag">
                              {item.finalPrice}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <div
                            style={{ scale: 0.8 }}
                            className="header__button show-light"
                          >
                            <a
                              style={{
                                backgroundColor: "#4f33f8bf",
                                color: "white !important",
                              }}
                              href="/pdf/1.pdf"
                              className="wc-btn wc-btn-primary btn-text-flip"
                            >
                              <span data-text="Get started">read More</span>
                            </a>
                          </div>
                          <div
                            style={{ scale: 0.8 }}
                            className="header__button show-dark"
                          >
                            <a
                              style={{
                                backgroundColor: "#4f33f83b",
                                color: "white !important",
                              }}
                              href="/pdf/2.pdf"
                              className="wc-btn wc-btn-primary btn-text-flip"
                            >
                              <span data-text="Get started">read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div id="#courses" className="btn-wrapper has_fade_anim">
            <a
              href="https://crowdytheme.com/html/arolax/works.html"
              className="wc-btn wc-btn-primary btn-text-flip bordered"
            >
              <span data-text="View all works">View all Courses</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
