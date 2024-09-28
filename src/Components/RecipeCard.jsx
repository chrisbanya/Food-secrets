import { useNavigate } from "react-router-dom";

export default function RecipeCard({ items, setRecipeId }) {
  const navigate = useNavigate();
  function handleView() {
    setRecipeId(items.id);

    navigate("/details");
  }
  return (
    <div className="cardContainer">
      <img
        src={items.image}
        alt="recipe images"
        className="overflow-hidden mb-1 rounded-t-2xl"
      />
      <h2 className="card-text">{items.title}</h2>
      <div className="mx-auto">
        <button onClick={handleView} className="view-btn my-4">
          View
        </button>
      </div>
    </div>
  );
}
