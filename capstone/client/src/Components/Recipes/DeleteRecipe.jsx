import React, { useState } from "react";
import { deleteRecipe } from "../../Services/RecipeServices.jsx";
import { ModalBody, ModalFooter, ModalHeader, Button, Modal } from "reactstrap";

const DeleteRecipe = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDelete = () => {
    deleteRecipe(recipe.id).then(document.location.reload());
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this recipe? <br /> <br />
          TITLE: {recipe?.title} <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDelete}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteRecipe;
