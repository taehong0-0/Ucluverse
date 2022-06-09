import React, { ReactElement } from 'react';
import { ContentSixthDiv } from '../style';
import Assets from '../../../Assets';
import { useScrollFadeIn, useScrollBG } from '../../../Hooks';
import ProfileContentBox from '../ContentBox/ProfileContentBox'
import Intro1 from '../../../Assets/introduce/profile-taehong.png';
import Intro2 from '../../../Assets/introduce/profile-daehyui.png';
import Intro3 from '../../../Assets/introduce/profile-jaehan.png';
import Intro4 from '../../../Assets/introduce/profile-hoyong.png';
import Intro5 from '../../../Assets/introduce/profile-hyunjin.png';

const Content = () : ReactElement => {
    const animation = useScrollFadeIn();
    const changeBG = useScrollBG('purple');
    const { groupImg } = Assets;

    return (
        <>
            <ContentSixthDiv>
                <section {...changeBG}/>
                <article>
                    <h2>
                        Contact Us
                    </h2>
                    <div className="Content">
                        <ProfileContentBox imgSrc={Intro1} name="민태홍" Src1="https://www.facebook.com/profile.php?id=100008197000250" Src2="https://github.com/taehong0-0" Src3="https://www.instagram.com/gnoh_0/" role="팀장 / 프론트엔드" />
                        <ProfileContentBox imgSrc={Intro2} name="권대휘" Src1="https://www.facebook.com/profile.php?id=100005786582178" Src2="https://github.com/kwondaehwi" Src3="https://www.instagram.com/kwondh8561/" role="백엔드" />
                        <ProfileContentBox imgSrc={Intro3} name="송재한" role="디자이너" Src1="https://www.facebook.com/profile.php?id=100002449762204" Src2="https://github.com/Wisesaturn" Src3="https://www.instagram.com/songjh_97" />
                        <ProfileContentBox imgSrc={Intro4} name="이호용" role="백엔드" Src1="https://www.facebook.com/hoyong.lee.524" Src2="https://github.com/ErranderLee" Src3="https://www.instagram.com/d1ghdyd/" />
                        <ProfileContentBox imgSrc={Intro5} name="조현진" Src3="https://www.instagram.com/bobaevelynn/" role="기획 및 마케팅"/>
                    </div>
                </article>
            </ContentSixthDiv>
        </>
    );
}

export default Content;

      