import axios from "axios";

const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`);
  console.log(response.data);
  return response.data;
};

const addUser = async (newUser) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, newUser);
};

const login = async (id, pw) => {
  const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, {
    id,
    pw,
  });
  return result.data;
};

export { getUsers, addUser, login };
