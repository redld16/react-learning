import { TodosContext } from "../store/todo-store";
import Item from "./Item";
import { useContext } from "react";

const ItemsCont = () => {
  const { items } = useContext(TodosContext);

  return items.map((todo) => (
    <Item
      key={todo.id}
      todoName={todo.todoName}
      todoDate={todo.todoDate}
      id={todo.id}
    />
  ));
};

export default ItemsCont;
