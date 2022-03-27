import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 100px;
  line-height: 100px;
  padding-left: 10vw;
  padding-right: 10vw;
  vertical-align: middle;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLinkContainer = styled.div`
  justify-content: space-between;
  button {
    margin-right: 45px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
