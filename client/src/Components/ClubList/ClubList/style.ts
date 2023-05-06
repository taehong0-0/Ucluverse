import styled from 'styled-components';

export const ClubListContainer = styled.article`
  width: 100%;
  height: 29rem;
  border-radius: 5px;
  opacity: 1;
  background-color: var(--grey1-1);

  // 동아리 이름 (span)
  span {
    font: normal normal normal 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    color: var(--font-black-grey2-8);
    opacity: 1;
    padding-bottom: 1rem;
    padding-top: 0.6rem;
  }

  & > div {
    cursor: pointer;
    width: calc(100% - 4rem);
    height: 25.7rem;
    padding: 2rem 2rem 0 2rem;
    justify-content: center;

    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    a {
      & > div {
        margin-right: 3.2rem;
        display: flex;
        flex-direction: column;
        div {
          width: 226px;
          height: 150px;
          background-color: #333;
        }
        img {
          width: 226px;
          height: 150px;
          border-radius: 5px;
        }
      }
    }

    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      margin-right: 20px;
      background-color: white;
      box-shadow: 1px 1px 4px #00000029;
    }

    &::-webkit-scrollbar-thumb {
      margin-right: 20px;
      width: 3px;
      height: 3px;
      background: transparent linear-gradient(180deg, #7d3db4 0%, #502280 100%) 0% 0% no-repeat
        padding-box;
      border-radius: 1.25rem;
      opacity: 1;
    }
    a:is(:link, :visited, :hover, :active) {
      text-decoration: none;
    }
  }
`;
