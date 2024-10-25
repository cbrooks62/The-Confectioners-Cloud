import React, { useState } from "react";
import { deleteRecipe } from "../../Services/RecipeServices.jsx";
import { ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

const DeleteRecipe = ({closeDeleteModal, myRecipe}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDelete = () => {
    deleteRecipe(myRecipe.id).then(document.location.reload());
  };

  return (
    <div>
        <ModalHeader>Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this recipe? <br /> <br />
          Title: {myRecipe?.title} <br />
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
  );
};

export default DeleteRecipe;
