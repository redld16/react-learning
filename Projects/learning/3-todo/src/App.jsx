import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemsCont from "./components/ItemsCont";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleInput = (todoDate, todoName) => {
    if (!todoDate || !todoName) return alert("Please enter task name and date");
    if (todos.some((todo) => todo.todoName === todoName))
      return alert("Task already exists");
    setTodos((prevTodos) => [
      ...prevTodos,
      { todoName, todoDate, id: crypto.randomUUID() },
    ]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo handleInput={handleInput} />

        {todos.length > 0 ? (
          <ItemsCont todos={todos} handleDelete={handleDelete} />
        ) : (
          <div className="no-todo">
            <h1>No Task</h1>
          </div>
        )}
      </center>
    </>
  );
}

export default App;
