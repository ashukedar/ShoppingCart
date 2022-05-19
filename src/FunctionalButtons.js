import React, { Component } from "react";
import "./styles.css";

export class FunctionalButtons extends Component {
  call() {
    alert("1");
  }

  render() {
    if (!this.props.isCart)
      return (
        <button
          className="spaceOnbothSides"
          onClick={this.props.addToCart}
          value={this.props.value}
        >
          Add To Cart
        </button>
      );
    else
      return (
        <div className="inline">
          <button
            value={this.props.value}
            className="spaceOnbothSides"
            onClick={this.props.plus}
          >
            +
          </button>
          <button
            value={this.props.value}
            onClick={this.props.minus}
            className="spaceOnbothSides"
          >
            -
          </button>
        </div>
      );
  }
}
