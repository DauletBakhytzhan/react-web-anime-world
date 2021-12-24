import styles from "./ErrorPage.module.css";
import gif from "../../static/anime_404.gif";
const ErrorPage = () => {
  return (
    <>
      <h1>this is Error page</h1>
      <div className={styles.img}>
        <img src={gif} alt="loading..."  />
      </div>
    </>
  );
};

export default ErrorPage;
