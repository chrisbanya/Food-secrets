import { Link } from "react-router-dom";
export default function RecipeCard({ items, setRecipeId }) {
  return (
    <div className="flex flex-col rounded-2xl shadow-md mt-4 mb-4">
      <img src={items.image} alt="recipe images" className="overflow-hidden" />
      <h2 className="text-center pt-2 pb-2 w-full">{items.title}</h2>
      <div className="mx-auto">
        <Link to="/details">
          <button onClick={() => setRecipeId(items.id)} className="view-btn">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}
