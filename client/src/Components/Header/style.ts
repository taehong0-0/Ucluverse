import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  line-height: 100px;
  padding-left: 10%;
  padding-right: 10%;
  vertical-align: middle;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLinkContainer = styled.div`
  justify-content: space-between;
  .link-button {
    margin-right: 45px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
