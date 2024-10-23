import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../../Services/RecipeServices.jsx";
import "./RecipeList.css"
import { Recipe } from "./Recipe.jsx";
import { RecipeSearchBar } from "./RecipeSearchBar.jsx";

export const RecipeList = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const[ filteredRecipes ,setFilteredRecipes] = useState([]);

  const getAllPostedRecipes = () => {
    getAllRecipes().then((recipesArray) => setAllRecipes(recipesArray));
  };
  //useEffect to add background.png to page
  useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/background1.png)`
    document.body.style.backgroundSize = '100vw 100vh'
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundAttachment = "fixed"
  }, [])
  
  //useEffect to get all Recipes from the database
  useEffect(() => {
    getAllPostedRecipes();
  }, []);

//  filter for searching recipes on DOM
 useEffect(() => {
  const foundRecipes = allRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredRecipes(foundRecipes);
}, [searchTerm, allRecipes]);

  //jsx for all recipes to be displayed on DOM
  return (
    <div className="recipe-container">
        <header >
        <img className="recipe-header"src="src/assets/RecipesHeader.png" />
        </header>
        {/* <div>
        <RecipeSearchBar setSearchTerm={setSearchTerm}/>
      </div> */}
      <article className="recipes">
      {allRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} className="single-recipe" />
        ))}
      </article>
    </div>
  );
};
