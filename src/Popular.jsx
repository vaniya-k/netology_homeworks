import React from 'react';

const Popular = ({highlights}) => {
  return (
    <div style={{backgroundColor: `plum`}}>
      <p>ПОПУЛЯРНОЕ</p>
      {highlights.map(highlight =>
        <p>{highlight.category}&nbsp;&nbsp;--&nbsp;&nbsp;{highlight.title}&nbsp;&nbsp;<a href={`#`}>жмак</a></p>
      )}
    </div>
  )
};

export default Popular;
