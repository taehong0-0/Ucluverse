import React, { useEffect, useState } from 'react';
import { ClubBodyContainer } from './style';
import YukeyHello from '../../../Assets/Lottie/YukeyHello.json';
import { useLottie } from '../../../Hooks';
import { useScrollFadeIn } from '../../../Hooks';
import { Wave } from '../../Animation';
import ClubContentBox from '../ContentBox/ClubContentBox';
import otherGaiaImg from './../../../Assets/other-gaia.png';

const ClubBody = () => {
  const lottieYuKey = useLottie(YukeyHello, true, 20, 20);
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn('up', 1, 0.15, 0);

  return (
    <ClubBodyContainer>
      <section className="top">
        <div className='topBG' />
        <Wave/>
      </section>
      <section className="title" {...animation}>
        <span>아주대학교에는 이러한 공간도 있답니다!</span>
        <article {...animation2}>
          <div id="lottieYukey" {...lottieYuKey} />
        </article>
      </section>
      <section className="content contentBox">
        <ClubContentBox 
          delay={.0}
          imgSrc={otherGaiaImg}
          mainSrc="https://www.instagram.com/ajouuniv_gaia/?hl=ko"
          title="아주대학교 입학홍보대사 가이아(G.A.I.A)"
          content='💙아주의 곁에서 아주를 알리다💙'
          content2='가이아(G.A.I.A)는 Great Ambassador in Ajou의 줄임말이며 현재 아주대학교 입학 홍보대사 역할을 맡고 있습니다.'/>
        <ClubContentBox 
          delay={.15}
          mainSrc=""
          title=""
          content=""/>
        <ClubContentBox
          delay={.25}
          mainSrc=""
          title=""
          content=""/>
        <ClubContentBox
          delay={.35}
          mainSrc=""
          title=""
          content=""/>
      </section>
      <section className="bottom">
        <Wave rotation={180}/>
        <div className='bottomBG' />
      </section>
    </ClubBodyContainer>
  );
};
export default ClubBody;
