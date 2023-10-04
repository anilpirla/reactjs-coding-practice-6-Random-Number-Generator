import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumberText: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNumberGenerator = Math.ceil(Math.random() * 100)

    this.setState({randomNumberText: newRandomNumberGenerator})
  }

  render() {
    const {randomNumberText} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="random-number-generator-button"
            type="button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumberText}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
