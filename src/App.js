import React, { useState } from 'react';
import LastFillDate from './components/datepicker';
import MedSearch from './components/medSearch';
import {medData} from './medatajson2'

import Fuse from "fuse.js";






function App(){
  return(
    <div>
      <MedSearch  />
      
    
    </div>
  )
}
export default App;