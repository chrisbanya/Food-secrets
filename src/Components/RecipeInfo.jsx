import {  useNavigate } from "react-router-dom";
import IngredientsList from "./IngredientsList";
import RecipeAttributes from "./RecipeAttributes";
import SimiliarRecipe from "./SimiliarRecipe";
export default function ({ info, isLoading, recipeId, setRecipeId }) {
  const navigateBack = useNavigate();
  function handleBackToHome() {
    navigateBack("/");
  }
  return (
    <>
      <button className="back-btn" onClick={handleBackToHome}>
        Back
      </button>
      <div className="w-5/6 mx-auto max-w-7xl">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mx-auto px-5 rounded-lg p-6 shadow-lg ">
            <img
              className="overflow-hidden rounded-sm "
              src={info.image}
              alt={info.title}
            />
          </div>
          <div>
            <RecipeAttributes info={info} />
            <div className="my-8">
              <h2 className="py-3 text-xl font-semibold">Ingredients:</h2>
              <IngredientsList info={info} isLoading={isLoading} />
            </div>
            <div className="my-8 ">
              <h2 className="pb-3 text-xl font-semibold">Instructions:</h2>
              <ol className="list-decimal leading-relaxed text-lg">
                {isLoading ? (
                  <h2>Loading...</h2>
                ) : info.analyzedInstructions?.[0]?.steps?.length > 0 ? (
                  info.analyzedInstructions[0].steps.map((items) => (
                    <li key={items.number}>{items.step}</li>
                  ))
                ) : <p>Oops! No Instructions available for this recipe</p>}
              </ol>
            </div>
          </div>
        </div>
        <SimiliarRecipe recipeId={recipeId} setRecipeId={setRecipeId} />
      </div>
    </>
  );
}
