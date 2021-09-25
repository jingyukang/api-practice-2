import React, { Component } from "react";

const rspCoords = {
  rock: "0",
  scissors: "-142px",
  paper: "-284px",
};

const scores = {
  scissors: 1,
  rock: 0,
  paper: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

class ClassRPS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      imgCoord: rspCoords.rock,
      score: 0,
    };
    // this.interval;
  }

  componentDidMount() {
    // component가 '첫' 렌더링 된 후

    this.interval = setInterval(this.changeHand, 100);
  }

  // componentDidUpdate() {
  //   // '첫' rendering 을 제외한 rerendering 직후
  // }

  componentWillUnmount() {
    // component가 제거되기 직전
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;

    if (imgCoord === rspCoords.rock) {
      this.setState({
        imgCoord: rspCoords.scissors,
      });
    } else if (imgCoord === rspCoords.scissors) {
      this.setState({
        imgCoord: rspCoords.paper,
      });
    } else if (imgCoord === rspCoords.paper) {
      this.setState({
        imgCoord: rspCoords.rock,
      });
    }
  };

  onClickBtn = (choice) => () => {
    const { imgCoord } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: "Draw",
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: "Win",
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: "Lose",
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };
  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <div>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("rock")}>
            Rock
          </button>
          <button
            id="scissors"
            className="btn"
            onClick={this.onClickBtn("scissors")}
          >
            Scissors
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("paper")}>
            Paper
          </button>
        </div>
        <div>{result}</div>
        <div>Currently {score} point</div>
      </div>
    );
  }
}

export default ClassRPS;
