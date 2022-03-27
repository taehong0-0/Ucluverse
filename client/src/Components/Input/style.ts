import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  margin-right: 20px;
  position: relative;
  input {
    width: 15vw;
    height: 40px;
    padding-top: 15px;
    padding-bottom: -10px;
    outline: 0;
    border: none;
    border-bottom: 1px solid #846116;
    margin-bottom: 25px;
    font-size: 16px;
  }
  label {
    font-size: 18px;
    color: #0e0e0e;
    pointer-events: none;
    position: absolute;
    opacity: 1;
    font: normal normal bold 18px/24px Noto Sans KR;
    letter-spacing: -1.35px;
    transform: translate(0, 18px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }
  &:focus-within label {
    transform: translate(0, 5px) scale(0.75);
  }
  .active {
    transform: translate(0, 5px) scale(0.75);
  }
`;
