import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" , marginTop: "60px"}}>
      <h1 style={{ marginBottom: "1rem" }}>Welcome to Our Store</h1>
      <p style={{ marginBottom: "1.5rem", maxWidth: "600px" }}>
        Browse through our wide range of amazing products fetched from an API.
      </p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: theme.color,
          color: theme.background,
          border: "none",
          borderRadius: "4px",
          marginBottom: "2rem",
          cursor: "pointer",
        }}
      >
        Explore Now
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            theme.layout === "grid"
              ? "repeat(auto-fit, minmax(250px, 1fr))"
              : "1fr",
          gap: "1.5rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: `1px solid ${theme.color}`,
              borderRadius: "8px",
              padding: "1rem",
              backgroundColor: theme.name === "theme2" ? "#222" : "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h3 style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
              {product.title}
            </h3>
            <p style={{ fontWeight: "bold", color: theme.color }}>
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
