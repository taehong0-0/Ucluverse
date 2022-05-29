import styled from 'styled-components';

export const ContentBoxDiv = styled.div`
    position : relative;

    /* box for otherBody.tsx */
    .box, .box > img {
        border-radius : 5px;
        width : 100%;
    }

    .box {
        display : flex;
        align-items: baseline;
        overflow : hidden;

        img {  
            transform : scale(1.0);
            transition : .3s ease-out;
        }

        :hover img {
            transform: scale(1.1);
        }
    }
`

export const ProfileContentBoxDiv = styled.div`
    /* 내용 */
    h3 {
        padding : 1rem 0 .6rem;
    }

    /* SNS Button */
    .wrapper {
        display: flex;
        width: 100%;
        align-items: center;
        margin-top : 2rem;
    }

    .social {
        display: flex;
        align-items: center;
        position: relative;
        height: 4rem;
        box-shadow: inset 0 0 0 2px #dbe3ea;
        border-radius: 50px;
        color: white;
        background: var(--primary-d2);
        overflow: hidden;
        margin: auto;
        transition: box-shadow .2s ease-out;
        
        h3 {
            font-weight: 700;
            padding : 0;
            letter-spacing: 0.01rem;
        }

        // Flex Children
        span, div {
            margin: auto;
        }

        // Social Links
        //
        .social-links {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(255,185,37,0);
            width: 100%;
            height: 100%;
            padding : 0;
            transition: all .25s ease;
            // Links
            //
            a {
                background: white;
                color: rgba(255,185,37,1);
                width: 3rem;
                height: 3rem;
                border-radius: 20px;
                transform: translate3d(0,60px,0);
                transition: all .2s;
                cursor : pointer;

                :not(:last-child) {
                    margin-right : .6rem;
                }

                svg {
                    padding : 0;
                    vertical-align: middle;
                    margin : .55rem;
                    fill: rgba(112,63,0,1);
                }

                    &:hover {
                        background: lighten(rgba(255,185,37,0),15%);
                        color: white;
                    }
                }
        }
        // Hover 
        &:hover {
            box-shadow: inset 0 0 0 2px var(--secondary-0), 0 1rem 20px rgba(255,185,37,0.2);
            .social-links {
            background: rgba(255,185,37,1);
            // Sequential
                > a {
                    animation: elastic .5s ease-out forwards 0s;
                    &:nth-child(2) { animation-delay: 0.05s;}
                    &:nth-child(3) { animation-delay: 0.1s;}
                    &:nth-child(4) { animation-delay: 0.15s;}
                    &:nth-child(5) { animation-delay: 0.2s;}
                }
            }
        }
        }

    @keyframes elastic {
        0%   { transform: translate3d(0,60px,0);}
        40%  { transform: translate3d(0,-5px,0);}
        70%  { transform: translate3d(0,5px,0);}
        100% { transform: translate3d(0,0,0);}
    }
`