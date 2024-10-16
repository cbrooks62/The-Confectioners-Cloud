import React, { useEffect, useState } from "react";
import { getRecipesByUserId } from "../../Services/RecipeServices.jsx";
import "./MyRecipes.css";
import { Recipe } from "./Recipe.jsx";
import { Link } from "react-router-dom";

export const MyRecipes = ({currentUser}) => {
  const [userRecipes, setUserRecipes] = useState([]);
    const [user, setUser] = useState(null);

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

  return (
    <div className="my-recipes">
      <h3>My Recipes</h3>
      <Link to="/CreateRecipe"><button className="add-recipe-button">Add New Recipe</button></Link>
      <div className="cards-row">
        {userRecipes.length ? userRecipes.map((recipe) =>(
            <Recipe key={recipe.id} recipe={recipe} />
        )): <h5>No Recipes Posted Yet</h5>}     
      </div>
    </div>
  );
};
