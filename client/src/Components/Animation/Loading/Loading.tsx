import { ReactElement } from 'react';
import logoImg from '../../../Assets/로고2.png';
import { LoadingDiv } from './style';

function Loading(): ReactElement {
  return (
    <LoadingDiv>
      <section>
        <img alt="" src={logoImg} width="50px" height="50px" />
      </section>
      <div />
    </LoadingDiv>
  );
}

export default Loading;
