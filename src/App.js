import React, { useState } from 'react';

import MedSearch from './components/medSearch';
import {medData} from './medatajson2'

import RxLastFilled from './components/rxlastfill';






function App(){
  return(
    <div>
      <MedSearch />
      <RxLastFilled />
      
    
    </div>
  )
}
export default App;