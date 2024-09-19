import { Link } from "react-router-dom";
import IngredientsList from "./IngredientsList";
import RecipeAttributes from "./RecipeAttributes";
export default function ({ info, isLoading }) {
  return (
    <>
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
      <div className="w-5/6 mx-auto max-w-7xl">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mx-auto px-3 rounded-md p-6 shadow-lg ">
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
                ) : (
                  info.analyzedInstructions[0].steps.map((items) => (
                    <li key={items.number}>{items.step}</li>
                  ))
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* add similiar and random recipes later */}
    </>
  );
}
