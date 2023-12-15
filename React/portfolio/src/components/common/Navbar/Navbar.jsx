import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarStyle from '../../../assets/styles/Navbar';

const { Nav, NavbarButtonResponsive, Barras, TextAC, NavLinks } = NavbarStyle;

function Navbar() {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
    setIsNavbarExpanded(false);
  };

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsNavbarScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Nav className={`navbar navbar-expand-lg ${isNavbarScrolled || isNavbarExpanded ? 'scrolled' : ''}`}>
        <NavbarButtonResponsive
          className={`navbar-toggler ${isNavbarExpanded ? 'active' : ''}`}
          type="button"
          id="navbarTogglerButton"
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon" id="menu">
            <Barras className="fa fa-bars"></Barras>
          </span>
        </NavbarButtonResponsive>
        <div className={`collapse navbar-collapse ${isNavbarExpanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav col-12 justify-content-center">
            <li className="nav-item">
              <TextAC className="nav-link" onClick={() => handleNavigation('/')}>
                AC
              </TextAC>
            </li>
            <li className="nav-item">
              <NavLinks
                className={`nav-link ${location.pathname === '/' ? 'ativo' : ''}`}
                onClick={() => handleNavigation('/')}
              >
                Home
              </NavLinks>
            </li>
            <li className="nav-item">
              <NavLinks
                className={`nav-link ${location.pathname === '/sobremim' ? 'ativo' : ''}`}
                onClick={() => handleNavigation('/sobremim')}
              >
                About Me
              </NavLinks>
            </li>
            <li className="nav-item">
              <NavLinks
                className={`nav-link ${location.pathname === '/contato' ? 'ativo' : ''}`}
                onClick={() => handleNavigation('/contato')}
              >
                Contact
              </NavLinks>
            </li>
            <li className="nav-item">
              <NavLinks
                className={`nav-link ${location.pathname === '/portfolio' ? 'ativo' : ''}`}
                onClick={() => handleNavigation('/portfolio')}
              >
                Portfolio
              </NavLinks>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;