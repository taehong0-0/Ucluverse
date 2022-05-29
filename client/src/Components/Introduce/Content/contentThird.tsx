import React, { ReactElement } from 'react';
import { ContentThirdDiv } from '../style';
import IntroContentBox from '../ContentBox/IntroContentBox';
import { useScrollFadeIn } from '../../../Hooks';

const Content = () : ReactElement => {
    const animation = useScrollFadeIn();
    const animation2 = useScrollFadeIn();
    return (
        <ContentThirdDiv>
            <article>
                <h2 {...animation}>
                    무엇을 담고 있나요?
                </h2>
                <section>
                    <div className="picture">
                        <IntroContentBox />
                        <IntroContentBox delay={.15} />
                        <IntroContentBox delay={.3} />
                    </div>
                    <div className="explain">
                        <h4 {...animation2}>
                            이러한 활동을 가졌습니다
                        </h4>
                    </div>
                </section>
            </article>   
        </ContentThirdDiv>
    );
}

export default Content;

// 이미지 크기 고정해서 넣기 (360 x 450 size)
      