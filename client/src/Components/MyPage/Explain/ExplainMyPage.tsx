import react, { ReactElement } from 'react';
import { ExplainMyPageDiv } from './style';
import YukeyHello from '../../../Assets/Lottie/YukeyHello.json';
import Heart from '../../../Assets/Lottie/heart.json';
import { useLottie, useScrollFadeIn } from '../../..//Hooks';

const ExplainMyPage = () : ReactElement => {
    const lottieYuKey = useLottie(YukeyHello, true, 20, 1);
    const lottieHeart = useLottie(Heart, false, 100, 1);
    const animation = useScrollFadeIn('right',1,0,.5,1);

    return (
        <ExplainMyPageDiv>
            <section {...animation}>
                <div>
                    <h3>
                        이 곳은 마이페이지 입니다!<br/>
                        등록하신 동아리와 찜한 동아리를
                        한 곳에서 볼 수가 있습니다!
                    </h3>
                    <section {...lottieYuKey} />
                </div>
                <section {...lottieHeart} className="lottie Heart" />
            </section>
        </ExplainMyPageDiv>
    )
}

export default ExplainMyPage;