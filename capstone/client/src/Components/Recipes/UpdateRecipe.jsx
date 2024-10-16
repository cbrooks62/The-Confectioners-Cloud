import React, { useEffect, useState } from "react";
import { getAllFlavors } from "../../Services/FlavorServices.jsx";
import { getAllCategories } from "../../Services/CategoryServices.jsx";
import { getRecipeById, updateRecipe } from "../../Services/RecipeServices.jsx";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
  } from "reactstrap";
  
export const UpdateRecipe = ({
  currentUser,
  recipe,
  getAndSetAllRecipes,
  closeModal,
}) => {
  const [flavors, setFlavors] = useState([]);
  const [flavorId, setFlavorId] = useState({
    flavorId: recipe.flavorId,
    name: recipe.flavor.name,
  });
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState({
    categoryId: recipe.categoryId,
    name: recipe.category.name,
  });
  const [user, setUser] = useState(null);

  const [myRecipe, setMyRecipe] = useState({
    userProfileId: user.id,
    flavorId: flavorId.name,
    categoryId: categoryId.name,
    title: recipe.title,
    ingredients: recipe.ingredients,
    directions: recipe.directions,
    imageUrl: recipe.imageUrl,
  });

  useEffect(() => {
    getRecipeById(recipe.id).then((recipeObj) => {
      setMyRecipe(recipeObj);
    });
  }, []);

  useEffect(() => {
    const userObj = localStorage.getItem("cloud_user");
    if (userObj) {
      const parsedUser = JSON.parse(userObj);
      setUser(parsedUser);
    } else {
      console.error("No user found in local storage.");
    }
  }, [currentUser]);

  //useEffect to get all flavors from the database
  useEffect(() => {
    getAllFlavors().then((data) => setFlavors(data));
  }, []);
  //useEffect to get all categories from the database
  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  const handleSaveUpdate = (e) => {
    e.preventDefault();
    const recipeData = { ...recipe };
    recipeData.id = recipe.id;
    updateRecipe(recipeData)
      .then(() => closeModal())
      .then(getAndSetAllRecipes);
  };

  return (
    <div>
      <header>Edit Recipe</header>
      <div>
        <fieldset>
          <input
            className="title-text-field"
            type="text"
            text="text"
            defaultValue={myRecipe.title}
            onChange={(e) => {
              const recipeCopy = { ...myRecipe };
              recipeCopy.title = e.target.value;
              setMyRecipe(recipeCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            className="title-text-field"
            type="text"
            text="text"
            defaultValue={myRecipe.ingredients}
            onChange={(e) => {
              const recipeCopy = { ...myRecipe };
              recipeCopy.ingredients = e.target.value;
              setMyRecipe(recipeCopy);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            className="title-text-field"
            type="text"
            text="text"
            defaultValue={myRecipe.directions}
            onChange={(e) => {
              const recipeCopy = { ...myRecipe };
              recipeCopy.directions = e.target.value;
              setMyRecipe(recipeCopy);
            }}
          />
        </fieldset>
        <div>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="light">
              {flavorId.name}
            </DropdownToggle>
            <DropdownMenu className="flavor-dropdown-scroll">
              {flavors.map((singleFlavor) => (
                <DropdownItem
                  key={singleFlavor.id}
                  value={singleFlavor.id}
                  onChange={(e) =>
                    setFlavorId({
                      flavorId: e.target.value,
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
            <DropdownMenu className="category-dropdown-scroll">
              {categories.map((singleCategory) => (
                <DropdownItem
                  key={singleCategory.id}
                  value={singleCategory.id}
                  onChange={(e) =>
                    setCategoryId({
                      categoryId: e.target.value,
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
        <fieldset>
          <button
            className="button-create-submit"
            onClick={(e) => {
              handleSaveUpdate(e);
            }}
          >
            Save
          </button>
          <button className="button-edit" onClick={() => closeModal()}>
            Cancel
          </button>
        </fieldset>
      </div>
    </div>
  );
};
