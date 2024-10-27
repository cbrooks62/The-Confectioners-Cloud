import React, { useEffect, useState } from "react";
import { Input, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { updateReview } from "../../Services/ReviewServices.jsx";

export const UpdateReview = ({
  review,
  getAllReviews,
  closeModal,
  recipeId,
  currentUser
}) => {
  const [user, setUser] = useState(null)
  const [updatedReview, setUpdatedReview] = useState({
    id: review.id,
    userProfileId: review.userProfileId,
    recipeId: review.recipeId,
    subject: review.subject,
    content: review.content,
    createDateTime: review.createDateTime
  });

  console.log(JSON.stringify(updatedReview))

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
    const editedReview = {
      id: updatedReview.id,
      userProfileId: updatedReview.userProfileId,
      recipeId: updatedReview.recipeId,
      subject: updatedReview.subject,
      content: updatedReview.content,
      createDateTime: updatedReview.createDateTime
    }
    updateReview(editedReview)
    .then(() => {
      getAllReviews(recipeId)
      closeModal()
    })
    .catch((error) => {
      console.error("Failed to update the review:", error);
    });
  };

  return (
    <div className="update-review-modal">
      <ModalHeader>Edit Review</ModalHeader>
      <ModalBody>
        <fieldset>
          <Input
            className="text-field"
            type="text"
            value={updatedReview.subject || ''}
            onChange={(e) => {
              const reviewCopy = { ...review };
              reviewCopy.subject = e.target.value;
              setUpdatedReview(reviewCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            className="text-field"
            type="text"
            value={updatedReview.content || ''}
            onChange={(e) => {
              const reviewCopy = { ...review };
              reviewCopy.content = e.target.value;
              setUpdatedReview(reviewCopy);
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
