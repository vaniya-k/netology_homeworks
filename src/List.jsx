import React from 'react';

const List = ({items, categoryTitle = null}) => {
  return (
    <ul style={{backgroundColor: `plum`, listStyleType: `none`, marginBlockStart: `0`, marginBlockEnd: `0`}}>
      {categoryTitle && <li><p>{categoryTitle}</p></li>}
      {items.map(item => <li>{item.intro}&nbsp;&nbsp;&nbsp;{item.text}</li>)}
    </ul>
  )
};

export default List;