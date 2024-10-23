{
  /* PURPOSE: Single Recipe Card displayed on the DOM*/
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css"
import "./Recipe.css"
import { getRecipesByUserId } from "../../Services/RecipeServices.jsx";
// import { UpdateRecipe } from "./UpdateRecipe.jsx";

export const Recipe = ({ recipe, currentUser }) => {
  const [user, setUser] = useState(null);
  const [userRecipes, setUserRecipes] = useState({});

  const getUserRecipes = (userId) => {
    getRecipesByUserId(userId).then((recipes) => setUserRecipes(recipes));
  };

  useEffect(() => {
    const userRecipes = localStorage.getItem("cloud_user");
    if (userRecipes) {
      const parsedUser = JSON.parse(userRecipes);
      setUser(parsedUser);
      getUserRecipes(parsedUser.id);
    } else {
      console.error("No user recipes found in local storage.");
    }
  }, [currentUser]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-card">
    {recipe.id && (
      <Link to={`/recipe/${recipe.id}`}>
        <h3 className="recipe-title">{recipe.title}</h3>
      </Link>
    )}
    {recipe.userProfile && <h3>Posted By: {recipe?.userProfile?.firstName} {recipe?.userProfile?.lastName}</h3>}
    {recipe.imageUrl && <img src={recipe.imageUrl} alt={`Image for ${recipe.title}`} />}
    {recipe.flavor && <p>{recipe?.flavor?.name}</p>}
    {recipe.category && <p>{recipe?.category?.name}</p>}
  </div>
);
};
[]