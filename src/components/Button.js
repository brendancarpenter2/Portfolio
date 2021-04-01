import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    background: ${({transparent}) => (transparent ? 'transparent' : '#F8F8F8' )};
    white-space: nowrap;
    border: 2px solid #F8F8F8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 40px;
    padding: 12px 30px;
    color: ${({dark}) => (dark ? '#F8F8F8' : '#091D22')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '20px')};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F8F8F8' : '#01BF71' )};
        color: #091D22;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const AboutButton = styled(Link)`
    background: ${({darkSection}) => (darkSection ? '#F8F8F8' : '#091D22' )};
    white-space: nowrap;
    border: 2px solid ${({darkSection}) => (darkSection ? '#F8F8F8' : '#091D22' )};;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
    padding: 12px 30px;
    color: ${({darkSection}) => (darkSection ? '#091D22' : '#F8F8F8' )};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '20px')};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: #091D22;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const PortfolioButton = styled.div`
    background: transparent;
    white-space: nowrap;
    border: 2px solid #f8f8f8;
    text-transform: uppercase;
    padding: 8px 12px;
    margin-top: 15px;
    color: #f8f8f8;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #f8f8f8;
        color: #091D22;
    }
`;