// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHeads: 'true',
    heads: 0,
    Tails: 0,
    TotalScore: 0,
  }

  onClickChangeStatus = () => {
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      this.setState(prevState => ({
        isHeads: true,
        heads: prevState.heads + 1,
        TotalScore: prevState.TotalScore + 1,
      }))
    } else if (getNum === 1) {
      this.setState(prevState => ({
        isHeads: false,
        Tails: prevState.Tails + 1,
        TotalScore: prevState.TotalScore + 1,
      }))
    }
  }

  render() {
    const {isHeads, heads, Tails, TotalScore} = this.state
    const getTossImage = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="white-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="top-text">Heads (or) Tails</p>
          <img src={getTossImage} alt="toss-result" className="coin-image" />
          <button
            type="button"
            onClick={this.onClickChangeStatus}
            className="coin-btn"
          >
            Toss Coin
          </button>
          <div className="score-card">
            <p className="total-score">{`Total: ${TotalScore}`}</p>
            <p className="total-score">{`Heads: ${heads}`}</p>
            <p className="total-score">{`Tails: ${Tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
