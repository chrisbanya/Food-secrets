import Header from "../Components/Header";
import Search from "../Components/Search";
import RecipeList from "../Components/RecipeList";
import { useState } from "react";
export default function Homepage({ setRecipeId }) {
  const [recipeData, setRecipeData] = useState([]);

  return (
    <div className="mx-auto">
      <Header />
      <Search setRecipeData={setRecipeData} />
      <RecipeList recipeData={recipeData} setRecipeId={setRecipeId} />
    </div>
  );
}
