import React, { ReactElement } from 'react';
import { ContentFourthDiv } from '../style';
import { useScrollFadeIn } from '../../../Hooks';

function Content(): ReactElement {
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn('up', 1, 0.5);
  const animation3 = useScrollFadeIn('up', 1, 0, 0.5);

  return (
    <ContentFourthDiv>
      <article>
        <div className="title">
          <h2 {...animation}>대학생활이 어우르는 공간,</h2>
          <h2 {...animation2}>유클러버스</h2>
        </div>
        <div className="video" {...animation3}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/PDbeohXFZCM?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </article>
    </ContentFourthDiv>
  );
}

export default Content;
