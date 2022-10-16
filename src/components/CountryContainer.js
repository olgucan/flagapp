import React, { useState } from 'react'
import Country from './Country'
import { CountryStyled } from '../CountryCon.styled'
import Container from '@mui/material/Container';
const CountryContainer = ({setSelectValue,selectValue,olgdata,inputfilter}) => {

  let filtered=olgdata.filter(k=>k.region===selectValue)
  return (
    <Container sx={{marginTop:15}}>
    <CountryStyled>
      { (inputfilter==="") ? 
         filtered.map((k,i)=>(
        <Country  k={k} key={i} />
      )) 
       
      
       : olgdata.filter(a=>a.name.toLowerCase().includes(inputfilter)).map((a,i)=>( <Country  k={a} key={i} />))
        
      
      }
     
    </CountryStyled>
    </Container>
  )
}

export default CountryContainer
