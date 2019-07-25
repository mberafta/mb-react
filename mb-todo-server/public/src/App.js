import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

const App = (props) => {

  /**
   * Hook liant la liste de todo avec son modificateur d'état.
   */
  let [todoListState, setTodoListState] = useState(
    {
      todos: [
        { id: 1, details: "Todo 1" },
        { id: 2, details: "Todo 2" },
        { id: 3, details: "Todo 3" }
      ]
    }
  );

  /**
   * Méthode perméttant d'inverser la liste de todos.
   */
  const reverseTodoListHandler = () => {
    setTodoListState({
      todos: [...todoListState.todos].reverse()
    })
  };
  
  /**
   * Méthode ajoutant un todo avec un id déterminé par le max des ids actuels.
   */
  const addTodoHandler = () => {
    debugger;
    let todoIds = [...todoListState.todos.map(todo => todo.id)],
      maxTodoId = Math.max(...todoIds);

    setTodoListState({
      todos: [...todoListState.todos, { id: +(Number(maxTodoId)) + 1, details: "Todo " + +(Number(maxTodoId) + 1) }]
    })
  };

  /**
   * Méthode perméttant de supprimer un todo existant.
   * @param {number} index 
   */
  const removeTodo = (index) => {
    debugger;
    setTodoListState({
      todos: [...todoListState.todos].filter((todo, i) => i != index)
    })
  };

  /**
   * Méthode perméttant de gérer l'évènement onChange d'un input pour un todo donné.
   * @param {object} event 
   * @param {number} id 
   */
  const detailsChangedHandler = (event, id) => {
    debugger;
    let changedValueIndex = todoListState.todos.findIndex(x => x.id === id);
    if (changedValueIndex !== -1) {
      setTodoListState({
        todos: [...todoListState.todos.map((todo, index) => {
          if (index === changedValueIndex)
            todo.details = event.target.value;

          return todo;
        })]
      });
    }
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="text-center">
          {props.title || 'MB React'}
        </h1>
      </div>
      <div class="container-fluid">
        <div class="btn-group">
          <button className="btn btn-primary" onClick={reverseTodoListHandler}>Reverse Todo List</button>
          <button className="btn btn-success" onClick={addTodoHandler}>New Todo</button>
        </div>
        <hr></hr>
        <ul className="list-group">
          {
            todoListState.todos.map(
              (x, i) =>
                <li className="list-group-item" key={x.id}>
                  <Todo
                    id={x.id}
                    details={x.details}
                    todoIndex={i}
                    parentRemoveTodo={removeTodo}
                    parentDetailsChange={detailsChangedHandler}>
                  </Todo>
                </li>
            )
          }
        </ul>
      </div>
    </div>
  )

};

export default App;
