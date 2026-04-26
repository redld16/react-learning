import Item from "./Item";
const ItemsCont = ({ todos, handleDelete }) => {
  return todos.map((todo) => (
    <Item
      key={todo.id}
      todoName={todo.todoName}
      todoDate={todo.todoDate}
      handleDelete={handleDelete}
      id={todo.id}
    />
  ));
};

export default ItemsCont;
