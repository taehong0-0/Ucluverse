import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LinkButtonContainer } from './style';
import { theme } from '../../Recoil/Theme';

interface IProps {
  url: string;
  children: any;
}

function LinkButton(props: IProps): ReactElement {
  const { url, children } = props;
  const themeColor = useRecoilValue(theme);

  return (
    <LinkButtonContainer color={themeColor}>
      <Link to={url}>{children}</Link>
    </LinkButtonContainer>
  );
}
export default LinkButton;
