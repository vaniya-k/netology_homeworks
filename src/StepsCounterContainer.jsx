import React from 'react';
import StepsCounterList from './StepsCounterList.jsx';
import StepsCounterControls from './StepsCounterControls.jsx';


class StepsCounterContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      dateInputIsValid: null,
      dateInputValue: null,
      stepsInputIsValid: null,
      stepsInputValue: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editStepsValues = (newStatus, steps = null) => {
    if (steps !== null) {
      this.setState({
        stepsInputValue: steps
      })
    }

    this.setState({
      stepsInputIsValid: newStatus
    })
  };

  editDateValues = (newStatus, date = null) => {
    if(date !== null) {
      this.setState({
        dateInputValue: date
      })
    };

    this.setState({
      dateInputIsValid: newStatus
    })
  };

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
      this.editRecords(this.state.dateInputValue, this.state.stepsInputValue)
    }
  };

  render() {
    return (
      <div className="steps-counter-wrapper">
        <StepsCounterControls
          dateInputIsValid={this.state.dateInputIsValid}
          stepsInputIsValid={this.state.stepsInputIsValid}
          editDateValues={this.editDateValues}
          editStepsValues={this.editStepsValues}
          onSubmitButtonClick={this.handleSubmit}
        />
        <StepsCounterList records={this.state.records} onRemoveButtonClick={this.handleRemoveRecord}/>
      </div>
    )
  }
};

export default StepsCounterContainer;
