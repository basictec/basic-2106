import React from "react";
import RestaurantsList from "./components/restaurants-list";
import { restaurants } from "./fixtures";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Rating from "./components/rating";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <p>Choose a rating</p>
      <Rating />
      <RestaurantsList restaurants={restaurants} />
      <OrderForm />
      <Cart />
    </div>
  );
}
