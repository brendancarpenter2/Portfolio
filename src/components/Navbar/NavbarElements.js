import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll' 
import '../../styles/_variables.scss'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'var(--light)' : 'transparent')};
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
    filter: drop-shadow(0 0 12px rgba(0,0,0,0.2));

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
        color: ${({scrollNav}) => (scrollNav ? 'var(--dark)' : 'var(--dark)')};
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
    padding: 0 1rem;
`;

export const NavLogo = styled.div`
    /* color: ${({scrollNav}) => (scrollNav ? '#091D22' : '#091D22')}; */
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    transition: 0.4s all ease;
`;

export const NavLogoImage = styled.img`
    height: 60px;
`;

export const NavSocial = styled.ul`
    color: ${({scrollNav}) => (scrollNav ? 'var(--dark)' : 'var(--dark)')};
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
    color: ${({scrollNav}) => (scrollNav ? 'var(--dark)' : 'var(--dark)')};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    transition: 0.4s all ease-in-out;

    &.active {
        border-bottom: 1px solid var(--dark);
    }

    &:hover {
        color: ${({scrollNav}) => (scrollNav ? 'var(--primary)' : 'var(--primary)')};
        border-color: ${({scrollNav}) => (scrollNav ? 'var(--primary)' : 'var(--primary)')};
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
        color: ${({scrollNav}) => (scrollNav ? 'var(--primary)' : 'var(--primary)')};
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