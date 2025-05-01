import React from "react";

const WorksSection: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
      }}
      className="works-area"
    >
      <div
        style={{
          position: "absolute",
          top:"0",
          left:"100",
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
          top:"600",
          right:"0",
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
        <div className="works-area-inner section-spacing-bottom">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-7.webp"
              alt="shape image"
            />
          </div>

          <div className="shape-2">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-8.webp"
              alt="shape image"
            />
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

          <div className="works-wrapper-box">
            <div className="works-wrapper">
              {[
                {
                  title: "crypto mania",
                  tag: "$100",
                  img: "/c5.png",
                  delay: "0.15",
                  direction: "left",
                },
                {
                  title: "Mastery crypto",
                  tag: "$100",
                  img: "/c5.png",
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
                      <div className="content">
                        <h2 className="title">{item.title}</h2>
                      </div>
                      <div className="meta">
                        <p className="tag">{item.tag}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-wrapper has_fade_anim">
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
