import React from 'react';
import {useState} from 'react';
import StepsCounterList from './StepsCounterList.jsx';
import StepsCounterControls from './StepsCounterControls.jsx';


const StepsCounterContainer = () => {
  const [records, setRecords] = useState([]);

  const [reRenderCounter, reRenderTrigger] = useState(0);

  const editRecords = (date, steps) => {
    const dateMatchIndex = records.findIndex((record) => record.date === date)

    let recordsTemp = records;
    
    if(dateMatchIndex >= 0) {
      recordsTemp[dateMatchIndex].steps = Number.parseInt(recordsTemp[dateMatchIndex].steps) + Number.parseInt(steps);
    } else {
      recordsTemp = [...recordsTemp, {date: date, steps: steps}]
    }

    recordsTemp = recordsTemp.sort((a, b) => {
      let usaDateA = a.date.slice(3,6) + a.date.slice(0,2) + a.date.slice(5);
      let usaDateB = b.date.slice(3,6) + b.date.slice(0,2) + b.date.slice(5);
      let compareValue;

      if (Date.parse(usaDateA) > Date.parse(usaDateB)) {
        compareValue = -1
      } else {
        compareValue = 1
      };

      return compareValue
    })

    setRecords(recordsTemp);
    
    reRenderTrigger(reRenderCounter + 1);
  };

  const handleRemoveRecord = (date) => {
    const dateMatchIndex = records.findIndex((record) => record.date === date)

    let recordsTemp = records;

    recordsTemp = recordsTemp.filter((record, i) => {
      if(i !== dateMatchIndex) {
        return record
      }
    });

    setRecords(recordsTemp);
  };

  return (
    <div className="steps-counter-wrapper">
      <StepsCounterControls editRecords={editRecords}/>
      <StepsCounterList records={records} onRemoveButtonClick={handleRemoveRecord}/>
    </div>
  );
};

export default StepsCounterContainer;
