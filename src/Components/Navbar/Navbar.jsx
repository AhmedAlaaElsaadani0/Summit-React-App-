import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import  "./styleNavBar.css";
const Link=React.lazy(()=>import("../Link/Link"))

const Navbar = () => {
  const { t , i18n} = useTranslation();
  // change style for nav item when click on Contact us Navbar
  const changeStyleForNavItemContactUs = () => {
    let contactUs = document.querySelector('.ContactUs');
    if (contactUs.classList.contains('selectedNavElement')) {
      contactUs.classList.remove('navItemCircle');
      contactUs.classList.add('navItemSelectedCircle');
      contactUs.innerText = ' Us';
      contactUs.classList.remove('selectedNavElement');
    } else {
      contactUs.classList.remove('navItemSelectedCircle');
      contactUs.classList.add('navItemCircle');
      contactUs.innerText = 'Contact';
    }
  };

  // specify style for nav item when refresh page
  const specifyStyleForNav = () => {
    document.querySelectorAll('.nav-link').forEach((element) => {
      if (window.location.href.includes(element.innerText)) {
        document.querySelectorAll('.nav-link').forEach((element) => {
          element.classList.remove('selectedNavElement');
        });
        element.classList.add('selectedNavElement');
        changeStyleForNavItemContactUs();
      }
    });
  };

  // change style for nav item when click on it
  const changeStyleForNavItem = () => {
    document.querySelectorAll('.nav-link').forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach((element) => {
          element.classList.remove('selectedNavElement');
        });
        element.classList.add('selectedNavElement');
        changeStyleForNavItemContactUs();
      });
    });
  };

  useEffect(() => {
    specifyStyleForNav();
    changeStyleForNavItem();

    // Call the function initially and listen for window resize events
    updateAttributeForScreenSize();
    window.addEventListener('resize', updateAttributeForScreenSize);

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
            <img src='Images/Logo.png' style={{ width: '100px' }} alt='logo website ' />
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
            <div/>
            <ul className='navbar-nav gap-3  d-flex justify-content-between mb-2 mb-lg-0'>
              <li className='nav-item '>
                <Link className='nav-link active selectedNavElement' aria-current='page' to='/'>
                  {t("Navbar Home")}
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' aria-current='page' to='/About'>
                {t("Navbar About")}
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' aria-current='page' to='/Buy'>
                {t("Navbar Buy")}
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' aria-current='page' to='/Rent'>
                {t("Navbar Rent")}

                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' aria-current='page' to='/Area'>
                  Area
                </Link>
              </li>
            </ul>
            <ul className='navbar-nav ContactUsWidth  mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active ContactUs  navItemCircle' aria-current='page' to='/Contact'>
                {t("Navbar Contact")}

                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


