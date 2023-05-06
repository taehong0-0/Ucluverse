import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/로고2.png';
import { MetaverseDiv } from './style';
import { useScrollFadeIn } from '../../Hooks';

function EnterMetaverse(): ReactElement {
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn();

  return (
    <footer className="nonStyledLink">
      <Link to="/metaverse">
        <MetaverseDiv>
          <img alt="" src={logo} {...animation2} />
          <section {...animation}>
            <h3>메타버스로 들어가기 !!!!</h3>
          </section>
        </MetaverseDiv>
      </Link>
    </footer>
  );
}

export default EnterMetaverse;
