import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Card, CardActionArea } from '@material-ui/core';
import {medData} from '../medatajson2';

 
const MedSearch = () => {
 
  const [myOptions, setMyOptions] = useState([]);

  {medData.filter((val) => {
    if(myOptions == ""){
      return val
    }
    else if (val.drugFullName.toLowerCase().includes(myOptions.toLowerCase())) {
      return val;
    }
  }).map((val, key) => {
    return <div>{val.ful}</div>
  })}
 
  const getData = () => {
    console.log("Options Fetched from API")
 
    fetch('../medatajson.js').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].drugFullName)
      }
      setMyOptions(myOptions)
    })
  }
 
  return (
    <div className="info-box">
     
      
        
        
        

    <div style={{ marginLeft: '10%', marginTop: '60px' }}>
      <h3>Search for Medication</h3>
      
          
      
      
      
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        
        
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            id = "full-med-name"
            onChange={getData}
            variant="outlined"
            label="Med Search"
            
          />
         
          
          
          
        )}
       
        
      />
      
      
    </div>

   
    
    
    </div>
    
  );
}
 
export default MedSearch;

 

 