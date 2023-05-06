import React, { ReactElement } from 'react';
import { ContentSecondDiv } from '../style';
import { useScrollFadeIn } from '../../../Hooks';
import Assets from '../../../Assets';

function Content(): ReactElement {
  const animation = useScrollFadeIn('up', 1, 0.5, 0);
  const animation2 = useScrollFadeIn('up', 1, 0, 0.75);
  const animation4 = useScrollFadeIn('left', 1, 1.5, 0.75);
  const animation5 = useScrollFadeIn('left', 1, 2, 0.75);
  const animation6 = useScrollFadeIn('left', 1, 2.5, 0.75);
  const { groupImg } = Assets;

  return (
    <ContentSecondDiv>
      <article>
        <h2 {...animation}>어떻게 해서 모이게 됐나요?</h2>
        <section {...animation2}>
          <div className="picture">
            <img alt="" src={groupImg} />
          </div>
          <div className="explain">
            <h4>저희 유클러버스 팀은</h4>
            <section>
              <h3 {...animation4}>팬데믹으로 인한 비대면 불편함 해소</h3>
              <h3 {...animation5}>원활한 동아리 활동관리와 홍보, 소통</h3>
              <h3 {...animation6}>지속가능한 웹 서비스 출시 경험</h3>
            </section>
            <h4>이라는 목표를 가지고 모이게 되었습니다.</h4>
          </div>
        </section>
      </article>
    </ContentSecondDiv>
  );
}

export default Content;
