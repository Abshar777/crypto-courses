const Hero = () => {
  return (
    <section
      suppressHydrationWarning={true}
      style={{ position: "relative" }}
      className="hero-area"
    >
      {/* blur circles violet */}
      <div
        style={{
          position: "absolute",
          // top:"0",
          // left:"0",
          width: "100%",
          height: "100%",
          backgroundColor: "#7963ff",
          filter: "blur(100px)",
          opacity: "0.1",
          // zIndex:"-1",
          borderRadius: "50%",
          // transform:"translate(-50%,-50%)",
        }}
      ></div>
      <div className="container large">
        <div className="hero-area-inner">
          <div className="shape-1">
           
            {/* <img
              className="show-dark"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-20-dark.webp"
              alt="shape image"
            /> */}
          </div>
          <div
            style={{
              gridTemplateColumns: "1fr auto",
            }}
            className="section-content"
          >
            {/* <div className="content-first">
              <div className="year-box overflow-hidden">
                <span className="meta">HOLDER</span>
                <div
                  className="thumb has_fade_anim"
                  data-fade-from="top"
                  data-fade-offset="0"
                  data-delay="0.45"
                  suppressHydrationWarning
                >
                  <img src="/img/guinnessRecord2.png" alt="image" />
                </div>
                <div
                suppressHydrationWarning
                  className="title has_fade_anim"
                  data-fade-from="left"
                  data-delay="0.75"
                  style={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                  }}
                >
                  GUINNESS RECORD HOLDER
                </div>
                <div className="btn-wrapper">
                  <a
                    style={{
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                    href="https://crowdytheme.com/html/arolax/contact.html"
                    className="wc-btn wc-btn-icon"
                  >
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                }}
                className="meta-info has_fade_anim"
                data-fade-from="left"
                data-delay="1"
                suppressHydrationWarning
              >
                <img
                  style={{
                    width: "100%",
                    height: "90px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                  src="/img/bu.jpg"
                  alt="image"
                />
                <p className="text">
                  Delta has been on a mission to enable learners reach their
                  financial goals.
                </p>
              </div>
            </div> */}
            <div
              style={{
                borderInlineStart: "none",
              }}
              className="content-second"
            >
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper overflow-hidden">
                    <h1
                      suppressHydrationWarning
                      className="section-title has_char_anim"
                      data-duration="0.75"
                    >
                      UAE's <span style={{ color: "#7963ff" }}>LARGEST</span>{" "}
                      <br />
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "90px",
                          height: "90px",
                          scale: "0.9",
                          overflow: "hidden",
                          float: "left",
                        }}
                        className=""
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            maxHeight: "100%",
                            marginTop: "0%",
                            transform: "translateY(-5%)",
                          }}
                          className="icon-second "
                          data-fade-from="left"
                          src="/img/3dCr.jpg"
                          alt="shape image"
                        />{" "}
                      </div>
                      TRADING ACADEMY
                    </h1>
                  </div>
                </div>
                <div
                  suppressContentEditableWarning
                  className="btn-wrapper has_fade_anim"
                  data-delay="1.2"
                >
                  <a
                    suppressHydrationWarning
                    href="https://crowdytheme.com/html/arolax/about.html"
                    className="wc-btn wc-btn-primary btn-text-flip"
                  >
                    <span data-text="Contact Us">Contact Us</span>
                  </a>
                  <a
                    suppressHydrationWarning
                    href="https://www.youtube.com/watch?v=AzwC6umvd1s"
                    className="wc-btn wc-btn-normal video-btn video-popup"
                  >
                    About Our <br /> Academy{" "}
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
              <div suppressHydrationWarning className="scroll-down">
                <a href="#features">
                  <span className="scroll-icon">
                    <img
                      style={{
                        filter: "invert(1)",
                      }}
                      src="https://crowdytheme.com/html/arolax/assets/imgs/icon/arrow-down.webp"
                      alt="icon"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="content-third">
              {/* <div className="hero-social">
                <p className="title">Follow</p>
                <div className="hero-social-links">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
