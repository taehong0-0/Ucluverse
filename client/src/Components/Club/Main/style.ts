import styled from 'styled-components';

export const ClubMainContainer = styled.div`
  margin-left: 2.8vw;
  & > div:first-child {
    margin-bottom: 24px;
  }
  div {
    width: 55vw;
    height: 360px;
    /* UI Properties */
    background: transparent
      linear-gradient(
        0deg,
        #eed090 0%,
        #eed090 15%,
        #ffe3a880 24%,
        #ffffff80 100%
      )
      0% 0% no-repeat padding-box;
    border-radius: 0px 0px 5px 5px;
    opacity: 0.5;
    background-color: black;
  }
`;
