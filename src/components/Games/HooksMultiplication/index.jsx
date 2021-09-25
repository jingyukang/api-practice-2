import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

const HooksMultiplication = () => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [first, setFirst] = useState(randomNumber(1, 9));
  const [second, setSecond] = useState(randomNumber(1, 9));
  const answer = first * second;
  const [valueInputed, setValueInputed] = useState("");
  const [result, setResult] = useState("");
  const inputedNumber = useRef(null);

  const getValue = (e) => {
    setValueInputed(e.target.value);
  };

  const onSubmiting = (e) => {
    e.preventDefault();
    if (!valueInputed) {
      setResult("Please enter any number");
      inputedNumber.current.focus();
    }
    if (parseInt(valueInputed) === answer) {
      setResult(`'${valueInputed}' was correct`);
      setFirst(randomNumber(1, 9));
      setSecond(randomNumber(1, 9));
      setValueInputed("");
      inputedNumber.current.focus();
    } else {
      setResult(`'${valueInputed}' is incorrect`);
      setValueInputed("");
      inputedNumber.current.focus();
    }
  };

  return (
    <div>
      <h1>Hooks Multiplication</h1>
      <div>
        {first} * {second} ?
      </div>
      <form onSubmit={onSubmiting}>
        <input
          ref={inputedNumber}
          type="number"
          value={valueInputed}
          onChange={getValue}
        />
        <button type="submit">Enter</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default HooksMultiplication;

// const React = require("react");
// const { Component } = require("react");

// class Multiplication extends Component {
//   state = {
//     text: "hi webpack",
//   };
//   render() {
//     return <div>{this.state.text}</div>;
//   }
// }

// module.exports = Multiplication;
