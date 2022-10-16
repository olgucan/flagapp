import React from 'react'
import Button from './Button.styled';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';

import Container from '@mui/material/Container';
 
const NavBar = ({themeToggler}) => {
    
    const Mynav = styled.nav  `
  
   &>div>div>h3 {
       color:${prop => prop.theme.fontColor};
   }
   border-bottom:1px solid ${prop=>prop.theme.borderColor};
   

   `
   
  
  
  
    
      
      
  return (
    <Mynav >
        <Container>
            <Stack direction="row" justifyContent="space-between" py={3}>
       <h3>Where in the world ?</h3>
       <Button onClick={()=>themeToggler()} startIcon={<DarkModeIcon />} variant="text">Dark Mode</Button>
       </Stack>
       </Container>
    </Mynav>
  )
}

export default NavBar
