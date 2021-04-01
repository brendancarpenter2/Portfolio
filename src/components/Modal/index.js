import React from 'react'
import { ModalContainer, ModalOverlay, ModalInnerContainer, ModalImage, ModalContent, ModalHeadline, ModalSubheadline, ModalCopy, Icon, CloseIcon } from './ModalElements'

const Modal = ( {isModalOpen, toggle, item}) => {
    return (
        <ModalContainer isModalOpen={isModalOpen}>
            <ModalOverlay onClick={toggle}></ModalOverlay>
            <ModalInnerContainer>
                <Icon onClick={toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>
                <ModalImage src={item.src}></ModalImage>
                <ModalContent>
                    <ModalHeadline>{item.headline}</ModalHeadline>
                    <ModalSubheadline>{item.subheadline}</ModalSubheadline>
                    <ModalCopy>{item.copy}</ModalCopy>
                </ModalContent>
            </ModalInnerContainer>
        </ModalContainer>
    )
}

export default Modal
