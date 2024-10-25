import React, { useEffect, useState } from "react";
import { getAllFlavors } from "../../Services/FlavorServices.jsx";
import { getAllCategories } from "../../Services/CategoryServices.jsx";
import { Input } from "reactstrap";
import "./RecipeList.css";

export const RecipeSearchBar = ({
  setSearchTerm,
  setFlavorSelection,
  setCategorySelection,
}) => {
  const [flavors, setFlavors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllFlavors().then((data) => setFlavors(data));
  }, []);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  const handleFlavorChange = (e) => {
    setFlavorSelection(e.target.value);
    console.log("Selected Flavor:", e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategorySelection(e.target.value);
    console.log("Selected Category:", e.target.value);
  };

  return (
    <div className="filter-bar">
      <Input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="🔍Search Recipes"
        className="recipe-search-bar"
      />
      <select name="flavors" onChange={handleFlavorChange}>
        <option value="">Filter By Flavor</option>
        {flavors.map((flavor) => (
          <option key={flavor.id} value={flavor.id}>
            {flavor.name}
          </option>
        ))}
      </select>
      <select name="categories" onChange={handleCategoryChange}>
        <option value="">Filter By Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
