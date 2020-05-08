import React from 'react';
import {useState} from 'react';

const DOTTED_XXMMYYYY_REGEXP = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

const STEPS_REGEXP = /^([0-9]{0,5})$/;

const StepsCounterControls = ({editRecords}) => {

  const [dateInputIsValid, setDateInputStatus] = useState(null);

  const [stepsInputIsValid, setStepsInputStatus] = useState(null);
  
  const [stepsInputValue, setStepsInputValue] = useState(null);

  const [dateInputValue, setDateInputValue] = useState(null);

  const editStepsValues = (newStatus, steps = null) => {
    if (steps !== null) {
      setStepsInputValue(steps);
    }

    setStepsInputStatus(newStatus);
  };

  const editDateValues = (newStatus, date = null) => {
    if (date !== null) {
      setDateInputValue(date);
    }

    setDateInputStatus(newStatus);
  };

  const handleDateInputChange = (evt) => {
    const val = evt.target.value;
  
    if(DOTTED_XXMMYYYY_REGEXP.test(val) === true) {
      editDateValues(true, val)
    } else if(val.length >= 10) {
      editDateValues(false)
    } else {
      editDateValues(null)
    }
  };
  
  const handleStepsInputChange = (evt) => {
    const val = evt.target.value;
  
    if(Number.parseInt(val.slice(0,1)) === 0 || STEPS_REGEXP.test(val) === false) {
      editStepsValues(false)
    } else if(val.length === 0) {
      editStepsValues(null)
    } else if(STEPS_REGEXP.test(val) === true) {
      editStepsValues(true, val)
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(dateInputIsValid === true && stepsInputIsValid === true) {
      editRecords(dateInputValue, stepsInputValue);
    }
  };

  return (
    <div className="steps-counter-controls">
      <form action="#">
        <label htmlFor="date">
          {(dateInputIsValid === false) ? `Error!` : `DD.MM.YYYY to log a day`}
        </label>
        <input type="text" id="date" onChange={handleDateInputChange}></input>
        <label htmlFor="steps">
          {(stepsInputIsValid === false) ? `Error!` : `Add steps walked on that day`}
        </label>
        <input type="text" id="steps"  onChange={handleStepsInputChange}></input>
        <button onClick={handleSubmit}>Submit!</button>
      </form>
    </div>
  )
};

export default StepsCounterControls;
