export default (rating = 0, action) => {
  if (action.type >= 0 && action.type <= 5) {
    rating = action.type;
    return rating;
  }

  return rating;
};
