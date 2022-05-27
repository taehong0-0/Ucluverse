import react, {ReactElement} from 'react';
import { ClubContentBoxDiv } from './style';

const ClubContentBox = () : ReactElement => {
    return(
        <ClubContentBoxDiv>
            <div className="box">
                <img src="https://images.unsplash.com/photo-1653580137336-8bf40907aba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
            <h3>제목입니다</h3>
            <p>내용입니다. 내용</p> 
        </ClubContentBoxDiv>
    )
}

export default ClubContentBox