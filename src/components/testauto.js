import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box } from '@mui/system';
 
function Dropdown(){
    const [jsonResults, setJsonResults] = useState([]);
    useEffect(() => {
        fetch("https://api.apispreadsheets.com/data/5jwfy2K1aIEvSXBt")
        .then ((response) => response.json())
        .then((json) => setJsonResults(json.data))
        
    }, [])
    console.log(jsonResults)
    return (
        <Autocomplete
        disablePortal
        id="med-search-box" 
        sx={{ width: 300}}
        getOptionLabel={(jsonResults) => `${jsonResults.GPI10DRUGNAME}`}
        options={jsonResults}
        renderOption={(props, jsonResults) => (
            <Box component="li" {...props} key = {jsonResults.id}></Box>
        )}
        
        />
    ) ;
}

export default Dropdown;