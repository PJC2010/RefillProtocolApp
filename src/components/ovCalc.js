import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const OvCalc = ({ ovIntervalDays, nextApptDate  }) => {
    const [ lastAppointmentDate, setLastAppointmentDate] = useState(new Date());
    

    

    const calcNextApptDate = () => {
        const nextApptDate = new Date(lastAppointmentDate);
        nextApptDate.setDate(
            nextApptDate.getDate() + ovIntervalDays
        );
        console.log(nextApptDate)
        return nextApptDate;
    };

    
    const getNextApptStatus = () => {
        const nextApptDate = calcNextApptDate();
        
        if(nextApptDate   > new Date()){
            return "Approve Medication";
        } 
        else {
            return "Send to provider for review"
        }
    }

    
    return (
        <div>
            <label>Please enter last appointment date:</label>
            <DatePicker 
            selected={lastAppointmentDate}
            onChange={(date) => setLastAppointmentDate(date)}
            />
            
            <p>{getNextApptStatus()}</p>
            
            
            
        </div>
    );
};
export default OvCalc;