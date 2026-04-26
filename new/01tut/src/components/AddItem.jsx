import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import styles from '../styles/AddItemStyles.module.css';

const AddItem = ({ setItems, items }) => {
  const [input, setInput] = useState('');

  const handleInput = (e) => setInput(e.target.value);

  const handleAddItem = (e) => {
    e.preventDefault();

    const normalizedInput = input.trim().toLowerCase();

    if (!normalizedInput) return;

    if (items.find((item) => item.name === normalizedInput)) return;

    const newItem = {
      id: Date.now(),
      checked: false,
      name: normalizedInput, // ✅ store lowercase
    };

    setItems((prev) => {
      const updated = [...prev, newItem];
      localStorage.setItem('items', JSON.stringify(updated));
      return updated;
    });

    setInput('');
  };

  return (
    <form onSubmit={handleAddItem} className={styles.form}>
      <label htmlFor="addItem" className={styles.label}>
        Add Item
      </label>

      <div className={styles.inputGroup}>
        <input
          autoFocus
          type="text"
          placeholder="Add Item..."
          id="addItem"
          onChange={handleInput}
          value={input}
          className={styles.input}
          required
        />

        <button type="submit" aria-label="Add Item" className={styles.button}>
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default AddItem;
