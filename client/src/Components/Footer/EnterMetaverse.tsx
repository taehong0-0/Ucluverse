import React, { ReactElement } from 'react';
import logo from '../../Assets/로고2.png';
import { IntroduceDiv, MetaverseDiv } from './style';
import { useScrollFadeIn } from '../../Hooks';
import { Link } from 'react-router-dom';

const EnterMetaverse = (): ReactElement => {
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn();

  return (
    <footer className="nonStyledLink">
      <Link to="/metaverse">
        <MetaverseDiv>
          <img src={logo} {...animation2} />
          <section {...animation}>
            <h3>메타버스로 들어가기 !!!!</h3>
          </section>
        </MetaverseDiv>
      </Link>
    </footer>
  );
};

export default EnterMetaverse;
