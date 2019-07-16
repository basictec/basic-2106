import React from "react";
import RestaurantsList from "./components/restaurants-list";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import { Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>

      <NavLink to="/checkout">
        <Cart />
      </NavLink>

      <NavLink to="/restaurants" style={{ marginRight: "20px" }}>
        Рестораны
      </NavLink>
      <NavLink to="/filter">Фильтр</NavLink>

      <Route path="/filter" component={Filter} />
      <Route path="/restaurants" component={RestaurantsList} />
      <Route path="/checkout" component={OrderForm} />
    </div>
  );
}
