import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';
const Sidebar = () => {
  return (
      <nav className={styles.sidebar}>
        <Link to="/" title="Home">
          Home
        </Link>
        <Link to="/add" title="Add">
          Add
        </Link>
      </nav>
  );
};

export default Sidebar;
