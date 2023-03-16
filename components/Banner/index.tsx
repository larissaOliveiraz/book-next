import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import bookBgImg1 from "../../assets/books-bg.jpg";
import bookBgImg2 from "../../assets/books-bg2.jpg";
import bookBgImg3 from "../../assets/books-bg3.jpg";
import "swiper/css";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Banner = () => {
   return (
      <div className={styles.container}>
         <Swiper
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className={styles.swipper}
         >
            <SwiperSlide className={styles.swiperSlide}>
               <Image src={bookBgImg1} alt="" priority />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
               <Image src={bookBgImg2} alt="" priority />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
               <Image src={bookBgImg3} alt="" priority />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};
