import React from 'react';

const NewsList = ({news}) => {
  return (
    <ul style={{backgroundColor: `plum`, listStyleType: `none`, marginBlockStart: `0`, marginBlockEnd: `0`}}>
      {news.map(newsPiece => <li>{newsPiece.time}&nbsp;&nbsp;&nbsp;{newsPiece.title}</li>)}
    </ul>
  )
};

export default NewsList;