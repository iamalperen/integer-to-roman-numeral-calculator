import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: Poppins, Helvetica, "sans-serif";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    color: #181C32;
    background-color: #F5F8FA;
    line-height: 1.6;
    font-size: 14px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  ${normalize}
`;
