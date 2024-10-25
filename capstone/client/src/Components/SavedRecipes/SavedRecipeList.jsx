import React, { useEffect, useState } from "react";
import { SavedRecipe } from "./SavedRecipe.jsx";
import { Link } from "react-router-dom";
import { getSavedRecipesByUserId } from "../../Services/SavedRecipeServices.jsx";
import "./SavedRecipeList.css";

export const SavedRecipeList = () => {
 const [allSaved, setAllSaved] = useState([]);

 const getAllSavedRecipesList = (userProfileId) => {
    getSavedRecipesByUserId(userProfileId).then((savedArray) => {
      console.log(savedArray); // Log the fetched data
      setAllSaved(savedArray);
    });
  };

 useEffect(() => {
    const savedUser = localStorage.getItem("cloud_user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      getAllSavedRecipesList(parsedUser.id);
    } else {
      console.error("No user found in local storage.");
    }
  }, []);

  return (
    <div className="recipe-container">
    <Link to="/Recipes">
      <button className="return-button">Return to Home</button>
    </Link>
    <header>
      <img className="recipe-header" src="src/assets/SavedRecipesHeader.png" alt="Saved Recipes" />
    </header>
    <article className="recipes">
      {allSaved.length > 0 ? (
        allSaved.map((recipe) => (
          <SavedRecipe
            key={recipe.id}
            getAllSavedRecipesList={getAllSavedRecipesList}
            recipe={recipe}
            className="single-recipe"
          />
        ))
      ) : (
        <p>No saved recipes to display</p>
      )}
    </article>
  </div>
  );
};
