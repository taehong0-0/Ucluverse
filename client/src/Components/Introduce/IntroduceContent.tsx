import React, { ReactElement } from 'react';
import { IntroduceSection } from './style';
import { ContentFirst } from './index';
import Wave from '../Animation/Wave/Wave';

const IntroduceContent = () : ReactElement => {
    return (
        <IntroduceSection>
            <ContentFirst/>
            <Wave style="IntroduceWave"/>
            <article>
                    영역 나눠버리기!
            </article>
            <article>
                    영역 나눠버리기!
            </article>
        </IntroduceSection>
    );
}

export default IntroduceContent;
      