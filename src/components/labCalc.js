import React, {useState} from "react";

const LabCalc = () => {
    const [ lastLabDate, setLastLabDate] = useState(new Date());
    const handleChange = (event => {
        setSearchTerm(event.target.value);
      });
const calcNextLabDate = () => {
    const nextlabDate = new Date(lastLabDate);
    nextlabDate.setDate(
        nextlabDate.getDate() + labIntervalDays
    );
    return nextlabDate;
};
}; export default LabCalc

