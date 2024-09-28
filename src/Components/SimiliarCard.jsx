export default function SimiliarCard({ SimiliarRecipe, setRecipeId }) {
  console.log(SimiliarRecipe);
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold">You may also like:</h2>
      </div>
      <div className="flex flex-wrap sm:gap-2 md:gap-6 md:justify-center gap-4 my-5 ">
        {SimiliarRecipe.length > 0 ? (
          SimiliarRecipe.map(({ id, imageType, title }) => (
            <div key={id} className="flex flex-row ">
              <div className="w-64 h-60 flex flex-col space-y-2 rounded-2xl shadow-lg hover:shadow-2xl ">
                <div style={{ height: "125px", width: "256px" }}>
                  <img
                    height="130px"
                    width="256px"
                    className="overflow-hidden"
                    src={`https://img.spoonacular.com/recipes/${id}-312x150.${imageType}`}
                    alt={title}
                  />
                </div>
                <div className="space-y-4">
                  <div className="card-text truncate overflow-hidden  ">
                    <span className=" truncate overflow-hidden px-1">
                      {title}
                    </span>
                  </div>
                  <div className="ml-24">
                    <button
                      className="view-btn"
                      onClick={() => setRecipeId(id)}
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
