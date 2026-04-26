import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Item1 />
        <Item2 />
      </center>
    </>
  );
}

export default App;
