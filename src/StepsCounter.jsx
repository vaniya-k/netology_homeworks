import React from 'react';

const DOTTED_XXMMYYYY_REGEXP = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

const STEPS_REGEXP = /^([0-9]{0,5})$/


class StepsCounter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.dateRef = React.createRef();
    this.stepsRef = React.createRef();

    this.state = {
      records: [],
      dateInputIsValid: null,
      stepsInputIsValid: null
    }
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
        <div className="steps-counter-controls">
          <form action="#">
            <label htmlFor="date">
              {(this.state.dateInputIsValid === false) ? `Error!` : `DD.MM.YYYY to log a day`}
            </label>
            <br></br>
            <input type="text" id="date" ref={this.dateRef} onChange={this.handleDateInput}></input>
            <br></br>
            <br></br>
            <label htmlFor="steps">
              {(this.state.stepsInputIsValid === false) ? `Error!` : `Add steps walked on that day`}
            </label>
            <br></br>
            <input type="text" id="steps" ref={this.stepsRef} onChange={this.handleStepsInput}></input>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={this.handleSubmit}>Submit!</button>
          </form>
        </div>
        <div className="steps-counter-output">
          <span>Statistics: date / steps</span>
          <ul>
            {(this.state.records.length === 0)
              ? <li>Log at least one day</li>
              : this.state.records.map((record, i) => 
                <li key={`key${i}`}>{`${record.date} / ${record.steps}`}<button onClick={() => this.handleRemoveRecord(record.date)}>X</button></li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
};

export default StepsCounter;
