import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Select from './Select'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styled from 'styled-components';


const Filter = ({olgdata,inputfilter,setInputfilter,selectValue,setSelectValue,handleChange,key}) => {
  console.log(inputfilter)
  const Mydiv =styled.div `
  flex:${prop=>prop.flex};
  @media (max-width: 768px) {
    flex:1;
  }

  `
  
  return (
    
        <Container sx={{marginY:5}} >

            <Stack   direction={{ xs: 'column', sm: 'row' }}
                      justifyContent="space-between"
                      spacing={{ xs: 3, sm: 2, md: 50 }}
                      >
            <Mydiv flex={2} >
              <form  >
              <TextField onChange={(e)=>handleChange(e)} name="keser" value={inputfilter} fullWidth key="3unique_key_3" id="3unique_id_3"   label="Search For a Country" variant="outlined"  InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
              <SearchIcon />
            </InputAdornment>
          ),
        }}   autoFocus />
              </form>
            
         {/* <input type="text" onChange={(e)=>handleChange(e)}   value={inputfilter} placeholder="buraya yaz" /> */}
            </Mydiv>
           <Mydiv flex={1} >
           <Select olgdata={olgdata} setSelectValue={setSelectValue} selectValue={selectValue} />
           </Mydiv>
            
            </Stack>
        </Container>
     
  )
}

export default Filter
