const TeamArea = () => {
  return (
    <section className="team-area">
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
                  Talented Team
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  A talented team for your startup
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
                  Our design team building a curated marketplace for our
                  clients.
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
                      <span>Arolax creative team</span> working for your agency
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
                      <span>With more than 12</span> years real experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-members has_fade_anim" data-fade-from="left">
                <h3 className="title">40</h3>
                <p className="text">
                  We have 40+ talented and skilled team members.
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
