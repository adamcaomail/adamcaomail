import * as types from "./todo-type";

// const initialState = [
//   { title: "aaa", description: "cccc", id: "001" },
//   { title: "ggg", description: "ffff", id: "002" },
// ];
const initialState = [];

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [...state, action.payload];
    case types.TODO_DELETE:
      return [...state].filter((x) => x.id !== action.payload);
    case types.TODO_UPDATE:
      return [...state].map((el, idx) => {
        if (el.id === action.payload.id) {
          el.title = action.payload.title;
          el.description = action.payload.description;
        }
        return el;
      });
    default:
      return state;
  }
};

export default reduce;
