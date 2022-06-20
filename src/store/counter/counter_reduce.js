import * as types from "./counter_types";

const initialState = 0;

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return state + action.payload;
    case types.COUNTER_DECREMENT:
      return state - action.payload;
    case types.COUNTER_RESET:
      return 0;
    default:
      return state;
  }
};

export default reduce;
