import { Link } from 'react-router-dom';
import styles from '../styles/HeaderAndFooter.module.css';
import SearchItem from './SearchItem';
const Header = ({ title, handleSearch, search }) => {
  return (
    <nav className={styles.nav}>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          <h1>{title}</h1>
        </Link>
      </header>
      <SearchItem handleSearch={handleSearch} search={search} />
    </nav>
  );
};

Header.defaultProps = {
  title: 'Default Title',
};

export default Header;
