import React from 'react'
import { slideOne, slideTwo, slideThree, slideFour } from './Data'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import '../../styles/gallery.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Gallery = () => {
    return (
        <>
            <Swiper id="aboutMe"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              loop={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide><img {...slideOne} alt={slideOne.alt}/></SwiperSlide>
              <SwiperSlide><img {...slideTwo} alt={slideTwo.alt} /></SwiperSlide>
              <SwiperSlide><img {...slideThree} alt={slideThree.alt} /></SwiperSlide>
              <SwiperSlide><img {...slideFour} alt={slideFour.alt} /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Gallery