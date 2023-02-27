import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const OvCalc = ({ ovIntervalDays, labIntervalDays }) => {
    const [ lastAppointmentDate, setLastAppointmentDate] = useState(new Date());
    const [ lastLabDate, setLastLabDate] = useState(new Date());

    

    const calcNextApptDate = () => {
        const nextApptDate = new Date(lastAppointmentDate);
        nextApptDate.setDate(
            nextApptDate.getDate() + ovIntervalDays
        );
        return nextApptDate;
    };

    const calcNextLabDate = () => {
        const nextlabDate = new Date(lastLabDate);
        nextlabDate.setDate(
            nextlabDate.getDate() + labIntervalDays
        );
        return nextlabDate;
    };
    const getNextApptStatus = () => {
        const nextApptDate = calcNextApptDate();
        const nextlabDate = calcNextLabDate();
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
            <label>Please enter last lab results date:</label>
            <DatePicker 
            selected={lastLabDate}
            onChange={(date) => setLastLabDate(date)}
            />
            <p>{getNextApptStatus()}</p>
        </div>
    );
};
export default OvCalc;