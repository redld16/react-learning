import { createContext, useReducer } from "react";

const TodosContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
});

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addItem = (todoDate, todoName) => {
    if (!todoDate || !todoName) return alert("Please enter task name and date");
    if (todos.some((todo) => todo.todoName === todoName))
      return alert("Task already exists");

    dispatch({
      type: "ADD",
      payload: { todoName, todoDate, id: crypto.randomUUID() },
    });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <TodosContext.Provider value={{ items: todos, addItem, deleteItem }}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
