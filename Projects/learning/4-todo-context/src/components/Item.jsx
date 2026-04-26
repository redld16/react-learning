import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodosContext } from "../store/todo-store";

function Item({ todoName, todoDate, id }) {
  const formatDate = () => {
    const date = new Date(todoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const { deleteItem } = useContext(TodosContext);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{formatDate()}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(id)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
