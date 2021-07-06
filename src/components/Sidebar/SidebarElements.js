import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--light);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )};
`;

export const CloseIcon = styled(FaTimes)`
    color: var(--dark);
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: var(--dark);
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 0;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--dark);
    cursor: pointer;

    &:hover {
        color: var(--primary);
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

