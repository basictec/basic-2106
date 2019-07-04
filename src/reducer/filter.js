export default (rating = 3, action) => {
  if (action.type >= 1 && action.type <= 5) {
    rating = action.type;
    return rating;
  }

  return rating;
};
