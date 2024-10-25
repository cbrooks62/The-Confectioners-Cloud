import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../../Services/RecipeServices.jsx";
import "./RecipeList.css";
import { Recipe } from "./Recipe.jsx";
import { RecipeSearchBar } from "./RecipeSearchBar.jsx";

export const RecipeList = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const getAllPostedRecipes = () => {
    getAllRecipes().then((recipesArray) => setAllRecipes(recipesArray));
  };


  useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/background1.png)`;
    document.body.style.backgroundSize = "100vw 100vh";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundAttachment = "fixed";
  }, []);

  //useEffect to get all Recipes from the database
  useEffect(() => {
    getAllPostedRecipes();
  }, []);

  // Filter for searching recipes on DOM
  useEffect(() => {
    const foundRecipes = allRecipes.filter((recipe) => {
      const matchesSearchTerm = recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFlavor = selectedFlavor
        ? recipe.flavorId == selectedFlavor
        : true;
      const matchesCategory = selectedCategory
        ? recipe.categoryId == selectedCategory
        : true;

      return matchesSearchTerm && matchesFlavor && matchesCategory;
    });


    setFilteredRecipes(foundRecipes);
  }, [searchTerm, selectedFlavor, selectedCategory, allRecipes]);

  //jsx for all recipes to be displayed on DOM
  return (
    <div className="recipe-container">
      <header>
        <img className="recipe-header" src="src/assets/RecipesHeader.png" />
      </header>
      <div>
        <RecipeSearchBar
          setSearchTerm={setSearchTerm}
          setFlavorSelection={setSelectedFlavor}
          setCategorySelection={setSelectedCategory}
        />
      </div>
      <article className="recipes">
        {filteredRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} className="single-recipe" />
        ))}
      </article>
    </div>
  );
};
