import { useEffect, useState } from "react";
import { debounce } from "lodash";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search({ setRecipeData }) {
  const [query, setQuery] = useState(""); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const debouncedFetchRecipe =
      debounce(async () => {
        if (query === "" || query.trim() === "") {
          setRecipeData([]);
          return;
        }
        try {
          const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
          if (!res.ok) {
            throw new Error(
              "Failed to fetch recipe information. Please try again later."
            );
          }
          const data = await res.json();
          setRecipeData(data.results);
        } catch (error) {
          setError(error.message);
        }
      },
      300);
    debouncedFetchRecipe();
    return () => {
      debouncedFetchRecipe.cancel();
    };
  }, [query]);

  if (error) {
   alert(error);
   setError(null);
  }

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
