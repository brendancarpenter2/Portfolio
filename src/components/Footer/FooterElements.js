import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const FooterContainer = styled.footer`
    background-color: #1B252F;
`;

export const FooterRow = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1200px;
    width: 100%;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
`;


export const SocialLogo = styled(LinkScroll)`
    color: #ffffff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const WebRights = styled.small`
    color: #ffffff;
    margin-bottom: 16px;
`;

