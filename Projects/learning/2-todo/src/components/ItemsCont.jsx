import Item from "./Item";
const ItemsCont = ({ todos }) => {
  return todos.map((todo, index) => (
    <Item key={index} todoName={todo.todoName} todoDate={todo.todoDate} />
  ));
};

export default ItemsCont;
