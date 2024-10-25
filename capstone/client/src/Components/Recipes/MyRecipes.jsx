import React, { useEffect, useState } from "react";
import { getRecipesByUserId } from "../../Services/RecipeServices.jsx";
import { Link } from "react-router-dom";
import DeleteRecipe from "./DeleteRecipe.jsx";
import { UpdateRecipe } from "./UpdateRecipe.jsx";
import { Modal } from "reactstrap";

export const MyRecipes = ({ currentUser, myRecipe }) => {
  const [user, setUser] = useState(null);
  const [userRecipes, setUserRecipes] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="recipe-card">
      {myRecipe.id && (
        <Link to={`/Recipe/${myRecipe.id}`}>
          <h3 className="recipe-title">{myRecipe.title}</h3>
        </Link>
      )}
      {myRecipe.userProfile && (
        <h3>
          Posted By: {myRecipe?.userProfile?.firstName}{" "}
          {myRecipe?.userProfile?.lastName}
        </h3>
      )}
      {myRecipe.imageUrl && (
        <img src={myRecipe.imageUrl} alt={`Image for ${myRecipe.title}`} />
      )}
      {myRecipe.flavor && <p>{myRecipe?.flavor?.name}</p>}
      {myRecipe.category && <p>{myRecipe?.category?.name}</p>}
      {user?.id === myRecipe?.userProfile?.id && (
        <div>
          <button onClick={openModal} className="small-button">
            Edit
          </button>
          <button onClick={openDeleteModal} className="small-button">
            Delete
          </button>
          <Modal
            className="edit-recipe-modal"
            isOpen={showDeleteModal}
            onRequestClose={closeDeleteModal}
          >
            <DeleteRecipe
              myRecipe={myRecipe}
              closeDeleteModal={closeDeleteModal}
              currentUser={currentUser}
            />
          </Modal>
          <Modal
            className="edit-recipe-modal"
            isOpen={showModal}
            onRequestClose={closeModal}
          >
            <UpdateRecipe
              myRecipe={myRecipe}
              closeModal={closeModal}
              currentUser={currentUser}
              getUserRecipes={getUserRecipes}
            />
          </Modal>
        </div>
      )}
    </div>
  );
};
