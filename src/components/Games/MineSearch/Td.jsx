import React, {
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import {
  CODE,
  OPEN_CELL,
  CLICK_MINE,
  FLAG_CELL,
  QUESTION_CELL,
  NORMALIZE_CELL,
  TableContext,
} from ".";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {
        background: "white",
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: "yellow",
      };
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: "red",
      };
    default:
      return {
        background: "white",
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    case CODE.CLICKED_MINE:
      return "BOOM!!";
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return "!";
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return "?";
    default:
      return code || "";
  }
};

const Td = React.memo(({ rowIndex, cellIndex }) => {
  const { tableData, halted, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;

      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;

      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
          return;

        case CODE.FLAG_MINE:
        case CODE.FLAG:
          dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
          return;

        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
          return;

        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(tableData === ref.current[0], halted === ref.current[1]);
  //   ref.current = [tableData, halted];
  // }, [tableData, halted]);
  //

  // use the useMemo for caching
  // return useMemo(
  //   () => (
  //     <td
  //       style={getTdStyle(tableData[rowIndex][cellIndex])}
  //       onClick={onClickTd}
  //       onContextMenu={onRightClickTd}
  //     >
  //       {getTdText(tableData[rowIndex][cellIndex])}
  //     </td>
  //   ),
  //   [tableData[rowIndex][cellIndex], halted]
  // );

  return (
    <RealTd
      onClickTd={onClickTd}
      onRightClickTd={onRightClickTd}
      data={tableData[rowIndex][cellIndex]}
    />
  );
});

// devide component for optimisation
const RealTd = React.memo(({ onClickTd, onRightClickTd, data }) => {
  console.log("rendering");

  return (
    <td
      style={getTdStyle(data)}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(data)}
    </td>
  );
});

export default Td;
