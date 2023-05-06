import { ClubBodyContainer } from './style';
import YukeyHello from '../../../Assets/Lottie/YukeyHello.json';
import { useLottie, useScrollFadeIn } from '../../../Hooks';
import { Wave } from '../../Animation';
import ClubContentBox from '../ContentBox/ClubContentBox';
import otherGaiaImg from '../../../Assets/other-gaia.png';
import otherNewsImg from '../../../Assets/other-news.png';
import otherAEBSImg from '../../../Assets/other-aebs.png';
import otherAbleImg from '../../../Assets/other-able.png';
import otherCouncilImg from '../../../Assets/other-council.png';
import otherClubImg from '../../../Assets/other-club.png';

function ClubBody() {
  const lottieYuKey = useLottie(YukeyHello, true, 20, 20);
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn('up', 1, 0.15, 0);

  return (
    <ClubBodyContainer>
      <section className="top">
        <div className="topBG" />
        <Wave />
      </section>
      <section className="title" {...animation}>
        <span>아주대학교에는 이러한 공간도 있답니다!</span>
        <article {...animation2}>
          <div id="lottieYukey" {...lottieYuKey} />
        </article>
      </section>
      <section className="content contentBox">
        <ClubContentBox
          delay={0.0}
          imgSrc={otherGaiaImg}
          mainSrc="https://www.instagram.com/ajouuniv_gaia/?hl=ko"
          snsIg="https://www.instagram.com/ajouuniv_gaia/?hl=ko"
          snsfb="https://www.facebook.com/ajougaia/"
          snstw="https://twitter.com/ajou_gaia"
          snsyu="https://www.youtube.com/c/%EC%95%84%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90%EC%9E%85%ED%95%99%EC%B2%98/featured"
          snsno="https://linktr.ee/ajouuniv_gaia"
          title="아주대학교 입학홍보대사 가이아(G.A.I.A)"
          content="💙아주의 곁에서 아주를 알리다💙"
          content2="가이아(G.A.I.A)는 Great Ambassador in Ajou의 줄임말이며 현재 아주대학교 입학 홍보대사 역할을 맡고 있다."
        />
        <ClubContentBox
          delay={0.15}
          imgSrc={otherCouncilImg}
          mainSrc="https://www.ajouchong.com/"
          snsIg="https://www.instagram.com/ajou_council/"
          snsfb="https://www.facebook.com/ajouchong/"
          title="아주대학교 총학생회"
          content="2022년 기준 제41대 총학생회 <담아>로 공식적으로 활동하고 있다."
        />
        <ClubContentBox
          delay={0.3}
          imgSrc={otherClubImg}
          mainSrc="https://www.ajou.ac.kr/kr/life/council.do/"
          title="아주대학교 동아리 연합회"
          snsIg="https://www.instagram.com/ajou_club.union/"
          snsfb="https://www.facebook.com/ajouclub"
          snsno="https://linktr.ee/ajou_club.union"
          content="아주대학교 동아리를 총괄하는 부서다."
        />
        <ClubContentBox
          delay={0.45}
          imgSrc={otherNewsImg}
          mainSrc="http://press.ajou.ac.kr/"
          snsIg="https://www.instagram.com/ajou_newspaper/"
          snsfb="https://www.facebook.com/theajoupress"
          snsno="https://jealous-watchmaker-e49.notion.site/12b22df79b8b415a87b262238c1bd28a"
          title="아주대학교학보사"
          content="아주대학보는 1974년 5월 1일에 창간되었으며, 현재는 3주에 한번, 한 학기에 5번 12면 또는 16면 신문을 발행하고 있다. "
        />
        <ClubContentBox
          delay={0.15}
          imgSrc={otherAEBSImg}
          mainSrc="https://www.youtube.com/channel/UCHFEDcKXpchtLLSUOOLJD5g/featured"
          snsyu="https://www.youtube.com/channel/UCHFEDcKXpchtLLSUOOLJD5g/featured"
          title="아주대학교 교육방송국 (AEBS)"
          content="아주대학교의 교육을 담당하고 있는 방송국이다. 현재는 음악, 보도, 오락, 각종 문화행사 등 학교 자체 방송국으로서의 활동을 하고 있다."
        />
        <ClubContentBox
          delay={0.3}
          imgSrc={otherAbleImg}
          mainSrc="https://www.youtube.com/c/%EC%95%84%EC%A3%BC%EB%8C%80%EB%AA%A8%EB%B0%94%EC%9D%BC%EB%B0%A9%EC%86%A1%EA%B5%ADAMON/featured"
          title="아주대학교 경영대학 언론기관 에이블 (A.B.L.E)"
          snsyu="https://www.youtube.com/c/%EC%95%84%EC%A3%BC%EB%8C%80%EB%AA%A8%EB%B0%94%EC%9D%BC%EB%B0%A9%EC%86%A1%EA%B5%ADAMON/featured"
          content="ABIZ 경영뉴스(신문사)와 AMON이라는 별도의 모바일 학습방송국으로 구성되어 있다."
        />
      </section>
      <section className="bottom">
        <Wave rotation={180} />
        <div className="bottomBG" />
      </section>
    </ClubBodyContainer>
  );
}
export default ClubBody;
