import React, { useState, useRef } from "react";
import RenderAverage from "./RenderAverage";
import ListingTime from "./ListingTime";

const HooksResponseCheck = React.memo(() => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("click to start");
  const [results, setResults] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === "waiting") {
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("click now");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 1000);
      setState("ready");
      setMessage("click when the color is changed to green");
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("you were too hasty, click when is green start agin to click");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("click to start");
      setResults((prevResults) => {
        return [...prevResults, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResults([]);
    setState("waiting");
  };

  return (
    <div className="rcgame">
      <h1>Hooks respons check </h1>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      <RenderAverage values={results} resting={onReset} />

      <ul>
        {results.map((v, i) => {
          return <ListingTime key={i} timeValue={v} />;
        })}
      </ul>
    </div>
  );
});

export default HooksResponseCheck;
