import styled from 'styled-components';

interface propsInfo {
  REM? : number;
  DEG? : number;
}

export const WaveDiv = styled.div<propsInfo>`
  width : 100vw;
  z-index : 0;

  svg {
    position : relative;
    width: 100vw;
    height: 140px;
    margin-bottom: -7px; // 줄방지
    min-height : 100px;
    max-height : 140px;
    padding-top : ${(props) => props.REM ? props.REM : 0}rem;
    transform: rotate( ${(props) => props.DEG ? props.DEG : 0}deg );
  }
  /* Animation */
  .parallax > use {
    animation: moveWave 30s cubic-bezier(.35,.5,.25,.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
  }

  @keyframes moveWave {
    0% {
    transform: translate3d(-80px,0,0);
    }
    100% { 
      transform: translate3d(80px,0,0);
    }
  }
  
  @media (max-width: 768px) {
    .waves {
      height:40px;
      min-height:40px;
    }

    svg {
      height : 70px;
      min-height : 70px;
      padding-top : ${(props) => props.REM ? props.REM+8.5 : 0}rem;
    }
  }
`