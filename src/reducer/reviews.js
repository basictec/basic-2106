import { normalizedReviews } from "../fixtures";

const defaultReview = normalizedReviews.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (state = defaultReview, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
