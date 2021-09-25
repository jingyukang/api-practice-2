import React, { useRef, useEffect } from "react";
import Tr from "./Tr";

const Table = React.memo(({ tableData, dispatch }) => {
  console.log("table rendered");

  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(tableData === ref.current[0], dispatch === ref.current[1]);
  //   ref.current = [tableData, dispatch];
  // }, [tableData, dispatch]);

  console.log("tfcome");
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
        ))}
    </table>
  );
});

export default Table;
