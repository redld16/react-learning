import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemsCont from "./components/ItemsCont";
import "./App.css";

function App() {
  let todos = [
    {
      todoName: "Task1",
      todoDate: "2023-01-01",
    },
    {
      todoName: "Task2",
      todoDate: "2023-01-02",
    },
    {
      todoName: "Task3",
      todoDate: "2023-01-03",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <ItemsCont todos={todos} />
      </center>
    </>
  );
}

export default App;
