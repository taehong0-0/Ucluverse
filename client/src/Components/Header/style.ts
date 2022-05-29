import { PropaneSharp } from '@mui/icons-material';
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

  > * {
    z-index : 1;
  }

  button {
    padding: 0;
  }

  @media (max-width: 768px) {
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
  }

  .logined {
    // 로그인 됐을 때 어떻게 여백 설정할까?
  }

  @media (max-width: 768px) {
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

export const BackGround = styled.div`
    position : absolute;
    border-radius : 0;
    left : 0;
    top : 0;
    width : 100%;
    height : 100px;
    z-index : 0;

    background-color : ${(props) => (
        props.color == 'darkPurple' &&
          props.theme.header.darkPurple ||
        props.color == 'yellow' &&
          props.theme.header.yellow ||
        props.color == 'default' &&
          props.theme.header.default ||
        props.color == 'purple' &&
          props.theme.header.purple ||
        props.color == 'lightYellow' &&
          props.theme.header.lightYellow
      )};
`
