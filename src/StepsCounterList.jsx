import React from 'react';

const StepsCounterList = ({records, onRemoveButtonClick}) => {
  return (
    <div className="steps-counter-output">
      <span>Statistics: date / steps</span>
      <ul>
        {(records.length === 0)
          ? <li>Log at least one day</li>
          : records.map((record, i) =>
            <li key={`key${i}`}>{`${record.date} / ${record.steps}`}<button onClick={() => onRemoveButtonClick(record.date)}>X</button></li>
          )
        }
      </ul>
    </div>
  )
}

export default StepsCounterList;
