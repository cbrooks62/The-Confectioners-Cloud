const apiUrl = "https://localhost:5001/api/Review";

//FETCH to get reviews by recipeId
//https://localhost:5001/api/Review/1
export const getReviewsByRecipeId = (recipeId) => {
  return fetch(`${apiUrl}/${recipeId}`).then((res) => res.json());
};


//Fetch to create a new review
export const addReview = (review) => {
  return fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  }).then((res) =>
    res.json().then((data) => {
      return data.id;
    })
  );
};

//fetch to delete a single review from database
export const deleteReview = (reviewId) => {
  return fetch(`${apiUrl}/${reviewId}`, {
    method: "DELETE",
  });
};

//fetch ro update/edit a single review to the database
export const updateReview = (review) => {
  return fetch(`${apiUrl}/${review.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
};
