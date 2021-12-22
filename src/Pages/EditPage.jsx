import React, { Component } from "react";

export default class EditPage extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Product Name</label>
          <input type="text" name="product-name" placeholder="Product Name" />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea name="description" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
