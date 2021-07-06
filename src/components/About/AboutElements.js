import styled from 'styled-components'
import '../../styles/_variables.scss'

export const AboutContainer = styled.div`
    color: var(--dark);
    background: ${({darkSection}) => (darkSection ? 'var(--dark)' : 'var(--light)')};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    @media screen and (max-width: 900px) {
        padding: 100px 0;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 900px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    width:100%;
    padding: 0 50px;
    grid-area: col1;

    @media screen and (max-width: 460px) {
        padding: 0 25px;
    }
`;

export const Column2 = styled.div`
    width: 100%;
    padding: 0 50px;
    grid-area: col2;

    @media screen and (max-width: 460px) {
        padding: 0 25px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    /* padding-bottom: 60px; */

    @media screen and (max-width: 900px) {
        max-width: 400px;
    }
`;

export const TopLine = styled.p`
    color: var(--primary);
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
`;

export const Heading = styled.h1`
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({darkSection}) => (darkSection ? 'var(--light)' : 'var(--dark)')};

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 32px;
    color: ${({darkSection}) => (darkSection ? 'var(--light)' : 'var(--dark)')};

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const ImgWrap = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100%;

    @media screen and (max-width: 900px) {
        max-width: 400px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;
