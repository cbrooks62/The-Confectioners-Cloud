import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ApplicationViews } from "../Views/ApplicationViews.jsx";
import React, { useEffect, useState } from "react";
import { Authorized } from "../Views/Authorized.jsx";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({})

  const user = localStorage.getItem("cloud_user")
  const parsedUser = JSON.parse(user)

  useEffect(() => {
      if (!localStorage.getItem("cloud_user")) {
          setIsLoggedIn(false)

      }
  }, [isLoggedIn])

  useEffect(() => {
      if (parsedUser) {
          setCurrentUser(parsedUser)
      }
  }, [isLoggedIn])

  return (
    <Router>

      {isLoggedIn ? 
        <ApplicationViews isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}currentUser={currentUser} />
      : 
        <Authorized setIsLoggedIn={setIsLoggedIn} />
      }
    </Router>
  );
};

export default App;
