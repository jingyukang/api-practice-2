import React from "react";

const RenderAverage = React.memo((props) => {
  return props.values.length === 0 ? null : (
    <div>
      <div>
        average time :
        {props.values.reduce((a, c) => a + c) / props.values.length}
        ms
      </div>
      <div>
        <button onClick={props.resting}>Reset</button>
      </div>
    </div>
  );
});

export default RenderAverage;
