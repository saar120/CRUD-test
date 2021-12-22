import axios from "axios";

const store = axios.create({
  baseURL: "https://61c2f39f9cfb8f0017a3e7d9.mockapi.io/",
});

export default store;
