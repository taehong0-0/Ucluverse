import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 60rem;
  height: 6.25rem;
  line-height: 6.25rem;
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
    margin-right: 2.813rem;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
