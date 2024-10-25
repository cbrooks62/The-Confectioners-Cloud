import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRecipeById } from '../../Services/RecipeServices.jsx';
import "./RecipeDetails.css"

export const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    if (recipeId) {
      getRecipeById(recipeId).then((data) => setRecipe(data));
    }
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
console.log(recipe.title, recipeId)

  return (
    <div className="recipe-details">
      <Link to="/Recipes"><button className="button">Return to Home</button></Link>
    <h1 className="recipe-title">{recipe.title}</h1>
    <div className="recipe-info">
      <div className="recipe-meta">
        <p><strong>Posted By:</strong> {recipe?.userProfile?.firstName} {recipe?.userProfile?.lastName}</p>
        <p><strong>Flavor:</strong> {recipe?.flavor?.name}</p>
        <p><strong>Category:</strong> {recipe?.category?.name}</p>
        <div className="recipe-buttons">
          <Link to={`/review/${recipeId}`}><button>View Reviews</button></Link>
          {/* <Link to="/savedRecipes"><button>Save Recipe</button></Link> */}
        </div>
      </div>
      <img className="recipe-image" src={recipe.imageUrl} alt={`Image of ${recipe.title}`} />
    </div>
    <div className="recipe-content">
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Directions:</strong> {recipe.directions}</p>
    </div>
    <p><strong>Created At:</strong> {new Date(recipe.createDateTime).toLocaleDateString()}</p>
  </div>
  );
};