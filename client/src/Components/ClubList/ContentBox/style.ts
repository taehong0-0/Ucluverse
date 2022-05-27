import styled from 'styled-components';

export const ClubContentBoxDiv = styled.div`
    position : relative;
    width : calc(50% - 24px);
    height : auto;

    /* box for otherBody.tsx */
    .box, .box > img {
        border-radius : 5px;
        width : 100%;
    }

    .box {
        display : flex;
        margin-top : 3rem;
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

    /* title */
    h3 {
        padding : 1rem 0 .8rem 0;
    }
`