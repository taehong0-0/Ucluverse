import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
    /* 초기값 */
    * {
        margin : 0;
        padding : 0;
    }

    body {
        overflow-x : hidden;
        
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
        --grey1-7: #4B4A4D;
        --accent2-l1: #FFB925;
        --accent2-0: #703F00;
        --paragraph-0: #A19279;
        --font-cancel-grey2-4: #A6A096;
        --font-sub-grey2-5: #736F68;
        --grey2-7: #3F3F3E;
        --font-black-grey2-8: #1A1917;
        --good-0: #32B178;
        --good-l1: #63C599;
        --bad-l1: #E86C6C;
        --bad-0: #D93838;
        --third-0: #FFD9D9;
        --secondary-d1-font-title-: #513C0E;
        --secondary-0: #846116;
        --secondary-l1: #BF8F27;
        --secondary-l2-natural-: #FFEABF;
        --primary-d1: #6D00B9;
        --primary-0: #9239DF;
        --primary-l1: #A45DE2;
        --gradient-link-0: #A27BC4;
        --shadow-purple-0: rgba(113,34,168,.16);
    }
`}
`