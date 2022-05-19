import React, { Component } from "react";
import "./styles.css";
import { Item } from "/src/Item.js";
import { Row1 } from "/src/Row1.js";

export class AvailableItemList extends Component {
  render() {
    return (
      <div>
        <h1 align="left">Available Items</h1>
        <br />
        <table>
          <thead>
            <Row1 />
          </thead>
          <tbody>
            {this.props.data.map(hit => (
              <Item
                key={hit.id}
                hit={hit}
                isCart={false}
                addToCart={this.props.addToCart}
              />
            ))}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}
