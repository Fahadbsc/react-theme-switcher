import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "2rem" , marginTop: "60px",height: "100vh"}}>
      <h1>Contact Us</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "10px",
            fontFamily: theme.font,
            border: `1px solid ${theme.color}`,
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "10px",
            fontFamily: theme.font,
            border: `1px solid ${theme.color}`,
          }}
        />
        <textarea
          placeholder="Message"
          rows="4"
          style={{
            padding: "10px",
            fontFamily: theme.font,
            border: `1px solid ${theme.color}`,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: theme.color,
            color: theme.background,
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
