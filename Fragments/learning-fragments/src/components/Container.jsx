import styles from "./Container.module.css";
function Container({ children }) {
  return (
    <div className={styles.container}>
      <div className="row">{children}</div>
    </div>
  );
}

export default Container;
