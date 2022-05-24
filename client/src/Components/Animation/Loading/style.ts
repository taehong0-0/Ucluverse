import styled from 'styled-components';

export const LoadingDiv = styled.div`

div {
    position : absolute;
    background : rgba(0,0,0,.8);
    width : 100%;
    height : 100%;
}

section {
    z-index : 1;
    position:absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%,-50%);
    width : 150px;
    height : 150px;
    border : 3px solid var(--font-black-grey2-8);
    border-radius : 50%;
    color : var(--primary-0);
    box-shadow : 0 0 20px rgba(0,0,0,.5);
}

section:before {
    z-index : 1;
    content:'';
    position : absolute;
    top : -3px;
    left : -3px;
    width : 100%;
    height : 100%;
    border : 3px solid transparent;
    border-top : 3px solid var(--primary-l1);
    border-right : 3px solid var(--primary-l1);
    border-radius : 50%;
    animation : animateC 2s linear infinite;
}

img {
    position : relative;
    top : 48px;
    left : 48px;
}

@keyframes animateC
{
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
`