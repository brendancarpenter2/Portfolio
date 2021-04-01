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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CloseIcon = styled(FaTimes)`
    color: #091D22;
`;

export const Icon = styled.div`
    position: absolute;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    right: 0;
    margin-right: 20px;
`;

export const ModalImage = styled.div`
    max-width: 600px;
`;

export const ModalContent = styled.div`
    max-width: 600px;
    width: 50vw;
    background-color: #f8f8f8;
    padding: 40px;
`;

export const ModalHeadline = styled.h1`
    color: #091D22;
`;

export const ModalSubheadline = styled.h2`
    color: #5ADEFF;
`;

export const ModalCopy = styled.p`
    color: #091D22;
`;