import styled from 'styled-components';

export const LoginMainContainer = styled.div`
  width: 100%;
  height: 780px;
  background: #f8f0e0 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;
export const LoginContentContainer = styled.div`
  padding-top: 131px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginSpan = styled.span`
  width: 86px;
  height: 36px;
  font-size: 36px;
  margin-bottom: 20px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-36) /
    var(--unnamed-line-spacing-32)
    var(--unnamed-font-family-sandoll-iyagi-03-bold);
  letter-spacing: var(--unnamed-character-spacing--2-7);
  color: var(---secondary-d1-font-title-);
  text-align: center;
  font: normal normal normal 36px/32px Sandoll Iyagi 03 Bold;
  letter-spacing: -2.7px;
  color: #513c0e;
  opacity: 1;
`;
export const LoginDetailSpan = styled.span`
  width: 244px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-noto-sans-kr);
  letter-spacing: var(--unnamed-character-spacing--1-35);
  color: var(---paragraph-0);
  text-align: center;
  font: normal normal normal 18px/24px Noto Sans KR;
  letter-spacing: -1.35px;
  color: #a19279;
  opacity: 1;
`;
