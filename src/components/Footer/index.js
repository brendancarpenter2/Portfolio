import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterRow, SocialMedia, SocialMediaContainer, SocialLogo, WebRights } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <>
            <FooterContainer>
                <FooterRow>
                    <SocialMedia>
                        <SocialMediaContainer>
                            <SocialLogo to="/" onClick={toggleHome}>
                                Logo
                            </SocialLogo>
                            <WebRights>
                                Brendan Carpenter &copy; {new Date().getFullYear()} All Rights Reserved.
                            </WebRights>
                        </SocialMediaContainer>
                    </SocialMedia>
                </FooterRow>
            </FooterContainer>
        </>
    )
}

export default Footer
