import React from 'react'
import Paper from '@mui/material/Paper';

const Country = ({k}) => {

  return (

    <Paper >
       <img className='flagImg' src={k.flag} alt="" />
         <div className='insideparag'>
         <h3>{k.name}</h3>
         <div>
           <p><strong>Population:</strong> {k.population}</p>
           <p><strong>Region:</strong>{k.region}</p>
           <p><strong>Capital:</strong>{k.capital}</p>
         </div>
         </div>
    </Paper>
  )
}

export default Country
