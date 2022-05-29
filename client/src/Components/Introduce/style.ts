import styled from 'styled-components';

export const IntroduceSection = styled.section`
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
    width : 100%;
    height : auto;

    /* 배경용 영역 */
    div {
        display : flex;
        width : 100%;
        background-color : blue;
        justify-content : center;
    }

    /* 일반 영역 */
    article {
        width : 90%;
        max-width : ${(props) => props.theme.layout.maxWidth};
        background-color : #ccc;
    }

    /* wave */
    .IntroduceWave {
        position : relative;
        background-color : #FFE3A8;
    }
`

export const ContentFirstDiv = styled.div`
    background-color : #FFE3A8 !important;
    border-radius : 0;

    /* 일반 영역 */
    article {
        background-color : #FFE3A8;
        display : flex;
        justify-content : space-between;

        /* 내용 */
        .content {
            display : inline-block;
        }

        h2 {
            padding : 8rem 0 4rem 0;
        }

        /* 유키 */
        div {
            position : relative;
        }
    }
`