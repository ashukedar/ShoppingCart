import React, { Component } from "react";
import "./styles.css";
import { AvailableItemList } from "/src/AvailableItemList.js";
import { CartItemList } from "/src/CartItemList.js";
import { Cost } from "/src/Cost.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cost: 0,
      AvailableItemdata: [
        {
          id: 1,
          name: "item1",
          cost: 1,
          count: 1
        },
        {
          id: 2,
          name: "item2",
          cost: 2,
          count: 4
        },
        {
          id: 3,
          name: "item3",
          cost: 4,
          count: 6
        }
      ],
      CartItemdata: []
    };
  }

  componentDidMount() {
    this.calcCost();
  }

  addToCart(e) {
    let id = parseInt(e.target.value);
    let AvailableItems = this.state.AvailableItemdata;
    let CartItems = this.state.CartItemdata;
    AvailableItems.map(item => {
      if (item.id === id && !CartItems.some(i => i.id === id)) {
        let item1 = {
          id: item.id,
          name: item.name,
          cost: item.cost,
          count: 1
        };
        CartItems.push(item1);
      }
    });
    this.calcCost();
    this.setState({ CartItemdata: CartItems });
  }

  plus(e) {
    let id = parseInt(e.target.value);
    let AvailableItems = this.state.AvailableItemdata;
    let CartItems = this.state.CartItemdata;
    let availability = 0;
    AvailableItems.map(item => {
      if (item.id === id) {
        availability = item.count;
      }
    });
    CartItems.map(item => {
      if (item.id === id && item.count + 1 <= availability) {
        item.count++;
      }
    });
    this.calcCost();
    this.setState({ CartItemdata: CartItems });
  }

  minus(e) {
    let id = parseInt(e.target.value);
    let CartItems = this.state.CartItemdata;
    let item1;
    CartItems.map(item => {
      if (item.id === id) {
        item1 = item;
      }
    });
    if (item1.count > 1) {
      item1.count--;
    } else {
      delete CartItems[item1.id - 1];
    }
    this.calcCost();
    this.setState({ CartItemdata: CartItems });
  }

  calcCost() {
    let CartItems = this.state.CartItemdata;
    let cost = 0;
    CartItems.map(item => {
      cost += item.cost * item.count;
    });
    this.setState({ Cost: cost });
  }

  buy() {
    let AvailableItems = this.state.AvailableItemdata;
    let CartItems = this.state.CartItemdata;
    let newQty = parseInt("0");
    CartItems.map(cartItem => {
      AvailableItems.map(availableItem => {
        if (cartItem.id === availableItem.id) {
          newQty = parseInt(availableItem.count);
          newQty = newQty - parseInt(cartItem.count);
          availableItem.count = newQty;
        }
      });
    });
    this.setState({ AvailableItemdata: AvailableItems });
    this.setState({ Cost: 0 });
    this.setState({ CartItemdata: [] });
  }

  render() {
    return (
      <div className="App container">
        <AvailableItemList
          className="row"
          data={this.state.AvailableItemdata}
          addToCart={e => this.addToCart(e)}
        />
        <CartItemList
          className="row"
          data={this.state.CartItemdata}
          plus={e => this.plus(e)}
          hide={this.state.CartItemdata === [] ? "hide" : ""}
          minus={e => this.minus(e)}
        />
        <Cost className="row" cost={this.state.Cost} />
        <button className="spaceOnbothSides" onClick={this.buy.bind(this)}>
          Buy
        </button>
      </div>
    );
  }
}
