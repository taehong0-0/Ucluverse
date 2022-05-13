import styled from 'styled-components';

export const LinkButtonContainer = styled.button`
  background: none;
  white-space : nowrap;
  border: none;
  font: normal normal bold 14px Noto Sans KR;
  cursor: pointer;

  @media (max-width : 960px) {
    font-size : 14px;
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
  width: 3.75rem;
  height: 2.125rem;
  /* UI Properties */
  background: #a45de2 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 6px #00000029;
  border-radius: 5px;
  border: none;
  opacity: 1;
  cursor: pointer;
  text-align: center;
  line-height: 2.125rem;
  span {
    font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
    letter-spacing: -1.05px;
    color: #ffffff;
    opacity: 1;
  }
`;
