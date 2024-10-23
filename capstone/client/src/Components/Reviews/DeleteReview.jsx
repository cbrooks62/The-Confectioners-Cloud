import React, { useState } from 'react'
import { deleteReview } from '../../Services/ReviewServices.jsx';
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const DeleteReview = ({closeDeleteModal, review}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  
    const handleDelete = () => {
        deleteReview(review.id).then(document.location.reload());
      };

  return (
    <div>
        <ModalHeader>Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this review? <br /> <br />
          {review?.subject} <br />
        </ModalBody>
        <ModalFooter>
          <button className="small-button" onClick={closeDeleteModal}>
            Cancel
          </button>
          <button className="button" onClick={handleDelete}>
            Confirm
          </button>{" "}
        </ModalFooter>
    </div>
  )
}
