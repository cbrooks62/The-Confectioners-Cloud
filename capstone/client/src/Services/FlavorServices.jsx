const apiUrl = "https://localhost:5001/api/Flavor";

export const getAllFlavors = () => {
    return fetch(`${apiUrl}`).then((res) => res.json());
  };