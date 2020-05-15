import React from 'react';

const TvSchedule = ({shows}) => {
  return (
    <div style={{backgroundColor: `aquamarine`}}>
      <p>ТЕЛЕПРОГРАММА</p>
      {shows.map(show =>
        <p>{show.time}&nbsp;&nbsp;{show.title}&nbsp;&nbsp;/&nbsp;&nbsp;{show.channel}</p>
      )}
    </div>
  )
};

export default TvSchedule;
