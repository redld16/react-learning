import { AiFillDelete } from "react-icons/ai";

function Item({ todoName, todoDate, handleDelete, id }) {
  const formatDate = () => {
    const date = new Date(todoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{formatDate()}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(id)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
