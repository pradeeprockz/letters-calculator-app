import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputValue: '',
    letterCount: 0,
  }

  handleInputChange = e => {
    const inputValue = e.target.value
    const letterCount = inputValue.replace(/[^a-zA-Z]/g, '').length
    this.setState({inputValue, letterCount})
  }

  render() {
    const {inputValue, letterCount} = this.state

    return (
      <div className="letters-calculator-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <h1 className="heading"> Calculate the Letters you enter </h1>
        <p className="description"> Enter the phrase </p>
        <input
          className="input"
          type="text"
          placeholder="Enter the phrase"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        {letterCount > 0 && (
          <p className="letter-count"> No.of letters: {letterCount}</p>
        )}
      </div>
    )
  }
}

export default LettersCalculator
