import React from "react";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";
import CompanyLogo from "../assets/companyLogo.png";

const Sidebar = ({ onLinkClick, isMobile }) => {
  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "2rem",
        height: "100vh",
        position: isMobile ? "absolute" : "static",
        top: 0,
        left: 0,
        zIndex: 999,
        boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center"}}>
      <img
          src={CompanyLogo}
          alt="Logo"
          style={{ height: "32px", width: "32px", objectFit: "contain"}}
        />
      <h2 style={{ marginBottom: "2rem" }}>My App</h2>
</div>
      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link
          to="/"
          onClick={onLinkClick}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={onLinkClick}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={onLinkClick}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Contact
        </Link>
      </nav>

      <div style={{ marginTop: "2rem" }}>
        <ThemeDropdown />
      </div>
    </div>
  );
};

export default Sidebar;
