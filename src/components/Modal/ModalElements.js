import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import '../../styles/_variables.scss'

export const ModalContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    margin: auto;
    transition: 0.4s ease-in-out;
    opacity: ${({ isModalOpen }) => ( isModalOpen ? '100%' : '0')};
    z-index: ${({ isModalOpen }) => ( isModalOpen ? '999' : '-10')};
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalOverlay = styled.div`
    background: var(--dark);
    width: 100%;
    height: 100%;
    background: rgba(9, 29, 34, 0.5);
`;

export const ModalInnerContainer = styled.div`
    position: absolute;
    max-width: 800px;
    width: 800px;
    background-color: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        max-width: 400px;
    }

    @media screen and (max-width: 400px) {
        width: 320px;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: var(--dark);

    @media screen and (max-width: 900px) {
        color: var(--light);
    }
`;

export const Icon = styled.div`
    position: absolute;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
`;

export const ModalGalleryContainer = styled.div`
    max-width: 400px;
    /* width: 100%; */
    height: 100%;

    iframe {
        margin: 20px;
        filter: drop-shadow(0 0 10px rgba(0,0,0,0.4));

        @media screen and (max-width: 900px) {
            margin: 80px 0 0;
        }
    }
`;

export const ModalImage = styled.img`
    /* max-width: 400px; */
    width: 100%;
`;

export const ModalContent = styled.div`
    width: 100%;
    padding: 40px;
`;

export const ModalHeadline = styled.h1`
    font-size: 1.5rem;
    letter-spacing: 1px;
    padding: 0 0 5px;
    font-weight: 600;
    color: var(--dark);
`;

export const ModalSubheadline = styled.h2`
    font-size: .8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--primary);;
    padding: 0 0 10px;
`;

export const ModalDivider = styled.div`
    background-color: var(--gray);
    height: 2px;
    width: 100px;
`;

export const ModalCopy = styled.p`
    color: var(--dark);
    line-height: 26px;
    padding: 10px 0 0;
`;