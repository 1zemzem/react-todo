import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      <div>
        <button type="button" class="btn btn-outline-success btn-sm">
        <i class="fas fa-star" aria-hidden="true"></i>
        </button>

        <button type="button" class="btn btn-outline-danger btn-sm">
        <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </span>
  );
};

export default TodoListItem;
