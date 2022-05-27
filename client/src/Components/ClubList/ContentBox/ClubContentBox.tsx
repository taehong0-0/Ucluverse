import react, {ReactElement} from 'react';
import { ClubContentBoxDiv } from './style';
import { useScrollFadeIn } from '../../../Hooks';

interface propsInfo {
    imgSrc? : string;
    delay? : number;
}

const ClubContentBox = (props : propsInfo) : ReactElement => {
    const defaultSrc = "https://images.unsplash.com/photo-1653580137336-8bf40907aba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    const { imgSrc, delay } = props;
    const ScrollIn = useScrollFadeIn('up', 1, delay, .05)
    
    return(
        <ClubContentBoxDiv>
            <article {...ScrollIn}>
                <div className="box">
                    <img 
                        src={imgSrc === undefined ? defaultSrc : imgSrc}
                    />
                </div>
                <h3>제목입니다</h3>
                <p>내용입니다. 내용</p> 
            </article>
        </ClubContentBoxDiv>
    )
}

export default ClubContentBox