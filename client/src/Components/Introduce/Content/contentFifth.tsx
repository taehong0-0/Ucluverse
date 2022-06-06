import React, { ReactElement } from 'react';
import { ContentFifthDiv } from '../style';
import Assets from '../../../Assets';
import { useScrollFadeIn, useScrollBG } from '../../../Hooks';
import IntroContentBox from '../ContentBox/IntroContentBox';

const Content = () : ReactElement => {
    const animation = useScrollFadeIn();
    const changeBG = useScrollBG('yellow');

    return (
        <ContentFifthDiv>
            <section {...changeBG} />
            <article>
                <div className="title">
                    <h2 {...animation}>
                        앞으로 더 많은 이야기를 들려줄게요
                    </h2>
                </div>
                <div className="Content">
                    <IntroContentBox />
                    <IntroContentBox delay={.15}/>
                    <IntroContentBox delay={.25}/>
                </div>
                <div className="Content">
                    <IntroContentBox imgSrc='https://images.unsplash.com/photo-1653624824808-e1597cf459a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
                    <IntroContentBox imgSrc='https://images.unsplash.com/photo-1653624824808-e1597cf459a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' delay={.15}/>
                </div>
                <div className="Content">
                    <IntroContentBox />
                    <IntroContentBox delay={.15}/>
                    <IntroContentBox delay={.25}/>
                </div>
            </article>   
        </ContentFifthDiv>
    );
}

export default Content;

      