import React, { useState, useRef } from "react";

const HooksWordRelay = () => {
  const [word, setWord] = useState("sample");
  const [inputedValue, setInputedValue] = useState("");
  const [result, setResult] = useState("");
  const onRefInput = useRef(null);

  const getingValue = (e) => {
    setInputedValue(e.target.value);
  };

  const submiting = (e) => {
    e.preventDefault();
    if (!inputedValue) {
      setResult("Please enter any word");
      onRefInput.current.focus();
    }
    if (word[word.length - 1] === inputedValue[0]) {
      setResult("OK next");
      setWord(inputedValue);
      setInputedValue("");
      onRefInput.current.focus();
    } else {
      setResult("Wrong answer. Try again");
      setInputedValue("");
      onRefInput.current.focus();
    }
  };

  return (
    <div>
      <h1>Hooks WordRelay</h1>
      <h3>{word}</h3>
      <form onSubmit={submiting}>
        <label>word : </label>
        <input
          ref={onRefInput}
          placeholder="Word"
          value={inputedValue}
          onChange={getingValue}
        />
        <button type="submit">Enter</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default HooksWordRelay;
