import React, {
  useState,
  useCallback,
  useContext,
  useRef,
  useEffect,
} from "react";
import { TableContext, START_GAME } from "./";

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mines, setMines] = useState(20);
  // const value = useContext(TableContext);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);
  const onChangeMines = useCallback((e) => {
    setMines(e.target.value);
  }, []);
  const onClickBtn = useCallback(() => {
    // value.dispatch({ type: START_GAME, row, cell, mines });
    dispatch({ type: START_GAME, row, cell, mines });
  }, [row, cell, mines]);

  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(
  //     row === ref.current[0],
  //     cell === ref.current[1],
  //     mines === ref.current[2],
  //     TableContext === ref.current[3]
  //   );
  //   ref.current = [row, cell, mines, TableContext];
  // }, [row, cell, mines, TableContext]);

  return (
    <>
      <input
        type="number"
        placeholder="Row"
        value={row}
        onChange={onChangeRow}
      />
      <input
        type="number"
        placeholder="Cell"
        value={cell}
        onChange={onChangeCell}
      />
      <input
        type="number"
        placeholder="Mines"
        value={mines}
        onChange={onChangeMines}
      />
      <button onClick={onClickBtn}>Start</button>
    </>
  );
};

export default Form;
