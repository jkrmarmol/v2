import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const onClickNavBar = (e: any) => {
    setIsActive(current => !current);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar: any = document.getElementById("navbar");

      if (currentScrollPos === 0) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.transition = "top 0.3s, background-color 0.5s ease-in-out";
      } else {
        navbar.style.backgroundColor = "#0E1625";
      }

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-80px";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="header" id="navbar">
      <div className="h-width">
        <div className="logo">
          <h1><Link to='/'>jkrmarmol</Link></h1>
        </div>
        <div
          className={`nav ${isActive ? 'openNav' : null}`}
        >
          <svg
            onClick={onClickNavBar}
            className="menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
          <svg
            onClick={onClickNavBar}
            className="close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
            ></path>
          </svg>
          <ul>
            <li>
              <a href="#home" onClick={onClickNavBar}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={onClickNavBar}>About</a>
            </li>
            <li>
              <a href="#project" onClick={onClickNavBar}>Project</a>
            </li>
            <li>
              <a href="#contact" onClick={onClickNavBar}>Contact</a>
            </li>
            <motion.div whileHover={{ scale: 1.1 }} className="resume">
              <a >RESUME</a>
            </motion.div>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Header