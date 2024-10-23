import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getReviewsByRecipeId } from "../../Services/ReviewServices.jsx";
import { Button } from "reactstrap";
import { DeleteReview } from "./DeleteReview.jsx";
import { UpdateReview } from "./UpdateReview.jsx";
import "./ReviewList.css";
import { getRecipeById } from "../../Services/RecipeServices.jsx";
import { Modal } from "reactstrap";

export const ReviewList = ({ currentUser }) => {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);
  const [recipe, setRecipe] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();
  const { recipeId } = useParams();

  const getAllReviews = (recipeId) => {
    getReviewsByRecipeId(recipeId).then((allReviews) => setReviews(allReviews));
  };
  // const getAllReviews = () => {
  //   getReviewsByRecipeId(recipeId)
  //     .then((allReviews) => {
  //       console.log("Reviews fetched:", allReviews); // Add this line
  //       setReviews(Array.isArray(allReviews) ? allReviews : []);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching reviews:", error);
  //       setReviews([]);
  //     });
  // };

  useEffect(() => {
    const currentUserObj = localStorage.getItem("cloud_user");
    if (currentUserObj) {
      const parsedUser = JSON.parse(currentUserObj);
      setUser(parsedUser);
      getAllReviews(recipeId);
    } else {
      console.error("No user reviews found in local storage.");
    }
  }, [currentUser]);

  useEffect(() => {
    getRecipeById(recipeId).then((singleRecipe) => setRecipe(singleRecipe));
  }, [recipeId]);
  // useEffect(() => {
  //   getRecipeById(recipeId).then((singleRecipe) => {
  //     console.log("Recipe fetched:", singleRecipe); // Add this line
  //     setRecipe(singleRecipe || {});
  //   });
  // }, [recipeId]);

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
    <div className="review-list-container">
      <Link to="/Recipes">
        <button className="button">Return to Home</button>
      </Link>
      <h2
        onClick={() => {
          navigate(`/recipe/${recipeId}`);
        }}
      >
        {recipe.title} Reviews
      </h2>
      <Button
        className="small-button"
        onClick={() => {
          navigate(`/CreateReview/${recipeId}`);
        }}
      >
        Add New Review
      </Button>
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <p>SUBJECT: {review.subject}</p>
          <p>CONTENT: {review.content}</p>
          <p>AUTHOR: {review?.userProfile?.userName}</p>
          <p>DATE: {review.createDateTime}</p>
          {user.id === review?.userProfile?.id && (
            <div>
              <button onClick={openModal} className="small-button">
                edit
              </button>
              <button onClick={openDeleteModal} className="small-button">
                delete
              </button>
              <Modal
                className="edit-review-modal"
                isOpen={showModal}
                onRequestClose={closeModal}
              >
                <UpdateReview
                  review={review}
                  closeModal={closeModal}
                  currentUser={currentUser}
                  getAllReviews={getAllReviews}
                />
              </Modal>
              <Modal
                className="edit-review-modal"
                isOpen={showDeleteModal}
                onRequestClose={closeDeleteModal}
              >
                <DeleteReview
                  review={review}
                  closeDeleteModal={closeDeleteModal}
                  currentUser={currentUser}
                />
              </Modal>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
