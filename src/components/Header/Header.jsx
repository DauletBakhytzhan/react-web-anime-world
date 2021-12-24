import styles from "./Header.module.css";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img className={styles.header__logo} src="/images/logo.png" alt="" />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
