import styles from './Filter.module.css';
import { Link } from "react-router-dom";

const Filter = () => {
  return(
    <div className={styles.wrapper__filter}>
      <Link to={"/manga?filter[categories]=adventure"}>
        <button className={(styles.effect04, styles.btn)} 
        >adventure</button>
      </Link>
    </div>
  )
}

export default Filter;