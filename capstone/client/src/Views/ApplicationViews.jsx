import React, { useEffect, useState } from "react";
import { CloudNavBar } from "../Components/Navbar/NavBar.jsx";
import { Welcome } from "../Components/Welcome/Welcome.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import { RecipeList } from "../Components/Recipes/RecipeList.jsx";
import { RecipeDetails } from "../Components/Recipes/RecipeDetails.jsx";

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
      </Route>
    </Routes>
  );
};
