import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeDropdown = () => {

  const { themeName, setTheme, theme } = useContext(ThemeContext);

  return (
   
        <select
          value={themeName}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: "5px 10px",
            background: theme.background,
            color: theme.color,
            border: "none",
            borderRadius: "4px",
          }}
        >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeDropdown;
