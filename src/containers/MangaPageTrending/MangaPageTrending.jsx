import { useState, useEffect } from "react";
import { getApiResource } from "../../utils/network";
import { ApiMangaTrending, FILTER_MANGA } from "../../constants/api";
// import { getMangaId } from '../../services/getMangaData';
import MangaListTrend from "../../components/MangaPageTrend/MangaListTrend";
import Filter from "../../components/Filter"
import styles from './MangaPage.module.css';
import { useQueryParamsFilter } from "../../hooks/useQueryParams";

const MangaPage = () => {
  const [manga, setManga] = useState(null);


  const queryPage = "";
  const getResource = async (url) => {
    const res = await getApiResource(url);
    console.log(res);
    const mangaList = res.data.map((element) => {
      // const mangaId = getMangaId(element.links.self);
      return {
        id: element.id,
        name: element.attributes.canonicalTitle,
        url: element.links.self,
        image: element.attributes.posterImage.small,
        rating: element.attributes.averageRating,
      };
    });

    setManga(mangaList);

    // console.log(mangaList);
  };

  useEffect(() => {
    getResource(ApiMangaTrending+ "?filter[categories]=Cycling");
    console.log(ApiMangaTrending+ "?filter[categories]=Cycling");
  }, []);

  return <>
  
 <Filter className={styles.filter}/>


  {manga && <MangaListTrend manga={manga} />}
  
  
  </>;
};

export default MangaPage;
