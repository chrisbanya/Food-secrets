export default function RecipeAttributes ({info}) {
    return (
      <>
        <h2 className="text-2xl text-wrap font-semibold font-mono my-5">{info.title}</h2>
        <div className="flex flex-wrap basis-10 gap-2 text-lg">
          <span className="recipe-att">
            <h3>Cooking Time: {info.readyInMinutes}mins</h3>
          </span>
          <span className="recipe-att">
            <h3>Vegan: {info.vegan ? "Yes" : "No"}</h3>
          </span>
          <span className="recipe-att">
            <h3>Vegetarian: {info.vegetarian ? "Yes" : "No"}</h3>
          </span>
          <span className="recipe-att">
            <h3>Servings: {info.servings}</h3>
          </span>
          <span className="recipe-att">
            <h3>
              Price per serving: ${Math.round(info.pricePerServing / 100)}
            </h3>
          </span>
          <span className="recipe-att">
            <h3>
              Budget-Friendly: {info.cheap ? "Budget-Friendly" : "Expensive"}
            </h3>
          </span>
          <span className="recipe-att">
            <h3>Gluten-free: {info.glutenFree ? "Yes" : "No"}</h3>
          </span>
        </div>
      </>
    );
}