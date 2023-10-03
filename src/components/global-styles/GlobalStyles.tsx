import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>;

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }
    body{
      font-weight: 400;
       @media (min-width: 768px) {
        display: flex;
        justify-content: center;
  }
    }
  
`;

export default GlobalStyle;
