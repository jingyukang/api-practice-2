import React, { PureComponent } from "react";

class RenderAverage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.values.length === 0 ? null : (
      <div>
        <div>
          average time :
          {this.props.values.reduce((a, c) => a + c) / this.props.values.length}
          ms
        </div>
        <div>
          <button onClick={this.props.resting}>Reset</button>
        </div>
      </div>
    );
  }
}

export default RenderAverage;
