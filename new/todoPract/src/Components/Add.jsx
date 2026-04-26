import { useState } from "react";

const Add = () => {
  const [input, setInput] = useState({ date: "", text: "" });
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  const getTodayDate = () => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().split("T")[0];
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const text = input.text.trim();
    if (!text) return;

    if (editId !== null) {
      const updatedItems = items.map((item) =>
        item.id === editId
          ? { ...item, text: input.text, date: input.date }
          : item,
      );

      setItems(updatedItems);
      setEditId(null);
      setInput({ date: "", text: "" });
      return;
    }

    const existingItem = items.find(
      (item) => item.text.toLowerCase() === input.text.toLowerCase(),
    );
    if (existingItem) {
      alert(`${input.text} already exists`);
      return;
    }

    const newItem = {
      id: Date.now(),
      text: input.text,
      date: input.date,
      isDone: false,
    };

    setItems((prev) => [...prev, newItem]);
    setInput({ date: "", text: "" });
  };

  const handleEdit = (id) => {
    const updatedItem = items.find((item) => item.id === id);
    if (!updatedItem) return;
    setInput({
      date: updatedItem.date,
      text: updatedItem.text,
    });
    setEditId(id);
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <form className="add form " onSubmit={handleAdd}>
      <div className="inp">
        <input
          type="date"
          min={getTodayDate()}
          value={input.date}
          onChange={(e) => setInput({ ...input, date: e.target.value })}
        />

        <input
          type="text"
          placeholder="add item"
          value={input.text}
          onChange={(e) => setInput({ ...input, text: e.target.value })}
        />

        <button type="submit">{editId ? "Update Item" : "Add Item"}</button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="list">
            <input
              type="checkbox"
              id={`todo-${item.id}`}
              checked={item.isDone}
              onChange={() => handleToggle(item.id)}
            />

            <label htmlFor={`todo-${item.id}`}>
              <span className={item.isDone ? "done" : ""} id={"date"}>
                {item.date && item.date.slice(0, 10)}
              </span>
              <span className={item.isDone ? "done" : ""}>{item.text}</span>
            </label>
            <button
              type="button"
              onClick={() =>
                confirm("Are you sure you want to delete this item?")
                  ? handleDelete(item.id)
                  : null
              }
            >
              Delete
            </button>
            <button type="button" onClick={() => handleEdit(item.id)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Add;
