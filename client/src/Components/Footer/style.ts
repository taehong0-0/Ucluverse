import styled from 'styled-components';
import { propsInfo } from './Footer';

export const IntroduceDiv = styled.footer`
  display: flex;
  width: 100vw;
  height: 120px;
  background-color: var(--secondary-l2);
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-out;
  transform: scale(1);
  cursor: pointer;

  img {
    display: block;
    position: relative;
    width: 82px;
    height: 78px;
    object-fit: cover;
  }

  h3,
  h4 {
    padding-left: 34px;
    color: var(--primary-0);
    text-align: left;
    text-decoration: none;
  }

  p:nth-child(2) {
    padding-top: 6px;
  }

  :hover {
    transform: scale(1.1);
  }
`;
export const MetaverseDiv = styled.footer`
  display: flex;
  width: 100vw;
  height: 120px;
  background-color: #fed379;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-out;
  transform: scale(1);
  cursor: pointer;

  img {
    display: block;
    position: relative;
    width: 82px;
    height: 78px;
    object-fit: cover;
  }

  h3,
  h4 {
    padding-left: 34px;
    color: var(--primary-0);
    text-align: left;
    text-decoration: none;
  }

  p:nth-child(2) {
    padding-top: 6px;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const FooterDiv = styled.footer<propsInfo>`
  display: flex;
  width: 100vw;
  min-height: 226px;
  height: calc(226px + (${(props) => props.addHeight}px));
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1.5rem;
  flex-direction: column;
  border-radius: 0;

  background-image: ${(props) =>
    (props.color == 'darkPurple' && props.theme.footer.darkPurple) ||
    (props.color == 'yellow' && props.theme.footer.yellow) ||
    (props.color == 'default' && props.theme.footer.default) ||
    (props.color == 'purple' && props.theme.footer.purple) ||
    (props.color == 'lightYellow' && props.theme.footer.lightYellow)};

  img {
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  h4,
  p {
    text-align: center;
    color: ${(props) =>
      (props.color == 'darkPurple' && props.theme.font.darkPurple) ||
      (props.color == 'yellow' && props.theme.font.yellow) ||
      (props.color == 'default' && props.theme.font.default) ||
      (props.color == 'purple' && props.theme.font.purple) ||
      (props.color == 'lightYellow' && props.theme.font.lightYellow)};

    :first-child {
      padding-top: 24px;
    }

    :last-child {
      padding-top: 10px;
    }
    :not(:last-child) {
      font-weight: bold;
    }
  }
`;
