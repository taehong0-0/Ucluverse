import styled from 'styled-components';

export const ExplainMyPageDiv = styled.div`
    display : block;
    position : relative;
    z-index : 10;
    width : 100%;
    top : -4rem;
    
    div {
        display : flex;
        height : auto;
        width : 50%;
        max-width : calc(${(props) => props.theme.layout.maxWidth} / 2);
        background : transparent linear-gradient(180deg,var(--primary-l1) 0%,var(--primary-0) 100%) 0% 0% no-repeat padding-box;

        /* Content */
        h3 {
            width : 90%;
            height : calc(100% - 2rem);
            max-width : calc((${(props) => props.theme.layout.maxWidth} / 2) - 2rem);
            color : white;
            padding : 1rem 3rem;
            line-height : 3rem;
        }
        
        /* Yukey */
        section {
            position : relative;
            float : right;
        }
    }

    /* heart */
    .Heart {
        left : 2rem;
        top : 5rem;
        animation-delay : 5s;
        animation-iteration-count : 1;
        animation : fadeOut 5s ease-out forwards;
        opacity : 0;
        transform : scale(0);
        z-index : 0;

        @keyframes fadeOut {
            50% {
                opacity : 1;
                transform : scale(1);
            }
            99% {
                transform : scale(1);
                opacity : 0;
            }
            to {
                transform : scale(0);
            }
        }
    }

    /* for mobile */
    @media (max-width: 768px) {
        display : flex;
        width : 100%;
        justify-content: center;

        div {
            width : 90%;
            max-width : 90%;
            margin : 0 auto;
            margin-top : 3rem;

            h3 {
                font-size : .9rem;
                font-weight : normal;
                letter-spacing : -0.025rem;
                line-height : 2rem;
            }

            img {
                width : 1rem;
            }
        }
    }
`