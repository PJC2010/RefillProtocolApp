import React, { useEffect, useState }from 'react';
import drugs from "../data/db2.json";
import OvCalc from './ovCalc';


function MedSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ searchResults, setSearchResults] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const uniqueNames = [...new Set(drugs.map((med) => med.drugFullName))];
    setOptions(uniqueNames);
  }, [searchTerm])

  const handleChange = (event => {
    setSearchTerm(event.target.value);
  });

  useEffect(() => {
    const filteredData = drugs.filter((med) => med.drugFullName.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(filteredData.slice(0,1))
  }, [searchTerm])

  

  return (
    <div>
      <label>Search for medication:</label>
      <input
      
      type="text"
      value={searchTerm}
      onChange={handleChange} 
      list="options" />
      <datalist id="options">
        {options.map((med) => (
          <option key={med} value={med} />
        ))}
      </datalist>
      <ul>
        {searchResults.map((med) => (
          <li key={med.id}>
            <strong>{med.drugFullName}<br /> </strong>
            <br />Drug Subclass: {med.subclassName}
            <br /> Adherence Drug? {med.AdherenceDrug}
            <br /> Office visit interval in days: {med.ovIntervalDays}
            <br /> Lab interval in days: {med.labIntervalDays}
            <br /> Vitals Requiring Escalation: {med.vitalsRequiringEscalation}
            
            <OvCalc ovIntervalDays={med.ovIntervalDays} />
            
           
            
            
          </li>
          
        ))}
        
      </ul>
      
      
      
      

    </div>
  )
  

  
} export default MedSearch;







 

 