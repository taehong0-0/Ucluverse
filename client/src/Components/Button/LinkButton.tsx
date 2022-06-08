import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LinkButtonContainer } from './style';
import { useRecoilValue } from 'recoil'
import { theme } from '../../Recoil/Theme';

interface props {
  url: string;
  children: JSX.Element | string;
}

const LinkButton = (props: props): ReactElement => {
  const { url, children } = props;
  const themeColor = useRecoilValue(theme);
  
  return (
    <LinkButtonContainer color={themeColor}>
      <Link to={url}>
        {children}
      </Link>
    </LinkButtonContainer>
  );
};
export default LinkButton;
