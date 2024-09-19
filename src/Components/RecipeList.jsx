import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipeData, setRecipeId }) {
  return (
    <div className=" grid grid-cols-3 gap-4 mx-3">
      {recipeData.map((items) => (
        <div key={items.id} className="justify-self-stretch">
          <RecipeCard items={items} setRecipeId={setRecipeId} />
        </div>
      ))}
    </div>
  );
}
