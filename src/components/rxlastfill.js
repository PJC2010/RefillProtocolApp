import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RxLastFilled() {
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());
 const [timeDiff, setTimeDiff] = useState(0);
 
 
 
 
 useEffect(() => {
    if(endDate !== null && startDate !== null) {
        let start = new Date(endDate);
        let end = new Date(startDate);
        setTimeDiff(Math.round((start - end) / (1000 * 60 * 60 *24)))
    }
 }, [endDate, startDate])

 



 return (
   <div>
    <p>
        
    </p>
    <form action="">
        <label>Date of Request</label>
     <DatePicker
    
       selected={startDate}
       selectsStart
       startDate={startDate}
       onSelect = {setStartDate}
       onChange={date => setStartDate(date)}
     />
     <label>Select date of next office visit</label>
     <DatePicker
       selected={endDate}
       selectsEnd
       
       endDate={endDate}
       minDate={startDate}
       onSelect = {setEndDate}
       onChange={date => setEndDate(date)}
     />
     <p>{timeDiff} Days until patient is due for office visit </p>

     
     </form>
   </div>
 );
}
