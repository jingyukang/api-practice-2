import React, { PureComponent } from "react";
import RenderAverage from "./RenderAverage";
import ListingTime from "./ListingTime";

class ClassResponseCheck extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      state: "waiting",
      message: "click to start",
      results: [],
    };
    // this.timeout;
    // this.startTime;
    // this.endTime;
  }

  onClickScreen = () => {
    const { state, message, results } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "click when the color is changed to green",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "click now",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 1000);
    } else if (state === "ready") {
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "you were too hasty, click when is green start agin to click",
      });
    } else if (state === "now") {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "click to start",
          results: [...prevState.results, this.endTime - this.startTime],
        };
      });
    }
  };

  // renderAverage = () => {
  //   const { results } = this.state;
  //   return results.length === 0 ? null : (
  //     <div>
  //       <div>
  //         Average : {results.reduce((a, c) => a + c) / results.length} ms
  //       </div>
  //       <button onClick={this.onReset}>Reset</button>
  //     </div>
  //   );
  // };

  onReset = () => {
    this.setState({
      results: [],
      state: "waiting",
    });
  };

  render() {
    const { state, message, results } = this.state;
    return (
      <div className="rchgame">
        <h1>Class Response Check</h1>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {/* {results.length === 0 ? null : (
          <button onClick={this.onReset}>Reset</button>
        )} */}

        {/* {this.renderAverage()} */}
        <RenderAverage
          values={results}
          setStateOfParent={state}
          resting={this.onReset}
        />

        <ul>
          {results.map((v, i) => {
            return <ListingTime key={i} timeValue={v} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ClassResponseCheck;
