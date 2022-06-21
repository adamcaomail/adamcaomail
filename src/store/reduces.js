import { combineReducers } from "redux";

import counter_Reduce from "./counter/counter_reduce";
import todo_Reduce from "./todo/todo-reduce";
export default combineReducers({
  counterReduce: counter_Reduce,
  todoReduce: todo_Reduce,
});
