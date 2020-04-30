import React from 'react';
import StepsCounterList from './StepsCounterList.jsx';
import StepsCounterControls from './StepsCounterControls.jsx';

const DOTTED_XXMMYYYY_REGEXP = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

const STEPS_REGEXP = /^([0-9]{0,5})$/


class StepsCounterContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.dateRef = React.createRef();
    this.stepsRef = React.createRef();

    this.state = {
      records: [],
      dateInputIsValid: null,
      stepsInputIsValid: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleStepsInput = this.handleStepsInput.bind(this);
  }

  editRecords = (date, steps) => {
    const dateMatchIndex = this.state.records.findIndex((record) => record.date === date)

    let recordsTemp = this.state.records;
    
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

    this.setState({
      records: recordsTemp
    });

    this.forceUpdate()
  }

  handleRemoveRecord = (date) => {
    const dateMatchIndex = this.state.records.findIndex((record) => record.date === date)

    let recordsTemp = this.state.records;

    recordsTemp = recordsTemp.filter((record, i) => {
      if(i !== dateMatchIndex) {
        return record
      }
    });

    this.setState({
      records: recordsTemp
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    if(this.state.dateInputIsValid === true && this.state.stepsInputIsValid === true) {
      this.editRecords(this.dateRef.current.value, this.stepsRef.current.value)
    }
  }

  handleDateInput = (evt) => {
    const val = evt.target.value;

    if(DOTTED_XXMMYYYY_REGEXP.test(val) === true) {
      this.setState({
        dateInputIsValid: true
      })
    } else if(val.length >= 10) {
      this.setState({
        dateInputIsValid: false
      })
    } else {
      this.setState({
        dateInputIsValid: null
      })
    }
  }

  handleStepsInput = (evt) => {
    const val = evt.target.value;

    if(Number.parseInt(val.slice(0,1)) === 0 || STEPS_REGEXP.test(val) === false) {
      this.setState({
        stepsInputIsValid: false
      })
    } else if(val.length === 0) {
      this.setState({
        stepsInputIsValid: null
      })
    } else if(STEPS_REGEXP.test(val) === true) {
      this.setState({
        stepsInputIsValid: true
      })
    }
  }

  render() {
    return (
      <div className="steps-counter-wrapper">
        <StepsCounterControls
          dateRef={this.dateRef}
          stepsRef={this.stepsRef}
          dateInputIsValid={this.state.dateInputIsValid}
          stepsInputIsValid={this.state.stepsInputIsValid}
          onDateInputChange={this.handleDateInput}
          onStepsInputChange={this.handleStepsInput}
          onFormSubmit={this.handleSubmit}
        />
        <StepsCounterList records={this.state.records} onRemoveButtonClick={this.handleRemoveRecord}/>
      </div>
    )
  }
};

export default StepsCounterContainer;
