import React, { useEffect, useState } from "react";
import { getAllFlavors } from "../../Services/FlavorServices.jsx";
import { getAllCategories } from "../../Services/CategoryServices.jsx";
import { updateRecipe } from "../../Services/RecipeServices.jsx";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader,
  UncontrolledDropdown,
  ModalFooter,
  Input,
} from "reactstrap";

export const UpdateRecipe = ({
  currentUser,
  myRecipe,
  getUserRecipes,
  closeModal,
}) => {
  const [flavors, setFlavors] = useState([]);
  const [flavorId, setFlavorId] = useState({ name: "Flavor" });
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState({ name: "Category" });
  const [user, setUser] = useState(null);
  const [updatedRecipe, setUpdatedRecipe] = useState({
    id: myRecipe.id,
    userProfileId: myRecipe.userProfileId,
    title: myRecipe.title,
    ingredients: myRecipe.ingredients,
    directions: myRecipe.directions,
    createDateTime: myRecipe.createDateTime,
    imageUrl: myRecipe.imageUrl,
    flavorId: myRecipe.flavorId,
    categoryId: myRecipe.categoryId,
  });

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
    const editedRecipe = {
      id: updatedRecipe.id,
      userProfileId: updatedRecipe.userProfileId,
      title: updatedRecipe.title,
      ingredients: updatedRecipe.ingredients,
      directions: updatedRecipe.directions,
      createDateTime: updatedRecipe.createDateTime,
      imageUrl: updatedRecipe.imageUrl,
      flavorId: updatedRecipe.flavorId,
      categoryId: updatedRecipe.categoryId,
    };
    updateRecipe(editedRecipe)
      .then(() => {
        getUserRecipes(user.id)
        closeModal()
      })
  };

  //useEffect to get all flavors from the database
  useEffect(() => {
    getAllFlavors().then((data) => setFlavors(data));
  }, []);
  //useEffect to get all categories from the database
  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="update-recipe-modal">
      <ModalHeader>Edit Recipe</ModalHeader>
      <ModalBody>
        <fieldset>
          <Input
            className="title-text-field"
            type="text"
            value={updatedRecipe.title}
            onChange={(e) => {
              const recipeCopy = { ...myRecipe };
              recipeCopy.title = e.target.value;
              setUpdatedRecipe(recipeCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            value={updatedRecipe.ingredients}
            onChange={(e) => {
              const recipeCopy = { ...myRecipe };
              recipeCopy.ingredients = e.target.value;
              setUpdatedRecipe(recipeCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            value={updatedRecipe.directions}
            onChange={(e) => {
              const recipeCopy = { ...myRecipe };
              recipeCopy.directions = e.target.value;
              setUpdatedRecipe(recipeCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <Input
            className="imageUrl-text-field"
            type="text"
            value={updatedRecipe.imageUrl}
            onChange={(e) => {
              const recipeCopy = { ...myRecipe };
              recipeCopy.imageUrl = e.target.value;
              setUpdatedRecipe(recipeCopy);
            }}
          />
        </fieldset>
        <div>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="light">
              {flavorId.name}
            </DropdownToggle>
            <DropdownMenu className="dropdown-scroll">
              {flavors.map((singleFlavor) => (
                <DropdownItem
                  key={singleFlavor.id}
                  value={singleFlavor.id}
                  onClick={() =>
                    setFlavorId({
                      flavorId: singleFlavor.id,
                      name: singleFlavor.name,
                    })
                  }
                >
                  {singleFlavor.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="light">
              {categoryId.name}
            </DropdownToggle>
            <DropdownMenu className="dropdown-scroll">
              {categories.map((singleCategory) => (
                <DropdownItem
                  key={singleCategory.id}
                  value={singleCategory.id}
                  onClick={() =>
                    setCategoryId({
                      categoryId: singleCategory.id,
                      name: singleCategory.name,
                    })
                  }
                >
                  {singleCategory.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="small-button" onClick={closeModal}>
          Cancel
        </button>
        <button className="confirm-button" onClick={handleSaveUpdate}>
          Confirm
        </button>{" "}
      </ModalFooter>
    </div>
  );
};
