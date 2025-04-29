const Hero = () => {
  return (
    <section className="hero-area">
      <div className="container large">
        <div className="hero-area-inner">
          <div className="shape-1">
            <img
              className="show-light"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-20.webp"
              alt="shape image"
            />
            <img
              className="show-dark"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-20-dark.webp"
              alt="shape image"
            />
          </div>
          <div className="section-content">
            <div className="content-first">
              <div className="year-box overflow-hidden">
                <span className="meta">2018, 2023</span>
                <div
                  className="thumb has_fade_anim"
                  data-fade-from="top"
                  data-fade-offset="0"
                  data-delay="0.45"
                >
                  <img
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-16.webp"
                    alt="image"
                  />
                </div>
                <div
                  className="title has_fade_anim"
                  data-fade-from="left"
                  data-delay="0.75"
                >
                  Award winning agency
                </div>
                <div className="btn-wrapper">
                  <a
                    href="https://crowdytheme.com/html/arolax/contact.html"
                    className="wc-btn wc-btn-icon"
                  >
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div
                className="meta-info has_fade_anim"
                data-fade-from="left"
                data-delay="1"
              >
                <img
                  src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-17.webp"
                  alt="image"
                />
                <p className="text">
                  We’re a digital agency that builds amazing user experience
                  team for design.
                </p>
              </div>
            </div>
            <div className="content-second">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper overflow-hidden">
                    <h1
                      className="section-title has_char_anim"
                      data-duration="0.75"
                    >
                      Think{" "}
                      <img
                        className="icon-first has_fade_anim"
                        data-fade-from="left"
                        src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-18.webp"
                        alt="img"
                      />{" "}
                      <br />
                      <img
                        className="icon-second has_fade_anim"
                        data-fade-from="left"
                        src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-19.webp"
                        alt="shape image"
                      />{" "}
                      faster & make <span>design</span> better
                    </h1>
                  </div>
                </div>
                <div className="btn-wrapper has_fade_anim" data-delay="1.2">
                  <a
                    href="https://crowdytheme.com/html/arolax/about.html"
                    className="wc-btn wc-btn-primary btn-text-flip"
                  >
                    <span data-text="Learn more">Learn more</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=AzwC6umvd1s"
                    className="wc-btn wc-btn-normal video-btn video-popup"
                  >
                    Watch how <br /> we work{" "}
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="scroll-down">
                <a href="#features">
                  <span className="scroll-icon">
                    <img
                      src="https://crowdytheme.com/html/arolax/assets/imgs/icon/arrow-down.webp"
                      alt="icon"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="content-third">
              <div className="hero-social">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
