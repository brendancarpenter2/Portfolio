import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    position: relative;
    z-index: 1;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    &:before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%
            ), 
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    o-object-fit: cover;
    object-fit: cover;
    background: #e3e3e5;
`;  

export const HeroContent = styled.div`
    z-index: 3;
    margin-top:250px;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HeroH1 = styled.h1`
    color: #F8F8F8;
    font-size: 3.5rem;
    letter-spacing: 2px;
    text-align: left;

    @media screen and (max-width: 1100px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const HeroH1Color = styled.span`
    color: #091D22;
    font-size: 3.5rem;
    letter-spacing: 2px;
    text-align: left;

    @media screen and (max-width: 1100px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
