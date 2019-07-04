import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { setRating } from "../ac";

const { Option } = Select;

function Rating(props) {
  const { rate } = props;

  console.log(rate);

  // const setRating = (value) => props.dispatch({type: value})

  return (
    <div>
      <Select
        onSelect={value => props.set(value)}
        defaultValue={rate}
        style={{ width: "70px" }}
      >
        <Option value={1}>1*</Option>
        <Option value={2}>2*</Option>
        <Option value={3}>3*</Option>
        <Option value={4}>4*</Option>
        <Option value={5}>5*</Option>
      </Select>
    </div>
  );
}

const mapStateToProps = stateFromStore => ({
  rate: stateFromStore.rating
});

const mapDispatchToProps = {
  set: setRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rating);
