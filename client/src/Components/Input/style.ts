import styled, { css } from 'styled-components';
interface props {
  type: string;
}
const largeStyle = css`
  width: 30vw;
`;
const midiumStyle = css`
  width: 16.5rem;
`;
export const InputContainer = styled.div<props>`
  display: flex;
  flex-direction: column;
  width: 10vw;
  margin-right: 1.25rem;
  position: relative;
  input {
    ${(props) => props.type === 'large' && largeStyle};
    ${(props) => props.type === 'midium' && midiumStyle}
    height: 2.5rem;
    padding-top: 0.938rem;
    padding-bottom: -0.625rem;
    outline: 0;
    border: none;
    border-bottom: 1px solid #846116;
    margin-bottom: 1.563rem;
    font-size: 1rem;
  }
  label {
    font-size: 18px;
    color: #0e0e0e;
    pointer-events: none;
    position: absolute;
    opacity: 1;
    font: normal normal bold 18px/1.5rem Noto Sans KR;
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
