import * as types from "./todo-type";

export const addTodo = (x) => {
  return {
    type: types.TODO_ADD,
    payload: x,
  };
};
export const deleteTodo = (x) => ({
  type: types.TODO_DELETE,
  payload: x,
});

export const updateTodo = (x) => ({
  type: types.TODO_UPDATE,
  payload: x,
});
