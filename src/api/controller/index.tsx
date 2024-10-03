import axios from "axios";
import { endpoint } from "../config/endpoint";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getDataUserList = async () => {
  const response = await api.get(endpoint.userData);
  return response.data;
};

export default getDataUserList;
