import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#F8F8F8' : 'transparent')};
    transition: 0.4s all ease;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-transform: uppercase;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({scrollNav}) => (scrollNav ? '#091D22' : '#091D22')};
        transition: 0.4s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 30px;
    max-width: 95%;
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-align: center;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 40px;
`;

export const NavLogo = styled.div`
    color: ${({scrollNav}) => (scrollNav ? '#091D22' : '#091D22')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    transition: 0.4s all ease;
`;

export const NavSocial = styled.ul`
    color: ${({scrollNav}) => (scrollNav ? '#091D22' : '#091D22')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    padding: 0;
    font-size: 1.2rem;
    transition: 0.4s all ease;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const NavSocialItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: ${({scrollNav}) => (scrollNav ? '#091D22' : '#091D22')};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.4s all ease-in-out;

    &.active {
        border-bottom: 1px solid #091d22;
    }

    &:hover {
        color: ${({scrollNav}) => (scrollNav ? '#5ADEFF' : '#5ADEFF')};
        border-color: ${({scrollNav}) => (scrollNav ? '#5ADEFF' : '#5ADEFF')};
    }
`;  

export const NavSocialLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.4s all ease;

    &:hover {
        color: ${({scrollNav}) => (scrollNav ? '#5ADEFF' : '#5ADEFF')};
    }

    @media screen and (max-width: 768px) {
        padding: 0 .5rem;
    }
`;

export const NavMenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
    align-items: center;
`;

export const NavSocialContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    align-items: center;
`;