import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LinkButtonContainer } from './style';
interface props {
  url: string;
  children: JSX.Element | string;
}
const LinkButton = (props: props): ReactElement => {
  const { url, children } = props;
  return (
    <LinkButtonContainer>
      <Link to={url} style={{ textDecoration: 'none', color: '#736f68' }}>
        {children}
      </Link>
    </LinkButtonContainer>
  );
};
export default LinkButton;
