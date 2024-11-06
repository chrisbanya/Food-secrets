import { useEffect, useState } from "react";
import SimiliarCard from "./SimiliarCard";

export default function SimiliarRecipe({ recipeId }) {
  const [SimiliarRecipe, setSimiliarRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const endPoint = `https://api.spoonacular.com/recipes/${recipeId}/similar`;
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchSimiliarRecipes() {
      const res = await fetch(`${endPoint}?apiKey=${apiKey}`);
      const resData = await res.json();
      setSimiliarRecipe(resData);
      setIsLoading(false);
    }
    fetchSimiliarRecipes();
  }, [recipeId]);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <SimiliarCard
          SimiliarRecipe={SimiliarRecipe}
      
        />
      )}
    </>
  );
}
