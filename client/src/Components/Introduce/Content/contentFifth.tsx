import React, { ReactElement } from 'react';
import { ContentFifthDiv } from '../style';
import { useScrollFadeIn, useScrollBG } from '../../../Hooks';
import IntroContentBox from '../ContentBox/IntroContentBox';
import Intro1 from '../../../Assets/introduce/introduce-pack-1.png';
import Intro2 from '../../../Assets/introduce/introduce-pack-2.png';
import Intro3 from '../../../Assets/introduce/introduce-pack-3.png';
import Intro4 from '../../../Assets/introduce/introduce-pack-4.png';
import Intro5 from '../../../Assets/introduce/introduce-pack-5.png';
import Intro6 from '../../../Assets/introduce/introduce-pack-6.png';
import Intro7 from '../../../Assets/introduce/introduce-pack-7.png';
import Intro8 from '../../../Assets/introduce/introduce-pack-8.png';

function Content(): ReactElement {
  const animation = useScrollFadeIn();
  const changeBG = useScrollBG('yellow');

  return (
    <ContentFifthDiv>
      <section {...changeBG} />
      <article>
        <div className="title">
          <h2 {...animation}>앞으로 더 많은 이야기를 들려줄게요</h2>
        </div>
        <div className="Content">
          <IntroContentBox imgSrc={Intro1} />
          <IntroContentBox imgSrc={Intro2} delay={0.15} />
          <IntroContentBox imgSrc={Intro3} delay={0.25} />
        </div>
        <div className="Content">
          <IntroContentBox imgSrc={Intro4} />
          <IntroContentBox imgSrc={Intro5} />
        </div>
        <div className="Content">
          <IntroContentBox imgSrc={Intro6} />
          <IntroContentBox imgSrc={Intro7} delay={0.15} />
          <IntroContentBox imgSrc={Intro8} delay={0.25} />
        </div>
      </article>
    </ContentFifthDiv>
  );
}

export default Content;
