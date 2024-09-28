import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RecipeDetails from "./Pages/RecipeDetails";
import ErrorPage from "./Pages/ErrorPage";
import { useState } from "react";
function App() {
  const [recipeId, setRecipeId] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage setRecipeId={setRecipeId} />} />
        <Route
          path="/details"
          element={
            <RecipeDetails recipeId={recipeId} setRecipeId={setRecipeId} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
