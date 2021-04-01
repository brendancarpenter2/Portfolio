import styled from 'styled-components'

import '../../styles/_animations.scss'


export const LogoBarContainer = styled.div`
    background: #1b242f;
    height: 200px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;

    &:before {
        left: 0;
        top: 0;
        background: linear-gradient(to right, #1b242f 0%, rgba(255, 255, 255, 0) 100%);
        content: '';
        height: 200px;
        position: absolute;
        width:200px;
        z-index: 2;
    }

    &:after {
        transform: rotateZ(180deg);
        right: 0;
        top: 0;
        background: linear-gradient(to right, #1b242f 0%, rgba(255, 255, 255, 0) 100%);
        content: '';
        height: 200px;
        position: absolute;
        width:200px;
        z-index: 2;
    }
`;

export const LogoBarRow = styled.div`
    display: flex;
    width: calc(250px * 28);
    animation: scroll 40s linear infinite;
`;

export const LogoBarItem = styled.div`
    height: 200px;
    width: 250px;
    display: flex;
`;

export const LogoImage = styled.img`
    height: 100%;
    width: 100%;
    cursor: default;
	user-drag: none; 
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;