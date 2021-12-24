import styles from "./MangaListTrend.module.css";
import { CSSTransition } from "react-transition-group";
const MangaListTrend = ({ manga, manga2 }) => {
  function ratingTemp(rating) {
    if (rating == null) {
      return "0.00";
    } else {
      return rating;
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.manga_list}>
        <ul className={styles.list__container}>
          {manga.map(({ id, name, url, image, rating }) => (
            <li key={id}>
              {" "}
              <br />
              <div className={styles.list__item__rating}>
                {ratingTemp(rating)}
              </div>
              <div className={styles.list__item}>
                <img className={styles.manga__photo} src={image} alt=""></img>

                <p className={styles.list__item__text}>{name}</p>
              </div>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default MangaListTrend;
