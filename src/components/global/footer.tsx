
const Footer = () => {
  return (
    <footer style={{
        borderRadius: "30px 30px 0 0",
    }} className="footer-area">
      <div className="container">
        <div className="footer-area-inner section-spacing-top">
          <div className="footer-widget-wrapper">
            <div className="footer-logo">
             <h1 className="text-white fw-bold">Delta</h1>
            </div>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Service</h2>
            <ul className="footer-nav-list">
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Webflow</a></li>
              <li><a href="#">Development</a></li>
            </ul>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Company</h2>
            <ul className="footer-nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Agency</a></li>
              <li><a href="#">Achievement</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-widget-wrapper newsletter">
            <h2 className="title">Newsletter</h2>
            <div className="newsletter-text">
              <p className="text">
                Feel free to reach out if you want to collaborate with us, or simply have a chat.
              </p>
            </div>
            <form action="#" className="subscribe-form">
              <div className="input-field">
                <span className="icon">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="subscribe-btn">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">New York</h2>
            <ul className="footer-nav-list">
              <li>
                <a className="text-underline location" href="#">
                  1772 Street Charleston, New York
                </a>
              </li>
              <li><a href="tel:+1287-360-633">+1 287-360-633</a></li>
              <li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
            </ul>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">London</h2>
            <ul className="footer-nav-list">
              <li>
                <a className="text-underline location" href="#">
                  1772 Street Charleston, New York
                </a>
              </li>
              <li><a href="tel:+1287-360-633">+1 287-360-633</a></li>
              <li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
            </ul>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Follow Us</h2>
            <ul className="social-links">
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="shape-1">
              <img
                src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-27.webp"
                alt="shape image"
              />
            </div>
            <div className="copyright-text">
              <p className="text">
                © 2024-25{" "}
                <a
                  href="https://themeforest.net/user/crowdytheme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  crowdyTheme
                </a>{" "}
                Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
