import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "2rem", marginTop: "60px",height: "100vh" }}>
      <h1>About Us</h1>
      <p style={{ maxWidth: "600px" }}>
        We are a fictional company built for demonstrating a multi-theme React app. Our team values creativity, accessibility, and user-first design. The goal is to show how design and structure can change across different themes.
      </p>
    </div>
  );
};

export default About;
