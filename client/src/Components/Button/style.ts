import styled from 'styled-components';

export const LinkButtonContainer = styled.button`
  overflow: auto;
  background: none;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const CharacterButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  width: 222px;
  height: 34px;
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
  width: 60px;
  height: 34px;
  /* UI Properties */
  background: #a45de2 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 6px #00000029;
  border-radius: 5px;
  border: none;
  opacity: 1;
  text-align: center;
  line-height: 34px;
  span {
    font: normal normal normal 14px/20px Noto Sans KR;
    letter-spacing: -1.05px;
    color: #ffffff;
    opacity: 1;
  }
`;
