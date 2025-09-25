return (

);

<div style=(styles)>

<h2>(dark" Dark Mode": "* Light Mode"></h2>

<button

onClick=(() => setDark(Idark)}

style={{

}}

padding: 10px 20px",

borderRadius: "8px",

border: "none",

cursor: "pointer",

backgroundColor: dark ? "#ff9800": "#6200ea",

color: "white",

fontweight: "bold",

Switch to (dark? "Light": "Dark") Mode

</button>

</div>

}

// .  Main App (Combine all) export default function App(){

return (

<div style={{ fontFamily: "Arial", padding: "20px" }}>

<h1> CookBook Demo App</h1>

<RecipeSearch />

<RecipeRating />

<Theme Toggle />

</div>

);
}
