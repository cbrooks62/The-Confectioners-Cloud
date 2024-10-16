const apiUrl = "https://localhost:5001/api/Review"

//FETCH to get reviews by recipeId
//https://localhost:5001/api/Review/1
export const getReviewsByRecipeId = (recipeId) => {
    return fetch(`${apiUrl}/${recipeId}`).then((res) => res.json());
  };