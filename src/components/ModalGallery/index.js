import React, {useState, useEffect} from 'react'

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


export const ModalGallery = ({item}) => {
    const [modalItem, setModalItem] = useState([])
    const [modalItemAlt, setModalItemAlt] = useState([])
    const [modalItemKey, setModalItemKey] = useState([])

    useEffect(() => {
        setModalItem(item.src)
    }, [item.src])

    useEffect(() => {
        setModalItemAlt(item.alt)
    }, [item.alt])

    useEffect(() => {
        setModalItemKey(item.key)
    }, [item.key])

  return (
    <>
      <Swiper id="modalGallery"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          key={modalItemKey}
        >
        {modalItem ? (
            modalItem.map(modalItemSource => {
                console.log(modalItemSource);
                console.log(modalItemAlt);
                return <SwiperSlide key={modalItemSource}><img width="100%" height="100%" src={modalItemSource} alt={modalItemAlt} style={{display: 'block'}} /></SwiperSlide>
            })
        ) : []}
        </Swiper>
    </>
  )
}

export default ModalGallery