import * as types from "./counter_types";

export const counter_action_increment = (x) => {
  return {
    type: types.COUNTER_INCREMENT,
    payload: x,
  };
};

export const counter_action_decrement = (x) => {
  return {
    type: types.COUNTER_DECREMENT,
    payload: x,
  };
};

export const counter_action_reset = () => {
  return {
    type: types.COUNTER_RESET,
  };
};
