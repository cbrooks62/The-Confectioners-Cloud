import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from "reactstrap";
import { getAllFlavors } from "../../Services/FlavorServices.jsx";
import { getAllCategories } from "../../Services/CategoryServices.jsx";
import "./CreateRecipe.css";
import { addRecipe } from "../../Services/RecipeServices.jsx";

export const CreateRecipe = ({ currentUser }) => {
  const [flavors, setFlavors] = useState([]);
  const [flavorId, setFlavorId] = useState({name: "Flavor"})
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState({name: "Category"})
  const [user, setUser] = useState(null);

  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    directions: "",
    imageUrl: "",
    createDateTime: "",
    flavorId: 0,
    categoryId: 0,
  });
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
    const newRecipe = {
      userProfileId: user.id,
      title: recipe.title,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
      imageUrl: recipe.imageUrl,
      createDateTime: new Date().toISOString(),
      flavorId: JSON.parse(flavorId.flavorId),
      categoryId: JSON.parse(categoryId.categoryId),
    };
    addRecipe(newRecipe).then(() => {
      navigate("/MyRecipes");
    });
  };

  useEffect(() => {
    getAllFlavors().then((data) => setFlavors(data));
  }, []);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="recipe-create-container">
    <header>Add New Recipe</header>
    <form className="create-form">
      <div>
        <Input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            const recipeCopy = { ...recipe };
            recipeCopy.title = e.target.value;
            setRecipe(recipeCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Ingredients"
          onChange={(e) => {
            const recipeCopy = { ...recipe };
            recipeCopy.ingredients = e.target.value;
            setRecipe(recipeCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Directions"
          onChange={(e) => {
            const recipeCopy = { ...recipe };
            recipeCopy.directions = e.target.value;
            setRecipe(recipeCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="file"
          placeholder="URL of Image"
          onChange={(e) => {
            const recipeCopy = { ...recipe };
            recipeCopy.imageUrl = URL.createObjectURL(e.target.files[0]);
            setRecipe(recipeCopy);
          }}
        />
      </div>
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
                onClick={(e) =>
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
                onClick={(e) =>
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
        <button className="button-create-submit" onClick={handleCreateSave}>
          Submit
        </button>
      </fieldset>
    </form>
  </div>
  
  );
};
