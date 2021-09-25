import React, { useContext, useRef, useEffect } from "react";
import Tr from "./Tr";
import { TableContext } from ".";

const Table = () => {
  const { tableData } = useContext(TableContext);

  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(tableData === ref.current[0]);
  //   ref.current = [tableData];
  // }, [tableData]);

  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowIndex={i} />
        ))}
    </table>
  );
};

export default Table;
