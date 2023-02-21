import React, { useState, useEffect }from 'react';
import drugs from '../db.json';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const MedSearch = () => {
  const [medata, setData] = useState([]);
  
  function GetDataFromSearch () {
    fetch("../db.json")
    useEffect(() => {
      fetch("db.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        for( var i = 0; i <  json.length; i++){
          medata.push(json[i].fullDrugName)
        }
        setData(medata)
      })
    })
  }
                

  

  return(
   
    
    <Autocomplete 
    id="med-search-bar"
    freeSolo
    autoComplete
    
    options={GetDataFromSearch}
    renderInput={(params) => <TextField {...params} onChange = {GetDataFromSearch}  label="Search for Medication" />}
    />
    
    
    
  )
  
} 
export default MedSearch;




 

 