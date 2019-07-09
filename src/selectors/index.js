import { createSelector } from "reselect";
import { getAverageRate } from "../utils";
import { restaurants } from "../fixtures";
import { array } from "prop-types";

const restaurantsSelector = state => state.restaurants;

const filtersSelector = state => state.filters;

const reviewsSelector = state => state.reviews;

export const dishSelector = (state, { id }) => state.dishes[id];

export const totalAmountSelector = state =>
  Object.values(state.order).reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  Object.entries(state.order).reduce(
    (acc, [id, amount]) => acc + dishSelector(state, { id }).price * amount,
    0
  );

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  reviewsSelector,

  (restaurants, filters, reviewsSelector) => {
    console.log("---", "filtrating");
    // console.log(restaurants);
    // console.log(reviewsSelector);

    let arrayForFilter = [];

    for (let key in restaurants) {
      arrayForFilter.push(restaurants[key]);
    }

    // console.log(`arrayForFilter`);
    // console.log(arrayForFilter);

    for (let i = 0; i < arrayForFilter.length; i++) {
      let fullRating = 0;
      let cycleGo = 0;
      for (let j = 0; j < arrayForFilter[i].reviews.length; j++) {
        for (let key in reviewsSelector) {
          if (arrayForFilter[i].reviews[j] === key) {
            fullRating += reviewsSelector[key].rating;
            cycleGo++;
          }
        }
      }

      arrayForFilter[i].rating = Math.floor(fullRating / cycleGo);
    }

    let filtratedArray = arrayForFilter.filter(
      item => item.rating >= filters.minRating
    );

    // console.log(filtratedArray);

    return filtratedArray;
  }
);
