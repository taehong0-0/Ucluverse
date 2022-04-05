import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 75vw;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
  vertical-align: middle;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLinkContainer = styled.div`
  width: 28vw;
  display: flex;
  justify-content: space-between;
  button {
    margin-right: 45px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
