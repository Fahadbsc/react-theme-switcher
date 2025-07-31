import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false); // Hide sidebar on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  if (theme.name === "theme2") {
    return (
      <div style={{ fontFamily: theme.font, position: "relative" }}>
        {isMobile && (
          <button
            onClick={handleToggleSidebar}
            style={{
              position: "fixed",
              top: "1rem",
              left: "1rem",
              zIndex: 1000,
              padding: "0.5rem 1rem",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        <div style={{ display: "flex", height: "100vh" }}>
          {(!isMobile || isSidebarOpen) && (
            <Sidebar onLinkClick={handleLinkClick} isMobile={isMobile} />
          )}

          <main
            style={{
              flex: 1,
              padding: "2rem",
              overflowY: "auto",
              backgroundColor: "#111",
              color: "#fff",
              marginLeft: isMobile ? 0 : "220px",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: theme.font }}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
