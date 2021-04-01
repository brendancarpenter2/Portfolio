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

    const toggleModal = (e, item) => {
        setIsModalOpen(!isModalOpen)
        const modalHeadline = item.headline;
        console.log(modalHeadline)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <Hero></Hero>
            <About {...aboutOne}></About>
            <LogoBar></LogoBar>
            <Modal isModalOpen={isModalOpen} toggle={toggleModal}></Modal>
            <Portfolio toggle={toggleModal}></Portfolio>
            <Footer></Footer>
        </>
    )
}

export default Home
