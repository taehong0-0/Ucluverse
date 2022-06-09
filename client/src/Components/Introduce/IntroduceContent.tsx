import React, { ReactElement } from 'react';
import { IntroduceSection } from './style';
import { ContentFirst, ContentSecond, ContentThird, ContentFourth, ContentFifth, ContentSixth } from './index';
import Wave from '../Animation/Wave/Wave';

const IntroduceContent = () : ReactElement => {
    return (
        <IntroduceSection>
            <ContentFirst/>
            <Wave style="IntroduceWave"/>
            <ContentSecond/>
            <Wave rotation={180} style="IntroduceWave"/>
            <ContentThird/>
            <Wave style="IntroduceWave"/>
            <ContentFourth/>
            <ContentFifth/>
            <Wave rotation={180} style="IntroduceWave2"/>
            <ContentSixth/>
        </IntroduceSection>
    );
}

export default IntroduceContent;
      