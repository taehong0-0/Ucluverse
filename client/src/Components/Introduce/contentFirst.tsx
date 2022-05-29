import React, { ReactElement } from 'react';
import { ContentFirstDiv } from './style';
import YukeyHello from '../../Assets/Lottie/YukeyHello.json';
import { useLottie } from '../../Hooks'

const ContentFirst = () : ReactElement => {
    const lottieYuKey = useLottie(YukeyHello, true, 25, 50);

    return (
        <ContentFirstDiv>
            <article>
                <article className="content">
                    <h2>
                        안녕하세요 <br/>
                        유클러버스입니다!
                    </h2>
                    <h4>
                        저희 유클러버스는 동아리 비대면 플랫폼 제작을 목표로 진행중인 팀입니다.
                    </h4>
                </article>
                <div {...lottieYuKey} className="lottie transparent" />
            </article>   
        </ContentFirstDiv>
    );
}

export default ContentFirst;
      