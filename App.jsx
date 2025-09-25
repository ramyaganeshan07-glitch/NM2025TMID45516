import React, { useState } from "react";

// Recipe Search Component
function RecipeSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "60%",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 15px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#6200ea",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Search
      </button>
    </div>
  );
}

// Recipe Rating Component
function RecipeRating() {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Rate this Recipe:</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// Theme Toggle Component
function ThemeToggle({ dark, setDark }) {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <button
        onClick={() => setDark(!dark)}
        aria-label="Toggle theme"
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: dark ? "#ff9800" : "#6200ea",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

// Main App
export default function App() {
  const [dark, setDark] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const styles = {
    fontFamily: "Arial",
    padding: "20px",
    backgroundColor: dark ? "#222" : "#f4f4f4",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  const handleSearch = (query) => {
    // Dummy data for now
    const dummyRecipes = [
      "Pasta Alfredo",
      "Chicken Curry",
      "Vegetable Biryani",
      "Paneer Butter Masala",
      "Chocolate Cake",
    ];
    const results = dummyRecipes.filter((recipe) =>
      recipe.toLowerCase().includes(query.toLowerCase())
    );
    setRecipes(results);
  };

  return (
    <div style={styles}>
      <h1>🍳 CookBook: Your Virtual Kitchen Assistant</h1>

      <RecipeSearch onSearch={handleSearch} />
      <RecipeRating />

      {recipes.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe}</li>
            ))}
          </ul>
        </div>
      )}

      <ThemeToggle dark={dark} setDark={setDark} />
    </div>
  );
      }
