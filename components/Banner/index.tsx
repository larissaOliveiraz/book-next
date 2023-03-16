import bookBgImg1 from "../../assets/books-bg.jpg";
import bookBgImg2 from "../../assets/books-bg2.jpg";
import bookBgImg3 from "../../assets/books-bg3.jpg";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Banner = () => {
   return (
      <div className={styles.container}>
         <div className={styles.swiper} id="bgC">
            <div className={styles.swiperSlide}>
               <Image src={bookBgImg1} alt="" />
            </div>
            <div className={styles.swiperSlide}>
               <Image src={bookBgImg2} alt="" />
            </div>
            <div className={styles.swiperSlide}>
               <Image src={bookBgImg3} alt="" />
            </div>
         </div>
      </div>
   );
};
