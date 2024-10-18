import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getUserById } from "../../Services/UserProfileServices.jsx";
import { Link } from "react-router-dom";

export const Profile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState([]);
  const [user, setUser] = useState([]);

  const getUserProfile = (userId) => {
    getUserById(userId).then((profile) => setUserProfile(profile));
  };

    //useEffect to add background1.png to page
useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/background1.png)`
    document.body.style.backgroundSize = '100vw 100vh'
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundAttachment = "fixed"
  }, [])
  

  useEffect(() => {
    const currentUserProfile = localStorage.getItem("cloud_user");
    if (currentUserProfile) {
      const parsedUser = JSON.parse(currentUserProfile);
      setUser(parsedUser);
      getUserProfile(parsedUser.id);
    } else {
      console.error("No Information for this User");
    }
  }, [currentUser]);

  return (
    <div className="profile-container">
      <h3>PROFILE</h3>
      <img
        src={userProfile.imageUrl}
        alt={`${userProfile.firstName} ${userProfile.lastName}`}
        className="profile-image"
      />
      <h2>{userProfile.userName}</h2>
      <p>
        {userProfile.firstName} {userProfile.lastName}
      </p>
      <button className="edit-profile-button">Edit Profile</button>
      <Link to="/myRecipes">
        <button className="view-recipes-button">My Recipes</button>
      </Link>
      <Link to="/savedRecipes">
        <button className="saved-recipes-button">Saved Recipes</button>{" "}
      </Link>
    </div>
  );
};
