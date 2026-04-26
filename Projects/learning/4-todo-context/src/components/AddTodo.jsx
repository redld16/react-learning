import { useRef } from "react";
import style from "./AddTodo.module.css";
import { BiMessageSquareAdd } from "react-icons/bi";
import { TodosContext } from "../store/todo-store";
import { useContext } from "react";

function AddTodo() {
  const todoNameRef = useRef(null);
  const todoDateRef = useRef(null);

  const { addItem } = useContext(TodosContext);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoName = todoNameRef.current.value;
    const todoDate = todoDateRef.current.value;
    if (!todoDate || !todoName) {
      return alert("Please enter task name and date");
    }
    addItem(todoDate, todoName);

    todoNameRef.current.value = "";
    todoDateRef.current.value = "";
  };
  return (
    <div className="container text-center">
      <form action="" className={style["row"]} onSubmit={handleSubmit}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            name="todoName"
            ref={todoNameRef}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            name="todoDate"
            min={today}
            ref={todoDateRef}
          />
        </div>
        <div className="col-1">
          <button className="btn btn-primary ">
            <BiMessageSquareAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
