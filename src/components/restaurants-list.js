import React from "react";
import PropTypes, { element } from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List } from "antd";
import { connect } from "react-redux";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen, rating }) {
  restaurants.forEach(element => {
    let target = 0;
    let cycleGo = 0;
    for (let i = 0; i < element.reviews.length; i++) {
      target = target + element.reviews[i].rating;
      cycleGo++;
    }

    element.RATING = +(target / cycleGo).toFixed(0);
  });

  restaurants = restaurants.filter(element => element.RATING >= rating);
  console.log(restaurants);

  return (
    <List>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
          data-id="restaurant"
        />
      ))}
    </List>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

const mapStateToProps = stateFromStore => ({
  rating: stateFromStore.rating
});

export default connect(mapStateToProps)(accordionDecorator(RestaurantsList));
