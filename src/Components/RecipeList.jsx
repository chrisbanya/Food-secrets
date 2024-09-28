import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipeData, setRecipeId }) {
  if (recipeData.length === 0) {
    return (
      <p className="text-center text-lg">
        Please enter a search term. e.g Pizza.
      </p>
    );
  }

  return (
    <>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3">
        {recipeData.map((items) => (
          <div key={items.id} className="justify-self-stretch">
            <RecipeCard items={items} setRecipeId={setRecipeId} />
          </div>
        ))}
      </div>
    </>
  );
}
