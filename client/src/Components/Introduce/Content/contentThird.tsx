import React, { ReactElement } from 'react';
import { ContentThirdDiv } from '../style';
import IntroContentBox from '../ContentBox/IntroContentBox';
import { useScrollFadeIn } from '../../../Hooks';
import intro1 from '../../../Assets/introduce/introduce-1.png';
import intro2 from '../../../Assets/introduce/introduce-2.png';
import intro3 from '../../../Assets/introduce/introduce-3.png';

function Content(): ReactElement {
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn();
  return (
    <ContentThirdDiv>
      <article>
        <h2 {...animation}>무엇을 담고 있나요?</h2>
        <section>
          <div className="picture">
            <IntroContentBox imgSrc={intro1} />
            <IntroContentBox imgSrc={intro2} delay={0.15} />
            <IntroContentBox imgSrc={intro3} delay={0.3} />
          </div>
          <div className="explain">
            <h4 {...animation2}>
              사용자의 니즈를 최대한 반영하기 위해, 사용자의 고충을 해결하기 위해 지속적으로
              노력하였습니다.
            </h4>
          </div>
        </section>
      </article>
    </ContentThirdDiv>
  );
}

export default Content;

// 이미지 크기 고정해서 넣기 (360 x 450 size)
