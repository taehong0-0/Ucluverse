import React, { ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';
import { theme } from '../../Recoil/Theme';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import IntroduceContent from '../../Components/Introduce/IntroduceContent';

const Introduce = () : ReactElement => {
    const setThemeColor = useSetRecoilState(theme);
    setThemeColor('yellow');

    return (
        <>
            <Header />
            <IntroduceContent />
            <Footer />
        </>
    );
}

export default Introduce;
      