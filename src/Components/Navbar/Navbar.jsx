import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styleNavBar.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../../assets/Images/Logo.png";
import whiteIcon from "../../assets/Images/icon.png";
import { motion } from "framer-motion";

// import Login from "../Form/Login/Login";
const Link = React.lazy(() => import("../Link/Link"));

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lightFlag, setLightFlag] = useState(!(window.matchMedia("(prefers-color-scheme: dark)")));
  const [navbarCollapse, setNavbarCollapse] = useState(null);
  const links = [
    { name: t("Navbar Home"), link: "/" },
    { name: t("Navbar About"), link: "/About" },
    { name: t("Navbar Buy"), link: "/Buy" },
    { name: t("Navbar Rent"), link: "/Rent" },
    { name: t("Navbar Contact"), link: "/Contact" },
  ];
  // specify style for nav item when refresh page
  const specifyStyleForNav = () => {
    document.querySelectorAll(".nav-link").forEach((element) => {
      if (window.location.href.includes(element.getAttribute("aria_current"))) {
        document.querySelectorAll(".nav-link").forEach((element) => {
          element.classList.remove("selectedNavElement");
        });
        element.classList.add("selectedNavElement");
      }
    });
  };
  // change color of nav item when click on it
  const changeStyleClassFotNavItem = (e) => {
    e.target.classList.add("selectedNavElement");
    document.querySelectorAll(".nav-link").forEach((element) => {
      if (element !== e.target) {
        element.classList.remove("selectedNavElement");
      }
    });
    navbarCollapse.toggle();
  };

  useEffect(() => {
    specifyStyleForNav();
    // Call the function initially and listen for window resize events
    updateAttributeForScreenSize();
    window.addEventListener("resize", updateAttributeForScreenSize);

    // Manually collapse the navbar when a link is clicked
    setNavbarCollapse(
      new bootstrap.Collapse(
        document.getElementById("navbarSupportedContent"),
        {
          toggle: false, // Set to false to manually control the collapse state
        }
      )
    );

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateAttributeForScreenSize);
    };
  }, []);

  // Function to update the attribute value
  const updateAttributeForScreenSize = () => {
    const element = document.getElementById("navBarMain"); // Change 'myElement' to the ID of your target element
    const screenWidth = window.innerWidth; // Get the current screen width

    // Check if the screen width is less than 789px
    if (screenWidth <= 768) {
      element.attributes.setNamedItem(
        document.createAttribute("data-bs-theme")
      );
      // add the attribute data-bs-theme and set its value dark
      element.setAttribute("data-bs-theme", "dark");
      // change image src to icon.png
      document.querySelector("#navBarMain img").src = whiteIcon;
    } else {
      // Reset the attribute to its initial value when the screen width is not less than 789px
      element.removeAttribute("data-bs-theme"); // Change 'initial-value' to your initial attribute value
      // change image src to logo.png
      document.querySelector("#navBarMain img").src = Logo;
    }
  };

  const turnOnDarkMode = () => {
    document.querySelector("body").classList.toggle("dark");
    setLightFlag(!lightFlag);

  };
  // this to part to get the prefers-color-scheme from device and change the theme of body
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (e.matches) {
        turnOnDarkMode();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <>
      <nav
        id="navBarMain"
        className="navbar navbar-expand-lg pt-2 bg-responsiveTransparentAndPrimColorWhenPhone"
        data-bs-theme="dark"
      >
        <div className="container d-flex justify-content-between overflow-hidden">
          <Link className="navbar-brand " to="/">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={Logo}
              className="noneImageHover"
              style={{ width: "120px" }}
              alt="logo website "
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              navbarCollapse.toggle();
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse listsNavLinks fs-5"
            id="navbarSupportedContent"
          >
            <div />
            <ul className="navbar-nav gap-3  d-flex justify-content-between mb-2 mb-lg-0">
              {links.map((link, index) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="nav-item "
                    key={index}
                  >
                    <Link
                      className="nav-link active"
                      aria_current={link.name}
                      onClick={(e) => changeStyleClassFotNavItem(e)}
                      to={link.link}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <motion.ul
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="navbar-nav d-flex gap-3  mb-2 mb-lg-0"
            >
              {/* login and sign uo button with language switch */}
              {/*
//Login system

               <li className='nav-item'>
                <button className='navbar-button   '  to='/Login' data-bs-toggle="modal" data-bs-target="#login">
                  {t("Navbar Login")}
                </button>
              </li>
              <li className='nav-item'>
                <Link className='sButton p-2 sButtonGreen  '  to='/forms/SignUp'>
                  {t("Navbar Register")}
                </Link>
              </li> */}
              <li
                className="languageSwitch"
                onClick={() => {
                  let flagDirection = i18n.language == "en";

                  flagDirection
                    ? i18n.changeLanguage("ar")
                    : i18n.changeLanguage("en");
                  flagDirection
                    ? (document.body.style.direction = "rtl")
                    : (document.body.style.direction = "ltr");
                }}
              >
                {/* <i className="fa-solid fa-earth-americas mx-1 text-blackToWhite " ></i> */}
                {i18n.language == "ar" ? (
                  <span className=" p-1">
                    English <span className="flag-icon flag-icon-us"></span>
                  </span>
                ) : (
                  <span className="p-1">
                    العربية <span className="flag-icon flag-icon-eg"></span>
                  </span>
                )}
              </li>

              <li>
                <button
                  type="button"
                  className={
                    !lightFlag
                      ? "btn btn-outline-light"
                      : "btn btn-outline-dark"
                  }
                  name="toggle Dark Mode button"
                  id="darkmode"
                  onClick={turnOnDarkMode}
                >
                  {<i className="fa-solid fa-moon"></i>}
                </button>
              </li>
            </motion.ul>
          </div>
        </div>
      </nav>

      {/*
      //Login system

       <Login/> */}
    </>
  );
};

export default Navbar;
