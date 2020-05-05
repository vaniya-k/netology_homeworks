import React from 'react';
import {useState} from 'react';
import FocusedIdContext from './contexts/FocusedIdContext.js';

const FocusedIdProvider = (props) => {
  const [focusedId, setFocusedId] = useState(null);

  return <FocusedIdContext.Provider value={{ 
    focusedId,
    setFocusedId
  }}>
    {props.children}
  </FocusedIdContext.Provider>
}

export default FocusedIdProvider;
