import React from "react";
import "./styles.css";

export class App extends React.Component {
  state = {
    input: "",
    todos: [
      {
        id: 1,
        index: 0,
        name: "Buy Groceries",
        completed: false
      },
      {
        id: 2,
        index: 1,
        name: "Cancel Amazon Tester",
        completed: true
      },
      {
        id: 3,
        index: 2,
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

  move(todo, direction) {

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
      index: todos.length,
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
    //console.log(this.state);
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
              .sort((a, b) => a.index - b.index)
              .map(todo => {
                return (
                  <tr
                    key={`todo-${todo.id}`}
                    className={todo.completed ? "todo-completed" : null}
                  >
                    <td>
                      {todo.index + 1}.&nbsp;{todo.name}
                    </td>
                    <td>
                      <button onClick={() => this.move(todo, -1)}>▲</button>
                      <button onClick={() => this.move(todo, +1)}>▼</button>
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
