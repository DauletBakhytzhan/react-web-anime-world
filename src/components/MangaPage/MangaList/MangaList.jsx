import styles from "./MangaList.module.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
const MangaList = ({ manga, manga2 }) => {
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
          {manga.map(
            ({ id, name, url, image, rating, popularityRank, description }) => (
              <li key={id}>
                {" "}
                <br />
                <Link to={"one/${id}"} className={styles.link__item}>
                  <div className={styles.list__item}>
                    <img className={styles.manga__photo} src={image} alt="" />
                    <div className={styles.list__item__popularityRank}>
                      {ratingTemp(popularityRank)}
                    </div>
                    <div className={styles.list__item__rating}>
                      {ratingTemp(rating)}
                    </div>
                    
                    <div className={styles.middle}>
                      <h3>{name}</h3>
                      {description}
                    </div>

                    {/* <p className={styles.list__item__text}>{name}</p> */}
                  </div>
                  {/* <div className={styles.tooltip}>Hover over me</div> */}
                </Link>
                <br />
                <br />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MangaList;
