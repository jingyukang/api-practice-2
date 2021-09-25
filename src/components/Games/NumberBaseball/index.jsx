import React, { useState, useRef } from "react";
import Try from "./Try";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * (candidate.length - i)),
      1
    )[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = React.memo(() => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState(getNumbers);
  const [tries, setTries] = useState([]);
  const inputRef = useRef(null);

  const getInputedValue = (e) => {
    setValue(e.target.value);
  };

  const submitting = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("home run");
      alert("you win");
      setValue("");
      setAnswer(getNumbers);
      setTries([]);
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strick = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`over 10 times answer was ${answer.join(",")}`);
        alert("start again");
        setValue("");
        setAnswer(getNumbers);
        setTries([]);
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strick++;
          } else if (answer.includes(answerArray[i])) {
            ball++;
          }
        }
        setResult(`${strick} strick , and ${ball} ball`);
        setValue("");
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strick} strick , and ${ball} ball` },
          ];
        });
      }
    }
    inputRef.current.focus();
  };
  console.log(answer);
  console.log("rendering");
  return (
    <div className="nbgame">
      <h1>Hooks NumberBaseball</h1>
      <div>{result}</div>
      <form onSubmit={submitting}>
        <p>Enter 4 Numbers</p>
        <input
          ref={inputRef}
          maxLength="4"
          value={value}
          onChange={getInputedValue}
        />
        <button type="submit">Enter</button>
      </form>
      <div>Try : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={i} tryInfo={v} />;
        })}
      </ul>
    </div>
  );
});

export default NumberBaseball;
