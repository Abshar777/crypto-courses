
const OffCanvas = () => {


  return (
    <div className="offcanvas-3__area">
      <div className="offcanvas-3__inner">
        <div className="offcanvas-3__meta-wrapper">
          <div>
            <button
              id="close_offcanvas"
              className="close-button close-offcanvas"
            
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div>
            <div className="offcanvas-3__meta mb-145 d-none d-md-block">
              <ul>
                <li>
                  <a href="tel:+2-352698102" className="unnerline">
                    <u>+2-352 698 102</u>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@me.com">contact@me.com</a>
                </li>
                <li>
                  <a href="#">
                    27 Division St, <br />
                    New York, NY 10002, USA
                  </a>
                </li>
              </ul>
            </div>
            <div className="offcanvas-3__social d-none d-md-block">
              <p className="title">Follow Me</p>
              <div className="offcanvas-3__social-links">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-3__menu-wrapper">
          <nav className="nav-menu offcanvas-3__menu">
            <ul>
              <li><a href="#">home</a></li>
            
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
