import styled from 'styled-components';

export const IntroduceDiv = styled.div`
    display : flex;
    width : 100vw;
    height : 120px;
    background-color : #FFEABF;
    align-items : center;
    justify-content : center;
    cursor : pointer;

    img {
        display : block;
        position : relative;
        width : 82px;
        height : 78px;
        object-fit : cover;
    }

    p {
        padding-left : 34px;
        color : var(--primary-0);
        text-align : left;
    }

    p:nth-child(2) {
        padding-top : 6px;
    }
`

export const FooterDiv = styled.div`
    width : 100vw;
    height : 250px;
    background: transparent linear-gradient(180deg, var(--primary-0) 0%, var(--gradient-link-0) 100%) 0% 0% no-repeat padding-box;

    img {
        display : block;
        position : relative;
        width : 100px;
        height : 100px;
    }
`