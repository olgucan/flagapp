import styled from "styled-components"



export  const CountryStyled = styled.div `
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  gap:30px;
  @media (max-width:768px) {
    grid-template-columns:1fr;
    gap:15px;
  }
` 