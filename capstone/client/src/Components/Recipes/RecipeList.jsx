import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../../Services/RecipeServices.jsx";
import "./RecipeList.css"

import { Recipe } from "./Recipe.jsx";

export const RecipeList = () => {
    const [allRecipes, setAllRecipes] = useState([]);

  const getAllPostedRecipes = () => {
    getAllRecipes().then((recipesArray) => setAllRecipes(recipesArray));
  };

  //useEffect to get all Recipes from the database
  useEffect(() => {
    getAllPostedRecipes();
  }, []);

  //jsx for all recipes to be displayed on DOM
  return (
    <div className="recipe-container">
      <header className="recipe-header">Recipes</header>
      <article className="recipes">
      {allRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} className="single-recipe" />
        ))}
      </article>
    </div>
  );
};
