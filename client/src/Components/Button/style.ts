/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import styled from 'styled-components';

export const LinkButtonContainer = styled.button`
  background: none;
  white-space: nowrap;
  border: none;
  font: normal normal bold 14px Noto Sans KR;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      (props.color === 'darkPurple' && props.theme.font.darkPurple) ||
      (props.color === 'yellow' && props.theme.font.yellow) ||
      (props.color === 'default' && props.theme.font.default) ||
      (props.color === 'purple' && props.theme.font.purple) ||
      (props.color === 'lightYellow' && props.theme.font.lightYellow)};

    :hover {
      color: ${(props) => (props.color === 'purple' && 'var(--primary-d1)') || 'var(--primary-0)'};
    }
  }

  @media (max-width: 960px) {
    font-size: 14px;
  }
`;

export const CharacterButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  width: 13.875rem;
  height: 2.125rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #846116;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  align-items: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
export const ButtonContainer = styled.button`
  width: auto;
  height: auto;
  line-height: 2.125rem;
  padding: 0.5rem 1.2rem;
  background: var(--primary-d1);
  box-shadow: 2px 2px 6px #33333329;
  border: none;
  opacity: 1;
  cursor: pointer;

  h4 {
    color: white;
    font-weight: 400;
  }
`;
