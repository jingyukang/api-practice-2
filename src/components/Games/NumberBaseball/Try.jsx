import React from "react";

const Try = React.memo(({ tryInfo }) => {
  return (
    <li>
      {tryInfo.try} - {tryInfo.result}
    </li>
  );
});

export default Try;
