import React, { useEffect, useState } from "react";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { updateReview } from "../../Services/ReviewServices.jsx";

export const UpdateReview = ({ currentUser, review, getAllReviews, closeModal }) => {
  const [user, setUser] = useState(null);
  const [updatedReview, setUpdatedReview] = useState({ ...review });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
        content:updatedReview.content,
        createDateTime: updatedReview.createDateTime,
    };
    updateReview(editedReview)
    .then(() => closeModal())
    .then(getAllReviews(user.id))
}
  return (
    <div className="update-review-modal">
        <ModalHeader>Edit Review</ModalHeader>
        <ModalBody>
            <fieldset>
            <input
            className="text-field"
            type="text"
            defaultValue={review.subject}
            onChange={(e) => {
              const reviewCopy = { ...review };
              reviewCopy.subject = e.target.value;
              setUpdatedReview(reviewCopy);
            }}
          />
            </fieldset>
            <fieldset>
            <input
            className="text-field"
            type="text"
            defaultValue={review.content}
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
  )
};
