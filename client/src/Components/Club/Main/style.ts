import styled from 'styled-components';

export const ClubMainContainer = styled.div`
  margin-left: 1.25rem;
  width: 56.7%;
  & > div:first-child {
    width: 100%;
    & > div:first-child {
      margin-bottom: 1.5rem;
      height: 22.5rem;

      border-radius: 0px 0px 5px 5px;
      & > div {
        height: 22.5rem;
        background: transparent linear-gradient(0deg, #eed090 0%, #eed090 15%, #ffe3a880 24%, #ffffff80 100%) 0% 0%
          no-repeat padding-box;
        border-radius: 0px 0px 5px 5px;
        opacity: 0.5;
        background-color: black;
      }
      img {
        height: 22.5rem;
        border-radius: 0px 0px 5px 5px;
      }
    }
  }
  & > div:last-child {
    width: 100%;
    margin-left: -20px;
  }
`;
