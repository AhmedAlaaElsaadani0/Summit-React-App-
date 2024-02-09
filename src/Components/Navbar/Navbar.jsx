import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./styleNavBar.css";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from '../Form/Login/Login';
const Link = React.lazy(() => import("../Link/Link"))

const Navbar = () => {
  const { t, i18n } = useTranslation();
  let navbarCollapse;


  // specify style for nav item when refresh page
  const specifyStyleForNav = () => {
    document.querySelectorAll('.nav-link').forEach((element) => {
      if (window.location.href.includes(element.getAttribute("aria_current"))) {
        document.querySelectorAll('.nav-link').forEach((element) => {
          element.classList.remove('selectedNavElement');
        });
        element.classList.add('selectedNavElement');
      }
    });
  };

  // change style for nav item when click on it
  const changeStyleForNavItem = () => {
    document.querySelectorAll('.nav-link').forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach((element) => {
          element.classList.remove('selectedNavElement');
          navbarCollapse.hide();
        });
        element.classList.add('selectedNavElement');
      });
    });
  };

  useEffect(() => {
    specifyStyleForNav();
    changeStyleForNavItem();

    // Call the function initially and listen for window resize events
    updateAttributeForScreenSize();
    window.addEventListener('resize', updateAttributeForScreenSize);

    // Manually collapse the navbar when a link is clicked
    navbarCollapse = new bootstrap.Collapse(document.getElementById('navbarSupportedContent'), {
      toggle: false // Set to false to manually control the collapse state
    });
    

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateAttributeForScreenSize);
    };
  }, []);

  // Function to update the attribute value
  const updateAttributeForScreenSize = () => {
    const element = document.getElementById('navBarMain'); // Change 'myElement' to the ID of your target element
    const screenWidth = window.innerWidth; // Get the current screen width

    // Check if the screen width is less than 789px
    if (screenWidth <= 768) {
      element.attributes.setNamedItem(document.createAttribute('data-bs-theme'));
      // add the attribute data-bs-theme and set its value dark
      element.setAttribute('data-bs-theme', 'dark');
      // change image src to icon.png
      document.querySelector('#navBarMain img').src = 'Images/Icon.png';
    } else {
      // Reset the attribute to its initial value when the screen width is not less than 789px
      element.removeAttribute('data-bs-theme'); // Change 'initial-value' to your initial attribute value
      // change image src to logo.png
      document.querySelector('#navBarMain img').src = 'Images/Logo.png';
    }
  };

  return (
    <>
      <nav
        id='navBarMain'
        className='navbar navbar-expand-lg  bg-responsiveTransparentAndPrimColorWhenPhone'
        data-bs-theme='dark'
      >
        <div className='container-fluid mx-3 d-flex justify-content-between '>

          <Link className='navbar-brand ' to='/'>
            <img src='Images/Logo.png' style={{ width: '120px' }} alt='logo website ' />
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse listsNavLinks fs-5' id='navbarSupportedContent'>
            <div />
            <ul className='navbar-nav gap-3  d-flex justify-content-between mb-2 mb-lg-0'>
              <li className='nav-item '>
                <Link className='nav-link active selectedNavElement' to='/'>
                  {t("Navbar Home")}
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' aria_current='About' to='/About'>
                  {t("Navbar About")}
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' aria_current='Buy' to='/Buy'>
                  {t("Navbar Buy")}
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' aria_current='Rent' to='/Rent'>
                  {t("Navbar Rent")}

                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' aria_current='Contact' to='/Contact'>
                  {t("Navbar Contact")}

                </Link>
              </li>
            </ul>
            <ul className='navbar-nav d-flex gap-3  mb-2 mb-lg-0'>
              {/* login and sign uo button with language switch */}
              <li className='nav-item'>
                <button className='navbar-button   '  to='/Login' data-bs-toggle="modal" data-bs-target="#login">
                  {t("Navbar Login")}
                </button>
              </li>
              <li className='nav-item'>
                <Link className='sButton p-2 sButtonGreen  '  to='/forms#SignUp'>
                  {t("Navbar Register")}
                </Link>
              </li>
              <li className='languageSwitch' 
              onClick={() => {
                let flagDirection = i18n.language == 'en';

                flagDirection ? 
                i18n.changeLanguage('ar') :
                i18n.changeLanguage('en');
                flagDirection? document.body.style.direction = 'rtl' : document.body.style.direction = 'ltr';

              }}
              >
              <i class="fa-solid fa-earth-americas text-secondary mx-1"></i>
              {i18n.language == "ar" ? 
                <span className=' p-1' >
                  English
                </span>
                :
                  <span className='' >
                    عربي
                  </span>
              }
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Login/>
    </>
  );
};

export default Navbar;


