import React, { useState } from "react";
import { ModalHeader, UncontrolledButtonDropdown } from "reactstrap";
import {
  getUserById,
  updateUserProfile,
} from "../../Services/UserProfileServices.jsx";

export const UpdateProfile = ({ currentUser, closeModal }) => {
  const [user, setUser] = useState(null);
  const [updateProfile, setUpdateProfile] = useState({ ...myProfile });

  const [modal, setModal] = useState(false);

  const handleSaveUpdate = () => {
    const editedProfile = {
      id: updateProfile.id,
      userName: updateProfile.userName,
      firstName: updateProfile.firstName,
      lastName: updateProfile.lastName,
      email: updateProfile.email,
      imageUrl: updateProfile.imageUrl,
    };
    updateUserProfile(editedProfile)
      .then(() => closeModal())
      .then(getUserById(user.id));
  };

  useEffect(() => {
    const userObj = localStorage.getItem("cloud_user");
    if (userObj) {
      const parsedUser = JSON.parse(userObj);
      setUser(parsedUser);
    } else {
      console.error("No user found in local storage.");
    }
  }, [currentUser]);

  return( 
  <div className="update-profile-modal">
    <ModalHeader></ModalHeader>
  </div>
  );
};
