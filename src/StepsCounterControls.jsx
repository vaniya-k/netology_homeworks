import React from 'react';

const StepsCounterControls = ({dateRef, stepsRef, dateInputIsValid, stepsInputIsValid, onDateInputChange, onStepsInputChange, onFormSubmit}) => {
  return (
    <div className="steps-counter-controls">
      <form action="#">
        <label htmlFor="date">
          {(dateInputIsValid === false) ? `Error!` : `DD.MM.YYYY to log a day`}
        </label>
        <input type="text" id="date" ref={dateRef} onChange={onDateInputChange}></input>
        <label htmlFor="steps">
          {(stepsInputIsValid === false) ? `Error!` : `Add steps walked on that day`}
        </label>
        <input type="text" id="steps" ref={stepsRef} onChange={onStepsInputChange}></input>
        <button onClick={onFormSubmit}>Submit!</button>
      </form>
    </div>
  )
};

export default StepsCounterControls;
