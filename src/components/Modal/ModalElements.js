import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

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
    background: #091D22;
    width: 100%;
    height: 100%;
    background: rgba(9, 29, 34, 0.5);
`;

export const ModalInnerContainer = styled.div`
    position: absolute;
    max-width: 800px;
    width: 800px;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        max-width: 400px;
    }

    @media screen and (max-width: 400px) {
        max-width: 250px;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #091D22;

    @media screen and (max-width: 900px) {
        color: #f8f8f8;
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
    color: #091D22;
`;

export const ModalSubheadline = styled.h2`
    font-size: .8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
    color: #5ADEFF;
    padding: 0 0 10px;
`;

export const ModalDivider = styled.div`
    background-color: #e5e4e2;
    height: 2px;
    width: 100px;
`;

export const ModalCopy = styled.p`
    color: #091D22;
    line-height: 26px;
    padding: 10px 0 0;
`;