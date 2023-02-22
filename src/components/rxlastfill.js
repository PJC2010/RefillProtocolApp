import React from 'react';
    import { Dayjs } from 'dayjs';
    import TextField from '@mui/material/TextField';
    import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
    import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
    import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function RxLastFilled() {
    
    
    
    const [value, setValue] = React.useState(null);

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Enter Last Office Visit Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
    
}
export default RxLastFilled
