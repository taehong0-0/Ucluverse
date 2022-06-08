import React, { ReactElement } from 'react';
import { ContentSixthDiv } from '../style';
import Assets from '../../../Assets';
import { useScrollFadeIn, useScrollBG } from '../../../Hooks';
import ProfileContentBox from '../ContentBox/ProfileContentBox'

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
                        <ProfileContentBox name="민태홍" role="팀장 / 프론트엔드" />
                        <ProfileContentBox name="권대휘" role="백엔드" />
                        <ProfileContentBox name="이호용" role="백엔드" />
                        <ProfileContentBox name="조현진" role="기획 및 마케팅"/>
                        <ProfileContentBox name="송재한" role="디자이너" Src2="https://github.com/Wisesaturn" Src3="https://www.instagram.com/songjh_97" />
                    </div>
                </article>
            </ContentSixthDiv>
        </>
    );
}

export default Content;

      