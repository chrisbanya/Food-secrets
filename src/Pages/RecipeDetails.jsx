import { useEffect, useState } from "react";
import RecipeInfo from "../Components/RecipeInfo";
import Header from "../Components/Header";

export default function RecipeDetails({ recipeId, setRecipeId }) {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const InfoURL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const apiKEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchFoodDetails() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${InfoURL}?apiKey=${apiKEY}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch recipe details: ${res.status}`);
        }
        const recipeInfo = await res.json();
        setInfo(recipeInfo);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFoodDetails();
  }, [recipeId]);

  return (
    <div>
      <Header />
      {isLoading && <p className="text-center my-14 text-lg">Loading...</p>}
      {error && <p className="text-center my-14 text-lg ">Error: {error}</p>}
      {!isLoading && !error && (
        <div key={info.id}>
          <RecipeInfo
            info={info}
            isLoading={isLoading}
            recipeId={recipeId}
            setRecipeId={setRecipeId}
          />
        </div>
      )}
    </div>
  );
}
