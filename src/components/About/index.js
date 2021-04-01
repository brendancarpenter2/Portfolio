import React from 'react'
import { AboutButton } from '../Button'
import { Gallery } from '../Gallery/index'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, BtnWrap } from './AboutElements'

const index = ( {id, imgStart, topLine, headline, subtext, buttonLabel } ) => {
    return (
        <>
            <AboutContainer id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading >{headline}</Heading>
                                <Subtitle >{subtext}</Subtitle>
                                <BtnWrap >
                                    <AboutButton to='portfolio' smooth={true} duration={500} spy={true} exact='true' offset={-80} >{buttonLabel}</AboutButton>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Gallery></Gallery>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default index
