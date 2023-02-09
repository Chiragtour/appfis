import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
function NavbarComponent({ refs }) {
  const [scroll, setScroll] = useState(0);
  const { featuresRef, homeRef, overviewRef, contactRef } = refs;

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScroll(window.pageYOffset);
    });
  }, []);

  const navigateToComponent = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg={scroll > 600 && "dark blured-dark-bg"}
      className={`navbar-position ${scroll > 60 && "top-0"} w-100`}
    >
      <Navbar.Brand
        // href="#home"
        className="mx-5"
        onClick={() => navigateToComponent(homeRef)}
      >
        <Image src="/assets/logo.png" alt="" className="logo-normal" />
        <Image src="/assets/logo-mobile.png" alt="" className="logo-sm" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-title" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="ms-5 ps-5 justify-content-evenly"
      >
        <Nav className="justify-content-between nav-menu-container">
          <Nav.Link
            // href="#features"
            className="menu-title"
            onClick={() => navigateToComponent(featuresRef)}
          >
            Features
          </Nav.Link>
          <Nav.Link
            // href="#overview"
            className="menu-title"
            onClick={() => navigateToComponent(overviewRef)}
          >
            Overview
          </Nav.Link>
          <Nav.Link
            // href="#contact"
            className="menu-title"
            onClick={() => navigateToComponent(contactRef)}
          >
            Contact
          </Nav.Link>
        </Nav>
        <Button
          variant="light"
          size="lg"
          className="sign-in"
          style={{
            width: scroll > 1065 && "16%",
            height: scroll > 1065 && "2.4em",
          }}
        >
          Sign in
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
