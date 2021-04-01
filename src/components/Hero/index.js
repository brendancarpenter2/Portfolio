import React, {useState} from 'react'
import HeroImage from '../../images/hero.png'
import { Button } from '../Button'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroH1Color, HeroBtnWrapper, HeroInnerContainer } from './HeroElements'


const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={HeroImage}></ImageBg>
            </HeroBg>
            <HeroInnerContainer>
                <HeroContent>
                    <HeroH1>
                        Hi there! <br></br>
                        I’m <HeroH1Color>Brendan Carpenter.</HeroH1Color><br></br>
                        I’m a Full Stack Developer.
                    </HeroH1>
                    <HeroBtnWrapper>
                        <Button to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} transparent="true" primary="true" dark="true">
                            Learn More
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroInnerContainer>
        </HeroContainer>
    )
}

export default Hero
