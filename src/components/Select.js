import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({olgdata,selectValue,setSelectValue}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value );
  };
  console.log((olgdata))
  let k =new Set(olgdata.map(a=>a.region))
  let myregions=[...k]
  console.log(selectValue)
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label="Age"
          onChange={(e)=>setSelectValue(e.target.value)}
        >
          {myregions.map((a,b)=> (
            <MenuItem key={b} value={a}>{a}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </Box>
  );
}