export default function SimiliarCard({ SimiliarRecipe, setRecipeId }) {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold">You may also like:</h2>
      </div>
      <div className="flex flex-wrap sm:gap-2 md:gap-6 md:justify-center gap-4 my-5 ">
        {SimiliarRecipe.length > 0 ? (
          SimiliarRecipe.map((items) => (
            <div key={items.id} className="flex flex-row ">
              <div className="w-64 h-60 flex flex-col space-y-2 rounded-2xl shadow-lg hover:shadow-2xl ">
                <div>
                  <img
                    className="overflow-hidden size-15"
                    src={`https://img.spoonacular.com/recipes/${items.id}-312x150.${items.imageType}`}
                    alt={items.title}
                  />
                </div>
                <div className="space-y-4">
                  <div className="card-text truncate overflow-hidden  ">
                    <span className=" truncate overflow-hidden px-1">
                      {items.title}
                    </span>
                  </div>
                  <div className="ml-24">
                    <button
                      className="view-btn"
                      onClick={() => setRecipeId(items.id)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-lg">No Similiar recipes found!</h2>
        )}
      </div>
    </div>
  );
}
