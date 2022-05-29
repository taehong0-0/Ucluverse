import React, { ReactElement } from 'react';
import { ContentSecondDiv } from '../style';
import { useScrollFadeIn } from '../../../Hooks';
import Assets from '../../../Assets';

const Content = () : ReactElement => {
    const animation = useScrollFadeIn('up', 1, .5, 0);
    const animation2 = useScrollFadeIn('up', 1, 0, .75);
    const { groupImg } = Assets;

    return (
        <ContentSecondDiv>
            <article>
                <h2 {...animation}>
                    어떻게 해서 모이게 됐나요?
                </h2>
                <section {...animation2}>
                    <div className="picture">
                        <img src={groupImg} />
                    </div>
                    <div className="explain">
                        <h4>
                            저희 유클러버스  팀은 이러하게 모였습니다.
                            이러한 목표를 가지고 있으며
                            이러한 사이트를 배포하는 데 성공하였습니다.
                        </h4>
                    </div>
                </section>
            </article>   
        </ContentSecondDiv>
    );
}

export default Content;
      