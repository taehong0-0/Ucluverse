import styled from 'styled-components';

export const ClubCategoryContainer = styled.article`
  width: 100%;

  :first-child {
    margin-top: 3rem;
  }

  & > section {
    padding: 0.5rem 0 1rem;
    display: flex;
    height: auto;
    flex-wrap: wrap;

    /* content background */
    div {
      cursor: pointer;
      display: inline-block;
      line-height: 42px;
      padding: 0 28px;
      margin: 10px 10px 0 0;
      height: 42px;
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
      background-color: white;
      margin: 0px 10px 0 0;
      padding: 0;
      color: var(--grey1-5);
      box-shadow: none;
      font-weight: 500;
      letter-spacing: -0.04rem;

      + .second {
        margin-right: 1rem;
      }
    }

    /* button selected */
    .selected {
      color: white;

      &.first {
        background: var(--primary-d1) 0% 0% no-repeat padding-box;
      }

      &.second {
        background: var(--primary-l1) 0% 0% no-repeat padding-box;
        background-color: #ffffff;
        padding: 0;
        color: var(--primary-d1);
        box-shadow: none;
        font-weight: 700;
        letter-spacing: -0.04rem;
      }
    }
  }
`;

// .className +.className === :nth-child(n+1)
