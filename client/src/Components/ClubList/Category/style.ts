import styled from 'styled-components';

export const ClubCategoryContainer = styled.article`
  width: 70rem;

  :first-child {
    margin-top: 48px;
  }

  & > section {
    margin-top: 11px;
    margin-bottom: 16px;
    display: flex;
    height: 42px;
    overflow: scroll;

    /* content background */
    div {
      cursor: pointer;
      display: inline-block;
      line-height: 42px;
      padding-left: 28px;
      padding-right: 28px;
      height: 42px;
      margin-right: 10px;
      background: var(--grey1-2);
      box-shadow: 2px 2px 6px #00000029;
      border-radius: 5px;
      text-align: center;
      
      span {
        white-space: nowrap;
        display: inline-block;
        opacity: 1;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }

    /* button */
    .first {
        letter-spacing: -0.04rem;
    }

    .second {
        background-color : white;
        padding : 0;
        color : var(--grey1-5);
        box-shadow: none;
        font-weight:500;
        letter-spacing: -0.04rem;

        +.second {
          margin-left : 1rem;
        }
      }

      /* button selected */
      .selected {
      color : white;

        &.first {
          background: var(--primary-d1) 0% 0% no-repeat padding-box;
        }

        &.second {
          background: var(--primary-l1) 0% 0% no-repeat padding-box;
          background-color:#ffffff;
          padding:0;
          color:var(--primary-d1);
          box-shadow: none;
          font-weight:700;
          letter-spacing: -0.04rem;
        }
      }
  }
`;


// .className +.className == :nth-child(n+1)
