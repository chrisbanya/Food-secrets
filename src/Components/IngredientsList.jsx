export default function ingredientsList({ info, isLoading }) {
  return (
    <div>
      <span className="flex flex-wrap mx-4 items-baseline gap-5 ">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          info.extendedIngredients.map((items) => (
            <div
              key={items.id}
              className="items-center justify-center "
            >
              <div>
                <img
                  className="size-13 ml-5"
                  src={
                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                    items.image
                  }
                />
              </div>
              <div className="px-5 text-center text-lg">
                <h3>
                  {items.amount} {items.name} {items.unit}
                </h3>
              </div>
            </div>
          ))
        )}
      </span>
    </div>
  );
}
