import React, { useEffect, useState } from "react";
import { CloudNavBar } from "../Components/Navbar/NavBar.jsx";
import { Welcome } from "../Components/Welcome/Welcome.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import { RecipeList } from "../Components/Recipes/RecipeList.jsx";
import { RecipeDetails } from "../Components/Recipes/RecipeDetails.jsx";
import { Profile } from "../Components/Users/Profile.jsx";
import { MyRecipes } from "../Components/Recipes/MyRecipes.jsx";
import { SavedRecipes } from "../Components/Recipes/SavedRecipes.jsx";
import { CreateRecipe } from "../Components/Recipes/CreateRecipe.jsx";
import { ReviewList } from "../Components/Reviews/ReviewList.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCloudUser = localStorage.getItem("cloud_user");
    const cloudUserObject = JSON.parse(localCloudUser);

    setCurrentUser(cloudUserObject);
  }, []);
console.log(currentUser.userName)
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CloudNavBar currentUser={currentUser} />
            <Outlet />
          </>
        }
      >
        {/* <Route currentUser={currentUser} path="/" element={<Welcome />} index /> */}
        <Route
          currentUser={currentUser}
          path="/Recipes"
          element={<RecipeList />}
        />
        <Route
          currentUser={currentUser}
          path="/recipe/:recipeId"
          element={<RecipeDetails />}
        />
        <Route
          currentUser={currentUser}
          path="/myRecipes"
          element={<MyRecipes />}
        />
        <Route
          currentUser={currentUser}
          path="/savedRecipes"
          element={<SavedRecipes />}
        />
        <Route
          currentUser={currentUser}
          path="/CreateRecipe"
          element={<CreateRecipe />}
        />
          <Route
          currentUser={currentUser}
          path="/review/:recipeId"
          element={<ReviewList />}
        />
          <Route
          currentUser={currentUser}
          path="/Profile"
          element={<Profile />}
        />
      </Route>
    </Routes>
  );
};
