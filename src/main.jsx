// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
