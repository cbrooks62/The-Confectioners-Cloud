import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getReviewsByRecipeId } from "../../Services/ReviewServices.jsx";
import { Button } from "reactstrap";
import { DeleteReview } from "./DeleteReview.jsx";
import { UpdateReview } from "./UpdateReview.jsx";
import "./ReviewList.css";
import { getRecipeById } from "../../Services/RecipeServices.jsx";

export const ReviewList = ({currentUser}) => {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);
  const [recipe, setRecipe] = useState([]);

  const navigate = useNavigate();
  const { recipeId } = useParams();

  const getAllReviews = () => {
    getReviewsByRecipeId(recipeId).then((allReviews) => setReviews(allReviews));
  };

  //useEffect to add background.png to page
  useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/background1.png)`
    document.body.style.backgroundSize = '100vw 100vh'
    document.body.style.backgroundRepeat = "repeat-y"
    document.body.style.backgroundAttachment = "fixed"
  }, []);

  useEffect(() => {
    const currentUserObj = localStorage.getItem("cloud_user");
    if (currentUserObj) {
      const parsedUser = JSON.parse(currentUserObj);
      setUser(parsedUser);
      getAllReviews();
    }else{
      console.error("No user reviews found in local storage.");
    }
  }, [currentUser]);
  
  useEffect (() => {
    getRecipeById(recipeId).then((singleRecipe) => setRecipe(singleRecipe))
  },[recipeId]);

  return (
    <div className="review-list-container">
      <Link to="/Recipes"><button className="button">Return to Home</button></Link>
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
          navigate(`/recipe/${recipeId}/review/create`);
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
              <button className="small-button">
                <UpdateReview review={review} />
              </button>
              <button className="small-button">
                <DeleteReview review={review} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
