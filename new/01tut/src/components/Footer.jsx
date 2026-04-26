import styles from '../styles/HeaderAndFooter.module.css';

const Footer = ({ footer }) => {
  return <footer className={styles.footer}>{footer}</footer>;
};

export default Footer;
