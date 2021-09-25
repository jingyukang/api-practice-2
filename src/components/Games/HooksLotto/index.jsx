import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(40)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  const powerBallNumber = Math.floor(Math.random() * 10 + 1);
  return [...winNumbers, bonusNumber, powerBallNumber];
}

const HooksLotto = React.memo(() => {
  const lottonumbers = useMemo(() => getWinNumbers(), []);
  const timeouts = useRef([]);

  const [winNumbers, setWinNumbers] = useState(lottonumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const [powerBall, setPowerBall] = useState(null);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 2; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 300);
    }
    timeouts.current[7] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setPowerBall(winNumbers[7]);
      setRedo(true);
    }, 2400);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  useEffect(() => {
    console.log("create lotto numbers");
  }, [winNumbers]);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // 업데이트 일때만 실행되는 것들
    }
  }, []); // [] 안에 바뀔 값을 넣어준다

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    setPowerBall(null);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <div>
      <h1>Hooks Lotto</h1>
      <div>Win Numbers</div>
      <div id="resultsWindows">
        {winBalls.map((v, i) => (
          <Ball key={i} number={v} />
        ))}
      </div>
      <div>Bonus Ball</div>
      {bonus && <Ball number={bonus} />}
      <div>Power Ball</div>
      {powerBall && <Ball number={powerBall} />}
      {redo && <button onClick={onClickRedo}>Again</button>}
    </div>
  );
});

export default HooksLotto;
