import React, { useEffect, useState } from "react";
import { Input, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import {
  updateUserProfile,
} from "../../Services/UserProfileServices.jsx";

export const UpdateProfile = ({ currentUser, closeModal, userProfile, getUserProfile }) => {
  const [user, setUser] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({ ...userProfile });

  useEffect(() => {
    const userObj = localStorage.getItem("cloud_user");
    if (userObj) {
      const parsedUser = JSON.parse(userObj);
      setUser(parsedUser);
    } else {
      console.error("No user found in local storage.");
    }
  }, [currentUser]);

  const handleSaveUpdate = () => {
    const editedProfile = {
      id: updatedProfile.id,
      userName: updatedProfile.userName,
      firstName: updatedProfile.firstName,
      lastName: updatedProfile.lastName,
      email: updatedProfile.email,
      imageUrl: updatedProfile.imageUrl,
    };
    updateUserProfile(editedProfile)
      .then(() => closeModal())
      .then(getUserProfile(user.id));
  };

  return (
    <div className="update-profile-modal">
      <ModalHeader> Edit Profile</ModalHeader>
      <ModalBody>
        <fieldset>
          <Input
            className="title-text-field"
            type="text"
            defaultValue={userProfile.userName}
            onChange={(e) => {
              const profileCopy = { ...userProfile };
              profileCopy.userName = e.target.value;
              setUpdatedProfile(profileCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            className="title-text-field"
            type="text"
            defaultValue={userProfile.firstName}
            onChange={(e) => {
              const profileCopy = { ...userProfile };
              profileCopy.firstName = e.target.value;
              setUpdatedProfile(profileCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            className="title-text-field"
            type="text"
            defaultValue={userProfile.lastName}
            onChange={(e) => {
              const profileCopy = { ...userProfile };
              profileCopy.lastName = e.target.value;
              setUpdatedProfile(profileCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            className="title-text-field"
            type="text"
            defaultValue={userProfile.email}
            onChange={(e) => {
              const profileCopy = { ...userProfile };
              profileCopy.email = e.target.value;
              setUpdatedProfile(profileCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            className="title-text-field"
            type="text"
            defaultValue={userProfile.imageUrl}
            onChange={(e) => {
              const profileCopy = { ...userProfile };
              profileCopy.imageUrl= e.target.value;
              setUpdatedProfile(profileCopy);
            }}
          />
        </fieldset>
      </ModalBody>
      <ModalFooter>
        <button className="small-button" onClick={closeModal}>
          Cancel
        </button>
        <button className="button" onClick={handleSaveUpdate}>
          Confirm
        </button>{" "}
      </ModalFooter>
    </div>
  );
};
