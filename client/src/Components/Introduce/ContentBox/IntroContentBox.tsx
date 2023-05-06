import { ReactElement } from 'react';
import { ContentBoxDiv } from './style';
import { useScrollFadeIn } from '../../../Hooks';

interface propsInfo {
  imgSrc?: string;
  delay?: number;
}

function ContentBox(props: propsInfo): ReactElement {
  const defaultSrc =
    'https://images.unsplash.com/photo-1653673068325-7892e1879bd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
  const { imgSrc, delay } = props;
  const ScrollIn = useScrollFadeIn('up', 1, delay, 0.05);

  return (
    <ContentBoxDiv>
      <article>
        <div className="box" {...ScrollIn}>
          <img alt="" src={imgSrc === undefined ? defaultSrc : imgSrc} />
        </div>
      </article>
    </ContentBoxDiv>
  );
}

export default ContentBox;

// 이미지 크기 고정해서 넣기 (360 x 450 size / 또는 정사각형 size)
