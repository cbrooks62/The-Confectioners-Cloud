import React, { useEffect, useState } from "react";
import { getSavedRecipesByUserId } from "../../Services/SavedRecipeServices.jsx";
import { Link } from "react-router-dom";

export const SavedRecipe = ({currentUser, recipe, getAllSavedRecipesList}) => {
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

  return (
    <div>
        
        <div key={recipe.id} className="saved-recipe-card">
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="recipe-title">{recipe.title}</h3>
          </Link>
        </div>
      {recipe.userProfile && (
        <h3>
          Posted By: {recipe?.userProfile?.firstName}{" "}
          {recipe?.userProfile?.lastName}
        </h3>
      )}
      {recipe.imageUrl && (
        <img src={recipe.imageUrl} alt={`Image for ${recipe.title}`} />
      )}
      {recipe.flavor && <p>{recipe?.flavor?.name}</p>}
      {recipe.category && <p>{recipe?.category?.name}</p>}
      <button>Remove Save</button>
    </div>
  );
};
