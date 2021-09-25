import React, { PureComponent } from "react";

class ListingTime extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { timeValue } = this.props;
    return <li>{timeValue} ms</li>;
  }
}

export default ListingTime;
