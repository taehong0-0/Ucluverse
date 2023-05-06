import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import ajou from '../../Assets/ajou-purple.png';
import { FooterDiv } from './style';
import { theme } from '../../Recoil/Theme';

export interface propsInfo {
  // eslint-disable-next-line react/require-default-props
  addHeight?: number;
}

function Footer(props: propsInfo): ReactElement {
  const { addHeight } = props;
  const themeColor = useRecoilValue(theme);

  return (
    <FooterDiv color={themeColor} addHeight={addHeight}>
      <img alt="" src={ajou} />
      <footer>
        <h4>2022-1 아주대학교 파란학기</h4>
        <h4>유클러버스 (Ucluverse)</h4>
        <p>Copyright © 2022 유클러버스. All rights Reserved.</p>
      </footer>
    </FooterDiv>
  );
}

export default Footer;
