import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/counter/counter_actions";
const Counter = (props) => {
  const { counterState, incrementIt, decrementIt, resetIt } = props;
  return (
    <div>
      <h2>Counter {counterState}</h2>
      <br />
      <button onClick={() => incrementIt(3)}>Increment</button>
      <br />
      <br />
      <button onClick={() => decrementIt(5)}>Decrement</button>
      <br />
      <br />
      <button onClick={() => resetIt()}>Reset</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counterState: state.counterReduce,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementIt: (x) => dispatch(actions.counter_action_increment(x)),
    decrementIt: (x) => dispatch(actions.counter_action_decrement(x)),
    resetIt: (x) => dispatch(actions.counter_action_reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
