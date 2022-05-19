import React, { Component } from "react";
import "./styles.css";
import { Item } from "/src/Item.js";
import { Row1 } from "/src/Row1.js";

export class CartItemList extends Component {
  render() {
    return (
      <div className={this.props.hide}>
        <h1 align="left">My cart</h1>
        <br />
        <table>
          <thead>
            <Row1 className={this.props.Ca} />
          </thead>
          <tbody>
            {this.props.data.map(hit => (
              <Item
                key={hit.id}
                hit={hit}
                isCart={true}
                plus={this.props.plus}
                minus={this.props.minus}
              />
            ))}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}
