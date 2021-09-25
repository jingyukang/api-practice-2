import React, { useContext, useRef, useEffect } from "react";
import { TableContext } from ".";
import Td from "./Td";

const Tr = React.memo(({ rowIndex }) => {
  const { tableData } = useContext(TableContext);

  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(tableData === ref.current[0]);
  //   ref.current = [tableData];
  // }, [tableData]);

  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
});

export default Tr;
