import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.font,
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
     
        {theme.name !== "theme2" && <Header />}
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
