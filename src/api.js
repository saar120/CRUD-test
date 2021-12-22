import axios from "axios";

const store = axios.create({
  baseURL: "https://61c2f39f9cfb8f0017a3e7d9.mockapi.io/",
});

export default class api {
  static getItems = async () => {
    const { data } = await store.get("/storeItems");
    return data;
  };

  static deleteItem = async (id) => {
    return await store.delete("/storeItems/" + id);
  };

  static addItem = async (item) => {
    const post = await store.post("/storeItems/", item);
    return post;
  };

  static editItem = async (item) => {
    await store.put(`/storeItems/${item.id}`, item);
  };
}
