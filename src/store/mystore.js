import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduces from "./reduces";
const store = createStore(
  reduces,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
