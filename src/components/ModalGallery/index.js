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
    const [modalItemType, setModalItemType] = useState()
    const [modalItemTitle, setModalItemTitle] = useState()
    const [modalItemBanner, setModalItemBanner] = useState()

    useEffect(() => {
        setModalItem(item.src)
    }, [item.src])

    useEffect(() => {
        setModalItemAlt(item.alt)
    }, [item.alt])

    useEffect(() => {
        setModalItemKey(item.key)
    }, [item.key])

    useEffect(() => {
        setModalItemType(item.type)
    }, [item.type])

    useEffect(() => {
        setModalItemTitle(item.title)
    }, [item.title])

    useEffect(() => {
        setModalItemBanner(item.banner)
    }, [item.banner])

    if (modalItemType !== undefined) {
        //if email, display Swiper Gallery
        if (modalItemType === "email") {
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
                            return (
                                <SwiperSlide key={modalItemKey + modalItemSource}><img width="100%" height="100%" src={modalItemSource} alt={modalItemAlt} style={{display: 'block'}} /></SwiperSlide>
                            )
                        })
                    ) : []}
                    </Swiper>
                </>
            )
        }
        //if banner, display iframe Gallery
        //add filter:drop-shadow(0 0 10px rgba(0,0,0,0.4)) and margin: 20px on desktop view
        if (modalItemType === "banner") {
            return (
                <>
                    {modalItem ? (
                        modalItem.map(modalItemSource => {
                            return (
                                <iframe width="300" height="250" key={modalItemKey + modalItemBanner} src={modalItemBanner} alt={modalItemAlt} title={modalItemTitle} style={{border: 'none', display: 'block'}}></iframe>
                            )
                        })
                    ) : []}
                </>
            )
        }
        return (null)
    }
    return (null)
}

export default ModalGallery