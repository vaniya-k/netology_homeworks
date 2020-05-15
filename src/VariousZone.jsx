import React from 'react';
import Weather from './Weather';
import Popular from './Popular';
import TvSchedule from './TvSchedule'

const NewsZone = () => {
  return (
    <div style={{display: `flex`, width: `800px`, justifyContent: `space-evenly`, marginBottom: `30px`, backgroundColor: `lavender`}}>
        <Weather currentTemp={`+11`} nextTemp={`+5`} nextNextTemp={`+9`}/>
        <Popular highlights={[{category: `Вино`, title: `Вы не поверите, что к нему подходит!`},{category: `Домино`, title: `Подозрительная догадливость...`}]}/>
        <TvSchedule shows={[{time: `44:44`, title: `Дом 17`, channel: `ТНТ`}, {time: `55:55`, title: `Спокойной ночи, голопузы`, channel: `СТС`}]}/>
    </div>
  )
};

export default NewsZone;
