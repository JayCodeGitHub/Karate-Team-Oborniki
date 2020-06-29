import React from 'react'
import styled from 'styled-components'
import { FiInstagram } from 'react-icons/fi';
import { GrFacebookOption } from 'react-icons/gr';
import { FaYoutube } from 'react-icons/fa';

const Sc = styled.div`
@media (min-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 20vw;
    height: 5vw;
    .instagram, .facebook, .youtube {
       font-size: 3.5vw;
       text-align: center;
       width: 100%;
       margin-top: 0.5vw;
    }
}
    @media (max-width: 1049px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100vw;
        height: 5vw;
    .instagram, .facebook, .youtube {
       font-size: 10vw;
       text-align: center;
       width: 100%;
       margin-top: 0.5vw;
    }
    }
    .instagram {
        color: #C13584;
    }
    .facebook {
        color: #0000ff;
    }
    .youtube {
        color: #ff0000;
    }
`

const SocialMedia = () => (
    <Sc>
        <a href="https://www.instagram.com/karateteamoborniki/?hl=pl" target="blank"><FiInstagram className="instagram" alt="Instagram"/></a>
        <a href="https://www.facebook.com/karateteamoborniki/" target="blank"><GrFacebookOption className="facebook" alt="Facebook"/></a>
        <a href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q" target="blank"><FaYoutube className="youtube" alt="Yoytube"/></a>
    </Sc>
)

export default SocialMedia;