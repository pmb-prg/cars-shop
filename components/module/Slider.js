import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./Slider.module.scss";
//--------------imges------------------------
import bmw from "../../public/images/bmw.jpg"
import dodge from "../../public/images/dodge.jpg"
import mitsu from "../../public/images/Mitsubishi.png"
import nissan from "../../public/images/Nissan.png"
import toyota from "../../public/images/Toyota.png"


function Slider() {
  return (
    <div className={styles.container}>
        <Swiper
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper"
        >
            <SwiperSlide className={styles.slide}><img src="/images/bmw.jpg" /></SwiperSlide>
            <SwiperSlide className={styles.slide}><img src="/images/dodge.jpg" /></SwiperSlide>
            <SwiperSlide className={styles.slide}><img src="/images/Mitsubishi.png" /></SwiperSlide>
            <SwiperSlide className={styles.slide}><img src="/images/Nissan.png" /></SwiperSlide>
            <SwiperSlide className={styles.slide}><img src="/images/Toyota.png" /></SwiperSlide>

        </Swiper>
    </div>

  )
}

export default Slider