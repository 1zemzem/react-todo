import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./TodoListItem.css";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";


export default class TodoListItem extends Component {

   render() {
    const { label, onDeleted, done, important, onToggleImportant, onToggleDone } = this.props;
    
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={ onToggleDone }>
        {label}
      </span>
        <div>
          <button type="button" className="btn btn-outline-success btn-sm"
          onClick = {onToggleImportant}>
            <FontAwesomeIcon icon={faStar} />
          </button>

          <button type="button" className="btn btn-outline-danger btn-sm"
          onClick={onDeleted}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </span>
    );
  }
}


