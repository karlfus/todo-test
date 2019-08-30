import React from "react";
import "./styles.css";

export class App extends React.Component {
  state = {
    input: "",
    todos: [
      {
        id: 1,
        name: "Buy Groceries",
        completed: false
      },
      {
        id: 2,
        name: "Cancel Amazon Tester",
        completed: true
      },
      {
        id: 3,
        name: "Walk the dog",
        completed: false
      }
    ]
  };

  clickComplete(todo) {
    todo.completed = !todo.completed;
    this.setState({
      todos: this.state.todos
    });
  }

  move(index, direction) {
    const todos = this.state.todos;
    const newLoc = index + direction;

    if (newLoc > todos.length || newLoc < 0)
      return;

    //const todo = todos.splice(index, 1)[0];
    todos.splice(newLoc, 0, todos.splice(index, 1)[0]);
    this.setState({ todos });
  }

 /* 
 move(todo, direction) {
    if (
      todo.index + direction >= 0 &&
      todo.index + direction <= this.state.todos.length + 1
    ) {
      const adjacent = this.state.todos.find(
        item => item.index === todo.index + direction
      );
      adjacent.index = adjacent.index - direction;
      todo.index = todo.index + direction;
    }
    this.setState({
      todos: this.state.todos
    });
  }
*/

  addnew() {
    const todos = this.state.todos;
    todos.push({
      id: todos.length + 1,
      name: this.state.input,
      completed: false
    });
    this.setState({
      todos: todos,
      input: ""
    });
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Pace Todos</h1>
        <input value={this.state.input} onChange={e => this.updateInput(e)} />
        <button onClick={() => this.addnew()}>Add New</button>
        <br />
        <br />
        <table>
          <tbody>
            {this.state.todos
              .map((todo, idx) => {
                return (
                  <tr
                    key={`todo-${todo.id}`}
                    className={todo.completed ? "todo-completed" : null}
                  >
                    <td>
                      {todo.id}.&nbsp;{todo.name}
                    </td>
                    <td>
                      <button onClick={() => this.move(idx, -1)}>▲</button>
                      <button onClick={() => this.move(idx, +1)}>▼</button>
                      <button onClick={() => this.clickComplete(todo)}>
                        {todo.completed ? "Incomplete" : "Complete"}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
