import react, {ReactElement} from 'react';
import logoImg from '../../../Assets/로고2.png';
import {LoadingDiv} from './style';

const Loading = () : ReactElement => {
    return (
        <LoadingDiv>
             <img src={logoImg} width="50px" height="50px" />
        </LoadingDiv>
    )
}

export default Loading;