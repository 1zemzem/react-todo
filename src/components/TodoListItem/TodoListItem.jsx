import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./TodoListItem.css";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";


export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

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
        onClick={ this.onLabelClick }>
        {label}
      </span>
        <div>
          <button type="button" className="btn btn-outline-success btn-sm"
          onClick = {this.onMarkImportant}>
            <FontAwesomeIcon icon={faStar} />
          </button>

          <button type="button" className="btn btn-outline-danger btn-sm">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </span>
    );
  }
}


