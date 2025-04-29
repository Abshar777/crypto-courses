import React from "react";

const WorksSection: React.FC = () => {
  return (
    <section className="works-area">
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
                  Work Showcase
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  Some featured works
                </h2>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box">
            <div className="works-wrapper">
              {[
                {
                  title: "Haliya Mono",
                  tag: "Design - 2024",
                  img: "https://crowdytheme.com/html/arolax/assets/imgs/works/img-s-1.webp",
                  delay: "0.15",
                  direction: "left",
                },
                {
                  title: "Atlas Chatart",
                  tag: "Branding - 2023",
                  img: "https://crowdytheme.com/html/arolax/assets/imgs/works/img-s-2.webp",
                  delay: "0.30",
                  direction: "right",
                },
                {
                  title: "O-Mobilya",
                  tag: "Design - 2024",
                  img: "https://crowdytheme.com/html/arolax/assets/imgs/works/img-s-3.webp",
                  delay: "0.45",
                  direction: "left",
                },
                {
                  title: "Brandom Asly",
                  tag: "Branding - 2023",
                  img: "https://crowdytheme.com/html/arolax/assets/imgs/works/img-s-4.webp",
                  delay: "0.60",
                  direction: "right",
                },
                {
                  title: "Kutober Jake",
                  tag: "Design - 2024",
                  img: "https://crowdytheme.com/html/arolax/assets/imgs/works/img-s-5.webp",
                  delay: "0.75",
                  direction: "left",
                },
                {
                  title: "Flat Illustration",
                  tag: "Branding - 2023",
                  img: "https://crowdytheme.com/html/arolax/assets/imgs/works/img-s-6.webp",
                  delay: "1",
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
                      <div className="thumb">
                        <img src={item.img} alt="work image" />
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
              <span data-text="View all works">View all works</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
