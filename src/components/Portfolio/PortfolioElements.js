import styled from 'styled-components'

export const PortfolioContainer = styled.div`
    color: #091D22;
    background: ${({darkSection}) => (darkSection ? '#091D22' : '#F8F8F8')};
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
    padding: 100px 0 150px;
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
`;

export const PortfolioFilterItem = styled.div`
    height: 40px;
`;

export const PortfolioFilter = styled.a`
    color: #091D22;
    font-size: 1rem;
    margin: 0 25px;
    padding: 0 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: 0.4s all ease;

    /* &.active {
        border-bottom: 1px solid #091d22;
    } */

    &:hover {
        color: #5ADEFF;
        border-color: #5ADEFF;
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
        /* grid-template-rows: repeat(auto-fill, 250px);
        grid-template-columns: repeat(auto-fill, 250px); */
    }

    @media screen and (max-width: 1000px) {
        max-width: 700px;
        /* grid-template-rows: repeat(auto-fill, 200px);
        grid-template-columns: repeat(auto-fill, 200px); */
    }

    @media screen and (max-width: 750px) {
        max-width: 400px;
        /* grid-template-rows: repeat(auto-fill, 150px);
        grid-template-columns: repeat(auto-fill, 150px); */
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
    background: #000000;
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
    color: #f8f8f8;
    font-weight: 700;
`;

export const PortfolioCopy = styled.p`
    text-transform: uppercase;
    font-size: 1.1rem;
    color: #f8f8f8;
    font-weight: 500;
    margin-top: 8px;
`;
