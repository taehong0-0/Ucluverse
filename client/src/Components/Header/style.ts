import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 70%;
  height: 6.25rem;
  line-height: 6.25rem;
  margin: 0 auto;
  vertical-align: middle;
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0;
  }

  @media (max-width: 960px) {
    width: 30rem;
  }
`;
export const HeaderLinkContainer = styled.div`
  width: 303px;
  margin-left: 1.15rem;
  display: flex;
  justify-content: space-between;
  button {
    padding: 0;
    /* margin-right: 60px;
    &:last-child {
      margin-right: 0px;
    } */
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 0 2rem 0 2.813rem;
  }
`;
export const UserInfoContainer = styled.div`
  display: flex;
  height: 6.25rem;
  vertical-align: middle;
  align-items: center;
  img {
    cursor: pointer;
    margin-left: 26px;
  }
`;
