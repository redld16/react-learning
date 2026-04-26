import { FaTrashAlt } from 'react-icons/fa';
import styles from '../styles/LineItem.module.css';

const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const LineItem = ({ id, checked, name, handleCheck, handleDelete }) => {
  return (
    <li className={styles.list}>
      <div className={styles.left}>
        <input
          type="checkbox"
          id={`check-${id}`}
          className={styles.check}
          onChange={() => handleCheck(id)}
          checked={checked}
        />

        <label
          htmlFor={`check-${id}`}
          className={`${checked ? styles.done : ''}`}
        >
          {/* ✅ Capitalized display */}
          {capitalize(name)}
        </label>
      </div>

      <i className={styles.delete} onClick={() => handleDelete(id)}>
        <FaTrashAlt role="button" tabIndex="0" aria-label={`Delete ${name}`} />
      </i>
    </li>
  );
};

export default LineItem;
