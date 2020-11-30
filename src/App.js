import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      todos
    };
  }

  addHandle = (task) => {
    const newTasks = [...this.state.todos, { task: task, id: Date.now(), purchased: false }]
    this.setState({
      todos: newTasks
    });
  }

  render() {
    return (
      <div classname="App">
        <header>
          <h1>MVP</h1>
          <TodoForm addHandle={this.addHandle} />
        </header>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
