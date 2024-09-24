import { Link } from "react-router-dom";
export default function RecipeCard({ items, setRecipeId }) {
  return (
    <div className="cardContainer">
      <img src={items.image} alt="recipe images" className="overflow-hidden mb-1" />
      <h2 className="card-text">{items.title}</h2>
      <div className="mx-auto">
        <Link to="/details">
          <button onClick={() => setRecipeId(items.id)} className="view-btn my-4">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}
