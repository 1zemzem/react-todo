import React, { Component } from "react";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";
import "./App.css";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),      
    ],
  };

  createTodoItem(label) {
    return {
      label, 
  important: false, 
  done: false,
  id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      let newTodo = [...todoData];
      newTodo.splice(index, 1);
      return {
        todoData: newTodo,
      };
    });
  };

  addItem = (text) => {
    //generate id
    //add element to array
const newItem = this.createTodoItem(text);

this.setState(({todoData}) => {
  let newTodo = [
    ...todoData,
    newItem
  ];

  return {
    todoData: newTodo,
  };
})
}

toggleProperty = (arr, id, propName) => {
  const index = arr.findIndex((item) => item.id === id);
  const item = arr[index];
  const newItem = { ...arr[index], [propName]: !item[propName]} ;
  return [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index + 1)
  ];
};

onToggleDone = (id) => {
  this.setState(({todoData}) => {
    return {
 todoData: this.toggleProperty(todoData, id, 'done')
};
  });
};

onToggleImportant = (id) => {
  this.setState(({todoData}) => {
    return {
 todoData: this.toggleProperty(todoData, id, 'important')
};
  });
};

  render() {
const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData}
         onDeleted={this.deleteItem}
         onToggleImportant={this.onToggleImportant}
         onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
}
