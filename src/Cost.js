import React, { Component } from "react";
import "./styles.css";

export class Cost extends Component {
  render() {
    return (
      <h3 className={this.props.hide} align="left">
        Total Cost : {this.props.cost}
      </h3>
    );
  }
}
