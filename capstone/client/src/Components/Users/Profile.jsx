import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getUserById } from "../../Services/UserProfileServices.jsx";
import { Link } from "react-router-dom";
import { Modal } from "reactstrap";
import { UpdateProfile } from "./UpdateProfile.jsx";

export const Profile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState([]);

  const getUserProfile = (userId) => {
    getUserById(userId).then((profile) => setUserProfile(profile));
  };

  //useEffect to add background1.png to page
  useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/background4.png)`;
    document.body.style.backgroundSize = "100vw 100vh";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundAttachment = "fixed";
  }, []);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <img
        src={userProfile.imageUrl}
        alt={`${userProfile.firstName} ${userProfile.lastName}`}
        className="profile-image"
      />
      <h2>{userProfile.userName}</h2>
      <h4>
        {userProfile.firstName} {userProfile.lastName}
      </h4>
      <button onClick={openModal} className="edit-profile-button">Edit Profile
      </button>
      <Modal
        className="edit-profile-modal"
        isOpen={showModal}
        onRequestClose={closeModal}
      >
        <UpdateProfile
          userProfile={userProfile}
          closeModal={closeModal}
          currentUser={currentUser}
          getUserProfile={getUserProfile}
        />
      </Modal>
      <Link to="/myRecipes">
        <button className="view-recipes-button">My Recipes</button>
      </Link>
    </div>
  );
};
