import Button from '@mui/material/Button';
import styled from 'styled-components';


export default styled(Button)`
  color: ${prop=>prop.theme.fontColor}!important;
  background-color: ${prop=>prop.theme.body}!important;
  
`;



