import React, { useEffect, useState } from "react";
import { CloudNavBar } from "../Components/Navbar/NavBar.jsx";
import { Welcome } from "../Components/Welcome/Welcome.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import { RecipeList } from "../Components/Recipes/RecipeList.jsx";
import { RecipeDetails } from "../Components/Recipes/RecipeDetails.jsx";
import { Profile } from "../Components/Users/Profile.jsx";
import { CreateRecipe } from "../Components/Recipes/CreateRecipe.jsx";
import { ReviewList } from "../Components/Reviews/ReviewList.jsx";
import { MyRecipesList } from "../Components/Recipes/MyRecipesList.jsx";
import { CreateReview } from "../Components/Reviews/CreateReview.jsx";
import { SavedRecipeList } from "../Components/SavedRecipes/SavedRecipeList.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCloudUser = localStorage.getItem("cloud_user");
    const cloudUserObject = JSON.parse(localCloudUser);

    setCurrentUser(cloudUserObject);
  }, []);

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
        <Route currentUser={currentUser} path="/" element={<Welcome />} index />
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
          element={<MyRecipesList />}
        />
        <Route
          currentUser={currentUser}
          path="/savedRecipes"
          element={<SavedRecipeList />}
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
          path="/CreateReview/:recipeId"
          element={<CreateReview />}
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
