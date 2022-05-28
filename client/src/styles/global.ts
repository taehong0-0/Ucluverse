import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
    /* 초기값 */
    * {
        margin : 0;
        padding : 0;
        letter-spacing : 0.04rem;
        border-radius: 5px;
    }

    body {
        overflow-x : hidden;
        max-width : 100vw; 
    }

    :root {
        background: ${props => props.theme.background.default};

        /* Colors: */
        --accent1-l1: #694BE6;
        --accent1-0: #5020DC;
        --grey2-1: #FFFDF9;
        --grey1-1: #F7F4FB;
        --grey1-2: #EDE9F0;
        --grey1-3: #DDDAE0;
        --grey1-4: #C4C1C7;
        --grey1-5: #A3A1A6;
        --grey1-6: #717073;
        --grey1-7: #4B4A4D;
        --grey1-8: #323233;
        --grey1-9: #0D0C0D;
        --accent2-l1: #FFB925;
        --accent2-0: #703F00;
        --paragraph-0: #A19279;
        --font-cancel-grey2-4: #A6A096;
        --font-sub-grey2-5: #736F68;
        --grey2-7: #3F3F3E;
        --font-black-grey2-8: #1A1917;
        --grey2-8: #1A1917;
        --good-0: #32B178;
        --good-l1: #63C599;
        --bad-l1: #E86C6C;
        --bad-0: #D93838;
        --third-0: #FFD9D9;
        --secondary-d1-font-title-: #513C0E;
        --secondary-d1: #513C0E;
        --secondary-0: #846116;
        --secondary-l1: #BF8F27;
        --secondary-l2-natural-: #FFEABF;
        --primary-d2: #1C072C;
        --primary-d1: #6D00B9;
        --primary-0: #9239DF;
        --primary-l1: #A45DE2;
        --gradient-link-0: #A27BC4;
        --shadow-purple-0: rgba(113,34,168,.16);
        
        /* Login button */
        --shadow-color: 208deg 10% 68%;
        --shadow-elevation-low:
            0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
            0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
            1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
        --shadow-elevation-medium:
            0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
            0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
            2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
            5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
        --shadow-elevation-high:
            0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
            1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
            2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
            4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
            7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
            11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
            17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
            25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
    }

    /* lottie default */
    .lottie {
        display : none;
        @media (min-width: 1024px) {
            position : absolute;
            display : block;
        }
    }

    /* font style */
    h1 {
        font-family : Noto Sans KR;
        font-style : normal;
        font-weight : bold;
        font-size : 48px;
        line-height : 56px;
        letter-spacing : -0.05rem;
        color : var(--font-black-grey2-8);
    }

    h3 {
        font-family : Noto Sans KR;
        font-style : normal;
        font-weight : bold;
        font-size : 24px;
        line-height : 28px;
        letter-spacing : -0.075rem;
        color : var(--font-black-grey2-8);
    }
    
    h4 {
        font-family : Noto Sans KR;
        font-style : normal;
        font-weight : normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.04rem;
        color: var(--font-black-grey2-8);
    }

    p {
        font-family : Noto Sans KR;
        font-style : normal;
        font-weight : normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.04rem;
        color: var(--font-black-grey2-8);
    }
`}
`