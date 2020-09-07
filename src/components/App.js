import React, { Component } from 'react';
import '../styles/App.css';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

class App extends Component {

  counter = 3;

  state = {
    tasks: [
      { id: 0, title: "Example task 1", priority: false },
      { id: 1, title: "Example task 2", priority: false },
      { id: 2, title: "Example task 3", priority: false },
    ]
  }

  addTask = (title, priority) => {

    const newTask = { id: this.counter, title, priority }
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }))

    return true;
  }

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const newList = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: newList,
    })
  }

  editTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id)
    const editedTask = tasks[index];

    const newTitle = prompt('Type new title', editedTask.title);
    if (newTitle !== "") {
      if (newTitle !== editedTask.title) {

        editedTask.title = newTitle;

        this.setState({
          tasks
        })
      } else {
        alert('No changes.');
      }
    } else {
      alert('Title can not be empty.');
    }
  }

  render() {
    console.log('render!');
    return (
      <div className="app">
        <h1>To-Do App</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} edit={this.editTask} />
      </div>
    );
  }
}

export default App;
