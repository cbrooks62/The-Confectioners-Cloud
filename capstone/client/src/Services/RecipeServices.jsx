const apiUrl ="https://localhost:5001/api/Recipe";

export const getAllRecipes = () => {
    return fetch(`${apiUrl}`).then((res) => res.json());
  };

//https://localhost:5001/api/Recipe/1
export const getRecipeById = (recipeId) => {
    return fetch(`${apiUrl}/${recipeId}`).then((res) => res.json())
}  