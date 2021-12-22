import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    const { image, itemname, description, count, id } = this.props.item;
    return (
      <div className="card">
        <div className="image">
          <img src={image} alt={itemname} />
        </div>
        <div className="content">
          <div className="header">{itemname}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <span className="right floated">Count: {count}</span>
        </div>
        <div className="ui buttons">
          <button className="ui button">Edit</button>
          <button onClick={() => this.props.deleteItem(id)} className="ui  button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}
