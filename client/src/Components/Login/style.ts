import styled from 'styled-components';

export const LoginMainContainer = styled.div`
  width: 100vw;
  height: 61rem;
  background: var(--grey2-1) 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
`;
export const LoginContentContainer = styled.div`
  padding-top: 8.188rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButtonContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  vertical-align: middle;
  
  /* button */
  button {
    display : flex;
    cursor : pointer;
    outline : none;
    border : none;
    padding : .6rem 2.4rem;
    background : white;
    font-weight : bold;
    box-shadow: 1px 1px 1px #00000026;
    transition : .3s ease;

    :hover {
      transition : .3s ease;
      box-shadow: 3px 3px 3px #00000026;
    }
    
    /* logo */
    img {
      width : 24px;
      height : 24px;
      margin-right : 24px;
    }
    
    p {
      font-family : 'Roboto Medium';
      font-size : 1rem;
      color : grey;
    }
  }
  
  box-shadow : 1px 1px 2px 5px rgba(0,0,0, 0);
  
`;

export const InputContainer = styled.div`
  width: 31.5vw;
  height: 45vh;
  border-right: 0.5px solid #a19279;
  margin-left: 6vw;
  margin-top: 8vw;
  background-color: #fff;
  #select-box {
    width: 30vw;
    left: -7px;
    margin-bottom: 30px;
    .Mui-focused {
      border: none;
    }
    #select {
      background: none;
      border: none;
    }
    #select:hover {
      /* border-bottom: 1px solid #9239df; */
      .input {
        border: none;
      }
    }
    li {
      background-color: black;
    }
    #input-label {
      border: none;
      width: 500px;
      color: #0e0e0e;
      pointer-events: none;
      position: absolute;
      opacity: 1;
      font: normal normal bold 18px/1.5rem Noto Sans KR;
      letter-spacing: -1.35px;
    }
    #input-label:focus {
      background-color: black;
    }
  }
  div:first-child {
    display: flex;
    div:first-child {
      input {
        width: 10vw;
      }
    }
    div:nth-child(2) {
      input {
        width: 18.5vw;
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 31.5vw;
  height: 45vh;
  margin-left: 3vw;
  margin-top: 8vw;
`;
export const DropZoneDiv = styled.div`
  width: 15vw;
  height: 8.938rem;
  border: 1px dashed var(---grey1-3);
  border: 1px dashed #dddae0;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  img {
    margin-top: 0.938rem;
  }
  span:nth-child(3) {
    text-align: center;
    font: normal normal bold 1.5rem/1.75rem Noto Sans KR;
    letter-spacing: -1.8px;
    color: #846116;
    opacity: 1;
  }
  span:nth-child(4) {
    margin-bottom: 0.938rem;
    font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
    letter-spacing: -1.05px;
    color: #a19279;
    opacity: 1;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.875rem;
`;
export const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  div:last-child {
    height: 8.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const LoginInfoContainer = styled.div`
  width: 75vw;
  height: 36.75rem;
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 0.625rem #00000029;
  border-radius: 5px;
  opacity: 1;
  margin-top: 1.75rem;
`;

export const LoginDetailSpan = styled.span`
  width: 17.25rem;
  text-align: center;
  font: normal normal normal 18px/1.5rem Noto Sans KR;
  letter-spacing: -1.35px;
  color: #a19279;
  opacity: 1;
`;

export const InfoButtonContainer = styled.div`
  margin-top: -10vh;
  margin-left: 57vw;

  button {
    cursor: pointer;
  }

  button:first-child {
    width: 3.75rem;
    height: 2.125rem;
    background: #ffffff;
    opacity: 1;

    border: none;
    span {
      font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
      letter-spacing: -1.05px;
      color: #a6a096;
      opacity: 1;
    }
  }

  button:last-child {
    width: 3.75rem;
    height: 2.125rem;
    /* UI Properties */
    background: #a45de2 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 6px #00000029;
    border-radius: 5px;
    opacity: 1;
    border: none;
    margin-left: 23px;

    span {
      font: normal normal normal 0.875rem/1.25rem Noto Sans KR;
      letter-spacing: -1.05px;
      color: #ffffff;
      opacity: 1;
    }
  }
`;
