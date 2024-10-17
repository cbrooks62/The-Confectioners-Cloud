import React, { useEffect, useState } from "react";
import { getRecipesByUserId } from "../../Services/RecipeServices.jsx";
import "./MyRecipes.css";
import { MyRecipes } from "./MyRecipes.jsx";
import { Link } from "react-router-dom";
import "./MyRecipesList.css";


export const MyRecipesList = ({currentUser, myRecipe}) => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const [showOpenOnly, setShowOpenOnly] = useState(true);


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
         <Link to="/Recipes"><button>Return to Home</button></Link>
      <h3>My Recipes</h3>
      <Link to="/CreateRecipe"><button className="add-recipe-button">Add New Recipe</button></Link>
      <div className="cards-row">
        {userRecipes.length ? userRecipes.map((myRecipe) =>(
            <MyRecipes key={myRecipe.id} myRecipe={myRecipe} />
        )): <h5>No Recipes Posted Yet</h5>}     
      </div>
    </div>
  );
};
