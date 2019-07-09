import React from "react";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";
import { connect } from "react-redux";

function Review({ id, review }) {
  console.log(`пришло сверху ${id}`);

  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={review.user}
      content={review.text}
      actions={[
        <Rate
          disabled
          defaultValue={review.rating}
          style={{ marginLeft: "24px" }}
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log(`Здесь будут ownProps`);
  console.log(ownProps);

  return {
    review: state.reviews[ownProps.id]
  };
};

export default connect(mapStateToProps)(Review);
