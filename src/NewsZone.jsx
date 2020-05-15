import React from 'react';
import CurrentScope from './CurrentScope';
import NewsList from './NewsList';
import Currencies from './Currencies'

const NewsZone = () => {
  return (
    <div style={{display: `flex`, width: `800px`, justifyContent: `space-evenly`, marginBottom: `30px`}}>
      <div style={{display: `flex`, flexDirection: `column`, justifyContent: `space-between`, width: `300px`, backgroundColor: `lavender`}}>
        <CurrentScope focus={`Сейчас в мире`} time={`33 февраля 33:33`}/>
        <NewsList news={[{time: `44:44`, title: `Все пропало...`}, {time: `55:55`, title: `Ан нет!`}]}/>
        <Currencies currencies={[{code: `USD`, rate: `88.88`}, {code: `EUR`, rate: `77.77`}]}/>
      </div>
      <div style={{width: `300px`, height: `150px`, backgroundColor: `lavender`}}>
        БАННЕР
      </div>
    </div>
  )
};

export default NewsZone;
