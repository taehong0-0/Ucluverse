import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 90%;
  max-width: ${(props) => props.theme.layout.maxWidth};
  height: 6.25rem;
  line-height: 6.25rem;
  margin: 0 auto;
  vertical-align: middle;
  align-items: center;
  justify-content: space-between;

  > * {
    z-index: 1;
  }

  button {
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 30rem;
  }
`;

export const HeaderLinkContainer = styled.section`
  position: absolute;
  left: 50%;
  transform: translateX(-48%);
  width: 303px;
  display: flex;
  justify-content: space-between;

  button {
    padding: 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
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
  position: absolute;
  border-radius: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 0;

  background-color: ${(props) =>
    (props.color === 'darkPurple' && props.theme.header.darkPurple) ||
    (props.color === 'yellow' && props.theme.header.yellow) ||
    (props.color === 'default' && props.theme.header.default) ||
    (props.color === 'purple' && props.theme.header.purple) ||
    (props.color === 'lightYellow' && props.theme.header.lightYellow)};
`;
