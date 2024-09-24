import { useEffect, useState } from "react";
import RecipeInfo from "../Components/RecipeInfo";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";

export default function RecipeDetails({ recipeId, setRecipeId }) {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const InfoURL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const apiKEY = import.meta.env.VITE_API_KEY;
 
  useEffect(() => {
    async function fetchFoodDetails() {
      const res = await fetch(`${InfoURL}?apiKey=${apiKEY}`);
      const recipeInfo = await res.json();
      setInfo(recipeInfo);
      setIsLoading(false);
    }
    fetchFoodDetails();
  }, [recipeId]);

  return (
    <div>
      <Header />
      <div key={info.id}>
        <RecipeInfo
          info={info}
          isLoading={isLoading}
          recipeId={recipeId}
          setRecipeId={setRecipeId}
        />
      </div>
    </div>
  );
}
