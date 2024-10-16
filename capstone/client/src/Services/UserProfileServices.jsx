const apiUrl = "https://localhost:5001/api/UserProfile";

//Fetch to login an existing user
//https://localhost:5001/api/UserProfile/getbyemail?email=atwoodr%40theoc.com
export const loginUser = (email) => {
  return fetch(`${apiUrl}/getbyemail?email=${email}`).then((res) => res.json());
};

export const logout = () => {
  localStorage.clear();
};

//Fetch to register a new user and save to the database
export const registerUser = (user, password) => {
  return fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user, password),
  }).then((res) => res.json());
};

//Fetch to get all users
export const getAllUsers = () => {
  return fetch(`${apiUrl}`).then((res) => res.json());
};

//Fetch to get a single user by ID
//https://localhost:5001/api/UserProfile/2
export const getUserById = (userId) => {
  return fetch(`${apiUrl}/${userId}`).then((res) => res.json());
};
