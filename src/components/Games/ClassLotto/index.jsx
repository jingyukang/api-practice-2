import React, { Component } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(40)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  const powerBallNumber = Math.floor(Math.random() * 10 + 1);
  return [...winNumbers, bonusNumber, powerBallNumber];
}

class ClassLotto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
      powerBall: null,
    };
    this.timeouts = [];
  }

  runTimeouts = () => {
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 2; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 300);
    }
    this.timeouts[7] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        powerBall: winNumbers[7],
        redo: true,
      });
    }, 2400);
  };

  componentDidMount() {
    console.log("didmount");
    this.runTimeouts();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("didupdate");
    // if (this.state.winBalls.length === 0) {
    if (this.timeouts.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
      powerBall: null,
    });
    this.timeouts = [];
  };

  render() {
    const { winBalls, bonus, redo, powerBall } = this.state;
    return (
      <div>
        <h1>Class Lotto</h1>
        <div>Win Numbers</div>
        <div id="resultsWindows">
          {winBalls.map((v, i) => (
            <Ball key={i} number={v} />
          ))}
        </div>
        <div>Bonus Ball</div>
        {bonus && <Ball number={bonus} />}
        <div>Power Ball</div>
        {powerBall && <Ball number={powerBall} />}
        {redo && <button onClick={this.onClickRedo}>Again</button>}
      </div>
    );
  }
}

export default ClassLotto;

// import React, { Component } from "react";
// import Ball from "./Ball";

// function getWinNumbers() {
//   console.log("getWinNumbers");
//   const candidate = Array(40)
//     .fill()
//     .map((v, i) => i + 1);
//   const shuffle = [];
//   while (candidate.length > 0) {
//     shuffle.push(
//       candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
//     );
//   }
//   const bonusNumber = shuffle[shuffle.length - 1];
//   const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
//   return [...winNumbers, bonusNumber];
// }

// class ClassLotto extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       winNumbers: getWinNumbers(),
//       winBalls: [],
//       bonus: null,
//       redo: false,
//     };
//     this.timeouts = [];
//   }

//   runTimeouts = () => {
//     const { winNumbers } = this.state;
//     for (let i = 0; i < winNumbers.length - 1; i++) {
//       this.timeouts[i] = setTimeout(() => {
//         this.setState((prevState) => {
//           return {
//             winBalls: [...prevState.winBalls, winNumbers[i]],
//           };
//         });
//       }, (i + 1) * 300);
//     }
//     this.timeouts[6] = setTimeout(() => {
//       this.setState({
//         bonus: winNumbers[6],
//         redo: true,
//       });
//     }, 2100);
//   };

//   componentDidMount() {
//     console.log("didmount");
//     this.runTimeouts();
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("didupdate");
//     if (this.state.winBalls.length === 0) {
//       this.runTimeouts();
//     }
//   }

//   componentWillUnmount() {
//     this.timeouts.forEach((v) => {
//       clearTimeout(v);
//     });
//   }
//   onClickRedo = () => {
//     this.setState({
//       winNumbers: getWinNumbers(),
//       winBalls: [],
//       bonus: null,
//       redo: false,
//     });
//     this.timeouts = [];
//   };

//   render() {
//     const { winBalls, bonus, redo } = this.state;
//     return (
//       <div>
//         <div>Win Numbers</div>
//         <div id="resultsWindows">
//           {winBalls.map((v) => (
//             <Ball key={v} number={v} />
//           ))}
//         </div>
//         <div>Bonus Ball</div>
//         {bonus && <Ball number={bonus} />}
//         {redo && <button onClick={this.onClickRedo}>Again</button>}
//       </div>
//     );
//   }
// }

// export default ClassLotto;
