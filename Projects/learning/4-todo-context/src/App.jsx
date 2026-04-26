import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemsCont from "./components/ItemsCont";
import "./App.css";
import { useContext } from "react";
import { TodosContext, TodosProvider } from "./store/todo-store";

function App() {
  return (
    <TodosProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodosDisplay />
      </center>
    </TodosProvider>
  );
}

function TodosDisplay() {
  const { items } = useContext(TodosContext);

  return items.length > 0 ? (
    <ItemsCont />
  ) : (
    <div className="no-todo">
      <h1>No Task</h1>
    </div>
  );
}

export default App;
