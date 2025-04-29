const Cta = () => {
  return (
    <section className="cta-area">
      <div className="container">
        <div className="cta-area-inner section-spacing-bottom">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-28.webp"
              alt="shape image"
            />
          </div>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper overflow-hidden">
                <span className="section-subtitle has-left-line has_fade_anim">
                  Let's Connect
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  Let’s get started with our team
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text has_fade_anim" data-fade-from="left">
                Use customer data to build great and solid product experiences
                that convert.
              </p>
            </div>
            <div className="btn-wrapper has_fade_anim">
              <a
                href="https://crowdytheme.com/html/arolax/contact.html"
                className="wc-btn wc-btn-primary btn-text-flip"
              >
                <span data-text="Let’s get in touch">Let’s get in touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
