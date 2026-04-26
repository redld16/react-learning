import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const getCurrentDateTime = (selectedDate) => {
    if (!selectedDate) return "";

    const selectedDateObj = new Date(selectedDate);
    const now = new Date();

    selectedDateObj.setHours(now.getHours(), now.getMinutes(), 0, 0);

    return selectedDateObj
      .toLocaleString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(",", "");
  };

  const isPastDate = (dateStr) => {
    if (!dateStr) return false;
    const selected = new Date(dateStr);
    const todayDate = new Date();
    selected.setHours(0, 0, 0, 0);
    todayDate.setHours(0, 0, 0, 0);
    return selected < todayDate;
  };

  const resetForm = () => {
    setTaskInput("");
    setTimeInput("");
    setEditingId(null);
  };

  const handleAddOrUpdate = () => {
    if (!taskInput.trim() || !timeInput) {
      alert("Please enter task and time");
      return;
    }

    if (isPastDate(timeInput)) {
      alert("You cannot select a past date");
      return;
    }

    const formattedTime = getCurrentDateTime(timeInput);

    if (editingId) {
      // UPDATE existing task
      setTasks((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, task: taskInput.trim(), time: formattedTime }
            : item
        )
      );
    } else {
      // ADD new task
      const newTask = {
        id: uuidv4(),
        task: taskInput.trim(),
        time: formattedTime,
        done: false,
      };
      setTasks((prev) => [...prev, newTask]);
    }

    resetForm();
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((item) => item.id === id);
    if (!taskToEdit) return;

    setTaskInput(taskToEdit.task);


    setTimeInput("");
    setEditingId(id);
  };

  const handleDone = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const handleCancelEdit = () => {
    resetForm();
  };

  return (
    <div className="container text-center">
      <h1>Todo App</h1>

      <div className="containerDiv">
        <input
          className="task"
          type="text"
          placeholder={editingId ? "Edit task" : "Enter task"}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <input
          className="time"
          type="date"
          value={timeInput}
          min={today}
          onChange={(e) => setTimeInput(e.target.value)}
        />

        {editingId ? (
          <>
            <button className="btn btn-primary" onClick={handleAddOrUpdate}>
              Update
            </button>
            <button
              className="btn btn-secondary ms-1"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="btn btn-outline-primary"
            onClick={handleAddOrUpdate}
          >
            Add
          </button>
        )}
      </div>

      <table className="table table-striped mt-4">
        <thead>
          <tr className="table-primary">
            <th scope="col">Task</th>
            <th scope="col">Time</th>
            <th scope="col col-2">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {!tasks.length ? (
            <tr>
              <td colSpan={3}>No data found</td>
            </tr>
          ) : (
            tasks.map((item) => (
              <tr key={item.id}>
                <td
                  className={
                    item.done ? "text-decoration-line-through text-muted" : ""
                  }
                >
                  {item.task}
                </td>
                <td>{item.time}</td>
                <td className="d-flex gap-1 justify-content-center">
                  <button
                    type="button"
                    className={`btn btn-outline-success btn-sm ${
                      item.done ? "btn-outline-secondary" : ""
                    }`}
                    onClick={() => handleDone(item.id)}
                    title={item.done ? "Mark as pending" : "Mark as done"}
                  >
                    {item.done ? "Pending" : "Done"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
