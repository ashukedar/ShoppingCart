import React, { Component } from "react";
import "./styles.css";
import { FunctionalButtons } from "/src/FunctionalButtons.js";

export class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.hit.id}</td>
          <td>{this.props.hit.name}</td>
          <td>{this.props.hit.count}</td>
          <td>{this.props.hit.cost}</td>
          <td>
            <FunctionalButtons
              isCart={this.props.isCart}
              addToCart={this.props.addToCart}
              value={this.props.hit.id}
              plus={this.props.plus}
              minus={this.props.minus}
            />
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
