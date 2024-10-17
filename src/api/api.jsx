import axios from "axios";

export const createUser = async (userData) => {
  try {
    const response = await axios.post("http://localhost:5000/users", userData);
    return response.data;
  } catch (err) {
    console.log("Error Creating user", err);
    throw err;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (err) {
    console.log("Failed to fetch data", err);
    throw err;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/users/${id}`,
      userData
    );
    return response.data;
  } catch (err) {
    console.log("Error updating data", err);
    throw err;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/users/${id}`);
    return response.data;
  } catch (err) {
    console.log("Error deleting data", err);
    throw err;
  }
};
