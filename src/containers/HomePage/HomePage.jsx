import styles from "./HomePage.module.css";
import logo from "../../static/pngegg.png";
import ScrollAnimation from "react-animate-on-scroll"
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const HomePage = () => {
  useEffect(()=>{
    Aos.init({
      duration: 2000
    })
  },[]);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.home__title}>ZETSU MANGA</div>
        </div>

        <div className={styles.content}>
          <div className={styles.content__text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
      <div className={styles.wrapper__content}>
        <div className={styles.content__text2}>
          <div className={styles.content__text__title}>About us</div>Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
        <div className={styles.content__img1}>
          <img src={logo} height="100%" width="100%" />
        </div>

        <div data-aos="fade-right"  data-aos-once='true' className={styles.content__text3}>
          <div className={styles.content__text__title2}>About us</div>Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
        
        <div data-aos="fade-right"  data-aos-once='true' className={styles.content__text3}>
          <div className={styles.content__text__title2}>About us</div>Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div> <div data-aos="fade-right"  data-aos-once='true' className={styles.content__text3}>
          <div className={styles.content__text__title2}>About us</div>Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div> <div data-aos="fade-right"  data-aos-once='true' className={styles.content__text3}>
          <div className={styles.content__text__title2}>About us</div>Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div> <div data-aos="fade-right"  data-aos-once='true' className={styles.content__text3}>
          <div className={styles.content__text__title2}>About us</div>Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
      </div>
    </>
  );
};

export default HomePage;
