import React, { useEffect, useState } from "react";
import { getRecipesByUserId } from "../../Services/RecipeServices.jsx";
import "./MyRecipes.css";
import { MyRecipes } from "./MyRecipes.jsx";
import { Link } from "react-router-dom";
import "./MyRecipesList.css";


export const MyRecipesList = ({currentUser, myRecipe}) => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [user, setUser] = useState(null);
 

  //useEffect to add background.png to page
useEffect(() => {
  document.body.style.backgroundImage = `url(src/assets/background1.png)`
  document.body.style.backgroundSize = '100vw 100vh'
  document.body.style.backgroundRepeat = "repeat-y"
  document.body.style.backgroundAttachment = "fixed"
}, [])

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
         <Link to="/Recipes"><button className="return-button">Return to Home</button></Link>
         <header >
        <img className="recipe-header"src="src/assets/MyRecipesHeader.png" />
        </header>
      <Link to="/CreateRecipe"><button className="small-button">Add New Recipe</button></Link>
      <div className="cards-row">
        {userRecipes.length ? userRecipes.map((myRecipe) =>(
            <MyRecipes key={myRecipe.id} myRecipe={myRecipe} getUserRecipes={getUserRecipes}/>
        )): <h5>No Recipes Posted Yet</h5>}     
      </div>
    </div>
  );
};
