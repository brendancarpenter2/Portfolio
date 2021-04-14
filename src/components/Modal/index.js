import React from 'react'
import { ModalGallery } from '../ModalGallery/index'
import { ModalContainer, ModalOverlay, ModalInnerContainer, ModalGalleryContainer, ModalContent, ModalHeadline, ModalSubheadline, ModalDivider, ModalCopy, Icon, CloseIcon } from './ModalElements'

const Modal = ( {isModalOpen, toggle, item}) => {
    return (
        <ModalContainer isModalOpen={isModalOpen}>
            <ModalOverlay onClick={toggle}></ModalOverlay>
            <ModalInnerContainer>
                <Icon onClick={toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>
                <ModalGalleryContainer>
                    <ModalGallery item={item}></ModalGallery>
                </ModalGalleryContainer>
                <ModalContent>
                    <ModalHeadline>{item.headline}</ModalHeadline>
                    <ModalSubheadline>{item.subheadline}</ModalSubheadline>
                    <ModalDivider></ModalDivider>
                    <ModalCopy>{item.description}</ModalCopy>
                </ModalContent>
            </ModalInnerContainer>
        </ModalContainer>
    )
}

export default Modal
