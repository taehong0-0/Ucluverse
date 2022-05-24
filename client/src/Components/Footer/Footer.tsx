import React, { ReactElement } from 'react';
import ajou from '../../Assets/ajou-purple.png';
import { FooterDiv } from './style';
import {Heading3, Heading4} from '../../styles/fonts/style';

const Footer = () : ReactElement => {
    return (
        <FooterDiv>
            <img src={ajou}/>
            <footer>
            <Heading3>

            </Heading3>
            </footer>
        </FooterDiv>
    );
}

export default Footer;