import React from 'react';

const VALID_HEX_CHARACTERS = /^[0-9A-Fa-f]+$/;

class HexColorConverter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rgbValue: [],
      inputIsValid: null
    }
  }

  handleHexInput = (evt) => {
    const val = evt.target.value;

    if (val.length === 0) {
      this.setState({
        rgbValue: [],
        inputIsValid: null
      })
    } else if (val.charAt(0) !== `#` || val.length > 7 || (val.length > 1 && VALID_HEX_CHARACTERS.test(val.slice(1)) !== true)) {
      this.setState({
        rgbValue: [],
        inputIsValid: false
      })
    } else if (val.length === 7) {
      this.setState({
        rgbValue: [parseInt(val.slice(1,3), 16), parseInt(val.slice(3,5), 16), parseInt(val.slice(5,7), 16)],
        inputIsValid: true
      })
    } else {
      this.setState({
        rgbValue: [],
        inputIsValid: null
      })
    }
  }

  composeTextOutput = () => {
    let textOutput = ``

    if(this.state.inputIsValid === null) {
      textOutput = `start with # and then 6 characters: 0-9 or a-F`
    } else if(this.state.inputIsValid === true) {
      textOutput = `rgb(${this.state.rgbValue[0]},${this.state.rgbValue[1]}, ${this.state.rgbValue[2]})`
    } else {
      textOutput = `error!`
    }

    return textOutput
  }

  render() {
    return (
      <div className="converter-wrapper">
        <div className="converter-controls">
          <div className="converter-controls-left">
            <form className="coverter-input">
              <input type="text" placeholder="hex color code >> rgb" onChange={this.handleHexInput}></input>
            </form>
          </div>
          <div className="converter-controls-right">
            <div className="converter-output">
              {this.composeTextOutput()}
            </div>
          </div>
        </div>
        <div
          className="converter-color-field"
          style={(this.state.rgbValue.length === 3)
            ? {backgroundColor: `rgb(${this.state.rgbValue[0]},${this.state.rgbValue[1]}, ${this.state.rgbValue[2]})`}
            : {backgroundColor: `black`}
          }
        ></div>
      </div>
    )
  }
};

export default HexColorConverter;
