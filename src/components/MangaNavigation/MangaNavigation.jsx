import styles from "./MangaNavigation.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import PropTypes from 'prop-types';

const MangaNavigation = (counterPage) => {
  const nextPage = counterPage.counterPage + 1;
  const prevPage = counterPage.counterPage - 1;

  const [slidein, setSlidein] = useState(0);
  const [categories, setCategory] = useState(counterPage.category);
  // const handleClickNext
  return (
    <div className={styles.wrapper}>
      <Link to={"/manga/?page=" + prevPage + categories}>
        <button
          className={(styles.effect04, styles.btn)}
          disabled={prevPage < 0}
        >
          prev
        </button>
      </Link>
      <Link to={"/manga/?page=" + nextPage + categories}>
        <button className={(styles.effect04, styles.btn)} 
        onClick={() => setSlidein(1)}
        onAnimationEnd={() => setSlidein(0)}
        slidein={slidein}
        >next</button>
      </Link>
    </div>
  );
};

// MangaNavigation.propTypes = {
// counterPage: PropTypes.number,
// }

export default MangaNavigation;
