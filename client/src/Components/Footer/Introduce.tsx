import React, { ReactElement } from 'react';
import logo from '../../Assets/로고2.png';
import { IntroduceDiv } from './style';
import {useScrollFadeIn} from '../../Hooks';
import { Link } from 'react-router-dom';

const Introduce = () : ReactElement => {
    const animation = useScrollFadeIn();
    const animation2 = useScrollFadeIn();
    

    return (
        <footer className="nonStyledLink">
            <Link to='/introduce'>
                <IntroduceDiv>
                    <img src={logo} {...animation2}/>
                    <section {...animation}>
                        <h3>
                            유클러버스가 궁금하시다면?
                        </h3>
                        <h4>
                            이 곳을 클릭해주세요!
                        </h4>
                    </section>
                </IntroduceDiv>
            </Link>
        </footer>
    );
}

export default Introduce;




