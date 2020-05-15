import React from 'react';

const CurrentScope = ({focus, time}) => {
  return (
    <div style={{backgroundColor: `steelblue`}}>
      {focus}&nbsp;&nbsp;&nbsp;{time}
    </div>
  )
};

export default CurrentScope;