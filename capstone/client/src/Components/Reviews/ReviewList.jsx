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
  const [currentReview, setCurrentReview] = useState(null)
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const getAllReviews = (recipeId) => {
    getReviewsByRecipeId(recipeId).then((allReviews) => setReviews(allReviews));
  };

  useEffect(() => {
    const currentUserObj = localStorage.getItem("cloud_user");
    if (currentUserObj) {
      const parsedUser = JSON.parse(currentUserObj);
      setUser(parsedUser);
      getAllReviews(recipeId);
    } else {
      console.error("No user reviews found in local storage.");
    }
  }, []);

  useEffect(() => {
    getRecipeById(recipeId).then((singleRecipe) => setRecipe(singleRecipe));
  }, []);

  const openModal = (review) => {
    setCurrentReview(review)
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openDeleteModal = (review) => {
    setCurrentReview(review)
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
        className="recipe-review-header"
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
          <p className="review-posted-by">
            Posted By: {review?.userProfile?.userName}
          </p>
          <p className="review-subject">{review.subject}</p>
          <p className="review-content">{review.content}</p>
          <p className="review-date">Date: {review.createDateTime}</p>
          {user.id === review.userProfileId && (
            <>
              <button onClick={() => openModal(review)} className="small-button">
                edit
              </button>
              <button onClick={() => openDeleteModal(review)} className="small-button">
                delete
              </button>
            </>
          )}
          <Modal
            className="edit-review-modal"
            isOpen={showModal}
            onRequestClose={closeModal}
          >
            <UpdateReview
              review={currentReview}
              closeModal={closeModal}
              user={user}
              currentUser={currentUser}
              getAllReviews={getAllReviews}
              recipeId={recipeId}
            />
          </Modal>
          <Modal
            className="delete-review-modal"
            isOpen={showDeleteModal}
            onRequestClose={closeDeleteModal}
          >
            <DeleteReview
              review={currentReview}
              closeDeleteModal={closeDeleteModal}
              currentUser={currentUser}
              getAllReviews={getAllReviews}
              recipeId={recipeId}
            />
          </Modal>
        </div>
      ))}
    </div>
  );
};
