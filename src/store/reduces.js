import { combineReducers } from "redux";

import counter_Reduce from "./counter/counter_reduce";

export default combineReducers({ counterReduce: counter_Reduce });
