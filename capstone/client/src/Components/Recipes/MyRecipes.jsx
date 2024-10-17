import React, { useEffect, useState } from 'react'
import { getRecipesByUserId } from '../../Services/RecipeServices.jsx';
import { Link } from "react-router-dom";
import DeleteRecipe from './DeleteRecipe.jsx';


export const MyRecipes = ({currentUser, myRecipe}) => {
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

  if (!myRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-card">
    {myRecipe.id && (
      <Link to={`/myRecipe/${myRecipe.id}`}>
        <h3 className="recipe-title">{myRecipe.title}</h3>
      </Link>
    )}
    {myRecipe.userProfile && <h3>Posted By: {myRecipe?.userProfile?.firstName} {myRecipe?.userProfile?.lastName}</h3>}
    {myRecipe.imageUrl && <img src={myRecipe.imageUrl} alt={`Image for ${myRecipe.title}`} />}
    {myRecipe.flavor && <p>{myRecipe?.flavor?.name}</p>}
    {myRecipe.category && <p>{myRecipe?.category?.name}</p>}
    {user?.id === myRecipe?.userProfile?.id && (
            <div>
              <button className="small-button">edit
                {/* <UpdateRecipe recipe={recipe} /> */}
              </button>
              <button className="small-button">delete
                {/* <DeleteRecipe myRecipe={myRecipe} /> */}
              </button>
            </div>
           )}
  </div>
  )
}
