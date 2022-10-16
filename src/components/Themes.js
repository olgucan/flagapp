import { createGlobalStyle } from "styled-components"
export const lightTheme= {
    body:"#fff",
    fontColor:"#000",
    borderColor:"#eee",

}
export  const darkTheme= {
    body:"#666",
    fontColor:"#fff",
    borderColor:"#ccc",

}
export const GlobalStyles = createGlobalStyle `
 body {
     background-color:${({theme})=> theme.body};
 }
 
`