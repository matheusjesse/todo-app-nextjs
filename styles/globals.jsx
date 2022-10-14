import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
   --blue: #03213E;
   --gray: #FBFBFB;
   --white: #FEFEFE;
   background-color: var(--gray);
 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  
  
  
`;

export default GlobalStyle;