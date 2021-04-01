import React from 'react'
import { ModalContainer, ModalOverlay, ModalInnerContainer, ModalImage, ModalContent, ModalHeadline, ModalSubheadline, ModalCopy, Icon, CloseIcon } from './ModalElements'

const Modal = ( {isModalOpen, toggle, src, modalHeadline, subheadline, copy} ) => {
    return (
        <ModalContainer isModalOpen={isModalOpen}>
            <ModalOverlay onClick={toggle}></ModalOverlay>
            <ModalInnerContainer>
                <Icon onClick={toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>
                <ModalImage src={src}></ModalImage>
                <ModalContent>
                    <ModalHeadline>{modalHeadline}</ModalHeadline>
                    <ModalSubheadline>{subheadline}</ModalSubheadline>
                    <ModalCopy>{copy}</ModalCopy>
                </ModalContent>
            </ModalInnerContainer>
        </ModalContainer>
    )
}

export default Modal
