import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search({ setRecipeData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setRecipeData(data.results);
    }
    fetchRecipe();
  }, [query]);

  return (
    <>
      <div className="w-9/12 p-4 rounded-full shadow-md mx-auto mt-10 mb-8">
        <div className="justify-center">
          <input
            className="p-2 w-full border-none focus:outline-none"
            type="text"
            placeholder="Enter Recipe"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
