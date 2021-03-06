import React, { ReactElement } from 'react';
import ajou from '../../Assets/ajou-purple.png';
import { FooterDiv } from './style';
import { theme } from '../../Recoil/Theme';
import { useRecoilValue } from 'recoil';

export interface propsInfo {
    addHeight? : number;
}

const Footer = (props : propsInfo) : ReactElement => {
    const { addHeight } = props;
    const themeColor = useRecoilValue(theme);

    return (
        <FooterDiv color={themeColor} addHeight={addHeight}>
            <img src={ajou}/>
            <footer>
                <h4>
                    2022-1 아주대학교 파란학기
                </h4>
                <h4>
                    유클러버스 (Ucluverse)
                </h4>
                <p>
                    Copyright © 2022 유클러버스. All rights Reserved.
                </p>
            </footer>
        </FooterDiv>
    );
}

export default Footer;