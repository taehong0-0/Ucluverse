import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/로고2.png';
import { IntroduceDiv } from './style';
import { useScrollFadeIn } from '../../Hooks';

function Introduce(): ReactElement {
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn();

  return (
    <footer className="nonStyledLink">
      <Link to="/introduce">
        <IntroduceDiv>
          <img alt="" src={logo} {...animation2} />
          <section {...animation}>
            <h3>유클러버스가 궁금하시다면?</h3>
            <h4>이 곳을 클릭해주세요!</h4>
          </section>
        </IntroduceDiv>
      </Link>
    </footer>
  );
}

export default Introduce;
