const apiUrl = "https://localhost:5001/api/Recipe";

export const getAllRecipes = () => {
  return fetch(`${apiUrl}`).then((res) => res.json());
};

//https://localhost:5001/api/Recipe/1
export const getRecipeById = (recipeId) => {
  return fetch(`${apiUrl}/${recipeId}`).then((res) => res.json());
};

//https://localhost:5001/api/Recipe/RecipesByUser/2
export const getRecipesByUserId = (userId) => {
  return fetch(`${apiUrl}/recipesbyuser/${userId}`).then((res) => res.json());
};

//fetch to create a new recipe and add to database
export const addRecipe = (recipe) => {
  return fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  }).then((res) =>
    res.json().then((data) => {
      return data.id;
    })
  );
};

//fetch to delete a single recipe from the database
export const deleteRecipe = (recipeId) => {
  return fetch(`${apiUrl}/${recipeId}`, {
    method: "DELETE",
  });
};

//fetch to update/edit recipe to the database
export const updateRecipe = (recipe) => {
  return fetch (`${apiUrl}/${recipe.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe)
  })
} 
