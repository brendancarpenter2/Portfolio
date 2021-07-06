import styled from 'styled-components'
import { Link } from 'react-scroll'
import '../styles/_variables.scss'

export const Button = styled(Link)`
    background: ${({transparent}) => (transparent ? 'transparent' : 'var(--light)' )};
    white-space: nowrap;
    border: 2px solid var(--light);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 40px;
    padding: 12px 30px;
    color: ${({dark}) => (dark ? 'var(--light)' : 'var(--dark)')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '20px')};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'var(--light)' : 'var(--dark)' )};
        color: var(--dark);
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const AboutButton = styled(Link)`
    background: ${({darkSection}) => (darkSection ? 'var(--light)' : 'var(--dark)' )};
    white-space: nowrap;
    border: 2px solid ${({darkSection}) => (darkSection ? 'var(--light)' : 'var(--dark)' )};;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
    padding: 12px 30px;
    color: ${({darkSection}) => (darkSection ? 'var(--dark)' : 'var(--light)' )};
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
        color: var(--dark);
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const PortfolioButton = styled.div`
    background: transparent;
    white-space: nowrap;
    border: 2px solid var(--light);
    text-transform: uppercase;
    padding: 8px 12px;
    margin-top: 15px;
    color: var(--light);
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--light);
        color: var(--dark);
    }
`;