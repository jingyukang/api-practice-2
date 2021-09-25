import React from "react";

const ListingTime = React.memo((props) => {
  return <li>{props.timeValue} ms</li>;
});

export default ListingTime;
