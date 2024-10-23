const apiUrl = "https://localhost:5001/api/SavedRecipe";

//Fetch to get list of Saved Recipes by UserId
//https://localhost:5001/api/SavedRecipe/1
export const getSavedRecipesByUserId = (userProfileId) => {
  return fetch(`${apiUrl}/${userProfileId}`).then((res) => res.json());
};

//fetch to get full list of all saved recipes
export const getAllSavedRecipes = () => {
  return fetch(`${apiUrl}`).then((res) => res.json());
};
