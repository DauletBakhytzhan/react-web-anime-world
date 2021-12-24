import { useState, useEffect } from "react";
import { getApiResource } from "../../utils/network";
import {
  ApiManga,
  FILTER_MANGA_CATEGORIES,
  FILTER_MANGA,
} from "../../constants/api";
// import { getMangaId } from '../../services/getMangaData';
import MangaList from "../../components/MangaPage/MangaList";
import {
  useQueryParams,
  useQueryParamsFilter,
} from "../../hooks/useQueryParams";
import MangaNavigation from "../../components/MangaNavigation/MangaNavigation";
import styles from "./MangaPage.module.css";
import { Link, NavLink } from "react-router-dom";

const MangaPage = () => {
  const [manga, setManga] = useState(null);
  const [api, setApi] = useState("");
  const [category, setCategories] = useState(null);

  // const [prevMangaPage, setPrevMangaPage] = useState(null);
  // const [nextMangaPage, setNextMangaPage] = useState(null);

  const query = useQueryParams();
  const queryFilter = useQueryParamsFilter();

  const queryPage = query.get("page") * 10;
  const queryPage2 = queryFilter.get("filter[categories]");
  //  setApi();

  const getResource = async (url) => {
    const res = await getApiResource(url);
    const mangaList = res.data.map((element) => {
      // const mangaId = getMangaId(element.links.self);
      return {
        id: element.id,
        name: element.attributes.canonicalTitle,
        description: element.attributes.description,
        popularityRank: element.attributes.popularityRank,
        url: element.links.self,
        image: element.attributes.posterImage.small,
        rating: element.attributes.averageRating,
      };
    });

    setManga(mangaList);
    console.log(mangaList);
  };

  useEffect(() => {
    getResource(ApiManga + queryPage + api);
    // console.log(ApiManga + queryPage + api);
  }, [queryPage, queryPage2]);

  async function filterHandle() {
    await getResource(FILTER_MANGA_CATEGORIES + queryPage2);
    setApi(FILTER_MANGA + queryPage2);
    // console.log(api);
    console.log(queryPage2);
  }

  return (
    <div classNames={styles.wrapper__filter}>
      <MangaNavigation counterPage={queryPage / 10} category={api} />
      <div className={styles.wrapper__filter}>
        <Link to={"/manga?filter[categories]=adventure"}>
          <button
            className={(styles.effect04, styles.btn)}
            onClick={filterHandle}
          >
            adventure
          </button>
        </Link>
        <Link to={"/manga?filter[categories]=elementary-school"}>
          <button
            className={(styles.effect04, styles.btn)}
            onClick={filterHandle}
          >
            elementary-school
          </button>
        </Link>
        <Link to={"/manga?filter[categories]=Mermaid"}>
          <button
            className={(styles.effect04, styles.btn)}
            onClick={filterHandle}
          >
            Mermaid
          </button>
        </Link>
        <Link to={"/manga?filter[categories]=Android"}>
          <button
            className={(styles.effect04, styles.btn)}
            onClick={filterHandle}
          >
            Android
          </button>
        </Link>
        <Link to={"/manga?filter[categories]=Vampire"}>
          <button
            className={(styles.effect04, styles.btn)}
            onClick={filterHandle}
          >
            Vampire
          </button>
        </Link>
        <Link to={"/manga/?page=0"}>
          <button
            className={(styles.effect04, styles.btn)}
            onClick={filterHandle}
          >
            ALl
          </button>
        </Link>

        <NavLink to="/manga/?page=0" exact className={styles.navbar__item}>
        <div className={styles.navbar__text}>Manga</div>
      </NavLink>
      </div>
      {manga && <MangaList manga={manga} />}
    </div>
  );
};

export default MangaPage;
