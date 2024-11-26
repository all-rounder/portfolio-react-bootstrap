import { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const NavBar = () => {
  // const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="navbar-link">
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-link">
              Skils
            </Nav.Link>
            <Nav.Link href="#projects" className="navbar-link">
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#home">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#skills">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#projects">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            {/* <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink> */}
            <a href="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
