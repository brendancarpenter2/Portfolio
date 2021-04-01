import React from 'react'
import { LogoBarContainer, LogoBarRow, LogoBarItem, LogoImage } from './LogoBarElements'

import { logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix, logoSeven, logoEight, logoNine, logoTen, logoEleven, logoTwelve, logoThirteen, logoFourteen } from './Data'

const LogoBar = () => {
    return (
        <>
            <LogoBarContainer>
                <LogoBarRow>
                    <LogoBarItem>
                        <LogoImage {...logoOne}></LogoImage>
                        <LogoImage {...logoTwo}></LogoImage>
                        <LogoImage {...logoThree}></LogoImage>
                        <LogoImage {...logoFour}></LogoImage>
                        <LogoImage {...logoFive}></LogoImage>
                        <LogoImage {...logoSix}></LogoImage>
                        <LogoImage {...logoSeven}></LogoImage>
                        <LogoImage {...logoEight}></LogoImage>
                        <LogoImage {...logoNine}></LogoImage>
                        <LogoImage {...logoTen}></LogoImage>
                        <LogoImage {...logoEleven}></LogoImage>
                        <LogoImage {...logoTwelve}></LogoImage>
                        <LogoImage {...logoThirteen}></LogoImage>
                        <LogoImage {...logoFourteen}></LogoImage>
                        <LogoImage {...logoOne}></LogoImage>
                        <LogoImage {...logoTwo}></LogoImage>
                        <LogoImage {...logoThree}></LogoImage>
                        <LogoImage {...logoFour}></LogoImage>
                        <LogoImage {...logoFive}></LogoImage>
                        <LogoImage {...logoSix}></LogoImage>
                        <LogoImage {...logoSeven}></LogoImage>
                        <LogoImage {...logoEight}></LogoImage>
                        <LogoImage {...logoNine}></LogoImage>
                        <LogoImage {...logoTen}></LogoImage>
                        <LogoImage {...logoEleven}></LogoImage>
                        <LogoImage {...logoTwelve}></LogoImage>
                        <LogoImage {...logoThirteen}></LogoImage>
                        <LogoImage {...logoFourteen}></LogoImage>
                    </LogoBarItem>
                </LogoBarRow>
            </LogoBarContainer>
        </>
    )
}

export default LogoBar
