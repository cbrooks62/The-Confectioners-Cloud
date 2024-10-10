{
  /* PURPOSE: Single Recipe Card displayed on the DOM*/
}

import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css"

export const Recipe = ({ recipe }) => {
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
