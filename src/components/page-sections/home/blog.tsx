const Blog = () => {
  return (
    <section id="blog-uuid" className="blog-area">
      <div className="container">
        <div className="blog-area-inner">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper overflow-hidden">
                <span className="section-subtitle has-left-line has_fade_anim">
                  Recent Blog
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  Journals from Arolax
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text has_fade_anim" data-fade-from="left">
                We immerse ourselves in your issues and we put our knowledge and
                expertise at your journals.
              </p>
            </div>
          </div>
          <div className="blog-wrapper-box">
            <div className="blog-wrapper">
              <div className="has_fade_anim" data-delay="0.15">
                <a href="https://crowdytheme.com/html/arolax/blog-details.html">
                  <article className="blog">
                    <div className="thumb">
                      <img
                        src="https://crowdytheme.com/html/arolax/assets/imgs/blog/img-s-3.webp"
                        alt="blog image"
                      />
                    </div>
                    <div className="content-wrapper">
                      <div className="content">
                        <h2 className="title">
                          A simple guide to retrieval auto generated read
                          content models
                        </h2>
                        <div className="meta">
                          <span className="tag">Branding</span>
                          <span className="date has-left-line">
                            14 Jan 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <div className="has_fade_anim" data-delay="0.30">
                <a href="https://crowdytheme.com/html/arolax/blog-details.html">
                  <article className="blog">
                    <div className="thumb">
                      <img
                        src="https://crowdytheme.com/html/arolax/assets/imgs/blog/img-s-4.webp"
                        alt="blog image"
                      />
                    </div>
                    <div className="content-wrapper">
                      <div className="content">
                        <h2 className="title">
                          Refining your mobile onboarding experience using
                          visual analytics
                        </h2>
                        <div className="meta">
                          <span className="tag">Design</span>
                          <span className="date has-left-line">
                            10 Jan 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <div className="has_fade_anim" data-delay="0.45">
                <a href="https://crowdytheme.com/html/arolax/blog-details.html">
                  <article className="blog">
                    <div className="thumb">
                      <img
                        src="https://crowdytheme.com/html/arolax/assets/imgs/blog/img-s-5.webp"
                        alt="blog image"
                      />
                    </div>
                    <div className="content-wrapper">
                      <div className="content">
                        <h2 className="title">
                          The complex but awesome CSS border-image property for
                          web design
                        </h2>
                        <div className="meta">
                          <span className="tag">Development</span>
                          <span className="date has-left-line">5 Jan 2024</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
