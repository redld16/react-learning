import { Link } from 'react-router-dom';
import styles from '../styles/ItemsList.module.css';
import LineItem from './LineItem';

const ItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      <ul className={styles.listContainer}>
        {items.length ? (
          items.map(({ id, checked, name }) => (
            <LineItem
              key={id}
              id={id}
              checked={checked}
              name={name}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <li>
            <Link to="/add" title="Add" className={` ${styles.noItem}`}>
              No items Found
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default ItemsList;
