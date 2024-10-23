import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addReview } from "../../Services/ReviewServices.jsx";
import { Input } from "reactstrap";
import "./CreateReview.css";

export const CreateReview = ({ currentUser }) => {
  const [user, setUser] = useState(null);

  const { recipeId } = useParams();

  const [review, setReview] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const userObj = localStorage.getItem("cloud_user");
    if (userObj) {
      const parsedUser = JSON.parse(userObj);
      setUser(parsedUser);
    } else {
      console.error("No user found in local storage.");
    }
  }, [currentUser]);

  const handleCreateSave = (e) => {
    e.preventDefault();
    if (review.subject) {
      const newReview = {
        subject: review.subject,
        content: review.content,
        createDateTime: new Date().toISOString(),
        userProfileId: user.id,
        recipeId: parseInt(recipeId),
      };
      addReview(newReview).then(() => {
        navigate(`/review/${recipeId}`);
      });
    } else {
      window.alert("Please give your review a subject!");
    }
  };

  return (
    <div className="review-add-container">
      <header className="review-add-header">Add New Review</header>
      <form>
        <div>
          <Input
            type="text"
            placeholder="Subject"
            className="review-add-input"
            onChange={(e) => {
              const reviewCopy = { ...review };
              reviewCopy.subject = e.target.value;
              setReview(reviewCopy);
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Content"
            className="review-add-input"
            onChange={(e) => {
              const reviewCopy = { ...review };
              reviewCopy.content = e.target.value;
              setReview(reviewCopy);
            }}
          />
        </div>
        <button className="button-add-review" onClick={handleCreateSave}>
          Submit
        </button>
      </form>
    </div>
  );
};
