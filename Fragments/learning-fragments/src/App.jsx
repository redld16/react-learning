import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import "./App.css";

function App() {
  const [foodItems, setFoodItems] = useState([
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
  ]);
  const [inputValue, setInputValue] = useState("");

  //update and delete items
  const handleEdit = (index, newValue) => {
    console.log(index, newValue);
    //console(0 'apple');
    // now update the item via index and input value to setInput so i can edit the item and then remove the old item
  };

  const handleDelete = (index) => {
    const updatedItems = [...foodItems];
    updatedItems.splice(index, 1);
    setFoodItems(updatedItems);
  };

  const handleAddItem = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      alert("Please enter a food item");
      return;
    }

    if (
      foodItems.some(
        (item) => item.toLowerCase() === trimmedValue.toLowerCase()
      )
    ) {
      alert("This item already exists");
      return;
    }

    setFoodItems((prevItems) => [...prevItems, trimmedValue]);

    setInputValue("");

    console.log("Item added:", trimmedValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddItem();
    }
  };

  return (
    <Container>
      <div className="App container">
        <h1>Healthy Foods</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter food item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Food item input"
          />
          <button
            className="btn btn-primary"
            onClick={handleAddItem}
            type="button"
          >
            Add
          </button>
        </div>

        <FoodItems
          foodItems={foodItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          bought={true}
        />
      </div>
    </Container>
  );
}

export default App;
