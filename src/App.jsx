import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <>
    <Card/>
    <Card children={{img: `https://pbs.twimg.com/profile_images/3119746052/b84bbd1707018b90df39765df7a9ecee.jpeg`}}/>
    </>
  )
};

export default App;
