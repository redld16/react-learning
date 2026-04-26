import { FaSearch } from 'react-icons/fa';
import styles from '../styles/SearchItem.module.css';
const SearchItem = ({ handleSearch, search }) => {
  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchInp" className={styles.searchLabel}>
        searchInp
      </label>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
        onChange={handleSearch}
        id="searchInp"
        role="searchbox"
        aria-label="Search"
        value={search}
      />

      <button type="submit" className={styles.searchIcon}>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchItem;
