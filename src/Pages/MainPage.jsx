import React, { Component } from "react";
import store from "../api";

export default class MainPage extends Component {
  getStoreData = async () => {
    const { data } = await store.get("/storeItems/");
    console.log(data);
  };

  deleteItem = async () => {
    await store.delete("/storeItems/31");
  };

  addItem = async () => {
    const item = {
      count: 300,
      description: "new try hello",
      image: "http://placeimg.com/640/480/food",
      itemname: "myNewItem",
      something: "something1",
    };
    const post = await store.post("/storeItems/", item);
    console.log(post);
  };
  editItem = async () => {
    const item = {
      count: 300,
      description: "hello hello",
      id: 300,
      image: "http://placeimg.com/640/480/food",
      itemname: "myNewItem",
      something: "something1",
    };
    await store.put("/storeItems/0", item);
  };
  // componentDidMount() {
  //   this.getStoreData();
  //   // this.deleteItem();
  // }

  render() {
    return (
      <div>
        <h1>Welcome to my site</h1>
        <button onClick={this.deleteItem}>Delete first item</button>
        <button onClick={this.getStoreData}>Console log Items</button>
        <button onClick={this.addItem}>Add mock item</button>
        <button onClick={this.editItem}>Edit item</button>
      </div>
    );
  }
}
