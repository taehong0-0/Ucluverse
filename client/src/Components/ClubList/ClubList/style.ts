import styled from 'styled-components';

export const ClubListContainer = styled.div`
  width: 70rem;
  height: 29rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  & > div {
    margin: 20px;
    margin-left: 40px;
    width: 65rem;
    height: 27.7rem;

    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    & > div {
      margin-right: 24px;
      display: flex;
      flex-direction: column;
      img {
        width: 226px;
        height: 150px;
        border-radius: 5px;
      }
    }
    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      margin-right: 20px;
    }
    &::-webkit-scrollbar-thumb {
      margin-right: 20px;
      width: 3px;
      height: 3px;
      background: #6d00b9 0% 0% no-repeat padding-box;
      border-radius: 1.25rem;
      opacity: 1;
    }
  }
`;
