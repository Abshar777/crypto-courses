import { useEffect } from "react";

import { useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Courses",
      link: "/courses",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className={`header-area sticky`}>
      <div className="container large">
        <div className="header-area__inner">
          <div className="header__logo">
            <a href="#">
              {/* bootstarp classe */}
              <h1 className="text- fw-bold ">Delta</h1>
            </a>
          </div>
          <div className="header__nav">
            <nav className="main-menu">
              <ul>
                {/* <li> */}
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
                {/* </li> */}
              </ul>
            </nav>
          </div>
          <div className="header__button">
            <a
              href="https://crowdytheme.com/html/arolax/contact.html"
              className="wc-btn wc-btn-primary btn-text-flip"
            >
              <span data-text="Get started">Get started</span>
            </a>
          </div>
          <div className="header__navicon d-xl-none">
            <button className="open-offcanvas">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
