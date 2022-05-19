import React, { Component } from "react";
import "./styles.css";

export class Row1 extends Component {
  render() {
    return (
      <tr align="left">
        <th className="alignCenter spaceOnbothSides">Id</th>
        <th className="alignCenter spaceOnbothSides">Name</th>
        <th className="alignCenter spaceOnbothSides">Quantity</th>
        <th className="alignCenter spaceOnbothSides">Cost</th>
        <th className="alignCenter spaceOnbothSides">Button</th>
      </tr>
    );
  }
}
