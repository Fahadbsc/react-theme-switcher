import React, { createContext, useState, useEffect } from "react";
import { themes } from "../styles/themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("theme1");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setThemeName(savedTheme);
  }, []);

  const setTheme = (name) => {
    localStorage.setItem("theme", name);
    setThemeName(name);
  };

  const value = {
    theme: themes[themeName],
    themeName,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
