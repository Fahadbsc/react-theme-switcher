import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ThemeDropdown from "./ThemeDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import CompanyLogo from "../assets/companyLogo.png";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: theme.color,
          color: theme.background,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1.5rem",
          zIndex: 1000,
        }}
      >
       <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
  <img
    src={CompanyLogo}
    alt="Logo"
    style={{ height: "32px", width: "32px", objectFit: "contain",color: theme.background }}
  />
  <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>MyApp</span>
</div>

      
        <button
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            color: theme.background,
            cursor: "pointer",
            marginRight: "3rem",
          }}
          className="hamburger-button"
        >
          <GiHamburgerMenu />
        </button>

        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginRight: "3rem",
          }}
        >
          <Link to="/" style={{ color: theme.background, textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: theme.background, textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: theme.background, textDecoration: "none" }}>Contact</Link>
          <ThemeDropdown />
        </nav>
      </header>

 
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            width: "100%",
            background: theme.color,
            color: theme.background,
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            zIndex: 999,
            
          }}
          className="mobile-menu"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: theme.background, textDecoration: "none" }}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ color: theme.background, textDecoration: "none" }}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: theme.background, textDecoration: "none" }}>Contact</Link>
          <ThemeDropdown />
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .hamburger-button {
              display: block !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
