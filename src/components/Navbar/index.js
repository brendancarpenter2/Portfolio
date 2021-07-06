import React, {useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavMenuContainer, NavSocialContainer, NavMenu, NavItem, NavLogo, NavLogoImage, NavSocial, NavSocialItem, NavLinks, NavSocialLinks, MobileIcon } from './NavbarElements'
import { FaBars, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../../images/logo.svg'

const Navbar = ( {toggle} ) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80 ) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavMenuContainer>
                        <MobileIcon scrollNav={scrollNav} onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} scrollNav={scrollNav}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-80} scrollNav={scrollNav}>Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80} scrollNav={scrollNav}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavMenuContainer>
                    <NavLogo>
                        <NavLogoImage to="/" src={logo} fill="black" onClick={toggleHome} scrollNav={scrollNav}></NavLogoImage>
                    </NavLogo>
                    <NavSocialContainer>
                        <NavSocial scrollNav={scrollNav}>
                            <NavSocialItem>
                                <NavSocialLinks scrollNav={scrollNav}>
                                    <FaInstagram></FaInstagram>
                                </NavSocialLinks>
                            </NavSocialItem>
                            <NavSocialItem>
                                <NavSocialLinks scrollNav={scrollNav}>
                                    <FaFacebook></FaFacebook>
                                </NavSocialLinks>
                            </NavSocialItem>
                            <NavSocialItem>
                                <NavSocialLinks scrollNav={scrollNav}>
                                    <FaLinkedin></FaLinkedin>
                                </NavSocialLinks>
                            </NavSocialItem>
                        </NavSocial>
                    </NavSocialContainer>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
