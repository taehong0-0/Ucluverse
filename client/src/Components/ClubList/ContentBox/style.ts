import styled from 'styled-components';

export const ClubContentBoxDiv = styled.div`
    position : relative;
    width : calc(50% - (${(props) => props.theme.layout.gutter} / 2));
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
        cursor : pointer;

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

    /* content */
    p {
        width : 70%;
        padding-bottom : .2rem;
        text-align : justify;
    }

    /* SNS Share */
    .btn-section {
        display: flex;
        padding: 1rem 1rem .5rem 0;

        button {
            position: relative;
            width: 50px;
            height: 50px;
            margin: 0 10px;
            border-radius: 10px;
            border: none;
            outline: none;
            overflow: hidden;
            cursor: pointer;
        }

        svg {
            width : 1.8rem;
            vertical-align: middle;
            transform : scale(1.0);
            transition: .3s ease-out;
            

            :hover {
                transform: scale(1.1);
                transition: .3s ease-out;
            }
        }

        .btn-fb {
            background-color: #ecf0f8bb;
            fill: #3b5998;
        }

        .btn-tw {
            background-color: #e5f4fdbb;
            fill: #1da1f2;
        }

        .btn-ig {
            background-color: #f4ecf9bb;
            fill: #833ab4; 
        }

        .btn-yu {
            background-color: #f9d3d3bb;
            fill: #bd3939;
        }
    }
`