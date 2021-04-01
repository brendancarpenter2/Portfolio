import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import { aboutOne } from '../components/About/Data'
import Modal from '../components/Modal'
import Portfolio from '../components/Portfolio'
import Sidebar from '../components/Sidebar'
import LogoBar from '../components/LogoBar'
import Footer from '../components/Footer'

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ currentItem, setCurrentItem ] = useState({})

    const toggleModal = (e) => {
        setIsModalOpen(!isModalOpen)
    }

    const toggleItem = (e, item) => {
        setIsModalOpen(!isModalOpen)
        setCurrentItem(item)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <Hero></Hero>
            <About {...aboutOne}></About>
            <LogoBar></LogoBar>
            <Modal isModalOpen={isModalOpen} toggle={toggleModal} item={currentItem}></Modal>
            <Portfolio toggle={toggleItem}></Portfolio>
            <Footer></Footer>
        </>
    )
}

export default Home
