import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/todo/todo-action";
import { v4 as uuidv4 } from "uuid";
import "./todo.css";

const Todos = (props) => {
  const defaultOne = { title: "", description: "", id: "0001" };

  const { todoList, addTodo, deleteOne, updateOne } = props;

  const [oneTodo, setOneTodo] = useState(defaultOne);
  const [flag, setFlag] = useState(false);
  const addOne = () => {
    addTodo(oneTodo, uuidv4());
    setOneTodo(defaultOne);
  };
  const clickUpdate = (x) => {
    setFlag(true);
    setOneTodo(x);
  };
  return (
    <div>
      <h2>Todos Page</h2>
      <div>
        <div>
          <label hmtlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={oneTodo.title}
            onChange={(e) => setOneTodo({ ...oneTodo, title: e.target.value })}
          />
        </div>
        <div>
          <label hmtlFor="description">Description</label>
          <br />
          <input
            type="text"
            name="title"
            value={oneTodo.description}
            onChange={(e) =>
              setOneTodo({ ...oneTodo, description: e.target.value })
            }
          />
        </div>
        {flag ? (
          <button
            onClick={() => {
              setFlag(false);
              setOneTodo(defaultOne);
              updateOne(oneTodo);
            }}
          >
            Update
          </button>
        ) : (
          <button onClick={addOne}>Add</button>
        )}
      </div>
      <hr />
      {todoList.length > 0 ? (
        <table id="customers">
          <thead>
            <tr>
              <th>Idx</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((it, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{it.title}</td>
                <td>{it.description}</td>
                <td>
                  <button onClick={() => clickUpdate(it)}>Update</button>
                  <button
                    onClick={() => {
                      deleteOne(it.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Please Add todo</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoReduce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (x, i) => {
      x.id = i;
      dispatch(actions.addTodo(x));
    },
    deleteOne: (x) => dispatch(actions.deleteTodo(x)),
    updateOne: (x) => dispatch(actions.updateTodo(x)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
