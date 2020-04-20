import React from 'react';

const DOTTED_XXMMYYYY_REGEXP = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

const STEPS_REGEXP = /^([0-9]{0,5})$/


class StepsCounter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.dateInput = React.createRef();
    this.stepsInput = React.createRef();

    this.state = {
      records: [],
      dateInputIsValid: null,
      stepsInputIsValid: null
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

    console.log(val)

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
            <input type="text" id="date" ref={this.dateInput} onChange={this.handleDateInput}></input>
            <br></br>
            <br></br>
            <label htmlFor="steps">
              {(this.state.stepsInputIsValid === false) ? `Error!` : `Steps quantity for that day`}
            </label>
            <br></br>
            <input type="text" id="steps" ref={this.stepsInput} onChange={this.handleStepsInput}></input>
            <br></br>
            <br></br>
            <br></br>
            <button>Submit!</button>
          </form>
        </div>
        <div className="steps-counter-output">
          <span>Statistics: date/steps</span>
          <ul>
            <li>22.09.19 / 1548&nbsp;&nbsp;&nbsp;&nbsp;<button>X</button></li>
            <li>21.09.19 / 1234</li>
            <li>20.09.19 / 1437</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default StepsCounter;
