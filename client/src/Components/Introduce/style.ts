import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

export const IntroduceSection = styled.section`
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
    width : 100%;
    height : auto;
    border-radius : 0;

    /* 기본값 */
    /* 배경용 영역 */
    div {
        display : flex;
        width : 100%;
        /* background-color : blue; // test */
        justify-content : center;
    }

    /* 일반 영역 */
    article {
        width : 90%;
        max-width : ${(props) => props.theme.layout.maxWidth};
        /* background-color : #ccc; // test */
    }
    /* 기본값 끝 */

    /* wave */
    .IntroduceWave {
        position : relative;
        background-color : var(--secondary-l3);
        border-radius : 0;
    }

    .IntroduceWave2 {
        position : relative;
        background-color : var(--primary-0);
        border-radius : 0;
    }
`

export const ContentFirstDiv = styled.div`
    background-color : var(--secondary-l3);

    /* 일반 영역 */
    article {
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
            min-width : 22rem;
            min-height : 22rem;
        }
    }

    /* for mobile */
    @media (max-width: 768px) {
        article {
            flex-direction : column-reverse;
            
            /* 내용 */
            .content {
                margin : 0 auto;
                position : relative;
                top : -3rem;
                text-align : center;
            }

            h2 {
                font-size : 1.6rem;
                padding : 4rem 0 1rem 0;
            }

            h4 {
                font-size : .8rem;
            }

            /* 유키 */
            div {
                width : 90vw;
                min-width : 90vw;
                max-width : 90vw;
                height : 40vh;
                min-height :40vh;
                max-height : 40vh;
            }
        }
    }
`

export const ContentSecondDiv = styled.div`
    margin : 10rem 0;
    
    article {

        /* 제목 */
        h2 {
            text-align : center;
            padding-bottom : 5rem;
        }

        /* 내용 */
        section {
            display : flex;

            /* 사진 영역 */
            .picture {
                width : 100%;
                height : 100%;
                background : #999;

                img {
                    width : 100%;
                    height : 100%;
                }
            }

            /* 설명 영역 */
            .explain {
                display : block;
                h4 {
                    width : 75%;
                    padding-left : ${(props) => props.theme.layout.gutter};
                }
            }
        }
    }
`

export const ContentThirdDiv = styled.div`
background-color : var(--secondary-l3);
padding: 10rem 0;

    article {
        /* 제목 */
        h2 {
            text-align : center;
            padding-bottom : 5rem;
        }

        /* 내용 */
        section {
            /* 설명 영역 */
            .explain {
                margin-top : 5rem;
            }
        }
    }

    /* for mobile */
    @media (max-width:768px) {
        article {
            section {
                .picture {
                    flex-direction : column;
                    
                    /* 영역 */
                    div {
                        margin-bottom : 1rem;
                    }
                }
            }
        }
    }
`

export const ContentFourthDiv = styled.div`
    margin : 10rem 0;

    article {

        /* 제목 */
        h2 {
            text-align : center;
            + h2 {
                padding-left : 1rem;
            }
        }

        /* 비디오 */
        .video {
            margin-top : 5rem;
            position : relative;
            width : 100%;
            height : 0;
            padding-top: 56.25%; // 16:9

            iframe {
                position : absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        }
    }
`

export const ContentFifthDiv = styled.div`
    margin : 10rem 0;

    /* 배경 전환용 */
    section {
        height : 1px;
    }

    article {

        /* 제목 */
        h2 {
            text-align : center;
        }

        /* 사진 영역 */
        .Content {
            margin-top : 5rem;
            div > article {
                width: calc(100% - 2rem);
            }

            + .Content {
                margin : 1rem 0;
            }
        }
    }

    /* for mobile */
    @media (max-width :768px) {
        article > .Content {
            flex-direction : column;
            div {
                margin : 1rem 0;
            }
        }
    }
`

export const ContentSixthDiv = styled.div`
    padding : 5rem 0 10rem;
    background-color : var(--primary-0);
    border-radius : 0;

    /* 배경 전환용 */
    section {
        height : 1px;
    }

    /* 내용 */
    article {
        h2 {
            color : var(--grey1-1);
            margin : 2rem 0 4rem 1rem;
        }

        h3 {
            color : var(--grey1-1);
        }

        h4 {
            color : var(--secondary-l2);
        }
    }
`

// 배경색을 100% 맞추기 위해 <article> 태그로 한번 더 감싸주었음