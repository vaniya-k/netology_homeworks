import React from 'react';
import Weather from './Weather';
import Popular from './List';
import TvSchedule from './List'

const NewsZone = () => {
  return (
    <div style={{display: `flex`, width: `800px`, justifyContent: `space-evenly`, marginBottom: `30px`, backgroundColor: `lavender`}}>
        <Weather currentTemp={`+11`} nextTemp={`+5`} nextNextTemp={`+9`}/>
        <Popular categoryTitle={`ПОПУЛЯРНОЕ`} items={[{intro: `Вино`, text: `/  Вы не поверите, что к нему подходит!`},{intro: `Домино`, text: `/  Подозрительная догадливость...`}]}/>
        <TvSchedule categoryTitle={`ТЕЛЕПРОГРАММА`} items={[{intro: `44:44`, text: `/  Дом 17  /  ТНТ`}, {intro: `55:55`, text: `/  Спокойной ночи, голопузы  /  СТС`}]}/>
    </div>
  )
};

export default NewsZone;
