"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
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
      name: "Courses",
      link: "courses-uuid",
    },
    {
      id: 3,
      name: "Awards",
      link: "awards-uuid",
    },
    {
      id: 4,
      name: "Blog",
      link: "blog-uuid",
    },
  ];

  const isMobile = useIsMobile();
  return (
    <header
      style={{
        backgroundColor: "#00000000",
        backdropFilter: "blur(25px)",
      }}
      className={`header-area sticky`}
    >
      <div className="container large">
        <div className="header-area__inner">
          <div
            style={{
              width: "100px",
              height: "100px",
              padding: "1rem",
              transform: isMobile
                ? "translateY(1px) scale(1.2)"
                : "translateX(20px)",
            }}
            className="header__logo"
          >
            {/* bootstarp classe */}
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "hue-rotate(45deg)",
              }}
              className="show-dark"
              src="/img/logo.png"
              alt="Site Logo"
            />
          </div>
          <div className="header__nav">
            <nav suppressHydrationWarning className="main-menu">
              <ul>
                {!isMobile &&
                  navItems.map((item) => (
                    <li className="menu-item" key={item.id}>
                      {/* when clicking on it might be redrct that component smooth scroll */}
                      <a
                        style={{ fontFamily: "monospace", fontSize: "18px" ,cursor:"pointer"}}
                        // href={item.link}
                        onClick={() => {
                          const elem =document.getElementById(item.link);
                          console.log(elem,item.link,elem?.offsetTop);
                          window.scrollTo({
                            
                            top: elem?.offsetTop,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
          <div className="header__button">
            <a
              style={{
                backgroundColor: "#4f33f83b",
              }}
              href="https://crowdytheme.com/html/arolax/contact.html"
              className="wc-btn wc-btn-primary btn-text-flip"
            >
              <span data-text="Get started">Get started</span>
            </a>
          </div>
          <div
            style={{
              display: "none",
            }}
            className="header__navicon d-xl-none"
          >
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
