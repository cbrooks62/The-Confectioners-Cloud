import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SavedRecipe.css";

export const SavedRecipe = ({
  currentUser,
  recipe,
  getAllSavedRecipesList,
}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("cloud_user");
    if (savedRecipes) {
      const parsedUser = JSON.parse(savedRecipes);
      setUser(parsedUser);
      getAllSavedRecipesList(parsedUser.id);
    } else {
      console.error("No user recipes found in local storage.");
    }
  }, [currentUser]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  console.log(recipe.title)
  return (
    <div className="saved-recipe-card">
    <div key={recipe.id}>
      <Link to={`/recipe/${recipe.id}`}>
        <h3 className="recipe-title">{recipe.title}</h3>
      </Link>
    </div>
    {recipe.userProfile && (
      <h3 className="recipe-user">
        Posted By: {recipe.userProfile.firstName} {recipe.userProfile.lastName}
      </h3>
    )}
    {recipe.imageUrl && (
      <img
        src={recipe.imageUrl}
        alt={`Image for ${recipe.title}`}
        className="recipe-image"
      />
    )}
    {recipe.flavor && <p className="recipe-flavor">{recipe.flavor.name}</p>}
    {recipe.category && <p className="recipe-category">{recipe.category.name}</p>}
    <button className="remove-save-button">Remove Save</button>
  </div>
  );
};
