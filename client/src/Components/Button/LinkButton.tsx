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
    <Link to={url} className="link-button">
      <LinkButtonContainer>{children}</LinkButtonContainer>
    </Link>
  );
};
export default LinkButton;
