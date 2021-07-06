import styled from 'styled-components'
import '../../styles/_variables.scss'

export const PortfolioContainer = styled.div`
    color: var(--dark);
    background: ${({darkSection}) => (darkSection ? 'var(--dark)' : 'var(--light)')};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export const PortfolioWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 100px 0;
    max-width: 1250px;
    margin: auto;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        height: 100%;
        padding: 100px 0;
    }
`;

export const PortfolioRow = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const PortfolioFilterRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0 50px;

    @media screen and (max-width: 450px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PortfolioFilterItem = styled.div`
    height: 40px;
`;

export const PortfolioFilter = styled.a`
    color: var(--dark);
    font-size: 1rem;
    margin: 0 25px;
    padding: 0 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: 0.4s all ease;

    &:hover {
        color: var(--primary);
        border-color: var(--primary);
    }

    @media screen and (max-width: 900px) {
        font-size: .9rem;
        margin: 0 15px;
        padding: 0 20px;
    }

    @media screen and (max-width: 750px) {
        font-size: .75rem;
        margin: 0 5px;
        padding: 0 10px;
    }
`;

export const PortfolioGalleryContainer = styled.div`
    display: flex;
`;

export const PortfolioGallery = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, 300px);
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 8px;
    justify-content: center;
    max-width: 1250px;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width: 1300px) {
        max-width: 950px;
    }

    @media screen and (max-width: 1000px) {
        max-width: 700px;
    }

    @media screen and (max-width: 750px) {
        max-width: 450px;
        grid-template-rows: repeat(auto-fill, 200px);
        grid-template-columns: repeat(auto-fill, 200px);
    }

    @media screen and (max-width: 450px) {
        max-width: 350px;
        grid-template-rows: repeat(auto-fill, 150px);
        grid-template-columns: repeat(auto-fill, 150px);
    }
`;

export const PortfolioCardContainer = styled.div`
    display: inline-block;
    position: relative;
    overflow: hidden;
`;

export const PortfolioCard = styled.a`
    overflow: hidden;
`;

export const PortfolioImageOverlay = styled.div`
    background: var(--black);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all .3s ease-in-out;
`;

export const PortfolioImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
`;

export const PortfolioContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 25%;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease;
`;

export const PortfolioHeadline = styled.h1`
    text-transform: uppercase;
    font-size: 1.5rem;
    color: var(--light);
    font-weight: 700;
`;

export const PortfolioCopy = styled.p`
    text-transform: uppercase;
    font-size: 1.1rem;
    color: var(--light);
    font-weight: 500;
    margin-top: 8px;
`;
